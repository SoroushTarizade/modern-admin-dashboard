"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
    images: string[];
}

export default function FavoritesImageSlider({ images }: Props) {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="w-full h-[317px]"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image}
                        alt=""
                        className="w-full h-[317px] object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}