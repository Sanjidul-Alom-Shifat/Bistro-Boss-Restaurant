import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const { CreateUser, UpdateUserData, LogOutUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = (data) => {
        console.log(data);
        CreateUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                UpdateUserData(data.name, data.photoURL)
                    .then(() => {

                        const savedUser = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }

                        fetch('https://bistro-boss-server-side.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                if (data.insertedId) {
                                    console.log('user profile info updated')
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: true,
                                        // timer: 1500
                                    });
                                    // navigate('/');
                                    LogOutUser()
                                        .then(() => {
                                            // Sign-out successful.
                                            // toast.success('Log Out Successfully');
                                            navigate('/login')
                                        })
                                        .catch((error) => {
                                            // An error happened.
                                            toast.error(error.message);
                                        });
                                    // navigate(from, { replace: true });
                                }
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                        toast.error(error.message);
                    })
            })
    }



    return (
        <div className="g-6 flex  my-10 flex-wrap items-center justify-center lg:justify-between">

            <Helmet>
                <title>Bistro Boss | Sign Up Page</title>
            </Helmet>

            <div className="lg:mt-0 mt-4 md:mt-7 sm:mx-auto sm:w-full sm:max-w-sm p-7 rounded-lg shadow-md dark:border-2 dark:bg-gray-800 dark:border-gray-700 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-7'>
                    <div>
                        <label htmlFor="name" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Name</label>
                        <div className="input_group ">
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                {...register("name", { required: true })}
                                className="input_text"
                                required
                            />
                        </div>
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <div className="input_group ">
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                {...register("email", { required: true })}
                                className="input_text"
                                required
                            />
                        </div>
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Photo </label>
                        <div className="input_group ">
                            <input
                                type="text"
                                name='photoURL'
                                placeholder='Photo URL'
                                {...register("photoURL", { required: true })}
                                className="input_text"
                                required
                            />
                        </div>
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
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
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                            />
                        </div>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input onChange={handleShowPassword} id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Show Password</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>

                    {/* login buttons */}
                    <div className="input-button">
                        <button type='submit' className="btn w-full btn-outline btn-warning ">
                            Register
                        </button>
                    </div>
                    <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                </form>

                {/* bottom */}
                <div className="mt-7 mb-6 text-sm flex justify-between items-center text-[#002D74]">
                    <p>Already have an account?</p>
                    <Link to="/login">
                        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                            Login
                        </button>
                    </Link>
                </div>
            </div>

            <div
                className="shrink-1 mx-auto grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                    src={img}
                    className="w-full "
                    alt="Sample image" />
            </div>

        </div>
    );
};

export default SignUp;