"use client";

import { useEffect, useRef, useState } from "react";
import { Contact } from "@/types/contact";

import {
    FiMoreVertical,
    FiEdit2,
    FiTrash2,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

interface ContactActionsProps {
    contact: Contact;
}

export default function ContactActions({
    contact,
}: ContactActionsProps) {
    const [open, setOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", close);

        return () =>
            document.removeEventListener("mousedown", close);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-xl hover:bg-border transition flex items-center justify-center"
            >
                <FiMoreVertical size={18} />
            </button>

            {open && (
                <div className="absolute right-0 top-12 w-44 rounded-2xl bg-card border border-border shadow-xl overflow-hidden z-50">

                    <button
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-border transition"
                    >
                        <FiEdit2 />

                        Edit
                    </button>

                    <button
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-border transition"
                    >
                        <FaStar />

                        {contact.favorite
                            ? "Remove Favorite"
                            : "Favorite"}
                    </button>

                    <button
                        className="w-full px-4 py-3 flex items-center gap-3 text-red-500 hover:bg-red-500 hover:text-white transition"
                    >
                        <FiTrash2 />

                        Delete
                    </button>

                </div>
            )}
        </div>
    );
}