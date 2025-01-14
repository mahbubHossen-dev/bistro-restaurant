import axios from 'axios';
import React from 'react';
import useAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const {logoutUser} = useAuth()
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('access-token')

        console.log('request stops by interceptors', token)

        config.headers.authorization = `bearer ${token}`

        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, function (error) {
        const status = error.response.status
        if(status === 401 || status === 403){
            logoutUser()
            navigate('/login')
        }

        console.log("status err", error)
        return Promise.reject(error);
      });
    
    return axiosSecure
};

export default useAxiosSecure;