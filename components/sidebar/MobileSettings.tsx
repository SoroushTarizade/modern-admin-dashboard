"use client";

import { useRouter } from "next/navigation";

import {
    FiSettings,
    FiHelpCircle,
    FiLogOut,
} from "react-icons/fi";

export default function MobileSettings() {

    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
            });

            const data = await response.json();

            if (!response.ok) {
                console.error(data.message);
                return;
            }

            router.push("/login");
            router.refresh();

        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (

        <div
            className="
                border-t
                border-border

                py-2
            "
        >

            <button
                className="
                    w-full

                    h-12

                    px-4

                    flex
                    items-center

                    gap-3

                    hover:bg-secondary

                    transition-all
                "
            >

                <FiSettings />

                Settings

            </button>



            <button
                className="
                    w-full

                    h-12

                    px-4

                    flex
                    items-center

                    gap-3

                    hover:bg-secondary

                    transition-all
                "
            >

                <FiHelpCircle />

                Help Center

            </button>



            <button
                onClick={handleLogout}
                className="
                    w-full

                    h-12

                    px-4

                    flex
                    items-center

                    gap-3

                    text-red-500

                    hover:bg-red-500/10

                    transition-all
                "
            >

                <FiLogOut />

                Logout

            </button>

        </div>

    );
}
