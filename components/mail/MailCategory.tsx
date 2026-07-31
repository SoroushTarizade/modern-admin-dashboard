"use client";

import { MailCategory as MailCategoryType } from "@/types/mail";

interface MailCategoryProps {
    title: MailCategoryType;
    count: number;
    icon: React.ReactNode;
    active: boolean;
    onClick: () => void;
}

export default function MailCategory({
    title,
    count,
    icon,
    active,
    onClick,
}: MailCategoryProps) {
    return (
        <button
            onClick={onClick}
            className={`
                w-full
                flex
                items-center
                justify-between
                rounded-2xl
                px-4
                py-3
                transition-all
                duration-300

                ${active
                    ? "bg-primary text-white shadow-lg"
                    : "hover:bg-secondary"
                }
            `}
        >
            <div className="flex items-center gap-3">
                <span className="text-xl">
                    {icon}
                </span>

                <span className="font-medium">
                    {title}
                </span>
            </div>

            <span
                className={`
                    min-w-[28px]
                    h-7
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-bold

                    ${active
                        ? "bg-white/20"
                        : "bg-primary text-white"
                    }
                `}
            >
                {count}
            </span>
        </button>
    );
}