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

                w-full
                h-[78px]

                bg-card/80
                backdrop-blur-xl

                border-b
                border-border

                px-4
                sm:px-6
                lg:px-8

                flex
                items-center
                justify-between

                gap-4
            "
        >

            {/* Logo */}

            <p
                className="
                    text-xl
                    sm:text-2xl
                    font-extrabold
                    text-primary

                    whitespace-nowrap
                "
            >
                Soroush
                <span className="text-card-foreground">
                    Dash
                </span>
            </p>


            {/* Search */}

            <div
                className="
                    hidden
                    md:flex
                    flex-1
                    justify-center
                "
            >
                <SearchBar />
            </div>


            {/* Actions */}

            <HeaderActions
                isAuthenticated={isAuthenticated}
            />

        </header>
    );
}