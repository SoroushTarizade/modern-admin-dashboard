"use client";

import { useState } from "react";

import {
    FiBell,
    FiCheck,
    FiCheckCircle,
    FiTrash2,
    FiShoppingCart,
    FiCreditCard,
    FiUser,
    FiMessageCircle,
    FiInfo,
} from "react-icons/fi";

interface NotificationItem {
    id: number;
    title: string;
    description: string;
    time: string;
    unread: boolean;
    type:
        | "order"
        | "payment"
        | "user"
        | "message"
        | "info";
}

const initialNotifications: NotificationItem[] = [
    {
        id: 1,
        title: "New Order",
        description: "#1024 has been placed.",
        time: "2 min ago",
        unread: true,
        type: "order",
    },
    {
        id: 2,
        title: "Payment Received",
        description: "$420 has been received.",
        time: "10 min ago",
        unread: true,
        type: "payment",
    },
    {
        id: 3,
        title: "New User",
        description: "Emma joined your dashboard.",
        time: "1 hour ago",
        unread: false,
        type: "user",
    },
    {
        id: 4,
        title: "New Message",
        description: "You received a new message.",
        time: "2 hours ago",
        unread: false,
        type: "message",
    },
    {
        id: 5,
        title: "System Update",
        description: "Your dashboard has been updated.",
        time: "Yesterday",
        unread: false,
        type: "info",
    },
];

function NotificationIcon({
    type,
}: {
    type: NotificationItem["type"];
}) {
    const icons = {
        order: <FiShoppingCart size={20} />,
        payment: <FiCreditCard size={20} />,
        user: <FiUser size={20} />,
        message: <FiMessageCircle size={20} />,
        info: <FiInfo size={20} />,
    };

    return icons[type];
}

export default function NotificationsClient() {
    const [notifications, setNotifications] = useState(
        initialNotifications
    );

    const unreadCount = notifications.filter(
        (notification) => notification.unread
    ).length;

    function markAsRead(id: number) {
        setNotifications((prev) =>
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

    function markAllAsRead() {
        setNotifications((prev) =>
            prev.map((notification) => ({
                ...notification,
                unread: false,
            }))
        );
    }

    function clearAll() {
        setNotifications([]);
    }

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6">
            {/* Header */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <div
                            className="
                                w-11
                                h-11
                                rounded-xl
                                bg-primary/10
                                text-primary
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <FiBell size={22} />
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold">
                                Notifications
                            </h1>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Stay up to date with your dashboard activity.
                            </p>
                        </div>
                    </div>
                </div>

                {notifications.length > 0 && (
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={markAllAsRead}
                            disabled={unreadCount === 0}
                            className="
                                h-10
                                px-4
                                rounded-xl
                                border
                                border-border
                                bg-card
                                text-sm
                                font-semibold
                                flex
                                items-center
                                gap-2
                                hover:bg-secondary
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                                transition-all
                            "
                        >
                            <FiCheck size={16} />

                            Mark all as read
                        </button>

                        <button
                            type="button"
                            onClick={clearAll}
                            className="
                                h-10
                                px-4
                                rounded-xl
                                bg-red-500/10
                                text-red-500
                                text-sm
                                font-semibold
                                flex
                                items-center
                                gap-2
                                hover:bg-red-500/20
                                transition-all
                            "
                        >
                            <FiTrash2 size={16} />

                            Clear all
                        </button>
                    </div>
                )}
            </div>

            {/* Summary */}

            <div
                className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-5
                    sm:p-6
                "
            >
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Total notifications
                        </p>

                        <p className="text-2xl font-extrabold mt-1">
                            {notifications.length}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground text-right">
                            Unread
                        </p>

                        <p className="text-2xl font-extrabold text-primary mt-1 text-right">
                            {unreadCount}
                        </p>
                    </div>
                </div>
            </div>

            {/* Notification List */}

            {notifications.length > 0 ? (
                <div
                    className="
                        rounded-2xl
                        border
                        border-border
                        bg-card
                        overflow-hidden
                    "
                >
                    {notifications.map((notification, index) => (
                        <div
                            key={notification.id}
                            className={`
                                p-5
                                sm:p-6
                                flex
                                items-start
                                gap-4
                                transition-all
                                ${
                                    index !==
                                    notifications.length - 1
                                        ? "border-b border-border"
                                        : ""
                                }
                                ${
                                    notification.unread
                                        ? "bg-primary/[0.03]"
                                        : ""
                                }
                            `}
                        >
                            {/* Icon */}

                            <div
                                className={`
                                    w-11
                                    h-11
                                    shrink-0
                                    rounded-xl
                                    flex
                                    items-center
                                    justify-center
                                    ${
                                        notification.unread
                                            ? "bg-primary/10 text-primary"
                                            : "bg-secondary text-muted-foreground"
                                    }
                                `}
                            >
                                <NotificationIcon
                                    type={notification.type}
                                />
                            </div>

                            {/* Content */}

                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                    <div className="flex items-center gap-2">
                                        <h3
                                            className={`
                                                text-sm
                                                sm:text-base
                                                ${
                                                    notification.unread
                                                        ? "font-bold"
                                                        : "font-semibold"
                                                }
                                            `}
                                        >
                                            {notification.title}
                                        </h3>

                                        {notification.unread && (
                                            <span
                                                className="
                                                    w-2
                                                    h-2
                                                    rounded-full
                                                    bg-primary
                                                "
                                            />
                                        )}
                                    </div>

                                    <span className="text-xs text-muted-foreground">
                                        {notification.time}
                                    </span>
                                </div>

                                <p className="text-sm text-muted-foreground mt-1">
                                    {notification.description}
                                </p>

                                {notification.unread && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            markAsRead(
                                                notification.id
                                            )
                                        }
                                        className="
                                            mt-3
                                            text-xs
                                            font-bold
                                            text-primary
                                            hover:underline
                                        "
                                    >
                                        Mark as read
                                    </button>
                                )}
                            </div>

                            {/* Read State */}

                            {!notification.unread && (
                                <div className="text-green-500 pt-1">
                                    <FiCheckCircle size={18} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State */

                <div
                    className="
                        rounded-2xl
                        border
                        border-border
                        bg-card
                        p-10
                        sm:p-16
                        text-center
                    "
                >
                    <div
                        className="
                            w-16
                            h-16
                            mx-auto
                            rounded-2xl
                            bg-secondary
                            text-muted-foreground
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <FiBell size={28} />
                    </div>

                    <h2 className="mt-5 text-lg font-bold">
                        No notifications
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        You're all caught up. There are no notifications to show.
                    </p>
                </div>
            )}
        </div>
    );
}