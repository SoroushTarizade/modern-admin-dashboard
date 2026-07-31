"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    name?: string;
    required?: boolean;
    autoComplete?: string;
}

export default function PasswordInput({
    label,
    placeholder,
    value,
    onChange,
    id,
    name,
    required = false,
    autoComplete,
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-3 w-full">

            <label
                htmlFor={id}
                className="text-sm font-semibold text-card-foreground"
            >
                {label}
            </label>

            <div className="relative">

                <input
                    id={id}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    required={required}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    className="
                        h-14
                        w-full
                        rounded-2xl
                        border
                        border-border
                        bg-input
                        px-5
                        pr-14
                        text-card-foreground
                        placeholder:text-muted-foreground
                        outline-none
                        transition-all
                        duration-300

                        focus:border-primary
                        focus:ring-4
                        focus:ring-primary/20

                        hover:border-primary/40
                    "
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2

                        text-muted-foreground
                        hover:text-primary

                        transition-colors
                        duration-200
                        cursor-pointer
                    "
                >
                    {showPassword ? (
                        <FiEyeOff size={20} />
                    ) : (
                        <FiEye size={20} />
                    )}
                </button>

            </div>

        </div>
    );
}