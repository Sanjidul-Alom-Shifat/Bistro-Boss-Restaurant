// import React from 'react';
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (

        <footer aria-label="Site Footer" className="bg-slate-50 mt-10 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="border-b border-gray-100 py-8 dark:border-gray-800 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                    >
                        <div className="block lg:hidden">
                            <img src={logo} className='h-16' alt="" />
                        </div>

                        <div className="mt-8 space-y-4 lg:mt-0">
                            <span className="hidden h-1 w-10 rounded bg-amber-400 lg:block"></span>

                            <div>
                                <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
                                    Request a Demo
                                </h2>

                                <p className="mt-4 max-w-lg text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Veritatis, harum deserunt nesciunt praesentium, repellendus eum
                                    perspiciatis ratione pariatur a aperiam eius numquam doloribus
                                    asperiores sunt.
                                </p>
                            </div>

                            <form className="mt-6 w-full">
                                <label htmlFor="UserEmail" className="sr-only"> Email </label>

                                <div
                                    className="rounded-md border border-gray-300 p-2 focus-within:ring dark:border-gray-800 sm:flex sm:items-center sm:gap-4"
                                >
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="bistroboss@gmail.com"
                                        className="w-full border-none focus:border-transparent p-3 focus:ring-transparent dark:bg-gray-900 dark:text-white sm:text-sm"
                                    />

                                    <button
                                        className="mt-1 w-full rounded bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-amber-400 hover:text-black sm:mt-2 md:mt-0 sm:w-auto sm:shrink-0"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="py-8 lg:py-16 lg:pe-16">
                        <div className="hidden items-center lg:flex">
                            <div className="flex items-center text-black "> {/* Added mx-auto for center alignment */}
                                <img src={logo} className='h-11 w-11 rounded-full' alt="" />
                                <h2 className='text-xl font-bold mt-4 tracking-wide ml-3 text-gray-800 hover:text-amber-400 hover:cursor-pointer'>ToyGenius</h2>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Services</p>

                                <nav aria-label="Footer Navigation - Services" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                1on1 Coaching
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                Company Review
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                Accounts Review
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                HR Consulting
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                SEO Optimisation
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Company</p>

                                <nav aria-label="Footer Navigation - Company" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                About
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                Meet the Team
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                Accounts Review
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                    Helpful Links
                                </p>

                                <nav aria-label="Footer Navigation - Company" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                Contact
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                FAQs
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            >
                                                Live Chat
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
                            <nav aria-label="Footer Navigation - Support">
                                <ul className="flex flex-wrap gap-4 text-xs">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                        >
                                            Cookies
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <p className="mt-8 text-xs text-gray-500 text-center dark:text-gray-400">
                                &copy; 2023. BRISTO BOSS RESTAURANT.   All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;