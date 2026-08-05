"use client";

import { ProductStock } from "@/types/productStock";

import ProductStockRow from "./ProductStockRow";
import ProductStockCard from "./ProductStockCard";

interface ProductStockTableProps {
    products: ProductStock[];
    onDelete: (id: number) => void;
    onUpdate: (product: ProductStock) => void;
}

export default function ProductStockTable({
    products,
    onDelete,
    onUpdate,
}: ProductStockTableProps) {

    if (products.length === 0) {
        return (
            <div
                className="
                    mt-8
                    rounded-2xl
                    bg-card
                    py-20
                    text-center
                    text-muted-foreground
                    font-medium
                "
            >
                No products found.
            </div>
        );
    }

    return (
        <>
            {/* ===================== */}
            {/* Desktop Table */}
            {/* ===================== */}

            <div
                className="
                    hidden
                    lg:block

                    mt-8

                    w-full

                    overflow-hidden

                    rounded-2xl

                    bg-card

                    shadow-sm
                "
            >

                <table className="w-full">

                    <thead>

                        <tr
                            className="
                                h-16

                                border-b
                                border-border

                                bg-secondary/40

                                text-xs

                                uppercase

                                tracking-wider

                                text-muted-foreground
                            "
                        >

                            <th className="font-bold">
                                Image
                            </th>

                            <th className="font-bold">
                                Product
                            </th>

                            <th className="font-bold">
                                Category
                            </th>

                            <th className="font-bold">
                                Price
                            </th>

                            <th className="font-bold">
                                Stock
                            </th>

                            <th className="font-bold">
                                Colors
                            </th>

                            <th className="font-bold">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {products.map((product) => (

                            <ProductStockRow
                                key={product.id}
                                product={product}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                            />

                        ))}

                    </tbody>

                </table>

            </div>

            {/* ===================== */}
            {/* Mobile / Tablet */}
            {/* ===================== */}

            <div
                className="
                    mt-8

                    grid

                    gap-5

                    lg:hidden
                "
            >

                {products.map((product) => (

                    <ProductStockCard
                        key={product.id}
                        product={product}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />

                ))}

            </div>

        </>
    );
}