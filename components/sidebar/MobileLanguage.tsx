"use client";

import { useState } from "react";
import { FiGlobe, FiChevronDown } from "react-icons/fi";

import { useLanguage } from "@/context/LanguageContext";

export default function MobileLanguage() {
    const { language, setLanguage, languages } = useLanguage();

    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-border">

            <button
                onClick={() => setOpen((prev) => !prev)}
                className="
                    w-full
                    h-12
                    px-4

                    flex
                    items-center
                    justify-between

                    hover:bg-secondary
                    transition-all
                "
            >

                <div className="flex items-center gap-3">

                    <FiGlobe />

                    <span>Language</span>

                </div>

                <div className="flex items-center gap-2">

                    <span className="text-lg">
                        {language.flag}
                    </span>

                    <span className="text-sm font-medium">
                        {language.code}
                    </span>

                    <FiChevronDown
                        className={`
                            transition-transform
                            duration-300
                            ${open ? "rotate-180" : ""}
                        `}
                    />

                </div>

            </button>

            <div
                className={`
                    overflow-hidden
                    transition-all
                    duration-300

                    ${open
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}
            >

                {languages.map((item) => (

                    <button
                        key={item.code}
                        onClick={() => {
                            setLanguage(item);
                            setOpen(false);
                        }}
                        className={`
                            w-full

                            flex
                            items-center
                            gap-3

                            px-6
                            py-3

                            transition-all

                            hover:bg-secondary

                            ${language.code === item.code
                                ? "bg-primary/10 text-primary"
                                : ""
                            }
                        `}
                    >

                        <span className="text-xl">
                            {item.flag}
                        </span>

                        <div className="text-left">

                            <p className="font-medium">
                                {item.name}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                {item.code}
                            </p>

                        </div>

                    </button>

                ))}

            </div>

        </div>
    );
}