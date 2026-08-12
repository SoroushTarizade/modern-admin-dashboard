"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

interface Props {
    value: string[];
    onChange: (value: string[]) => void;
}

const statuses = [
    "Completed",
    "Processing",
    "Rejected",
    "On Hold",
];

export default function OrderStatusFilter({
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

    function toggleStatus(status: string) {
        if (value.includes(status)) {
            onChange(
                value.filter((item) => item !== status)
            );
        } else {
            onChange([...value, status]);
        }
    }

    function handleSelectAll() {
        if (value.length === statuses.length) {
            onChange([]);
        } else {
            onChange([...statuses]);
        }
    }

    const label =
        value.length === 0
            ? "All Status"
            : value.length === 1
                ? value[0]
                : `${value.length} selected`;

    const allSelected =
        value.length === statuses.length;

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
                    min-w-40

                    flex
                    items-center
                    justify-between
                    gap-3

                    bg-card

                    rounded-xl

                    px-4
                    py-2.5

                    outline-none

                    cursor-pointer

                    transition-all

                    hover:bg-secondary
                "
            >
                <span className="text-sm font-medium truncate">
                    {label}
                </span>

                <FiChevronDown
                    size={17}
                    className={`
                        shrink-0
                        transition-transform
                        duration-200

                        ${open ? "rotate-180" : ""}
                    `}
                />
            </button>

            <div
                className={`
                    absolute
                    left-0
                    top-full
                    mt-2

                    z-50

                    w-full
                    sm:w-56

                    rounded-2xl

                    bg-card

                    border
                    border-border

                    shadow-xl

                    overflow-hidden

                    origin-top

                    transition-all
                    duration-200

                    ${
                        open
                            ? "opacity-100 scale-100 translate-y-0 visible"
                            : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                    }
                `}
            >
                <button
                    type="button"
                    onClick={handleSelectAll}
                    className="
                        w-full

                        flex
                        items-center
                        gap-3

                        px-4
                        py-3

                        text-left

                        border-b
                        border-border

                        hover:bg-secondary

                        transition-all
                    "
                >
                    <span
                        className={`
                            w-5
                            h-5

                            rounded-md

                            border

                            flex
                            items-center
                            justify-center

                            ${
                                value.length === 0
                                    ? "border-primary bg-primary text-white"
                                    : allSelected
                                        ? "border-primary bg-primary text-white"
                                        : "border-border"
                            }
                        `}
                    >
                        {value.length === 0 && (
                            <FiCheck size={14} />
                        )}

                        {allSelected && (
                            <FiCheck size={14} />
                        )}
                    </span>

                    <span className="text-sm font-medium">
                        All Status
                    </span>
                </button>

                <div className="py-1">
                    {statuses.map((status) => {
                        const selected =
                            value.includes(status);

                        return (
                            <button
                                key={status}
                                type="button"
                                onClick={() =>
                                    toggleStatus(status)
                                }
                                className="
                                    w-full

                                    flex
                                    items-center
                                    gap-3

                                    px-4
                                    py-3

                                    text-left

                                    hover:bg-secondary

                                    transition-all
                                "
                            >
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
                                                ? "border-primary bg-primary text-white"
                                                : "border-border"
                                        }
                                    `}
                                >
                                    {selected && (
                                        <FiCheck size={14} />
                                    )}
                                </span>

                                <span className="text-sm">
                                    {status}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}