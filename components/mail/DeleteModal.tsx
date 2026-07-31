"use client";

import { FiAlertTriangle } from "react-icons/fi";

interface DeleteModalProps {
    open: boolean;
    count: number;
    onClose: () => void;
    onConfirm: () => void;
}

export default function DeleteModal({
    open,
    count,
    onClose,
    onConfirm,
}: DeleteModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            <div className="w-[430px] rounded-3xl border border-border bg-card p-8 shadow-2xl">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <FiAlertTriangle size={30} />
                </div>

                <h2 className="mt-6 text-center text-2xl font-bold">
                    Delete Email
                </h2>

                <p className="mt-3 text-center text-muted-foreground">
                    Are you sure you want to delete
                    <span className="font-semibold text-foreground">
                        {" "}
                        {count}{" "}
                    </span>
                    email{count > 1 ? "s" : ""}?
                </p>

                <div className="mt-8 flex gap-3">

                    <button
                        onClick={onClose}
                        className="flex-1 rounded-xl border border-border py-3 font-semibold hover:bg-secondary"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}