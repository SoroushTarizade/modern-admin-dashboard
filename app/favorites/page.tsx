import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import FavoritesCard from "@/components/favorites/FavoritesCard";
import { favorites } from "@/components/favorites/favorites-data";


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


                    <h1
                        className="
                            text-2xl
                            sm:text-3xl

                            font-bold
                        "
                    >
                        Favorites
                    </h1>



                    <div
                        className="
                            grid

                            grid-cols-1

                            sm:grid-cols-2

                            xl:grid-cols-3

                            gap-6
                        "
                    >

                        {
                            favorites.map((item) => (

                                <FavoritesCard
                                    key={item.id}
                                    favorites={item}
                                />

                            ))
                        }


                    </div>


                </main>


            </div>


        </div>

    );
}