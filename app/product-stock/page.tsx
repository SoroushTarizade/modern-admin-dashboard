"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import ProductStockTable from "@/components/productStock/ProductStockTable";

import useProductStock from "@/hooks/useProductStock";

export default function ProductStockPage() {

    const {
        products,
        handleDelete,
        handleUpdate,
    } = useProductStock();

    return (

        <div
            className="
                min-h-screen

                bg-background

                text-foreground
            "
        >

            <Sidebar />

            <Header />

            <main
                className="
                    pt-[50px]
                    px-4
                    sm:px-6
                    lg:px-8
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

        </div>

    );

}