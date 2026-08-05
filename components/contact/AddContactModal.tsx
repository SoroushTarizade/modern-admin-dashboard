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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-8">
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 rounded-lg p-2 transition hover:bg-muted sm:right-6 sm:top-6"
                >
                    <IoClose size={24} />
                </button>

                <h2 className="mb-8 text-2xl font-bold">
                    Add Contact
                </h2>

                <div className="mb-8 flex justify-center">
                    <label className="cursor-pointer">
                        <img
                            src={preview}
                            className="h-24 w-24 rounded-full border-4 border-border object-cover sm:h-28 sm:w-28"
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

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <input
                        placeholder="Full Name"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-primary"
                    />

                    <input
                        placeholder="Email"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-primary"
                    />

                    <input
                        placeholder="Phone"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-primary"
                    />

                    <input
                        placeholder="Company"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-primary"
                    />

                    <input
                        placeholder="Position"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-primary"
                    />

                    <input
                        placeholder="Address"
                        className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-primary"
                    />
                </div>

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                        onClick={onClose}
                        className="h-11 w-full rounded-xl border border-border px-6 sm:w-auto"
                    >
                        Cancel
                    </button>

                    <button className="h-11 w-full rounded-xl bg-primary px-6 text-white sm:w-auto">
                        Save Contact
                    </button>
                </div>
            </div>
        </div>
    );
}