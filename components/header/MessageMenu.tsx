"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiMessageCircle,
    FiChevronRight,
} from "react-icons/fi";

const messages = [
    {
        id: 1,
        name: "John Smith",
        text: "Can we schedule a meeting?",
        time: "2 min ago",
        unread: true,
    },
    {
        id: 2,
        name: "Emma Wilson",
        text: "Invoice has been approved.",
        time: "18 min ago",
        unread: true,
    },
    {
        id: 3,
        name: "Michael Brown",
        text: "Project updated successfully.",
        time: "1 hour ago",
        unread: false,
    },
];

export default function MessageMenu() {

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

                <FiMessageCircle
                    size={20}
                    className="text-foreground"
                />

                <span
                    className="
                        absolute
                        -top-1
                        -right-1

                        w-5
                        h-5

                        rounded-full

                        bg-primary

                        text-white

                        text-[11px]

                        flex
                        items-center
                        justify-center
                    "
                >
                    2
                </span>

            </button>

            {open && (

                <div
                    className="
                        absolute
                        right-0
                        mt-3

                        w-[calc(100vw - 32px)]
                        sm:w-80

                        rounded-2xl

                        bg-card

                        border
                        border-border

                        shadow-2xl

                        overflow-hidden

                        z-50
                    "
                >

                    <div className="flex items-center justify-between p-4 border-b border-border">

                        <h3 className="font-semibold">
                            Messages
                        </h3>

                        <span className="text-xs text-primary font-semibold">
                            {messages.filter(m => m.unread).length} New
                        </span>

                    </div>

                    <div>

                        {messages.map((message) => (

                            <button
                                key={message.id}
                                className="
                                    w-full

                                    flex
                                    items-start
                                    gap-3

                                    px-4
                                    py-4

                                    hover:bg-secondary

                                    transition-all

                                    text-left
                                "
                            >

                                <div
                                    className="
                                        w-10
                                        h-10

                                        rounded-full

                                        bg-primary

                                        text-white

                                        flex
                                        items-center
                                        justify-center

                                        font-bold
                                    "
                                >
                                    {message.name.charAt(0)}
                                </div>

                                <div className="flex-1">

                                    <div className="flex justify-between">

                                        <p className="font-semibold text-sm">
                                            {message.name}
                                        </p>

                                        <span className="text-xs text-muted-foreground">
                                            {message.time}
                                        </span>

                                    </div>

                                    <p className="text-sm text-muted-foreground mt-1">
                                        {message.text}
                                    </p>

                                </div>

                                {message.unread && (

                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />

                                )}

                            </button>

                        ))}

                    </div>

                    <button
                        className="
                            w-full

                            flex
                            items-center
                            justify-center
                            gap-2

                            p-4

                            border-t
                            border-border

                            text-primary
                            font-semibold

                            hover:bg-secondary
                            transition-all
                        "
                    >

                        View All Messages

                        <FiChevronRight />

                    </button>

                </div>

            )}

        </div>
    );
}