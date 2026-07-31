"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface AddTaskModalProps {
    open: boolean;

    onClose: () => void;

    onSave: (title: string) => void;
}

export default function AddTaskModal({
    open,
    onClose,
    onSave,
}: AddTaskModalProps) {
    const [title, setTitle] =
        useState("");

    useEffect(() => {
        if (open) {
            setTitle("");
        }
    }, [open]);

    const handleSave = () => {
        if (!title.trim()) return;

        onSave(title);

        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

            <div className="w-full max-w-lg rounded-2xl bg-card shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-border p-6">

                    <h2 className="text-2xl font-bold">
                        Add New Task
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 transition hover:bg-muted"
                    >
                        <X size={22} />
                    </button>

                </div>

                {/* Body */}

                <div className="p-6">

                    <label className="mb-3 block font-medium">
                        Task Title
                    </label>

                    <input
                        autoFocus
                        type="text"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        placeholder="Enter task..."
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSave();
                            }
                        }}
                        className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none transition focus:border-primary"
                    />

                </div>

                {/* Footer */}

                <div className="flex justify-end gap-3 border-t border-border p-6">

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-border px-5 py-2.5 transition hover:bg-muted"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="rounded-xl bg-primary px-6 py-2.5 font-medium text-white transition hover:opacity-90"
                    >
                        Save Task
                    </button>

                </div>

            </div>

        </div>
    );
}