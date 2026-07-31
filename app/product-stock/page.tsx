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
        <div className="bg-background text-foreground flex justify-center">

            <div className="w-[1440px] flex">

                <Sidebar />

                <div className="flex-1">

                    <Header />

                    <div className="ml-10 mt-15">

                        <h1 className="text-3xl font-bold">
                            Product Stock
                        </h1>

                    </div>

                    <ProductStockTable
                        products={products}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />

                </div>

            </div>

        </div>
    );
}