"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiLoader } from "react-icons/fi";

import { Contact } from "@/types/contact";

interface AddContactModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (contact: Contact) => void;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    position: string;
    address: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    position?: string;
    address?: string;
}

const initialForm: FormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    address: "",
};

export default function AddContactModal({
    open,
    onClose,
    onSave,
}: AddContactModalProps) {
    const [preview, setPreview] = useState(
        "/images/img-resume.jpg"
    );

    const [form, setForm] =
        useState<FormData>(initialForm);

    const [errors, setErrors] =
        useState<FormErrors>({});

    const [loading, setLoading] =
        useState(false);

    if (!open) return null;

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));
    }

    function handleImageChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = e.target.files?.[0];

        if (!file) return;

        setPreview(URL.createObjectURL(file));
    }

    function validateForm(): FormErrors {
        const newErrors: FormErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Full name is required.";
        } else if (form.name.trim().length < 3) {
            newErrors.name =
                "Full name must be at least 3 characters.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                form.email
            )
        ) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Phone is required.";
        } else if (
            !/^[0-9+\-\s()]{7,20}$/.test(
                form.phone.trim()
            )
        ) {
            newErrors.phone =
                "Please enter a valid phone number.";
        }

        if (!form.company.trim()) {
            newErrors.company =
                "Company is required.";
        }

        if (!form.position.trim()) {
            newErrors.position =
                "Position is required.";
        }

        if (!form.address.trim()) {
            newErrors.address =
                "Address is required.";
        }

        return newErrors;
    }

    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (loading) return;

        const newErrors = validateForm();

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setLoading(true);

        const newContact: Contact = {
            id: Date.now(),

            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            company: form.company.trim(),
            position: form.position.trim(),
            address: form.address.trim(),

            image: preview,

            favorite: false,
        };

        /*
         * Simulate a small save delay
         * so the loading state is visible.
         */
        setTimeout(() => {
            onSave(newContact);

            setForm(initialForm);
            setErrors({});
            setPreview("/images/img-resume.jpg");

            setLoading(false);
        }, 500);
    }

    const hasErrors =
        Object.keys(errors).length > 0;

    const isFormValid =
        form.name.trim().length >= 3 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            form.email.trim()
        ) &&
        /^[0-9+\-\s()]{7,20}$/.test(
            form.phone.trim()
        ) &&
        form.company.trim() !== "" &&
        form.position.trim() !== "" &&
        form.address.trim() !== "";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <form
                onSubmit={handleSubmit}
                noValidate
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
                    disabled={loading}
                    className="
                        absolute
                        right-5
                        top-5
                        rounded-lg
                        p-2
                        transition
                        hover:bg-muted
                        disabled:cursor-not-allowed
                        disabled:opacity-50
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

                    <label
                        className={
                            loading
                                ? "cursor-not-allowed opacity-60"
                                : "cursor-pointer"
                        }
                    >

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
                            disabled={loading}
                            onChange={handleImageChange}
                        />

                    </label>

                </div>


                {/* Inputs */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                    {/* Name */}

                    <div>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            disabled={loading}
                            className={`
                                h-12
                                w-full
                                rounded-xl
                                border
                                bg-background
                                px-4
                                outline-none
                                transition
                                ${
                                    errors.name
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-border focus:border-primary"
                                }
                            `}
                        />

                        {errors.name && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>


                    {/* Email */}

                    <div>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            disabled={loading}
                            className={`
                                h-12
                                w-full
                                rounded-xl
                                border
                                bg-background
                                px-4
                                outline-none
                                transition
                                ${
                                    errors.email
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-border focus:border-primary"
                                }
                            `}
                        />

                        {errors.email && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>


                    {/* Phone */}

                    <div>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            disabled={loading}
                            className={`
                                h-12
                                w-full
                                rounded-xl
                                border
                                bg-background
                                px-4
                                outline-none
                                transition
                                ${
                                    errors.phone
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-border focus:border-primary"
                                }
                            `}
                        />

                        {errors.phone && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.phone}
                            </p>
                        )}
                    </div>


                    {/* Company */}

                    <div>
                        <input
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Company"
                            disabled={loading}
                            className={`
                                h-12
                                w-full
                                rounded-xl
                                border
                                bg-background
                                px-4
                                outline-none
                                transition
                                ${
                                    errors.company
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-border focus:border-primary"
                                }
                            `}
                        />

                        {errors.company && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.company}
                            </p>
                        )}
                    </div>


                    {/* Position */}

                    <div>
                        <input
                            name="position"
                            value={form.position}
                            onChange={handleChange}
                            placeholder="Position"
                            disabled={loading}
                            className={`
                                h-12
                                w-full
                                rounded-xl
                                border
                                bg-background
                                px-4
                                outline-none
                                transition
                                ${
                                    errors.position
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-border focus:border-primary"
                                }
                            `}
                        />

                        {errors.position && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.position}
                            </p>
                        )}
                    </div>


                    {/* Address */}

                    <div>
                        <input
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Address"
                            disabled={loading}
                            className={`
                                h-12
                                w-full
                                rounded-xl
                                border
                                bg-background
                                px-4
                                outline-none
                                transition
                                ${
                                    errors.address
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-border focus:border-primary"
                                }
                            `}
                        />

                        {errors.address && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.address}
                            </p>
                        )}
                    </div>

                </div>


                {/* Buttons */}

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-border
                            px-6
                            transition
                            hover:bg-muted
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            sm:w-auto
                        "
                    >
                        Cancel
                    </button>


                    <button
                        type="submit"
                        disabled={
                            loading ||
                            !isFormValid ||
                            hasErrors
                        }
                        className="
                            flex
                            h-11
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-primary
                            px-6
                            text-white
                            transition
                            hover:opacity-90
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            sm:w-auto
                        "
                    >

                        {loading && (
                            <FiLoader
                                className="animate-spin"
                                size={18}
                            />
                        )}

                        {loading
                            ? "Saving..."
                            : "Save Contact"}

                    </button>

                </div>

            </form>

        </div>
    );
}