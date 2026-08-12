"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
    FiBell,
    FiChevronRight,
} from "react-icons/fi";

interface NotificationItem {
    id: number;
    title: string;
    description: string;
    time: string;
    unread: boolean;
    icon: string;
}

const initialNotifications: NotificationItem[] = [
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
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const [notificationList, setNotificationList] =
        useState<NotificationItem[]>(
            initialNotifications
        );

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
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
            handleClick
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClick
            );
    }, []);

    const unread = notificationList.filter(
        (item) => item.unread
    ).length;

    function handleNotificationClick(
        id: number
    ) {
        setNotificationList((prev) =>
            prev.map((notification) =>
                notification.id === id
                    ? {
                          ...notification,
                          unread: false,
                      }
                    : notification
            )
        );
    }

    return (
        <div
            ref={ref}
            className="relative"
        >
            {/* Notification Button */}

            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label="Notifications"
                aria-expanded={open}
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

                    active:scale-95

                    transition-all
                "
            >
                <FiBell className="text-xl" />

                {unread > 0 && (
                    <span
                        className="
                            absolute
                            -top-1
                            -right-1

                            min-w-5
                            h-5

                            px-1

                            rounded-full

                            bg-destructive

                            text-white

                            text-[11px]

                            font-bold

                            flex
                            items-center
                            justify-center
                        "
                    >
                        {unread}
                    </span>
                )}
            </button>

            {/* Dropdown */}

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
                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between

                        p-5

                        border-b
                        border-border
                    "
                >
                    <div>
                        <h3 className="font-bold text-lg">
                            Notifications
                        </h3>

                        <p className="text-xs text-muted-foreground mt-1">
                            {unread} unread notifications
                        </p>
                    </div>
                </div>

                {/* Notifications */}

                <div>
                    {notificationList.map(
                        (notification) => (
                            <button
                                type="button"
                                key={notification.id}
                                onClick={() =>
                                    handleNotificationClick(
                                        notification.id
                                    )
                                }
                                className={`
                                    w-full

                                    flex
                                    gap-4

                                    px-5
                                    py-4

                                    text-left

                                    transition-all

                                    hover:bg-secondary

                                    ${
                                        notification.unread
                                            ? "bg-primary/[0.03]"
                                            : ""
                                    }
                                `}
                            >
                                {/* Icon */}

                                <div className="text-2xl shrink-0">
                                    {
                                        notification.icon
                                    }
                                </div>

                                {/* Content */}

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-3">
                                        <p
                                            className={`
                                                text-sm
                                                ${
                                                    notification.unread
                                                        ? "font-bold"
                                                        : "font-semibold"
                                                }
                                            `}
                                        >
                                            {
                                                notification.title
                                            }
                                        </p>

                                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                                            {
                                                notification.time
                                            }
                                        </span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mt-1">
                                        {
                                            notification.description
                                        }
                                    </p>
                                </div>

                                {/* Unread Indicator */}

                                {notification.unread && (
                                    <div
                                        className="
                                            w-2.5
                                            h-2.5

                                            shrink-0

                                            rounded-full

                                            bg-primary

                                            mt-2
                                        "
                                    />
                                )}
                            </button>
                        )
                    )}
                </div>

                {/* Footer */}

<button
    type="button"
    onClick={() => {
        setOpen(false);
        router.push("/notifications");
    }}
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