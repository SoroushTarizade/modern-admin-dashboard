"use client";

import {
    FiTrendingUp,
    FiTrendingDown,
    FiDollarSign,
    FiShoppingBag,
    FiUsers,
    FiRefreshCw,
} from "react-icons/fi";

import { Stat } from "@/types/dashboard";

interface StatCardProps {
    stat: Stat;
}

const icons = {
    revenue: FiDollarSign,
    orders: FiShoppingBag,
    users: FiUsers,
    refund: FiRefreshCw,
};

const colors = {
    primary: "bg-primary/10 text-primary",
    green: "bg-green-500/10 text-green-500",
    orange: "bg-orange-500/10 text-orange-500",
    red: "bg-red-500/10 text-red-500",
};

export default function StatCard({
    stat,
}: StatCardProps) {

    const Icon =
        icons[stat.icon as keyof typeof icons] ?? FiDollarSign;

    return (
        <div
            className="
                rounded-2xl
                border
                border-border
                bg-card
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >
            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm text-muted-foreground">
                        {stat.title}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        {stat.value}
                    </h2>

                </div>

                <div
                    className={`
                        w-14
                        h-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        ${colors[stat.color as keyof typeof colors]}
                    `}
                >
                    <Icon size={26} />
                </div>

            </div>

            <div className="mt-6 flex items-center gap-2">

                {stat.trend === "up" ? (

                    <FiTrendingUp className="text-green-500" />

                ) : (

                    <FiTrendingDown className="text-red-500" />

                )}

                <span
                    className={`font-semibold ${stat.trend === "up"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                >
                    {stat.change}%
                </span>

                <span className="text-sm text-muted-foreground">
                    vs last month
                </span>

            </div>

        </div>
    );
}