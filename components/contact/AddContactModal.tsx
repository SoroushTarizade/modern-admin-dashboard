"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface AddContactModalProps {
    open: boolean;
    onClose: () => void;
}

export default function AddContactModal({
    open,
    onClose,
}: AddContactModalProps) {
    const [preview, setPreview] = useState(
        "/images/img-resume.jpg"
    );

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

            <div className="w-[620px] rounded-3xl bg-card border border-border p-8 relative">

                <button
                    onClick={onClose}
                    className="absolute right-6 top-6"
                >
                    <IoClose size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-8">
                    Add Contact
                </h2>

                <div className="flex justify-center mb-8">

                    <label className="cursor-pointer">

                        <img
                            src={preview}
                            className="w-28 h-28 rounded-full object-cover border-4 border-border"
                            alt=""
                        />

                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];

                                if (!file) return;

                                setPreview(
                                    URL.createObjectURL(file)
                                );
                            }}
                        />

                    </label>

                </div>

                <div className="grid grid-cols-2 gap-5">

                    <input
                        placeholder="Full Name"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none"
                    />

                    <input
                        placeholder="Email"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none"
                    />

                    <input
                        placeholder="Phone"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none"
                    />

                    <input
                        placeholder="Company"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none"
                    />

                    <input
                        placeholder="Position"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none"
                    />

                    <input
                        placeholder="Address"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none"
                    />

                </div>

                <div className="flex justify-end gap-4 mt-8">

                    <button
                        onClick={onClose}
                        className="px-6 h-11 rounded-xl border border-border"
                    >
                        Cancel
                    </button>

                    <button
                        className="px-6 h-11 rounded-xl bg-primary text-white"
                    >
                        Save Contact
                    </button>

                </div>

            </div>

        </div>
    );
}