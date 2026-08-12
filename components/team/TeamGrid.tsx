"use client";

import TeamCard from "./TeamCard";
import { TeamMember } from "@/types/team";

interface TeamGridProps {
    members: TeamMember[];
    onDelete: (id: number) => void;
}

export default function TeamGrid({
    members,
    onDelete,
}: TeamGridProps) {
    if (members.length === 0) {
        return (
            <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-border bg-card">
                <p className="text-muted-foreground">
                    No team members found.
                </p>
            </div>
        );
    }

    return (
        <div
            className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
            "
        >
            {members.map((member) => (
                <TeamCard
                    key={member.id}
                    member={member}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}