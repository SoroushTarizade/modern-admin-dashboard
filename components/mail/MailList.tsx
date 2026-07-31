"use client";

import { Mail } from "@/types/mail";
import MailRow from "./MailRow";
import EmptyMail from "./EmptyMail";

interface MailListProps {
    mails: Mail[];

    selectedIds: string[];

    activeMailId?: string;

    onSelect: (id: string) => void;

    onOpen: (mail: Mail) => void;

    onStar: (id: string) => void;
}

export default function MailList({
    mails,
    selectedIds,
    activeMailId,
    onSelect,
    onOpen,
    onStar,
}: MailListProps) {
    if (mails.length === 0) {
        return <EmptyMail />;
    }

    return (
        <div
            className="
                flex
                flex-col
                gap-3
                overflow-y-auto
                pr-2
                max-h-[720px]
            "
        >
            {mails.map((mail) => (
                <MailRow
                    key={mail.id}
                    mail={mail}
                    selected={selectedIds.includes(mail.id)}
                    active={activeMailId === mail.id}
                    onSelect={() => onSelect(mail.id)}
                    onOpen={() => onOpen(mail)}
                    onStar={() => onStar(mail.id)}
                />
            ))}
        </div>
    );
} 