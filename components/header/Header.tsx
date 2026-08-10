"use client";

import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";

interface HeaderUser {
    username: string;
    email: string;
}

interface HeaderProps {
    user: HeaderUser;
    onMenuClick?: () => void;
}

export default function Header({
    user,
    onMenuClick,
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

                bg-card/70

                backdrop-blur-2xl

                supports-[backdrop-filter]:bg-card/60

                border-b

                border-border

                transition-all

                duration-300
            "
        >
            <div
                className="
                    flex

                    flex-col

                    sm:flex-row

                    sm:items-center

                    px-4

                    sm:px-6

                    lg:px-8

                    py-3

                    gap-3

                    sm:gap-4
                "
            >
                {/* Logo + Mobile Actions */}

                <div
                    className="
                        flex

                        items-center

                        justify-between

                        gap-4

                        w-full

                        sm:w-auto

                        shrink-0
                    "
                >
                    <h1
                        className="
                            block

                            min-[720px]:hidden

                            text-lg

                            font-extrabold

                            tracking-tight

                            whitespace-nowrap
                        "
                    >
                        <span className="text-primary">
                            Soroush
                        </span>

                        <span className="text-card-foreground">
                            Dash
                        </span>
                    </h1>

                    {/* Mobile Actions */}

                    <div
                        className="
                            sm:hidden
                        "
                    >
                        <HeaderActions
                            user={user}
                            onMenuClick={onMenuClick}
                        />
                    </div>
                </div>

                {/* Search */}

                <div
                    className="
                        w-full

                        sm:flex-1

                        sm:max-w-xl

                        lg:max-w-2xl

                        xl:max-w-3xl

                        mx-auto
                    "
                >
                    <SearchBar />
                </div>

                {/* Desktop Actions */}

                <div
                    className="
                        hidden

                        sm:flex

                        shrink-0
                    "
                >
                    <HeaderActions
                        user={user}
                        onMenuClick={onMenuClick}
                    />
                </div>
            </div>
        </header>
    );
}