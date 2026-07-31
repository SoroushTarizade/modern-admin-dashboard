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
        <li className="flex items-center">
            <Link
                href={href}
                className={`w-[192px] h-[50px] relative flex items-center rounded-md p-1 ml-3 transition-all duration-200
                    ${active
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-primary hover:text-muted"}
                        `}>
                {active && (
                    <span
                        className="absolute left-[-30] top-0 h-full w-1 rounded-r-full bg-primary" />
                )}
                <span className="ml-3">{title}</span>
            </Link>
        </li>
    );
}