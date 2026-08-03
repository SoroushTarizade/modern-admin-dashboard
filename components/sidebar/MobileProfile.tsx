"use client";

import Link from "next/link";
import { FiLogIn, FiUserPlus, FiUser } from "react-icons/fi";

interface MobileProfileProps {
    isAuthenticated?: boolean;
}

export default function MobileProfile({
    isAuthenticated = true,
}: MobileProfileProps) {

    if (!isAuthenticated) {
        return (
            <div className="border-b border-border p-4 space-y-3">

                <Link
                    href="/login"
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2

                        h-11

                        rounded-xl

                        border
                        border-border

                        hover:bg-secondary

                        transition-all
                    "
                >
                    <FiLogIn />
                    Login
                </Link>

                <Link
                    href="/register"
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2

                        h-11

                        rounded-xl

                        bg-primary
                        text-white

                        hover:opacity-90

                        transition-all
                    "
                >
                    <FiUserPlus />
                    Register
                </Link>

            </div>
        );
    }

    return (
        <div className="border-b border-border p-4">

            <button
                className="
                    w-full

                    flex
                    items-center

                    gap-3

                    rounded-xl

                    hover:bg-secondary

                    p-3

                    transition-all
                "
            >

                <div
                    className="
                        w-12
                        h-12

                        rounded-full

                        bg-primary

                        text-white

                        flex
                        items-center
                        justify-center
                    "
                >
                    <FiUser size={22} />
                </div>

                <div className="text-left">

                    <p className="font-bold">
                        Soroush Tarizadeh
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Administrator
                    </p>

                </div>

            </button>

        </div>
    );
}