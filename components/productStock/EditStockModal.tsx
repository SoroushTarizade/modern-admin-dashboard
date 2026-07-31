"use client";

import { useEffect, useState } from "react";

import { ProductStock } from "@/types/productStock";

interface EditStockModalProps {
    open: boolean;
    product: ProductStock;
    onClose: () => void;
    onSave: (product: ProductStock) => void;
}

export default function EditStockModal({
    open,
    product,
    onClose,
    onSave,
}: EditStockModalProps) {
    const [form, setForm] = useState(product);

    useEffect(() => {
        setForm(product);
    }, [product]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="w-[520px] bg-card rounded-2xl p-6">

                <h2 className="text-2xl font-bold mb-6">
                    Edit Product
                </h2>

                <div className="space-y-4">

                    <input
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value,
                            })
                        }
                        className="w-full border border-border rounded-xl p-3"
                        placeholder="Product Name"
                    />

                    <input
                        value={form.category}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                category: e.target.value,
                            })
                        }
                        className="w-full border border-border rounded-xl p-3"
                        placeholder="Category"
                    />

                    <input
                        type="number"
                        value={form.price}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                price: Number(e.target.value),
                            })
                        }
                        className="w-full border border-border rounded-xl p-3"
                        placeholder="Price"
                    />

                    <input
                        type="number"
                        value={form.quantity}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                quantity: Number(e.target.value),
                            })
                        }
                        className="w-full border border-border rounded-xl p-3"
                        placeholder="Quantity"
                    />

                </div>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={onClose}
                        className="px-5 py-2 border border-border rounded-xl"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => {
                            onSave(form);
                            onClose();
                        }}
                        className="px-5 py-2 bg-primary text-white rounded-xl"
                    >
                        Save
                    </button>

                </div>

            </div>

        </div>
    );
}