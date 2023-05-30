import { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaHome, FaEnvelope, FaCalendarAlt, FaCcVisa, FaShoppingCart, FaSwatchbook, FaStreetView, FaAddressCard, FaUtensils, FaWallet, FaBook, FaUsers } from "react-icons/fa";
// import { HiAnnotation } from "react-icons/hi";
import { NavLink, Outlet } from 'react-router-dom';
import UseCart from '../Hook/UseCart';
import useAdmin from '../Hook/useAdmin';

const Dashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cart] = UseCart();
    // console.log(cart);
    const [isAdmin] = useAdmin();

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleCloseDashboard = () => {
        // Logic to close the dashboard goes here
        setSidebarOpen(false);
    };

    return (
        <>

            <button onClick={handleToggleSidebar} data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="separator-sidebar "
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? '' : '-translate-x-full sm:translate-x-0'
                    }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4  overflow-y-auto bg-gray-50 dark:bg-gray-800">

                    <ul className="space-y-2 font-medium  border-gray-200 dark:border-gray-700">
                        <li className='mb-3'>
                            <a href="#" className="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <img src={logo} alt="" className='w-9 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span className="ml-3 mt-3">BISTRO BOSS</span>
                            </a>
                        </li>

                        {
                            isAdmin ?
                                <>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink to='/dashboard/adminhome'>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <FaHome className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaHome>
                                                <span className="ml-3">Admin Home</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink to='/dashboard/additems'>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ">
                                                <FaUtensils className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaUtensils>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Add Items</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink to='/dashboard/manageitems'>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <FaWallet className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaWallet>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Manage Items</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink to='/dashboard/managebookings'>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <FaBook className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaBook>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Manage Bookings</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink to='/dashboard/allusers'>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <FaUsers className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaUsers>
                                                <span className="flex-1 ml-3 whitespace-nowrap">All Users</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink >
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <FaHome className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaHome>
                                                <span className="ml-3">User Home</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink to='/dashboard/home'>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ">
                                                <FaCalendarAlt className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaCalendarAlt>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Reservation</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink to='/dashboard/history'>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <FaCcVisa className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaCcVisa>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Payment History</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <NavLink
                                            to='/dashboard/mycart'
                                        >
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <div className='relative py-2'>
                                                    <FaShoppingCart className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaShoppingCart>
                                                    <p className='absolute text-sm bottom-5 left-6'>+{cart?.length || 0}</p>
                                                </div>
                                                <span className="flex-1 ml-8 whitespace-nowrap">My Cart</span>
                                            </a>
                                        </NavLink>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <FaAddressCard className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaAddressCard>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Add Reviews</span>
                                        </a>
                                    </li>
                                    <li onClick={handleCloseDashboard}>
                                        <div href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                            <FaSwatchbook className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaSwatchbook>
                                            <span className="flex-1 ml-3 whitespace-nowrap">My Booking</span>
                                        </div>
                                    </li>
                                </>
                        }

                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li onClick={handleCloseDashboard}>
                            <NavLink to='/'>
                                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                    <FaHome className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400"></FaHome>
                                    <span className="ml-3">Home</span>
                                </a>
                            </NavLink>
                        </li>
                        <li onClick={handleCloseDashboard}>
                            <NavLink to='/menu'>
                                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                    <FaBars className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaBars>
                                    <span className="ml-3">Menu</span>
                                </a>
                            </NavLink>
                        </li>
                        <li onClick={handleCloseDashboard}>
                            <NavLink to='/order/salad'>
                                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                    <span className="ml-3">Order Food</span>
                                </a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                    <FaEnvelope className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaEnvelope>
                                    <span className="ml-3">Contact</span>
                                </a>
                            </NavLink>
                        </li>
                        <li onClick={handleCloseDashboard}>
                            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                                <span className="ml-3">Close</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

                    <Outlet></Outlet>

                </div>
            </div>

        </>
    );
};

export default Dashboard;