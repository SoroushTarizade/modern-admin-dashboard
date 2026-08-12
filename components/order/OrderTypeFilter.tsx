"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

interface Props {
    value: string[];
    onChange: (value: string[]) => void;
}

const types = [
    "Book",
    "Electronics",
    "Furniture",
    "Fashion",
];

export default function OrderTypeFilter({
    value,
    onChange,
}: Props) {
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                ref.current &&
                !ref.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    function toggleType(type: string) {
        if (value.includes(type)) {
            onChange(
                value.filter((item) => item !== type)
            );
        } else {
            onChange([
                ...value,
                type,
            ]);
        }
    }

    const label =
        value.length === 0
            ? "All Types"
            : value.length === 1
                ? value[0]
                : `${value.length} Types Selected`;

    return (
        <div
            ref={ref}
            className="relative w-full sm:w-auto"
        >
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
                    w-full
                    sm:w-auto
                    min-w-[160px]

                    flex
                    items-center
                    justify-between
                    gap-3

                    bg-card

                    rounded-xl

                    px-4
                    py-2

                    outline-none

                    cursor-pointer

                    hover:bg-secondary

                    transition-all
                "
            >
                <span className="truncate">
                    {label}
                </span>

                <FiChevronDown
                    className={`
                        transition-transform
                        duration-200

                        ${
                            open
                                ? "rotate-180"
                                : ""
                        }
                    `}
                />
            </button>

            {open && (
                <div
                    className="
                        absolute
                        left-0
                        top-full

                        mt-2

                        z-50

                        w-full
                        sm:w-52

                        rounded-xl

                        border
                        border-border

                        bg-card

                        shadow-xl

                        p-2
                    "
                >
                    {types.map((type) => {
                        const selected =
                            value.includes(type);

                        return (
                            <button
                                key={type}
                                type="button"
                                onClick={() =>
                                    toggleType(type)
                                }
                                className="
                                    w-full

                                    flex
                                    items-center
                                    justify-between

                                    px-3
                                    py-2.5

                                    rounded-lg

                                    text-left

                                    hover:bg-secondary

                                    transition-all
                                "
                            >
                                <span>
                                    {type}
                                </span>

                                <span
                                    className={`
                                        w-5
                                        h-5

                                        rounded-md

                                        border

                                        flex
                                        items-center
                                        justify-center

                                        transition-all

                                        ${
                                            selected
                                                ? "bg-primary border-primary text-primary-foreground"
                                                : "border-border"
                                        }
                                    `}
                                >
                                    {selected && (
                                        <FiCheck
                                            size={14}
                                        />
                                    )}
                                </span>
                            </button>
                        );
                    })}

                    {value.length > 0 && (
                        <button
                            type="button"
                            onClick={() => onChange([])}
                            className="
                                w-full

                                mt-1

                                px-3
                                py-2

                                rounded-lg

                                text-sm

                                text-destructive

                                hover:bg-destructive/10

                                transition-all
                            "
                        >
                            Clear selection
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}