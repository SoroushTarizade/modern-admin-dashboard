"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
    FiSearch,
    FiUser,
    FiSettings,
    FiCreditCard,
    FiActivity,
    FiHelpCircle,
    FiMessageCircle,
} from "react-icons/fi";

interface SearchBarProps {
    placeholder?: string;
}

const searchItems = [
    {
        title: "My Profile",
        description: "Manage your profile",
        href: "/profile",
        icon: <FiUser size={18} />,
    },
    {
        title: "Settings",
        description: "Manage dashboard preferences",
        href: "/settings",
        icon: <FiSettings size={18} />,
    },
    {
        title: "Billing",
        description: "Manage billing and payments",
        href: "/billing",
        icon: <FiCreditCard size={18} />,
    },
    {
        title: "Activity Log",
        description: "View account activity",
        href: "/activity-log",
        icon: <FiActivity size={18} />,
    },
    {
        title: "Help Center",
        description: "Get help and support",
        href: "/help-center",
        icon: <FiHelpCircle size={18} />,
    },
    {
        title: "Messages",
        description: "View your messages",
        href: "/messages",
        icon: <FiMessageCircle size={18} />,
    },
];

export default function SearchBar({
    placeholder = "Search anything...",
}: SearchBarProps) {
    const router = useRouter();

    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    /*
     * Filter search results
     */
    const results = useMemo(() => {
        const keyword = search.trim().toLowerCase();

        if (!keyword) {
            return [];
        }

        return searchItems.filter(
            (item) =>
                item.title.toLowerCase().includes(keyword) ||
                item.description.toLowerCase().includes(keyword)
        );
    }, [search]);

    /*
     * Ctrl + K / Cmd + K
     */
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (
                (e.ctrlKey || e.metaKey) &&
                e.key.toLowerCase() === "k"
            ) {
                e.preventDefault();

                inputRef.current?.focus();
                setOpen(true);
            }

            if (e.key === "Escape") {
                setOpen(false);
                inputRef.current?.blur();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, []);

    /*
     * Close when clicking outside
     */
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

    /*
     * Navigate to selected result
     */
    function handleSelect(href: string) {
        setSearch("");
        setOpen(false);

        router.push(href);
    }

    return (
        <div
            ref={ref}
            className="
                group
                relative
                w-full
                h-12
            "
        >
            {/* Search Icon */}
            <FiSearch
                className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-xl
                    text-muted-foreground
                    group-focus-within:text-primary
                    transition-colors
                    z-10
                "
            />

            {/* Input */}
            <input
                ref={inputRef}
                type="search"
                value={search}
                placeholder={placeholder}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setOpen(true);
                }}
                onFocus={() => {
                    if (search.trim()) {
                        setOpen(true);
                    }
                }}
                className="
                    w-full
                    h-full

                    rounded-2xl

                    border
                    border-border

                    bg-input

                    pl-14
                    pr-24

                    text-sm

                    outline-none

                    focus:border-primary

                    focus:ring-4
                    focus:ring-primary/20

                    transition-all
                "
            />

            {/* Keyboard Shortcut */}
            <div
                className="
                    hidden
                    lg:flex

                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2

                    px-2.5
                    py-1

                    rounded-lg

                    border
                    border-border

                    text-xs
                    text-muted-foreground

                    bg-background

                    pointer-events-none
                "
            >
                ⌘ K
            </div>

            {/* Search Results */}
            <div
                className={`
                    absolute
                    top-full
                    left-0
                    right-0

                    mt-3

                    rounded-2xl

                    bg-card

                    border
                    border-border

                    shadow-2xl

                    overflow-hidden

                    z-50

                    origin-top

                    transition-all
                    duration-200
                    ease-out

                    ${
                        open && search.trim()
                            ? "opacity-100 scale-100 translate-y-0 visible pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                    }
                `}
            >
                {/* Results */}
                {results.length > 0 ? (
                    <div className="py-2">
                        <div className="px-4 py-2">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                Search Results
                            </p>
                        </div>

                        {results.map((item) => (
                            <button
                                key={item.href}
                                type="button"
                                onClick={() =>
                                    handleSelect(item.href)
                                }
                                className="
                                    w-full

                                    flex
                                    items-center
                                    gap-4

                                    px-4
                                    py-3

                                    text-left

                                    hover:bg-secondary

                                    transition-all
                                "
                            >
                                <span
                                    className="
                                        w-10
                                        h-10

                                        shrink-0

                                        rounded-xl

                                        bg-primary/10
                                        text-primary

                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    {item.icon}
                                </span>

                                <span className="min-w-0">
                                    <span className="block font-semibold text-sm">
                                        {item.title}
                                    </span>

                                    <span className="block mt-0.5 text-xs text-muted-foreground truncate">
                                        {item.description}
                                    </span>
                                </span>
                            </button>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="p-6 text-center">
                        <div
                            className="
                                w-12
                                h-12

                                mx-auto

                                rounded-2xl

                                bg-secondary

                                flex
                                items-center
                                justify-center
                            "
                        >
                            <FiSearch
                                size={20}
                                className="text-muted-foreground"
                            />
                        </div>

                        <p className="mt-3 font-semibold text-sm">
                            No results found
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Try searching for another page or feature.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}