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
            className="w-[1140px]"
            modules={[Navigation]}
            navigation
            spaceBetween={25}
            slidesPerView={3}
            loop

        >

            {products.map(product => (

                <SwiperSlide key={product.id}>

                    <ProductCard

                        product={product}

                    />

                </SwiperSlide>

            ))}

        </Swiper>

    )

}