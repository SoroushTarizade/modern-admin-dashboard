"use client";

import { ProductStock } from "@/types/productStock";
import ProductStockRow from "./ProductStockRow";

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
    return (
        <div className="w-[1141px] bg-card rounded-2xl ml-10 mt-10 overflow-hidden">

            <table className="w-full">

                <thead>

                    <tr className="h-14 border-b border-border">

                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Piece</th>
                        <th>Available Color</th>
                        <th>Action</th>

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
    );
}