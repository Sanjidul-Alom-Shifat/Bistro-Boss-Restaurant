import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import img from '../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {

    const { LoginUser, GoogleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(true);
    console.log(disabled);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
            toast.success("Invalid captcha");
        }
    }

    const HandleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in user
        LoginUser(email, password)
            .then((result) => {
                const LoggedUser = result.user;
                console.log(LoggedUser);
                form.reset();
                // toast.success('Login Successfully');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User login successfully.',
                    showConfirmButton: true,
                    // timer: 1500
                });
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(error.message);
                console.log(errorMessage);
                form.reset();
            })
    }

    const HandleGoogleLogin = () => {
        GoogleSignIn()
            .then(result => {
                const loggerUser = result.user
                console.log(loggerUser);
                // toast.success("User Sign in successfully by google");
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User successfully login by google.',
                    showConfirmButton: true,
                    // timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                const ErrorMessage = error.message;
                console.log(ErrorMessage)
                toast.error(error.message);
            })
    }

    return (

        <div className="g-6 flex  my-10 flex-wrap items-center justify-center lg:justify-between">
            <Helmet>
                <title>Bistro Boss | Login Page</title>
            </Helmet>
            <div
                className="shrink-1 mx-auto  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                    src={img}
                    className="w-full "
                    alt="Sample image" />
            </div>

            <div className="lg:mt-0 mt-4 md:mt-7 sm:mx-auto sm:w-full sm:max-w-sm p-7 rounded-lg shadow-md dark:border-2 dark:bg-gray-800 dark:border-gray-700 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
                </div>
                <form onSubmit={HandleLogin} className='flex flex-col gap-5 mt-7'>
                    <div>
                        <label htmlFor="email" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <div className="input_group ">
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                className="input_text"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className="input_group">
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder='password'
                                className="input_text"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between ">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input onChange={handleShowPassword} id="remember" aria-describedby="remember" type="checkbox" className="w-4 cursor-pointer h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Show Password</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>

                    <div>
                        <label className="block mb-3  text-right font-medium text-gray-900 dark:text-white"> <LoadCanvasTemplate className="text-black" /> </label>
                        <div className="input_group">
                            <input
                                type='text'
                                name='captcha'
                                placeholder='Type the captcha above'
                                className="input_text"
                                required
                                onBlur={handleValidateCaptcha}
                            />
                        </div>
                    </div>

                    {/* login buttons */}
                    <div className="input-button text-center">
                        <button disabled={disabled} type='submit' className="btn w-full btn-outline btn-warning ">
                            Login
                        </button>
                    </div>
                    <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>
                    <div className="input-button">
                        <button onClick={HandleGoogleLogin} type='button' className="button_custom rounded-md font-semibold">
                            Sign In with Google <FaGoogle className='h-6 w-9'></FaGoogle>
                        </button>
                    </div>

                </form>

                {/* bottom */}
                <div className="mt-7 mb-6 text-sm flex justify-between items-center text-[#002D74]">
                    <p>Don<span>&#39;</span>t have an account?</p>
                    <Link to="/signup">
                        <button className="py-2 px-5 ml-4 bg-white border rounded-xl hover:scale-110 duration-300">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>




    );
};

export default Login;