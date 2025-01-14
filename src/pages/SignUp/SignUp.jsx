import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit =  (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            updateUserProfile(data.name, data.photo)
            .then(() => {
                console.log(result)
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                try {
                    const {data} = axiosPublic.post('/user', userInfo)
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
                
                toast.success('Sign Up successfully')
            })
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    console.log(errors)
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" {...register("name", { required: "This is required" })} className="input input-bordered" />
                            {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: 'Email is required' })} className="input input-bordered" />
                            <span className="text-red-600">{errors.email?.message}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" {...register("photo", { required: 'Email is required' })} className="input input-bordered" />
                            <span className="text-red-600">{errors.photo?.message}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {minLength: 6, message: 'password must be 6'})} className="input input-bordered" required />
                            <p>{errors.password?.type === 'minLength' && 'password must 6'}</p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        <p>{errors.gender?.message}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default SignUp;