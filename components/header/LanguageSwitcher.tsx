"use client";

import { useEffect, useRef, useState } from "react";

import { FiChevronDown } from "react-icons/fi";

import { languages } from "@/data/languages";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const {
        language,
        setLanguage,
        languages,
    } = useLanguage();

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                ref.current &&
                !ref.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClick
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClick
            );
    }, []);

    return (
        <div
            ref={ref}
            className="relative"
        >
            <button
                onClick={() => setOpen(!open)}
                className="
                    flex
                    items-center
                    gap-2

                    h-11
                    px-4

                    rounded-xl

                    border
                    border-border

                    bg-card

                    hover:bg-secondary

                    transition-all
                "
            >
                <span className="text-lg">
                    {language.flag}
                </span>

                <span className="text-sm font-semibold">
                    {language.code}
                </span>

                <FiChevronDown
                    className={`
                        transition-transform
                        duration-300
                        ${open
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
                        right-0
                        mt-3

                        w-52

                        rounded-2xl

                        bg-card

                        border
                        border-border

                        shadow-xl

                        overflow-hidden

                        z-50
                    "
                >
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => {
                                setLanguage(
                                    language
                                );
                                setOpen(false);
                            }}
                            className="
                                flex
                                items-center
                                gap-3

                                w-full

                                px-4
                                py-3

                                hover:bg-secondary

                                transition-all
                            "
                        >
                            <span className="text-xl">
                                {language.flag}
                            </span>

                            <div className="text-left">
                                <p className="font-medium">
                                    {language.name}
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    {language.code}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}