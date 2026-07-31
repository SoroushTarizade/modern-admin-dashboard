"use client";

import Link from "next/link";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

export default function GuestMenu() {
    return (
        <div className="flex items-center gap-3">

            <Link
                href="/login"
                className="
                    flex
                    items-center
                    gap-2

                    px-5
                    h-11

                    rounded-xl

                    border
                    border-border

                    text-sm
                    font-semibold

                    hover:bg-secondary
                    transition-all
                "
            >
                <FiLogIn size={18} />
                Login
            </Link>

            <Link
                href="/register"
                className="
                    flex
                    items-center
                    gap-2

                    px-5
                    h-11

                    rounded-xl

                    bg-primary
                    text-white

                    text-sm
                    font-semibold

                    hover:scale-[1.03]
                    hover:shadow-lg
                    active:scale-95

                    transition-all
                "
            >
                <FiUserPlus size={18} />
                Register
            </Link>

        </div>
    );
}