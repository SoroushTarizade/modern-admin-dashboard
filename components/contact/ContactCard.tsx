"use client";

import Image from "next/image";
import { Contact } from "@/types/contact";

import {
    CiMail,
    CiLocationOn,
    CiPhone,
} from "react-icons/ci";

import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import ContactActions from "./ContactActions";

interface ContactCardProps {
    contact: Contact;
}

export default function ContactCard({
    contact,
}: ContactCardProps) {
    return (
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Image */}

            <div className="relative h-[220px] w-full sm:h-[240px]">
                <Image
                    src={contact.image}
                    alt={contact.name}
                    fill
                    className="object-cover"
                />

                {contact.favorite && (
                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 shadow-lg sm:h-10 sm:w-10">
                        <FaStar className="text-white" />
                    </div>
                )}
            </div>

            {/* Body */}

            <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h2 className="truncate text-lg font-bold sm:text-xl">
                            {contact.name}
                        </h2>

                        <p className="mt-1 truncate text-primary">
                            {contact.position}
                        </p>
                    </div>

                    <ContactActions contact={contact} />
                </div>

                {/* Info */}

                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CiMail size={20} />

                        <span className="truncate text-sm">
                            {contact.email}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CiPhone size={20} />

                        <span className="truncate text-sm">
                            {contact.phone}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                        <MdOutlineBusinessCenter size={20} />

                        <span className="truncate text-sm">
                            {contact.company}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CiLocationOn size={20} />

                        <span className="truncate text-sm">
                            {contact.address}
                        </span>
                    </div>
                </div>

                {/* Button */}

                <button
                    className="
            mt-8
            flex
            h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-border
            transition-all
            duration-300
            hover:bg-primary
            hover:text-white
          "
                >
                    <CiMail size={20} />

                    Message
                </button>
            </div>
        </div>
    );
}