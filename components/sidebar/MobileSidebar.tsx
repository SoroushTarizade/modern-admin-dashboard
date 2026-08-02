"use client";

import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";

import { sidebarItems, sidebarPages } from "./sidebar-data";
import SidebarItem from "./SidebarItem";


interface MobileSidebarProps {

    open: boolean;

    onClose: () => void;

}



export default function MobileSidebar({

    open,

    onClose,

}: MobileSidebarProps) {


    const pathname = usePathname();



    return (

        <>


            {/* Overlay */}

            {
                open && (

                    <div
                        onClick={onClose}

                        className="
                            fixed
                            inset-0

                            z-40

                            bg-black/40

                            md:hidden
                        "
                    />

                )
            }




            {/* Drawer */}

            <aside

                className={`
                    fixed

                    top-0
                    left-0

                    z-50

                    h-screen

                    w-[260px]

                    bg-card

                    border-r
                    border-border

                    shadow-xl

                    transform

                    transition-transform

                    duration-300

                    md:hidden


                    ${open
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

                `}

            >



                {/* Header */}

                <div

                    className="
                        h-[78px]

                        flex

                        items-center

                        justify-between

                        px-5

                        border-b

                        border-border
                    "

                >

                    <p
                        className="
                            text-xl
                            font-extrabold
                            text-primary
                        "
                    >

                        Soroush
                        <span
                            className="
                                text-card-foreground
                            "
                        >
                            Dash
                        </span>

                    </p>



                    <button

                        onClick={onClose}

                        className="
                            w-10
                            h-10

                            rounded-xl

                            border
                            border-border

                            flex
                            items-center
                            justify-center

                            hover:bg-secondary

                            transition
                        "

                    >

                        <FiX size={22} />


                    </button>


                </div>





                {/* Menu */}

                <div

                    className="
                        py-4

                        overflow-y-auto

                        h-[calc(100vh-78px)]
                    "

                >



                    <ul

                        className="
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




                    <div
                        className="
                            my-5

                            mx-4

                            h-px

                            bg-border
                        "
                    />





                    <div className="px-3">


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





                    <div

                        className="
                            my-5

                            mx-4

                            h-px

                            bg-border
                        "

                    />





                    <button

                        className="
                            mx-4

                            w-[calc(100%-32px)]

                            h-[50px]

                            rounded-xl

                            text-left

                            px-4

                            hover:bg-destructive

                            hover:text-white

                            transition
                        "

                    >

                        Logout


                    </button>



                </div>


            </aside>



        </>

    );

}