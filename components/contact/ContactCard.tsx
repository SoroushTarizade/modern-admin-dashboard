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
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* Image */}

            <div className="relative h-[240px] w-full">

                <Image
                    src={contact.image}
                    alt={contact.name}
                    fill
                    className="object-cover"
                />

                {contact.favorite && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">

                        <FaStar className="text-white" />

                    </div>
                )}

            </div>

            {/* Body */}

            <div className="p-6">

                <div className="flex items-start justify-between">

                    <div>

                        <h2 className="text-xl font-bold">
                            {contact.name}
                        </h2>

                        <p className="text-primary mt-1">
                            {contact.position}
                        </p>

                    </div>

                    <ContactActions contact={contact} />

                </div>

                {/* Info */}

                <div className="mt-6 space-y-4">

                    <div className="flex items-center gap-3 text-muted-foreground">

                        <CiMail size={20} />

                        <span className="text-sm">
                            {contact.email}
                        </span>

                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">

                        <CiPhone size={20} />

                        <span className="text-sm">
                            {contact.phone}
                        </span>

                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">

                        <MdOutlineBusinessCenter size={20} />

                        <span className="text-sm">
                            {contact.company}
                        </span>

                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">

                        <CiLocationOn size={20} />

                        <span className="text-sm">
                            {contact.address}
                        </span>

                    </div>

                </div>

                {/* Button */}

                <button
                    className="mt-8 w-full h-12 rounded-xl border border-border flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                >
                    <CiMail size={20} />

                    Message
                </button>

            </div>
        </div>
    );
}