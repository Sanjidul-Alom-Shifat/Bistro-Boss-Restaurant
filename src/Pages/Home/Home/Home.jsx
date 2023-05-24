// import React from 'react';
import { Helmet } from "react-helmet-async";
// import UseTitle from "../../../Hook/UseTitle";
import Banner from "../BannerSection/Banner";
import Category from "../Category/Category";
import Features from "../FeaturesSection/Features";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {

    // UseTitle('Home Page');

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Home Page</title>
            </Helmet>

            <Banner></Banner>

            <Category></Category>

            <PopularMenu></PopularMenu>

            <Features></Features>

            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;