"use client";

import { Mail } from "@/types/mail";
import {
    FiCornerUpRight,
    FiTrash2,
    FiPaperclip,
    FiStar,
} from "react-icons/fi";
import { GoReply } from "react-icons/go";
import { FaStar } from "react-icons/fa";

interface MailPreviewProps {
    mail?: Mail;

    onReply?: () => void;

    onForward?: () => void;

    onDelete?: () => void;

    onToggleStar?: () => void;
}

export default function MailPreview({
    mail,
    onReply,
    onForward,
    onDelete,
    onToggleStar,
}: MailPreviewProps) {
    if (!mail) {
        return (
            <div className="flex h-full items-center justify-center rounded-3xl border border-border bg-card">
                <p className="text-muted-foreground text-lg">
                    Select an email to preview
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-3xl border border-border bg-card p-7">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="flex gap-4">

                    <img
                        src={mail.avatar}
                        alt={mail.sender}
                        className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>

                        <h2 className="text-2xl font-bold">
                            {mail.subject}
                        </h2>

                        <p className="mt-1 font-semibold">
                            {mail.sender}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {mail.email}
                        </p>

                    </div>

                </div>

                <button
                    onClick={onToggleStar}
                    className="rounded-xl p-3 hover:bg-secondary"
                >
                    {mail.starred ? (
                        <FaStar className="text-yellow-400 text-xl" />
                    ) : (
                        <FiStar className="text-xl" />
                    )}
                </button>

            </div>

            <div className="mt-6 flex items-center justify-between border-y border-border py-4">

                <div>
                    <p className="font-semibold">
                        {mail.date}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        {mail.time}
                    </p>
                </div>

                {mail.attachment && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <FiPaperclip />
                        Attachment
                    </div>
                )}

            </div>

            <div className="mt-8 whitespace-pre-line leading-8 text-[15px]">
                {mail.message}
            </div>

            <div className="mt-10 flex gap-4">

                <button
                    onClick={onReply}
                    className="rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:opacity-90"
                >
                    <div className="flex items-center gap-2">
                        <GoReply />
                        Reply
                    </div>
                </button>

                <button
                    onClick={onForward}
                    className="rounded-xl border border-border px-5 py-3 font-semibold hover:bg-secondary"
                >
                    <div className="flex items-center gap-2">
                        <FiCornerUpRight />
                        Forward
                    </div>
                </button>

                <button
                    onClick={onDelete}
                    className="rounded-xl border border-border px-5 py-3 font-semibold hover:bg-red-100 hover:text-red-600"
                >
                    <div className="flex items-center gap-2">
                        <FiTrash2 />
                        Delete
                    </div>
                </button>

            </div>

        </div>
    );
}