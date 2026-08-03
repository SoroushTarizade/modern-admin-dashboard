"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


interface Props {
    images: string[];
}


export default function FavoritesImageSlider({
    images
}: Props) {


    return (

        <Swiper

            modules={[Pagination]}

            pagination={{
                clickable: true
            }}

            loop

            className="
                w-full

                h-[220px]

                sm:h-[260px]

                lg:h-[317px]

                bg-white
            "

        >

            {
                images.map((image, index) => (

                    <SwiperSlide
                        key={index}
                        className="
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <img
                            src={image}
                            alt=""

                            className="
                                w-full

                                h-full

                                object-contain

                                p-4
                                sm:p-6
                            "
                        />

                    </SwiperSlide>

                ))
            }


        </Swiper>

    );

}