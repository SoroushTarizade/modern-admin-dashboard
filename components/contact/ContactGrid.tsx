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
        <div className="grid grid-cols-3 gap-8 mt-10">
            {contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </div>
    );
}