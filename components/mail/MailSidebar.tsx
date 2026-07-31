"use client";

import {
    FiInbox,
    FiStar,
    FiSend,
    FiEdit3,
    FiAlertCircle,
    FiTrash2,
    FiPlus,
} from "react-icons/fi";

import { MailCategory as MailCategoryType, MailLabel } from "@/types/mail";
import MailCategory from "./MailCategory";
import MailLabels from "./MailLabels";

interface MailSidebarProps {
    activeCategory: MailCategoryType;
    activeLabel: MailLabel | "All";

    counts: Record<MailCategoryType, number>;

    onCategoryChange: (category: MailCategoryType) => void;

    onLabelChange: (label: MailLabel | "All") => void;

    onCompose: () => void;
}

export default function MailSidebar({
    activeCategory,
    activeLabel,
    counts,
    onCategoryChange,
    onLabelChange,
    onCompose,
}: MailSidebarProps) {
    return (
        <aside className="w-[280px] rounded-3xl border border-border bg-card p-6">

            <button
                onClick={onCompose}
                className="
                    mb-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-primary
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    hover:scale-[1.02]
                    hover:shadow-lg
                "
            >
                <FiPlus size={20} />

                Compose
            </button>

            <div className="space-y-2">

                <MailCategory
                    title="Inbox"
                    count={counts.Inbox}
                    icon={<FiInbox />}
                    active={activeCategory === "Inbox"}
                    onClick={() => onCategoryChange("Inbox")}
                />

                <MailCategory
                    title="Starred"
                    count={counts.Starred}
                    icon={<FiStar />}
                    active={activeCategory === "Starred"}
                    onClick={() => onCategoryChange("Starred")}
                />

                <MailCategory
                    title="Sent"
                    count={counts.Sent}
                    icon={<FiSend />}
                    active={activeCategory === "Sent"}
                    onClick={() => onCategoryChange("Sent")}
                />

                <MailCategory
                    title="Draft"
                    count={counts.Draft}
                    icon={<FiEdit3 />}
                    active={activeCategory === "Draft"}
                    onClick={() => onCategoryChange("Draft")}
                />

                <MailCategory
                    title="Spam"
                    count={counts.Spam}
                    icon={<FiAlertCircle />}
                    active={activeCategory === "Spam"}
                    onClick={() => onCategoryChange("Spam")}
                />

                <MailCategory
                    title="Bin"
                    count={counts.Bin}
                    icon={<FiTrash2 />}
                    active={activeCategory === "Bin"}
                    onClick={() => onCategoryChange("Bin")}
                />

            </div>

            <MailLabels
                active={activeLabel}
                onChange={onLabelChange}
            />

        </aside>
    );
}