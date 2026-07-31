"use client";

import { FiSearch } from "react-icons/fi";
import { useEffect, useRef } from "react";

interface SearchBarProps {
    placeholder?: string;
}

export default function SearchBar({
    placeholder = "Search anything...",
}: SearchBarProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {

            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, []);

    return (
        <div
            className="
                group
                relative
                w-[430px]
                h-[48px]
                transition-all
                duration-300
            "
        >

            {/* Search Icon */}

            <FiSearch
                className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-muted-foreground
                    text-xl
                    group-focus-within:text-primary
                    transition-colors
                "
            />

            {/* Input */}

            <input
                ref={inputRef}
                type="search"
                placeholder={placeholder}
                className="
                    h-full
                    w-full
                    rounded-2xl

                    border
                    border-border

                    bg-input

                    pl-14
                    pr-24

                    text-sm
                    text-foreground

                    placeholder:text-muted-foreground

                    outline-none

                    transition-all
                    duration-300

                    hover:border-primary/40

                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/20
                "
            />

            {/* Ctrl + K */}

            <div
                className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2

                    rounded-lg
                    border
                    border-border

                    bg-background

                    px-2.5
                    py-1

                    text-xs
                    font-medium

                    text-muted-foreground

                    select-none
                "
            >
                Ctrl K
            </div>

        </div>
    );
}