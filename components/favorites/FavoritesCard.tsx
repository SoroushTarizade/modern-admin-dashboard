import FavoritesImageSlider from "./FavoritesImageSlider";
import { LiaStarSolid } from "react-icons/lia";

interface Props {
    favorites: {
        title: string;
        price: number;
        images: string[];
    };
}

export default function FavoritesCard({ favorites }: Props) {
    return (
        <div className="bg-card rounded-2xl overflow-hidden shadow-md">
            <FavoritesImageSlider images={favorites.images} />

            <div className="p-5 space-y-3">

                <h3 className="font-bold text-lg">
                    {favorites.title}
                </h3>

                <p className="text-muted-foreground font-semibold">
                    ${favorites.price}
                </p>

                <div className="flex text-yellow-400 text-xl">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                </div>

                <button
                    className="
          bg-primary
          text-white
          px-6
          py-2
          rounded-xl
          hover:opacity-90
          transition"
                >
                    Edit Product
                </button>

            </div>
        </div>
    );
}