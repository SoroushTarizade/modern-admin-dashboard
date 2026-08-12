"use client";

import { useMemo, useState } from "react";
import { TeamMember } from "@/types/team";

const initialTeamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Soroush Tarizadeh",
        role: "Front-End Programmer",
        email: "soroushtarizadeh7139@gmail.com",
        image: "/images/img-resume.jpg",
    },
    {
        id: 2,
        name: "John Smith",
        role: "UI/UX Designer",
        email: "john@example.com",
        image: "/images/img-resume.jpg",
    },
    {
        id: 3,
        name: "Emma Watson",
        role: "Back-End Developer",
        email: "emma@example.com",
        image: "/images/img-resume.jpg",
    },
];

export default function useTeam() {
    const [members, setMembers] =
        useState<TeamMember[]>(initialTeamMembers);

    const [search, setSearch] = useState("");

    const [isModalOpen, setIsModalOpen] =
        useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addMember = (member: TeamMember) => {
        setMembers((prev) => [
            ...prev,
            member,
        ]);

        closeModal();
    };

    const deleteMember = (id: number) => {
        setMembers((prev) =>
            prev.filter(
                (member) => member.id !== id
            )
        );
    };

    const filteredMembers = useMemo(() => {
        const keyword = search.toLowerCase().trim();

        if (!keyword) {
            return members;
        }

        return members.filter((member) =>
            member.name
                .toLowerCase()
                .includes(keyword) ||
            member.role
                .toLowerCase()
                .includes(keyword) ||
            member.email
                .toLowerCase()
                .includes(keyword)
        );
    }, [members, search]);

    return {
        members: filteredMembers,

        search,
        setSearch,

        isModalOpen,
        openModal,
        closeModal,

        addMember,
        deleteMember,
    };
}