"use client";

import { useMemo, useState } from "react";
import { Contact } from "@/types/contact";
import { contacts as initialContacts } from "@/data/contacts";

export default function useContact() {
    const [contacts, setContacts] =
        useState<Contact[]>(initialContacts);

    const [search, setSearch] = useState("");

    const [isModalOpen, setIsModalOpen] =
        useState(false);

    const [selectedContact, setSelectedContact] =
        useState<Contact | null>(null);

    const openModal = () => {
        setSelectedContact(null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedContact(null);
        setIsModalOpen(false);
    };

    const addContact = (contact: Contact) => {
        setContacts((prev) => [...prev, contact]);
        closeModal();
    };

    const deleteContact = (id: number) => {
        setContacts((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const editContact = (contact: Contact) => {
        setSelectedContact(contact);
        setIsModalOpen(true);
    };

    const toggleFavorite = (id: number) => {
        setContacts((prev) =>
            prev.map((contact) =>
                contact.id === id
                    ? {
                        ...contact,
                        favorite: !contact.favorite,
                    }
                    : contact
            )
        );
    };

    const filteredContacts = useMemo(() => {
        const keyword = search.toLowerCase();

        return contacts.filter((contact) => {
            return (
                contact.name.toLowerCase().includes(keyword) ||
                contact.email.toLowerCase().includes(keyword) ||
                contact.company.toLowerCase().includes(keyword) ||
                contact.position.toLowerCase().includes(keyword)
            );
        });
    }, [contacts, search]);

    return {
        contacts: filteredContacts,

        search,
        setSearch,

        isModalOpen,
        openModal,
        closeModal,

        selectedContact,

        addContact,
        editContact,
        deleteContact,
        toggleFavorite,
    };
}