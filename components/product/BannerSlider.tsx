"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import {
    Navigation,
    Pagination,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BannerCard from "./BannerCard";
import { banners } from "./banner-data";

export default function BannerSlider() {

    return (

        <Swiper
            modules={[
                Navigation,
                Pagination,
                Autoplay,
            ]}

            navigation

            pagination={{
                clickable: true,
            }}

            autoplay={{
                delay: 3000,
            }}

            loop

            className="w-[1141px] rounded-2xl"
        >

            {banners.map((banner) => (

                <SwiperSlide key={banner.id}>

                    <BannerCard banner={banner} />

                </SwiperSlide>

            ))}

        </Swiper>

    );
}