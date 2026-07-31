"use client";

import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";

interface HeaderProps {
    title?: string;
    isAuthenticated?: boolean;
}

export default function Header({
    isAuthenticated = true,
}: HeaderProps) {
    return (
        <header
            className="
                sticky
                top-0
                z-40
                w-[1200px]
                h-[78px]
                bg-card/80
                backdrop-blur-xl
                border-b
                border-border
                px-8
                flex
                items-center
                justify-between
            "
        >
            {/* Left */}
            <p className="text-2xl font-extrabold text-primary ">
                Soroush
                <span className="text-card-foreground ">Dash</span>
            </p>
            <div className="flex items-center gap-6">
                <SearchBar />
            </div>

            {/* Right */}

            <HeaderActions
                isAuthenticated={isAuthenticated}
            />
        </header>
    );
}