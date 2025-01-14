import React from 'react';
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/UseAuth';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const { signInWithGoogle } = useAuth()
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                const user = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                axiosPublic.post('/user', user)
                .then(res => {
                    console.log(res.data)
                })
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn'><FaGoogle /> Google</button>
        </div>
    );
};

export default SocialLogin;