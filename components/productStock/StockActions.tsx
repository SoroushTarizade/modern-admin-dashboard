"use client";

import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";

import { ProductStock } from "@/types/productStock";

import EditStockModal from "./EditStockModal";
import DeleteStockModal from "./DeleteStockModal";

interface StockActionsProps {
    product: ProductStock;
    onDelete: (id: number) => void;
    onUpdate: (product: ProductStock) => void;
}

export default function StockActions({
    product,
    onDelete,
    onUpdate,
}: StockActionsProps) {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    return (
        <>
            <div className="w-[96px] h-[36px] bg-input rounded-xl flex items-center justify-around">

                <button
                    onClick={() => setOpenEdit(true)}
                    className="cursor-pointer hover:text-primary transition"
                >
                    <FiEdit size={18} />
                </button>

                <button
                    onClick={() => setOpenDelete(true)}
                    className="cursor-pointer hover:text-destructive transition"
                >
                    <FaRegTrashCan size={18} />
                </button>

            </div>

            <EditStockModal
                open={openEdit}
                product={product}
                onClose={() => setOpenEdit(false)}
                onSave={onUpdate}
            />

            <DeleteStockModal
                open={openDelete}
                product={product}
                onClose={() => setOpenDelete(false)}
                onDelete={onDelete}
            />
        </>
    );
}