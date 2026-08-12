"use client";

import {
    FiMail,
    FiTrash2,
} from "react-icons/fi";

import { TeamMember } from "@/types/team";

interface TeamCardProps {
    member: TeamMember;
    onDelete: (id: number) => void;
}

export default function TeamCard({
    member,
    onDelete,
}: TeamCardProps) {
    return (
        <div
            className="
                flex
                min-h-[289px]
                items-center
                justify-center
                rounded-2xl
                bg-card
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >
            <div className="flex w-full flex-col items-center space-y-4">

                <div className="h-[100px] w-[100px] sm:h-[110px] sm:w-[110px]">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="
                            h-full
                            w-full
                            rounded-full
                            object-cover
                        "
                    />
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-center font-bold">
                        {member.name}
                    </p>

                    <p className="mt-1 text-center text-sm text-muted-foreground">
                        {member.role}
                    </p>
                </div>

                <p className="max-w-full truncate text-center text-sm text-muted-foreground">
                    {member.email}
                </p>

                <div className="flex w-full gap-2 pt-2">

                    <a
                        href={`mailto:${member.email}`}
                        className="
                            flex
                            h-10
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-border
                            text-sm
                            transition
                            hover:bg-primary
                            hover:text-white
                        "
                    >
                        <FiMail size={16} />
                        Email
                    </a>

                    <button
                        onClick={() => onDelete(member.id)}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-red-500/20
                            text-red-500
                            transition
                            hover:bg-red-500
                            hover:text-white
                        "
                        title="Delete member"
                    >
                        <FiTrash2 size={16} />
                    </button>

                </div>

            </div>
        </div>
    );
}