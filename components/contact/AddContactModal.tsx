"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { Contact } from "@/types/contact";

interface AddContactModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (contact: Contact) => void;
}

export default function AddContactModal({
    open,
    onClose,
    onSave,
}: AddContactModalProps) {

    const [preview, setPreview] = useState(
        "/images/img-resume.jpg"
    );

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        address: "",
    });

    if (!open) return null;

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleImageChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = e.target.files?.[0];

        if (!file) return;

        setPreview(URL.createObjectURL(file));
    }

    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.phone.trim()
        ) {
            return;
        }

        const newContact: Contact = {
            id: Date.now(),

            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            position: form.position,
            address: form.address,

            image: preview,

            favorite: false,
        };

        onSave(newContact);

        setForm({
            name: "",
            email: "",
            phone: "",
            company: "",
            position: "",
            address: "",
        });

        setPreview("/images/img-resume.jpg");
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <form
                onSubmit={handleSubmit}
                className="
                    relative
                    w-full
                    max-w-xl
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-5
                    sm:p-8
                "
            >

                {/* Close */}

                <button
                    type="button"
                    onClick={onClose}
                    className="
                        absolute
                        right-5
                        top-5
                        rounded-lg
                        p-2
                        transition
                        hover:bg-muted
                        sm:right-6
                        sm:top-6
                    "
                >
                    <IoClose size={24} />
                </button>


                {/* Title */}

                <h2 className="mb-8 text-2xl font-bold">
                    Add Contact
                </h2>


                {/* Image */}

                <div className="mb-8 flex justify-center">

                    <label className="cursor-pointer">

                        <img
                            src={preview}
                            className="
                                h-24
                                w-24
                                rounded-full
                                border-4
                                border-border
                                object-cover
                                sm:h-28
                                sm:w-28
                            "
                            alt="Contact preview"
                        />

                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleImageChange}
                        />

                    </label>

                </div>


                {/* Inputs */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="
                            h-12
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="
                            h-12
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        className="
                            h-12
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                    <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company"
                        className="
                            h-12
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                    <input
                        name="position"
                        value={form.position}
                        onChange={handleChange}
                        placeholder="Position"
                        className="
                            h-12
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                    <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className="
                            h-12
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                </div>


                {/* Buttons */}

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-border
                            px-6
                            sm:w-auto
                        "
                    >
                        Cancel
                    </button>


                    <button
                        type="submit"
                        className="
                            h-11
                            w-full
                            rounded-xl
                            bg-primary
                            px-6
                            text-white
                            transition
                            hover:opacity-90
                            sm:w-auto
                        "
                    >
                        Save Contact
                    </button>

                </div>

            </form>

        </div>
    );
}