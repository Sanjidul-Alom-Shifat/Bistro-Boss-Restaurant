// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";

const MainLayout = () => {
    return (
        <div>
            
            <NavigationBar></NavigationBar>

            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;