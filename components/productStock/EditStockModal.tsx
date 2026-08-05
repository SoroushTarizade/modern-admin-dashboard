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

        <div
            className="
                fixed
                inset-0
                z-50

                flex
                items-center
                justify-center

                bg-black/50

                p-4
            "
        >

            <div
                className="
                    w-full
                    max-w-xl

                    rounded-3xl

                    bg-card

                    p-6
                    sm:p-8

                    shadow-2xl
                "
            >

                <h2
                    className="
                        text-2xl
                        font-bold
                        mb-8
                    "
                >
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
                        placeholder="Product Name"
                        className="
                            w-full

                            rounded-xl

                            border
                            border-border

                            bg-background

                            p-3

                            outline-none

                            focus:border-primary
                        "
                    />

                    <input
                        value={form.category}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                category: e.target.value,
                            })
                        }
                        placeholder="Category"
                        className="
                            w-full

                            rounded-xl

                            border
                            border-border

                            bg-background

                            p-3

                            outline-none

                            focus:border-primary
                        "
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
                        placeholder="Price"
                        className="
                            w-full

                            rounded-xl

                            border
                            border-border

                            bg-background

                            p-3

                            outline-none

                            focus:border-primary
                        "
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
                        placeholder="Quantity"
                        className="
                            w-full

                            rounded-xl

                            border
                            border-border

                            bg-background

                            p-3

                            outline-none

                            focus:border-primary
                        "
                    />

                </div>

                <div
                    className="
                        mt-8

                        flex

                        flex-col-reverse
                        sm:flex-row

                        justify-end

                        gap-3
                    "
                >

                    <button
                        onClick={onClose}
                        className="
                            h-11

                            rounded-xl

                            border
                            border-border

                            px-6
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => {
                            onSave(form);
                            onClose();
                        }}
                        className="
                            h-11

                            rounded-xl

                            bg-primary

                            px-6

                            text-white
                        "
                    >
                        Save Changes
                    </button>

                </div>

            </div>

        </div>

    );

}