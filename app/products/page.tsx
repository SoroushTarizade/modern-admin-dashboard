import Header from "@/components/header/Header";
import BannerSlider from "@/components/product/BannerSlider";
import ProductSlider from "@/components/product/ProductSlider";
import Sidebar from "@/components/sidebar/sideBar";


export default function Page() {

    return (

        <div
            className="
                min-h-screen

                bg-background

                text-foreground
            "
        >


            <Sidebar />



            <div
                className="
                    md:ml-[220px]
                    lg:ml-[240px]

                    min-h-screen
                "
            >


                <Header />



                <main
                    className="
                        pt-[100px]

                        px-4
                        sm:px-6
                        lg:px-8

                        space-y-10
                    "
                >



                    {/* Title */}

                    <h1
                        className="
                            text-2xl
                            sm:text-3xl

                            font-bold
                        "
                    >
                        Products
                    </h1>





                    {/* Banner */}

                    <BannerSlider />





                    {/* Products */}

                    <ProductSlider />



                </main>


            </div>


        </div>

    );
}