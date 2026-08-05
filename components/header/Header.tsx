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
                fixed

                top-0
                left-0

                md:left-[220px]
                lg:left-[240px]

                right-0

                z-40

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

                gap-4
            "

        >



            {/* Logo */}

            <div
                className="
                    shrink-0
                "
            >

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

            </div>






            {/* Search */}

            <div

                className="
                    hidden

                    md:flex

                    flex-1

                    min-w-0

                    max-w-[700px]

                    mx-auto
                "

            >

                <SearchBar />

            </div>







            {/* Actions */}

            <div

                className="
                    ml-auto

                    shrink-0
                "

            >

                <HeaderActions

                    isAuthenticated={isAuthenticated}

                />

            </div>




        </header>

    );

}