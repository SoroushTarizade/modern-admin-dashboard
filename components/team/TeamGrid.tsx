"use client";

import TeamCard from "./TeamCard";


const teamMembers = [
    {
        id: 1,
        name: "Soroush Tarizadeh",
        role: "Front-End programmer",
        email: "soroushtarizadeh7139@gmail.com",
        image: "/images/img-resume.jpg",
    },

    {
        id: 2,
        name: "Soroush Tarizadeh",
        role: "Front-End programmer",
        email: "soroushtarizadeh7139@gmail.com",
        image: "/images/img-resume.jpg",
    },

    {
        id: 3,
        name: "Soroush Tarizadeh",
        role: "Front-End programmer",
        email: "soroushtarizadeh7139@gmail.com",
        image: "/images/img-resume.jpg",
    },

    {
        id: 4,
        name: "Soroush Tarizadeh",
        role: "Front-End programmer",
        email: "soroushtarizadeh7139@gmail.com",
        image: "/images/img-resume.jpg",
    },

    {
        id: 5,
        name: "Soroush Tarizadeh",
        role: "Front-End programmer",
        email: "soroushtarizadeh7139@gmail.com",
        image: "/images/img-resume.jpg",
    },

    {
        id: 6,
        name: "Soroush Tarizadeh",
        role: "Front-End programmer",
        email: "soroushtarizadeh7139@gmail.com",
        image: "/images/img-resume.jpg",
    },
];


export default function TeamGrid() {
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
            {teamMembers.map((member) => (
                <TeamCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    email={member.email}
                    image={member.image}
                />
            ))}
        </div>
    );
}