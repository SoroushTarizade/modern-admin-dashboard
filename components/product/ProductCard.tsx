import ProductImageSlider from "./ProductImageSlider";
import { LiaStarSolid } from "react-icons/lia";

interface Props {
    product: {
        title: string;
        price: number;
        images: string[];
    }
}

export default function ProductCard({ product }: Props) {

    return (

        <div className="bg-card rounded-2xl overflow-hidden">

            <ProductImageSlider
                images={product.images}
            />

            <div className="p-5 space-y-3">

                <h3 className="font-bold">
                    {product.title}
                </h3>

                <p className="text-muted-foreground">
                    ${product.price}
                </p>

                <div className="flex text-amber-400">

                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />

                </div>

                <button className="bg-primary text-white rounded-xl px-4 sm:px-6 py-2 w-full">

                    Edit Product

                </button>

            </div>

        </div>

    )

}