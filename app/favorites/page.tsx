import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import FavoritesCard from "@/components/favorites/FavoritesCard";
import { favorites } from "@/components/favorites/favorites-data";

export default function Page() {
    return (
        <div className="bg-background text-foreground flex justify-center">

            <div className="w-[1440px] flex flex-row justify-between">
                <Sidebar />
                <div>

                    <Header />

                    <div className="mt-10">

                        <div className="ml-10">
                            <h1 className="text-3xl font-bold">
                                Favorites
                            </h1>
                        </div>

                        <div className="w-[1141px] ml-10 mt-10 grid grid-cols-3 gap-8">

                            {favorites.map((item) => (
                                <FavoritesCard
                                    key={item.id}
                                    favorites={item}
                                />
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}