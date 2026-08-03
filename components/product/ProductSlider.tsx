"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { products } from "./product-data";

import ProductCard from "./ProductCard";



export default function ProductSlider() {


    return (

        <Swiper

            modules={[Navigation]}

            navigation

            spaceBetween={20}

            loop


            breakpoints={{

                0: {
                    slidesPerView: 1,
                },


                640: {
                    slidesPerView: 2,
                },


                1024: {
                    slidesPerView: 3,
                }

            }}


            className="w-full"

        >


            {
                products.map(product => (

                    <SwiperSlide
                        key={product.id}
                    >

                        <ProductCard
                            product={product}
                        />

                    </SwiperSlide>

                ))
            }


        </Swiper>


    );

}