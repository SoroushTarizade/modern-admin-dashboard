"use client";

import { Contact } from "@/types/contact";

import ContactCard from "./ContactCard";
import EmptyContact from "./EmptyContact";

interface ContactGridProps {
    contacts: Contact[];
}

export default function ContactGrid({
    contacts,
}: ContactGridProps) {
    if (contacts.length === 0) {
        return <EmptyContact />;
    }

    return (
        <div
            className="
        mt-10
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
        >
            {contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </div>
    );
}