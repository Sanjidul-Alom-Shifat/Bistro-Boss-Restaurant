import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Oder/Order";
import Login from "../Pages/LoginForm/Login";
import SignUp from "../Pages/SignUpForm/SignUp";
// import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            }
        ]
    }
]);

export default router;