"use client";


import Link from "next/link";

import { IconType } from "react-icons";


interface SidebarItemProps {

    title: string;

    href: string;

    icon: IconType;

    active: boolean;

    badge?: string | number;

    onClick?: () => void;

}



export default function SidebarItem({

    title,

    href,

    icon: Icon,

    active,

    badge,

    onClick,

}: SidebarItemProps) {


    return (

        <li className="w-full">


            <Link

                href={href}

                onClick={onClick}

                className={`

                    relative

                    flex

                    items-center

                    justify-between


                    h-12


                    px-4


                    rounded-xl


                    transition-all

                    duration-200



                    ${active

                        ?

                        `
                        bg-primary/10
                        text-primary
                        `

                        :

                        `
                        text-foreground
                        hover:bg-secondary
                        hover:translate-x-1
                        `

                    }


                `}

            >


                {
                    active && (

                        <span

                            className="
                                absolute

                                left-0

                                h-7

                                w-1

                                rounded-r-full

                                bg-primary
                            "

                        />

                    )
                }



                <div

                    className="
                        flex

                        items-center

                        gap-3
                    "

                >

                    <Icon size={20} />


                    <span

                        className="
                            text-sm

                            font-medium
                        "

                    >

                        {title}

                    </span>


                </div>




                {
                    badge && (

                        <span

                            className="
                                min-w-6

                                h-6

                                px-2


                                rounded-full


                                flex

                                items-center

                                justify-center


                                bg-primary/10

                                text-primary


                                text-xs

                                font-bold
                            "

                        >

                            {badge}

                        </span>

                    )
                }



            </Link>


        </li>

    );

}