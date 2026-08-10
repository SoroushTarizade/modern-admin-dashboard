"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";

import {
    sidebarItems,
    sidebarPages,
} from "./sidebar-data";

import SidebarItem from "./SidebarItem";

import MobileProfile from "./MobileProfile";
import MobileLanguage from "./MobileLanguage";
import MobileSettings from "./MobileSettings";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

interface MobileUser {
    username: string;
    email: string;
}

interface MobileSidebarProps {
    open: boolean;
    onClose: () => void;
    user: MobileUser;
}

export default function MobileSidebar({
    open,
    onClose,
    user,
}: MobileSidebarProps) {
    const pathname = usePathname();

    // Lock page scroll when menu is open
    useLockBodyScroll(open);

    // Close with ESC
    useEffect(() => {
        function handleEscape(e: KeyboardEvent) {
            if (e.key === "Escape" && open) {
                onClose();
            }
        }

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [open, onClose]);

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`
                    fixed
                    inset-0
                    z-40
                    bg-black/50
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    lg:hidden

                    ${
                        open
                            ? `
                                opacity-100
                                visible
                            `
                            : `
                                opacity-0
                                invisible
                            `
                    }
                `}
            />

            {/* Drawer */}
            <aside
                className={`
                    fixed
                    top-0
                    left-0
                    z-50

                    h-screen
                    w-[300px]

                    bg-card

                    border-r
                    border-border

                    shadow-2xl

                    transition-transform
                    duration-300
                    ease-in-out

                    lg:hidden

                    ${
                        open
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >
                {/* Header */}
                <div
                    className="
                        h-[78px]
                        px-5

                        flex
                        items-center
                        justify-between

                        border-b
                        border-border
                    "
                >
                    <h1
                        className="
                            text-xl
                            font-extrabold
                        "
                    >
                        <span className="text-primary">
                            Soroush
                        </span>

                        <span className="text-card-foreground">
                            Dash
                        </span>
                    </h1>

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

                            transition-all
                        "
                    >
                        <FiX size={22} />
                    </button>
                </div>

                {/* Scroll Content */}
                <div
                    className="
                        h-[calc(100vh-78px)]
                        overflow-y-auto
                        pb-6
                    "
                >
                    {/* Profile */}
                    <MobileProfile user={user} />

                    {/* Language */}
                    <MobileLanguage />

                    {/* Main Navigation */}
                    <section className="mt-5">
                        <p
                            className="
                                px-6
                                mb-2

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
                                px-3
                            "
                        >
                            {sidebarItems.map((item) => (
                                <SidebarItem
                                    key={item.href}
                                    title={item.title}
                                    href={item.href}
                                    icon={item.icon}
                                    badge={item.badge}
                                    active={
                                        pathname === item.href
                                    }
                                    onClick={onClose}
                                />
                            ))}
                        </ul>
                    </section>

                    {/* Pages */}
                    <section className="mt-6">
                        <p
                            className="
                                px-6
                                mb-2

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
                                px-3
                            "
                        >
                            {sidebarPages.map((item) => (
                                <SidebarItem
                                    key={item.href}
                                    title={item.title}
                                    href={item.href}
                                    icon={item.icon}
                                    badge={item.badge}
                                    active={
                                        pathname === item.href
                                    }
                                    onClick={onClose}
                                />
                            ))}
                        </ul>
                    </section>

                    {/* Bottom */}
                    <div className="mt-6">
                        <MobileSettings />
                    </div>
                </div>
            </aside>
        </>
    );
}