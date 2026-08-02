"use client";

import { usePathname } from "next/navigation";
import { sidebarItems, sidebarPages } from "./sidebar-data";
import SidebarItem from "./SidebarItem";


export default function Sidebar() {

    const pathname = usePathname();


    return (

        <nav
            className="
                hidden
                md:block

                w-[220px]
                lg:w-[240px]

                min-h-screen

                rounded-b-2xl

                bg-card

                fixed
                left-0
                top-0

                

                

                border-r
                border-border
            "
        >

            <div
                className="
                    pt-4

                    flex
                    flex-col
                    items-center
                "
            >


                {/* Main Menu */}

                <ul
                    className="
                        w-full

                        px-3

                        space-y-1
                    "
                >

                    {
                        sidebarItems.map((item) => (
                            <SidebarItem
                                key={item.href}
                                title={item.title}
                                href={item.href}
                                active={
                                    pathname === item.href
                                }
                            />
                        ))
                    }

                </ul>



                <span
                    className="
                        w-[90%]
                        h-[1px]

                        my-4

                        bg-border
                    "
                />



                {/* Pages */}

                <div
                    className="
                        w-full
                        px-3
                    "
                >

                    <p
                        className="
                            px-3

                            text-sm
                            font-bold

                            uppercase

                            text-muted-foreground
                        "
                    >
                        Pages
                    </p>


                    <ul
                        className="
                            mt-3

                            space-y-1
                        "
                    >

                        {
                            sidebarPages.map((item) => (
                                <SidebarItem
                                    key={item.href}
                                    title={item.title}
                                    href={item.href}
                                    active={
                                        pathname === item.href
                                    }
                                />
                            ))
                        }


                    </ul>


                </div>




                <span
                    className="
                        w-[90%]
                        h-[1px]

                        my-4

                        bg-border
                    "
                />



                {/* Logout */}

                <button
                    className="
                        w-[85%]
                        h-[50px]

                        rounded-xl

                        flex
                        items-center

                        px-4


                        text-foreground

                        transition-all

                        hover:bg-destructive
                        hover:text-white
                    "
                >

                    Logout

                </button>


            </div>


        </nav>

    );
}