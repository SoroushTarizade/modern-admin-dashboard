"use client";

import { Mail } from "@/types/mail";

import {
    FiPaperclip,
    FiStar,
} from "react-icons/fi";

import { FaStar } from "react-icons/fa";

interface MailRowProps {

    mail: Mail;

    selected: boolean;

    active: boolean;

    onSelect: () => void;

    onOpen: () => void;

    onStar: () => void;
}

export default function MailRow({
    mail,
    selected,
    active,
    onSelect,
    onOpen,
    onStar,
}: MailRowProps) {

    const labelColor = {
        Primary: "bg-blue-500",
        Social: "bg-purple-500",
        Work: "bg-yellow-500",
        Friends: "bg-red-500",
    };

    return (

        <div
            className={`
                flex
                cursor-pointer
                items-center
                gap-5
                rounded-2xl
                border
                px-5
                py-4
                transition-all
                duration-300

                ${active
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40 hover:bg-secondary/40"
                }
            `}
            onClick={onOpen}
        >

            <input
                type="checkbox"
                checked={selected}
                onChange={onSelect}
                onClick={(e) => e.stopPropagation()}
                className="h-4 w-4"
            />

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onStar();
                }}
            >
                {mail.starred ? (
                    <FaStar
                        className="text-yellow-400"
                    />
                ) : (
                    <FiStar
                        className="text-muted-foreground"
                    />
                )}
            </button>

            <img
                src={mail.avatar}
                alt={mail.sender}
                className="
                    h-12
                    w-12
                    rounded-full
                    object-cover
                "
            />

            <div className="min-w-0 flex-1">

                <div className="flex items-center gap-3">

                    <h3
                        className={`
                            truncate
                            ${!mail.read
                                ? "font-bold"
                                : "font-medium"
                            }
                        `}
                    >
                        {mail.sender}
                    </h3>

                    <span
                        className={`
                            rounded-full
                            px-2
                            py-1
                            text-[11px]
                            font-semibold
                            text-white
                            ${labelColor[mail.label]}
                        `}
                    >
                        {mail.label}
                    </span>

                </div>

                <p
                    className={`
                        mt-1
                        truncate
                        text-sm

                        ${!mail.read
                            ? "font-semibold"
                            : "text-muted-foreground"
                        }
                    `}
                >
                    {mail.subject}
                </p>

            </div>

            {mail.attachment && (
                <FiPaperclip
                    className="text-muted-foreground"
                    size={18}
                />
            )}

            <div className="text-right">

                <p className="text-sm font-medium">
                    {mail.date}
                </p>

                <p className="text-xs text-muted-foreground">
                    {mail.time}
                </p>

            </div>

        </div>

    );
}