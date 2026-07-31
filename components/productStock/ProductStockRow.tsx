"use client";

import Image from "next/image";

import { ProductStock } from "@/types/productStock";

import StockQuantity from "./StockQuantity";
import StockColors from "./StockColors";
// import StockColors from "./StockColors";
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
        <tr className="border-b border-border hover:bg-background transition">

            <td className="py-5 px-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={60}
                    className="rounded-xl object-cover"
                />
            </td>

            <td className="font-semibold">
                {product.name}
            </td>

            <td>
                {product.category}
            </td>

            <td>
                ${product.price.toFixed(2)}
            </td>

            <td>
                <StockQuantity quantity={product.quantity} />
            </td>

            <td>
                <StockColors colors={product.colors} />
            </td>

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