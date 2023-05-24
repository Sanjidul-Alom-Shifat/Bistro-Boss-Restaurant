// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div className="mx-3 md:mx-5 lg:mx-9 ">
            <section>
                <SectionTitle
                    subHeading={"From 11.00am to 10.00pm"}
                    heading={"Order Online"}
                    className='mx-3'
                ></SectionTitle>
                <Swiper
                    slidesPerView={2} // Default number of slides per view for small devices
                    spaceBetween={20}
                    // centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10 lg:mb-14"
                    breakpoints={{
                        640: {
                            slidesPerView: 3, // Number of slides per view for medium devices (640px and above)
                        },
                        1024: {
                            slidesPerView: 4, // Number of slides per view for large devices (1024px and above)
                        },
                    }}
                    
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className="text-2xl  uppercase text-center -mt-16 text-white">Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className="text-2xl uppercase text-center -mt-16 text-white">Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;