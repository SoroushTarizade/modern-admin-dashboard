"use client";

import { useEffect, useRef, useState } from "react";
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

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                ref.current &&
                !ref.current.contains(
                    e.target as Node
                )
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
        },
        {
            title: "Settings",
            icon: <FiSettings size={18} />,
        },
        {
            title: "Billing",
            icon: <FiCreditCard size={18} />,
        },
        {
            title: "Activity Log",
            icon: <FiActivity size={18} />,
        },
        {
            title: "Help Center",
            icon: <FiHelpCircle size={18} />,
        },
    ];

    return (
        <div
            ref={ref}
            className="relative"
        >
            <button
                onClick={() => setOpen(!open)}
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
<div
    className={`
        absolute
        right-0
        mt-3
        w-72
        rounded-2xl
        bg-card
        border
        border-border
        shadow-2xl
        overflow-hidden
        z-50
        origin-top-right
        transition-all
        duration-200
        ease-out

        ${
            open
                ? "opacity-100 scale-100 translate-y-0 visible pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
        }
    `}
>
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

                    <div className="py-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.title}
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
                            </button>
                        ))}
                    </div>

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
        </div>
    );
}