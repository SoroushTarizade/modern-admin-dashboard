"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { sidebarItems, sidebarPages } from "./sidebar-data";
import SidebarItem from "./SidebarItem";

interface sideBarType {
    active?: boolean
}
export default function Sidebar(
    { active }: sideBarType
) {
    const pathname = usePathname();

    return (
        <nav className="w-[240px] h-[900px] rounded-b-2xl bg-card sticky top-0 ">
            <div className="pt-1 flex flex-col items-center ">
                {/* <p className="text-2xl font-extrabold text-primary ">
                    Dash
                    <span className="text-card-foreground ">Stack</span>
                </p> */}
                <ul className="my-4 space-y-1 flex flex-col items-center text-center">
                    {sidebarItems.map((item) => (
                        <SidebarItem
                            key={item.href}
                            title={item.title}
                            href={item.href}
                            active={pathname === item.href}
                        />
                    ))}
                </ul>
                <span className="w-[100%] h-[2px] rounded-full bg-border content:[''] "></span>
                <div className=" mt-4">
                    <p className=" right-20 font-bold text-muted-foreground">page</p>
                    <div className="my-4">
                        <ul className="space-y-1">
                            {sidebarPages.map((item) => (
                                <SidebarItem
                                    key={item.href}
                                    title={item.title}
                                    href={item.href}
                                    active={pathname === item.href}
                                />
                            ))}
                        </ul>
                    </div>

                </div>
                <span className="w-[100%] h-[2px] rounded-full bg-border content:[''] "></span>
                <ul className="mt-1">
                    <button className="mt-1 w-[192px] h-[50px] relative flex items-center rounded-md p-3 ml-2 transition-all duration-200 hover:bg-destructive hover:text-muted hover:cursor-pointer">log-out</button>
                </ul>
            </div>
        </nav >
    );
}