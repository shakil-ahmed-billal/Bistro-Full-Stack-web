import { Eye, EyeOff } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from '../assets/shop/banner2.jpg'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../components/Shared/SocialLogin";


const Login = () => {

    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [disabled , setDisabled] = useState(true)
    const {user , googleLogin} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    console.log(user)

    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])

    

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        // user log in system

    }

    const handleCaptcha = (value) =>{
        const userCaptcha = value;
        console.log(value)
        if (validateCaptcha(userCaptcha)==true) {
            setDisabled(false)
        }
    }

    return (
        <>
        <Helmet>
            <title>Bistro || Signin</title>
        </Helmet>
        <div className=' min-h-screen flex justify-center items-center'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl border '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${logo})`,
                    }}
                ></div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img className='w-auto h-7 sm:h-8' src='logo.png' alt='' />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Welcome back!
                    </p>

                    <SocialLogin></SocialLogin>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='loggingPassword'
                                autoComplete='current-email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                                required
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    id='loggingPassword'
                                    autoComplete='current-password'
                                    name='password'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type={`${!isEyeOpen ? 'password' : 'text'}`}
                                    required
                                />
                                {isEyeOpen ? (
                                    <Eye
                                        className=" absolute top-2 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                        onClick={() => setIsEyeOpen(false)}
                                    />
                                ) : (
                                    <EyeOff
                                        className=" absolute top-2 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                        onClick={() => setIsEyeOpen(true)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='flex justify-between'>
                            <LoadCanvasTemplate />
                            </div>

                            <div className="relative">
                                <input
                                    id='captcha'
                                    autoComplete='captcha'
                                    name='captcha'
                                    onBlur={(e)=>handleCaptcha(e.target.value)}
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                    placeholder="Captcha Text Here"
                                    required
                                />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button
                            disabled={disabled}
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/register'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign up
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Login