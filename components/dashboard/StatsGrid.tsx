"use client";

import StatCard from "./StatCard";
import { Stat } from "@/types/dashboard";

interface StatsGridProps {
    stats: Stat[];
}

export default function StatsGrid({
    stats,
}: StatsGridProps) {

    return (
        <section
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4
                gap-6
            "
        >
            {stats.map((stat) => (

                <StatCard
                    key={stat.id}
                    stat={stat}
                />

            ))}
        </section>
    );
}