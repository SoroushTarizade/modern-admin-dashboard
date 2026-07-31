"use client";

import { useMemo, useState } from "react";

import { mails as initialMails } from "@/data/mails";
import { Mail, MailCategory, MailLabel } from "@/types/mail";

export default function useMail() {

    const [mails, setMails] = useState(initialMails);

    const [search, setSearch] = useState("");

    const [sort, setSort] = useState("newest");

    const [activeCategory, setActiveCategory] =
        useState<MailCategory>("Inbox");

    const [activeLabel, setActiveLabel] =
        useState<MailLabel | "All">("All");

    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const [activeMail, setActiveMail] =
        useState<Mail | undefined>();

    const [composeOpen, setComposeOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const filteredMails = useMemo(() => {

        let data = [...mails];

        if (activeCategory === "Starred") {

            data = data.filter((mail) => mail.starred);

        } else {

            data = data.filter(
                (mail) =>
                    mail.category === activeCategory
            );

        }

        if (activeLabel !== "All") {

            data = data.filter(
                (mail) => mail.label === activeLabel
            );

        }

        if (search) {

            const keyword = search.toLowerCase();

            data = data.filter(
                (mail) =>
                    mail.sender.toLowerCase().includes(keyword) ||
                    mail.subject.toLowerCase().includes(keyword) ||
                    mail.message.toLowerCase().includes(keyword)
            );

        }

        switch (sort) {

            case "oldest":
                data.reverse();
                break;

            case "starred":
                data.sort((a, b) =>
                    Number(b.starred) - Number(a.starred)
                );
                break;

            case "unread":
                data.sort((a, b) =>
                    Number(a.read) - Number(b.read)
                );
                break;
        }

        return data;

    }, [
        mails,
        activeCategory,
        activeLabel,
        search,
        sort,
    ]);

    const counts = {

        Inbox: mails.filter(m => m.category === "Inbox").length,

        Starred: mails.filter(m => m.starred).length,

        Sent: mails.filter(m => m.category === "Sent").length,

        Draft: mails.filter(m => m.category === "Draft").length,

        Spam: mails.filter(m => m.category === "Spam").length,

        Bin: mails.filter(m => m.category === "Bin").length,

    };

    function toggleStar(id: string) {

        setMails(prev =>
            prev.map(mail =>
                mail.id === id
                    ? {
                        ...mail,
                        starred: !mail.starred,
                    }
                    : mail
            )
        );

    }

    function toggleSelect(id: string) {

        setSelectedIds(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );

    }

    function selectAll() {

        if (
            selectedIds.length === filteredMails.length
        ) {

            setSelectedIds([]);

        } else {

            setSelectedIds(
                filteredMails.map(mail => mail.id)
            );

        }

    }

    function deleteSelected() {

        setMails(prev =>
            prev.map(mail =>
                selectedIds.includes(mail.id)
                    ? {
                        ...mail,
                        category: "Bin",
                    }
                    : mail
            )
        );

        setSelectedIds([]);

        setDeleteOpen(false);

    }

    function moveSpam() {

        setMails(prev =>
            prev.map(mail =>
                selectedIds.includes(mail.id)
                    ? {
                        ...mail,
                        category: "Spam",
                    }
                    : mail
            )
        );

        setSelectedIds([]);

    }

    function markRead() {

        setMails(prev =>
            prev.map(mail =>
                selectedIds.includes(mail.id)
                    ? {
                        ...mail,
                        read: true,
                    }
                    : mail
            )
        );

    }

    function sendMail({
        to,
        subject,
        message,
    }: {
        to: string;
        subject: string;
        message: string;
    }) {

        const newMail: Mail = {

            id: Date.now().toString(),

            sender: "Me",

            email: to,

            avatar: "/images/avatar.png",

            subject,

            message,

            date: "Today",

            time: new Date().toLocaleTimeString(),

            category: "Sent",

            label: "Primary",

            read: true,

            starred: false,

            selected: false,

        };

        setMails(prev => [
            newMail,
            ...prev,
        ]);

    }

    return {

        mails: filteredMails,

        counts,

        activeMail,

        selectedIds,

        search,

        sort,

        composeOpen,

        deleteOpen,

        activeCategory,

        activeLabel,

        setSearch,

        setSort,

        setComposeOpen,

        setDeleteOpen,

        setActiveCategory,

        setActiveLabel,

        setActiveMail,

        toggleStar,

        toggleSelect,

        selectAll,

        deleteSelected,

        moveSpam,

        markRead,

        sendMail,

    };

}