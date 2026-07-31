"use client";

import {
    FiShoppingBag,
    FiUserPlus,
    FiCreditCard,
    FiPackage,
} from "react-icons/fi";

import { Activity } from "@/types/dashboard";

interface RecentActivityProps {
    activities: Activity[];
}

export default function RecentActivity({
    activities,
}: RecentActivityProps) {

    const icons = {
        shopping: FiShoppingBag,
        user: FiUserPlus,
        payment: FiCreditCard,
        package: FiPackage,
    };

    const colors = {
        blue: "bg-blue-500/10 text-blue-500",
        green: "bg-green-500/10 text-green-500",
        purple: "bg-purple-500/10 text-purple-500",
        orange: "bg-orange-500/10 text-orange-500",
    };

    return (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-bold">
                        Recent Activity
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Latest actions in your dashboard
                    </p>

                </div>

            </div>

            <div className="space-y-5">

                {activities.map((activity) => {

                    const Icon =
                        icons[
                        activity.icon as keyof typeof icons
                        ] || FiShoppingBag;

                    const color =
                        colors[
                        activity.color as keyof typeof colors
                        ] ||
                        "bg-gray-500/10 text-gray-500";

                    return (

                        <div
                            key={activity.id}
                            className="flex items-start gap-4 rounded-xl p-3 transition hover:bg-secondary"
                        >

                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
                            >
                                <Icon size={22} />
                            </div>

                            <div className="flex-1">

                                <h3 className="font-semibold">
                                    {activity.title}
                                </h3>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {activity.description}
                                </p>

                            </div>

                            <span className="text-xs text-muted-foreground">
                                {activity.time}
                            </span>

                        </div>

                    );

                })}

            </div>

        </div>
    );
}