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
                    max-w-md

                    rounded-3xl

                    bg-card

                    p-6

                    shadow-2xl
                "
            >

                <h2
                    className="
                        text-2xl
                        font-bold
                    "
                >
                    Delete Product
                </h2>

                <p
                    className="
                        mt-4

                        text-muted-foreground

                        leading-7
                    "
                >
                    Are you sure you want to delete

                    <span className="font-semibold text-foreground">
                        {" "}
                        {product.name}
                    </span>

                    ?
                </p>

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
                            onDelete(product.id);
                            onClose();
                        }}
                        className="
                            h-11

                            rounded-xl

                            bg-destructive

                            px-6

                            text-white
                        "
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}