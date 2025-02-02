import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const {handleSubmit, register, formState: { errors }} = useForm()
    const onSubmit = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
        .then(result => {
            console.log(result.user)
            toast.success('login success')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: 'Email is required' })} className="input input-bordered" />
                            <span className="text-red-600">{errors.email?.message}</span>
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <p>{errors.gender?.message}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Login;