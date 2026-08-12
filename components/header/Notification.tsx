"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiBell,
    FiChevronRight,
} from "react-icons/fi";

const notifications = [
    {
        id: 1,
        title: "New Order",
        description: "#1024 has been placed.",
        time: "2 min ago",
        unread: true,
        icon: "🛒",
    },
    {
        id: 2,
        title: "Payment Received",
        description: "$420 has been received.",
        time: "10 min ago",
        unread: true,
        icon: "💳",
    },
    {
        id: 3,
        title: "New User",
        description: "Emma joined your dashboard.",
        time: "1 hour ago",
        unread: false,
        icon: "👤",
    },
    {
        id: 4,
        title: "New Message",
        description: "You received a new message.",
        time: "2 hours ago",
        unread: false,
        icon: "💬",
    },
];

export default function Notification() {

    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClick(e: MouseEvent) {

            if (
                ref.current &&
                !ref.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }

        }

        document.addEventListener("mousedown", handleClick);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClick
            );

    }, []);

    const unread = notifications.filter(
        item => item.unread
    ).length;

    return (

        <div
            ref={ref}
            className="relative"
        >

            <button
                onClick={() => setOpen(!open)}
                className="
                    relative

                    w-11
                    h-11

                    rounded-xl

                    border
                    border-border

                    bg-card

                    flex
                    items-center
                    justify-center

                    hover:bg-secondary

                    transition-all
                "
            >

                <FiBell
                    className="text-xl"
                />

                {unread > 0 && (

                    <span
                        className="
                            absolute
                            -top-1
                            -right-1

                            w-5
                            h-5

                            rounded-full

                            bg-destructive

                            text-white

                            text-[11px]

                            flex
                            items-center
                            justify-center
                        "
                    >
                        {unread}
                    </span>

                )}

            </button>

<div
    className={`
        absolute
        right-0
        mt-6
        w-[calc(100vw-32px)]
        sm:w-96
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

                    <div className="flex items-center justify-between p-5 border-b border-border">

                        <div>

                            <h3 className="font-bold text-lg">
                                Notifications
                            </h3>

                            <p className="text-xs text-muted-foreground mt-1">
                                {unread} unread notifications
                            </p>

                        </div>

                    </div>

                    <div>

                        {notifications.map((notification) => (

                            <button
                                key={notification.id}
                                className="
                                    w-full

                                    flex

                                    gap-4

                                    px-5
                                    py-4

                                    hover:bg-secondary

                                    transition-all

                                    text-left
                                "
                            >

                                <div className="text-2xl">
                                    {notification.icon}
                                </div>

                                <div className="flex-1">

                                    <div className="flex justify-between">

                                        <p className="font-semibold">
                                            {notification.title}
                                        </p>

                                        <span className="text-xs text-muted-foreground">
                                            {notification.time}
                                        </span>

                                    </div>

                                    <p className="text-sm text-muted-foreground mt-1">
                                        {notification.description}
                                    </p>

                                </div>

                                {notification.unread && (

                                    <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2" />

                                )}

                            </button>

                        ))}

                    </div>

                    <button
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            w-full

                            p-4

                            border-t
                            border-border

                            text-primary
                            font-semibold

                            hover:bg-secondary

                            transition-all
                        "
                    >

                        View All Notifications

                        <FiChevronRight />

                    </button>

                </div>
        </div>

    );
}