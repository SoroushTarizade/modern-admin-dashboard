"use client";

import ProductStockTable from "@/components/productStock/ProductStockTable";
import useProductStock from "@/hooks/useProductStock";

export default function ProductStockPage() {
    const {
        products,
        handleDelete,
        handleUpdate,
    } = useProductStock();

    return (
        <main
            className="
                min-h-screen

                bg-background

                text-foreground
            "
        >
            <div
                className="
                    mx-auto

                    w-full

                    max-w-7xl
                "
            >
                <h1
                    className="
                        text-2xl

                        sm:text-3xl

                        font-bold
                    "
                >
                    Product Stock
                </h1>

                <ProductStockTable
                    products={products}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            </div>
        </main>
    );
}