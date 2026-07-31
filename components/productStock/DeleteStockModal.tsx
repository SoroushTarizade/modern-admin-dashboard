"use client";

import { ProductStock } from "@/types/productStock";

interface DeleteStockModalProps {
    open: boolean;
    product: ProductStock;
    onClose: () => void;
    onDelete: (id: number) => void;
}

export default function DeleteStockModal({
    open,
    product,
    onClose,
    onDelete,
}: DeleteStockModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="w-[420px] bg-card rounded-2xl p-6">

                <h2 className="text-xl font-bold mb-3">
                    Delete Product
                </h2>

                <p className="text-muted-foreground">
                    Are you sure you want to delete
                    <span className="font-semibold">
                        {" "}
                        {product.name}
                    </span>
                    ?
                </p>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-xl border border-border"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => {
                            onDelete(product.id);
                            onClose();
                        }}
                        className="px-5 py-2 rounded-xl bg-destructive text-white"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}