"use client";

import { FiGlobe, FiChevronRight } from "react-icons/fi";

export default function MobileLanguage() {

    return (

        <button
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

                <span className="text-sm text-muted-foreground">
                    EN
                </span>

                <FiChevronRight />

            </div>

        </button>

    );

}