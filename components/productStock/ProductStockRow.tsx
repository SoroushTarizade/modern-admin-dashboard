"use client";

import Image from "next/image";

import { ProductStock } from "@/types/productStock";

import StockQuantity from "./StockQuantity";
import StockColors from "./StockColors";
import StockActions from "./StockActions";

interface ProductStockRowProps {
    product: ProductStock;
    onDelete: (id: number) => void;
    onUpdate: (product: ProductStock) => void;
}

export default function ProductStockRow({
    product,
    onDelete,
    onUpdate,
}: ProductStockRowProps) {

    return (

        <tr
            className="
                border-b
                border-border

                hover:bg-background

                transition-colors
            "
        >

            {/* Image */}

            <td className="px-5 py-5">

                <Image
                    src={product.image}
                    alt={product.name}
                    width={72}
                    height={72}
                    className="
                        rounded-xl
                        object-cover
                    "
                />

            </td>

            {/* Name */}

            <td
                className="
                    font-semibold
                    whitespace-nowrap
                "
            >
                {product.name}
            </td>

            {/* Category */}

            <td
                className="
                    text-muted-foreground
                "
            >
                {product.category}
            </td>

            {/* Price */}

            <td
                className="
                    font-medium
                "
            >
                ${product.price.toFixed(2)}
            </td>

            {/* Quantity */}

            <td>

                <StockQuantity
                    quantity={product.quantity}
                />

            </td>

            {/* Colors */}

            <td>

                <StockColors
                    colors={product.colors}
                />

            </td>

            {/* Actions */}

            <td>

                <StockActions
                    product={product}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />

            </td>

        </tr>

    );

}