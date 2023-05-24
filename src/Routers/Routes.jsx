import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
        
    }
]);

export default router;