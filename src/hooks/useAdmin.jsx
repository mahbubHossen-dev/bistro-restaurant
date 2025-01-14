import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            return res.data.admin
            console.log(res)
        }
    })
    return [isAdmin, isAdminLoading]
};
    // 
export default useAdmin;