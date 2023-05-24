// import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import  './Features.css';
import featuredImg from '../../../assets/home/featured.jpg'

const Features = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-16 ">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-5 md:px-12 lg:px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 mt-5 md:mt-0">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase mt-2 md:mt-0">Where can i get some?</p>
                    <p className='text-justify mt-1 md:mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Features;