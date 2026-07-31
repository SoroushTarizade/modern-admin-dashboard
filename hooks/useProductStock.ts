"use client";

import { useState } from "react";
import { productStock } from "@/data/productStock";
import { ProductStock } from "@/types/productStock";

export default function useProductStock() {
    const [products, setProducts] =
        useState<ProductStock[]>(productStock);

    function handleDelete(id: number) {
        setProducts((prev) =>
            prev.filter((product) => product.id !== id)
        );
    }

    function handleUpdate(updatedProduct: ProductStock) {
        setProducts((prev) =>
            prev.map((product) =>
                product.id === updatedProduct.id
                    ? updatedProduct
                    : product
            )
        );
    }

    return {
        products,
        handleDelete,
        handleUpdate,
    };
}