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

            if (
                (e.ctrlKey || e.metaKey) &&
                e.key.toLowerCase() === "k"
            ) {

                e.preventDefault();

                inputRef.current?.focus();

            }

        };


        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );


    }, []);



    return (

        <div
            className="
                group
                relative
                w-full
                max-w-[280px]
                h-[48px]
            "
        >

            <FiSearch
                className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-xl
                    text-muted-foreground
                    group-focus-within:text-primary
                "
            />


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
                    pr-20
                    text-sm
                    text-foreground
                    outline-none
                    hover:border-primary/40
                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/20
                "
            />



            <div
                className="
                    hidden
                    lg:block
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
                    text-muted-foreground
                "
            >
                Ctrl K
            </div>


        </div>

    );
}