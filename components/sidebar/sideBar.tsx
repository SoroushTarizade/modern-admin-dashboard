"use client";

import { usePathname, useRouter } from "next/navigation";

import {
    sidebarItems,
    sidebarPages
} from "./sidebar-data";

import SidebarItem from "./SidebarItem";

import {
    FiLogOut
} from "react-icons/fi";

export default function Sidebar() {

    const pathname = usePathname();
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

        <aside

            className="
                hidden

                md:flex

                fixed

                left-0

                top-0

                z-30

                w-[220px]

                lg:w-[240px]

                h-screen

                flex-col

                bg-card

                border-r

                border-border
            "

        >

            {/* Logo */}

            <div

                className="
                    h-[68px]

                    flex

                    items-center

                    justify-center

                    border-b

                    border-border
                "

            >

                <h1

                    className="
                        text-2xl

                        font-extrabold
                    "

                >

                    <span className="text-primary">
                        Soroush
                    </span>

                    <span>
                        Dash
                    </span>

                </h1>

            </div>



            {/* Menu */}

            <div

                className="
                    flex-1

                    overflow-y-auto

                    py-5
                "

            >

                {/* Main */}

                <div className="px-3">

                    <p

                        className="
                            px-3

                            mb-3

                            text-xs

                            font-bold

                            uppercase

                            tracking-wider

                            text-muted-foreground
                        "

                    >

                        Main

                    </p>



                    <ul

                        className="
                            space-y-1
                        "

                    >

                        {
                            sidebarItems.map(item => (

                                <SidebarItem

                                    key={item.href}

                                    {...item}

                                    active={
                                        pathname === item.href
                                    }

                                />

                            ))
                        }

                    </ul>

                </div>



                {/* Divider */}

                <div

                    className="
                        mx-auto

                        my-6

                        w-[85%]

                        h-px

                        bg-border
                    "

                />



                {/* Pages */}

                <div className="px-3">

                    <p

                        className="
                            px-3

                            mb-3

                            text-xs

                            font-bold

                            uppercase

                            tracking-wider

                            text-muted-foreground
                        "

                    >

                        Pages

                    </p>



                    <ul

                        className="
                            space-y-1
                        "

                    >

                        {
                            sidebarPages.map(item => (

                                <SidebarItem

                                    key={item.href}

                                    {...item}

                                    active={
                                        pathname === item.href
                                    }

                                />

                            ))
                        }

                    </ul>

                </div>

            </div>



            {/* Logout Fixed */}

            <div

                className="
                    p-4

                    border-t

                    border-border
                "

            >

                <button

                    onClick={handleLogout}

                    className="
                        w-full

                        h-12

                        rounded-xl

                        flex

                        items-center

                        gap-3

                        px-4

                        text-sm

                        font-semibold

                        text-red-500

                        hover:bg-red-500/10

                        transition-all
                    "

                >

                    <FiLogOut size={18} />

                    Logout

                </button>

            </div>

        </aside>

    );
}