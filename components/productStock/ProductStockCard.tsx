"use client";

import Image from "next/image";
import { FiTag, FiDollarSign } from "react-icons/fi";

import { ProductStock } from "@/types/productStock";

import StockQuantity from "./StockQuantity";
import StockColors from "./StockColors";
import StockActions from "./StockActions";

interface ProductStockCardProps {
    product: ProductStock;
    onDelete: (id: number) => void;
    onUpdate: (product: ProductStock) => void;
}

export default function ProductStockCard({
    product,
    onDelete,
    onUpdate,
}: ProductStockCardProps) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-border
                bg-card
                p-5
                shadow-sm
                transition-all
                hover:shadow-lg
                hover:border-primary/30
            "
        >
            {/* Product Image */}

            <div className="flex justify-center">

                <Image
                    src={product.image}
                    alt={product.name}
                    width={180}
                    height={140}
                    className="
                        h-40
                        w-full
                        rounded-xl
                        object-cover
                    "
                />

            </div>

            {/* Product Name */}

            <div className="mt-5">

                <h3
                    className="
                        text-lg
                        font-bold
                        line-clamp-1
                    "
                >
                    {product.name}
                </h3>

            </div>

            {/* Category */}

            <div
                className="
                    mt-4

                    flex
                    items-center
                    gap-2

                    text-muted-foreground
                "
            >

                <FiTag className="text-primary" />

                <span className="text-sm">
                    {product.category}
                </span>

            </div>

            {/* Price */}

            <div
                className="
                    mt-3

                    flex
                    items-center
                    gap-2
                "
            >

                <FiDollarSign className="text-primary" />

                <span className="font-semibold">
                    ${product.price.toFixed(2)}
                </span>

            </div>

            {/* Stock */}

            <div
                className="
                    mt-5

                    flex
                    items-center
                    justify-between
                "
            >

                <span
                    className="
                        text-sm
                        font-medium
                        text-muted-foreground
                    "
                >
                    Stock
                </span>

                <StockQuantity
                    quantity={product.quantity}
                />

            </div>

            {/* Colors */}

            <div
                className="
                    mt-5

                    flex
                    items-center
                    justify-between
                "
            >

                <span
                    className="
                        text-sm
                        font-medium
                        text-muted-foreground
                    "
                >
                    Colors
                </span>

                <StockColors
                    colors={product.colors}
                />

            </div>

            {/* Actions */}

            <div className="mt-6 flex justify-end">

                <StockActions
                    product={product}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />

            </div>

        </div>
    );
}