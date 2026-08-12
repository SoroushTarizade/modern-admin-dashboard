"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/components/auth/LogoutButton";

import {
    FiChevronDown,
    FiUser,
    FiSettings,
    FiActivity,
    FiCreditCard,
    FiHelpCircle,
    FiLogOut,
} from "react-icons/fi";

import UserAvatar from "./UserAvatar";

interface UserMenuProps {
    user: {
        username: string;
        email: string;
    };
}

export default function UserMenu({
    user,
}: UserMenuProps) {
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const router = useRouter();

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                ref.current &&
                !ref.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

const menuItems = [
    {
        title: "My Profile",
        icon: <FiUser size={18} />,
        href: "/profile",
    },
    {
        title: "Settings",
        icon: <FiSettings size={18} />,
        href: "/settings",
    },
    {
        title: "Billing",
        icon: <FiCreditCard size={18} />,
        href: "/billing",
    },
    {
        title: "Activity Log",
        icon: <FiActivity size={18} />,
        href: "/activity-log",
    },
    {
        title: "Help Center",
        icon: <FiHelpCircle size={18} />,
        href: "/help-center",
    },
];
    function handleNavigation(href: string | null) {
        if (!href) return;

        setOpen(false);
        router.push(href);
    }

    return (
        <div
            ref={ref}
            className="relative"
        >
            {/* User Button */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-haspopup="menu"
                className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    px-3
                    py-2
                    hover:bg-secondary
                    transition-all
                "
            >
                <UserAvatar
                    name={user.username}
                    image=""
                    role="User"
                    status="online"
                />

                <FiChevronDown
                    className={`
                        transition-transform
                        duration-300
                        ${open ? "rotate-180" : ""}
                    `}
                />
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    className="
                        absolute
                        right-0
                        mt-4
                        w-72
                        rounded-2xl
                        bg-card
                        border
                        border-border
                        shadow-2xl
                        overflow-hidden
                        z-50
                        animate-in
                        fade-in
                        slide-in-from-top-2
                        duration-200
                    "
                    role="menu"
                >
                    {/* User Info */}
                    <div
                        className="
                            p-5
                            border-b
                            border-border
                        "
                    >
                        <UserAvatar
                            name={user.username}
                            image=""
                            role={user.email}
                            status="online"
                        />
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
{menuItems.map((item) => (
    <Link
        key={item.title}
        href={item.href}
        onClick={() => setOpen(false)}
        className="
            flex
            items-center
            gap-4
            w-full
            px-5
            py-3
            hover:bg-secondary
            transition-all
        "
    >
        <span className="text-primary">
            {item.icon}
        </span>

        <span className="font-medium">
            {item.title}
        </span>
    </Link>
))}
                    </div>

                    {/* Logout */}
                    <div
                        className="
                            border-t
                            border-border
                            p-2
                        "
                    >
                        <LogoutButton
                            className="
                                flex
                                items-center
                                gap-4
                                w-full
                                rounded-xl
                                px-4
                                py-3
                                text-red-500
                                hover:bg-red-500/10
                                transition-all
                            "
                        >
                            <FiLogOut size={18} />

                            Logout
                        </LogoutButton>
                    </div>
                </div>
            )}
        </div>
    );
}