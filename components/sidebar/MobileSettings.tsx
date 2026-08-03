"use client";

import {
    FiSettings,
    FiHelpCircle,
    FiLogOut,
} from "react-icons/fi";

export default function MobileSettings() {

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