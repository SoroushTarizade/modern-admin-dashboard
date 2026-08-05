"use client";

import React from "react";
import { FiLoader } from "react-icons/fi";

interface AuthButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    fullWidth?: boolean;
}

export default function AuthButton({
    children,
    type = "submit",
    loading = false,
    disabled = false,
    onClick,
    fullWidth = true,
}: AuthButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
                ${fullWidth ? "w-full" : ""}

                h-14

                rounded-2xl

                bg-primary

                text-white

                font-bold

                text-base
                sm:text-lg

                flex
                items-center
                justify-center

                gap-3

                transition-all
                duration-300

                hover:scale-[1.02]

                hover:shadow-[0_15px_35px_rgba(72,128,255,.35)]

                active:scale-[0.98]

                disabled:opacity-60

                disabled:cursor-not-allowed

                disabled:hover:scale-100

                disabled:hover:shadow-none
            `}
        >

            {loading && (
                <FiLoader
                    className="animate-spin"
                    size={20}
                />
            )}


            {loading
                ? "Please wait..."
                : children}

        </button>
    );
}