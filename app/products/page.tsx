import Header from '@/components/header/Header'
import BannerSlider from '@/components/product/BannerSlider'
import ProductSlider from '@/components/product/ProductSlider';
import Sidebar from '@/components/sidebar/sideBar'
import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
export default function page() {

    return (
        <div className='bg-background text-foreground flex justify-center'>
            <div className='w-[1440px] flex flex-row-reverse justify-between'>
                <div>
                    <Header></Header>
                    <div className='mt-10'>
                        <div className='ml-10'>
                            <h1 className='text-3xl font-bold'>Products</h1>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <BannerSlider></BannerSlider>
                    </div>
                    <div className='ml-10 mt-10 w-[1140px] mt-15'>
                        <ProductSlider />
                    </div>
                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}
