"use client";

import { useState } from "react";

import {
    FiMessageCircle,
    FiCheck,
    FiCheckCircle,
    FiTrash2,
    FiSend,
} from "react-icons/fi";

interface MessageItem {
    id: number;
    name: string;
    email: string;
    text: string;
    time: string;
    unread: boolean;
}

const initialMessages: MessageItem[] = [
    {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        text: "Can we schedule a meeting?",
        time: "2 min ago",
        unread: true,
    },
    {
        id: 2,
        name: "Emma Wilson",
        email: "emma@example.com",
        text: "Invoice has been approved.",
        time: "18 min ago",
        unread: true,
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael@example.com",
        text: "Project updated successfully.",
        time: "1 hour ago",
        unread: false,
    },
];

export default function MessagesClient() {
    const [messages, setMessages] =
        useState(initialMessages);

    const unreadCount = messages.filter(
        (message) => message.unread
    ).length;

    function markAsRead(id: number) {
        setMessages((prev) =>
            prev.map((message) =>
                message.id === id
                    ? {
                          ...message,
                          unread: false,
                      }
                    : message
            )
        );
    }

    function markAllAsRead() {
        setMessages((prev) =>
            prev.map((message) => ({
                ...message,
                unread: false,
            }))
        );
    }

    function clearAll() {
        setMessages([]);
    }

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6">
            {/* Header */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
                        <FiMessageCircle size={22} />
                    </div>

                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold">
                            Messages
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage your conversations and messages.
                        </p>
                    </div>
                </div>

                {messages.length > 0 && (
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
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Total messages
                        </p>

                        <p className="text-2xl font-extrabold mt-1">
                            {messages.length}
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

            {/* Messages */}

            {messages.length > 0 ? (
                <div
                    className="
                        rounded-2xl
                        border
                        border-border
                        bg-card
                        overflow-hidden
                    "
                >
                    {messages.map((message, index) => (
                        <div
                            key={message.id}
                            className={`
                                p-5
                                sm:p-6
                                flex
                                items-start
                                gap-4
                                transition-all
                                ${
                                    index !== messages.length - 1
                                        ? "border-b border-border"
                                        : ""
                                }
                                ${
                                    message.unread
                                        ? "bg-primary/[0.03]"
                                        : ""
                                }
                            `}
                        >
                            {/* Avatar */}

                            <div
                                className="
                                    w-11
                                    h-11
                                    shrink-0
                                    rounded-full
                                    bg-primary
                                    text-primary-foreground
                                    flex
                                    items-center
                                    justify-center
                                    font-bold
                                "
                            >
                                {message.name.charAt(0)}
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
                                                    message.unread
                                                        ? "font-bold"
                                                        : "font-semibold"
                                                }
                                            `}
                                        >
                                            {message.name}
                                        </h3>

                                        {message.unread && (
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                        )}
                                    </div>

                                    <span className="text-xs text-muted-foreground">
                                        {message.time}
                                    </span>
                                </div>

                                <p className="text-xs text-muted-foreground mt-1">
                                    {message.email}
                                </p>

                                <p className="text-sm text-muted-foreground mt-2">
                                    {message.text}
                                </p>

                                {message.unread && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            markAsRead(message.id)
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

                            {/* Status */}

                            {!message.unread && (
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
                        <FiMessageCircle size={28} />
                    </div>

                    <h2 className="mt-5 text-lg font-bold">
                        No messages
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        You don't have any messages right now.
                    </p>
                </div>
            )}

            {/* Compose Placeholder */}

            {messages.length > 0 && (
                <button
                    type="button"
                    className="
                        fixed
                        right-6
                        bottom-6
                        w-14
                        h-14
                        rounded-2xl
                        bg-primary
                        text-primary-foreground
                        shadow-xl
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        transition-all
                    "
                    aria-label="Compose message"
                >
                    <FiSend size={21} />
                </button>
            )}
        </div>
    );
}