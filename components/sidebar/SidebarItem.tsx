"use client";

import Link from "next/link";


interface SidebarItemProps {

    title: string;

    href: string;

    active: boolean;

}



export default function SidebarItem({

    title,

    href,

    active,

}: SidebarItemProps) {



    return (

        <li
            className="
                w-full
            "
        >

            <Link

                href={href}

                className={`
                    relative

                    flex
                    items-center

                    w-full

                    h-[48px]

                    rounded-xl

                    px-4


                    transition-all


                    ${active

                        ?

                        "bg-primary text-white"

                        :

                        "text-foreground hover:bg-primary/10"
                    }

                `}

            >


                {
                    active && (

                        <span
                            className="
                                absolute

                                left-0

                                h-[70%]

                                w-1

                                rounded-r-full

                                bg-primary
                            "
                        />

                    )
                }



                <span
                    className="
                        text-sm
                        font-medium
                    "
                >

                    {title}

                </span>


            </Link>


        </li>

    );

}