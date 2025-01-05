import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/shop/banner2.jpg"
import useAuth from "../../hooks/useAuth"
import { Helmet } from "react-helmet-async"
import { imageUpload } from "../../API/utils"

const Register = () => {

    const { googleLogin, createUser, userUpdate } = useAuth()
    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = async(data) => {
        
        const image = data.image[0];
        const photoURL = await imageUpload(image)   

        // user create a firebase
        createUser(data.email , data.password)
        .then(res =>{
            console.log(res.user)
            userUpdate({displayName: data.name , photoURL: photoURL})
        })
    }



    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [StrongPassword, setStrongPassword] = useState("");
    const [signal, setSignal] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false,
        strong: false
    });

    const countTrueItems = (obj) => {
        const totalItems = Object.keys(obj).length;
        const trueItems = Object.values(obj).filter((item) => item).length;
        return (trueItems / totalItems) * 100;
    };

    const strengthProgress = Math.floor(countTrueItems(signal));

    const handleStrongPasswordChecker = (e) => {
        const password = e.target.value;
        setStrongPassword(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setSignal({
            lowercase: hasLowerCase,
            uppercase: hasUpperCase,
            number: hasNumber,
            symbol: hasSymbol,
            length: password.length >= 6,
            strong: hasUpperCase && hasLowerCase && hasNumber && hasSymbol && password.length >= 8
        });
    }

    return (
        <>
        <Helmet>
            <title>Bistro || SignUp</title>
        </Helmet>
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Select Profile Image
                            </label>
                            <input
                                id=''
                                autoComplete='url'
                                name='image'
                                {...register('image', { required: true })}
                                className='block w-full px-4 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='file'
                                accept="image/*"
                            />
                            {errors.image && <span className="text-rose-500">This field is required</span>}
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                User Name
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                name='name'
                                {...register('name', { required: true })}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                            {errors.name && <span className="text-rose-500">This field is required</span>}
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                User Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                {...register('email', { required: true })}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                            {errors.email && <span className="text-rose-500">This field is required</span>}
                        </div>

                        <div className='mt-4 relative'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                type={isEyeOpen ? "text" : "password"}
                                name="password"
                                id="password"
                                {...register('password', { 
                                    required: true,
                                    minLength: 6 ,
                                    maxLength: 18,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                                })}
                                onChange={handleStrongPasswordChecker}
                                autoComplete='current-password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            />
                            {errors.password?.type === "required" && (
                                <p className="text-red-500">Password is required </p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-500">Password min length 6 </p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-500">Password max length 19  </p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-500">use strong password </p>
                            )}
                            <div className="w-full mt-2 flex items-center gap-[5px]">
                                <div
                                    className={`${strengthProgress > 0 ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>
                                <div
                                    className={`${strengthProgress > 16 ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>
                                <div
                                    className={`${strengthProgress > 33 ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>
                                <div
                                    className={`${strengthProgress > 50 ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>
                                <div
                                    className={`${strengthProgress == 100 ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>

                            </div>
                            {isEyeOpen ? (
                                <Eye
                                    className=" absolute top-9 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(false)}
                                />
                            ) : (
                                <EyeOff
                                    className=" absolute top-9 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(true)}
                                />
                            )}
                        </div>

                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or LogIn
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Register

