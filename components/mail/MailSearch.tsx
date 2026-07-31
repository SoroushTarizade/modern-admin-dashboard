"use client";

import { FiSearch, FiX } from "react-icons/fi";

interface MailSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function MailSearch({
    value,
    onChange,
}: MailSearchProps) {
    return (
        <div className="relative w-full">

            <FiSearch
                className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-muted-foreground
                    text-lg
                "
            />

            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search emails..."
                className="
                    h-12
                    w-full
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    pl-14
                    pr-12
                    outline-none
                    transition-all
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                "
            />

            {value && (
                <button
                    onClick={() => onChange("")}
                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        rounded-full
                        p-1
                        hover:bg-secondary
                    "
                >
                    <FiX />
                </button>
            )}

        </div>
    );
}