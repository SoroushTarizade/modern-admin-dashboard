"use client";

import React from "react";

interface AuthInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    required?: boolean;
    autoComplete?: string;
}

export default function AuthInput({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    id,
    required = false,
    autoComplete,
}: AuthInputProps) {
    return (
        <div className="flex flex-col gap-3 w-full">

            <label
                htmlFor={id}
                className="text-sm font-semibold text-card-foreground"
            >
                {label}
            </label>

            <input
                id={id}
                name={name}
                type={type}
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

        </div>
    );
}