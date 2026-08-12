"use client";

import {
    FiActivity,
    FiLogIn,
    FiLogOut,
    FiUser,
    FiSettings,
    FiCreditCard,
    FiShield,
    FiSearch,
} from "react-icons/fi";

interface Activity {
    id: number;
    title: string;
    description: string;
    time: string;
    category: string;
    icon: React.ReactNode;
}

const activities: Activity[] = [
    {
        id: 1,
        title: "Logged in",
        description: "You successfully signed in to your account.",
        time: "Today, 10:42 AM",
        category: "Authentication",
        icon: <FiLogIn size={18} />,
    },
    {
        id: 2,
        title: "Updated profile",
        description: "Your profile information was updated.",
        time: "Today, 10:35 AM",
        category: "Profile",
        icon: <FiUser size={18} />,
    },
    {
        id: 3,
        title: "Changed settings",
        description: "Dashboard preferences were changed.",
        time: "Today, 09:50 AM",
        category: "Settings",
        icon: <FiSettings size={18} />,
    },
    {
        id: 4,
        title: "Viewed billing",
        description: "You opened the billing section.",
        time: "Yesterday, 08:24 PM",
        category: "Billing",
        icon: <FiCreditCard size={18} />,
    },
    {
        id: 5,
        title: "Security session verified",
        description: "Your current authentication session was verified.",
        time: "Yesterday, 07:40 PM",
        category: "Security",
        icon: <FiShield size={18} />,
    },
    {
        id: 6,
        title: "Logged out",
        description: "You signed out from your account.",
        time: "Yesterday, 06:15 PM",
        category: "Authentication",
        icon: <FiLogOut size={18} />,
    },
];

export default function ActivityLogPage() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-6">

            {/* Header */}
            <div>
                <div className="flex items-center gap-3">

                    <div className="
                        w-11
                        h-11
                        rounded-xl
                        bg-primary/10
                        text-primary
                        flex
                        items-center
                        justify-center
                    ">
                        <FiActivity size={21} />
                    </div>

                    <div>
                        <h1 className="
                            text-2xl
                            sm:text-3xl
                            font-extrabold
                        ">
                            Activity Log
                        </h1>

                        <p className="
                            mt-1
                            text-sm
                            text-muted-foreground
                        ">
                            Review recent activity on your account.
                        </p>
                    </div>

                </div>
            </div>

            {/* Summary */}
            <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-4
            ">

                <div className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-5
                ">
                    <p className="
                        text-sm
                        text-muted-foreground
                    ">
                        Total Activities
                    </p>

                    <p className="
                        mt-2
                        text-2xl
                        font-extrabold
                    ">
                        24
                    </p>
                </div>

                <div className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-5
                ">
                    <p className="
                        text-sm
                        text-muted-foreground
                    ">
                        This Week
                    </p>

                    <p className="
                        mt-2
                        text-2xl
                        font-extrabold
                    ">
                        12
                    </p>
                </div>

                <div className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-5
                ">
                    <p className="
                        text-sm
                        text-muted-foreground
                    ">
                        Security Events
                    </p>

                    <p className="
                        mt-2
                        text-2xl
                        font-extrabold
                    ">
                        5
                    </p>
                </div>

            </div>

            {/* Search / Filter */}
            <section className="
                rounded-2xl
                border
                border-border
                bg-card
                p-4
            ">

                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-3
                ">

                    <div className="
                        relative
                        flex-1
                    ">

                        <FiSearch className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-muted-foreground
                        " />

                        <input
                            type="search"
                            placeholder="Search activities..."
                            className="
                                w-full
                                h-11
                                rounded-xl
                                border
                                border-border
                                bg-background
                                pl-11
                                pr-4
                                text-sm
                                outline-none
                                focus:border-primary
                                focus:ring-4
                                focus:ring-primary/10
                                transition-all
                            "
                        />

                    </div>

                    <select
                        defaultValue="all"
                        className="
                            h-11
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            text-sm
                            outline-none
                            focus:border-primary
                        "
                    >
                        <option value="all">
                            All Activities
                        </option>

                        <option value="authentication">
                            Authentication
                        </option>

                        <option value="profile">
                            Profile
                        </option>

                        <option value="settings">
                            Settings
                        </option>

                        <option value="billing">
                            Billing
                        </option>

                        <option value="security">
                            Security
                        </option>
                    </select>

                </div>

            </section>

            {/* Activity List */}
            <section className="
                rounded-2xl
                border
                border-border
                bg-card
                overflow-hidden
            ">

                <div className="
                    p-5
                    sm:p-6
                    border-b
                    border-border
                ">

                    <h2 className="font-bold text-lg">
                        Recent Activity
                    </h2>

                    <p className="
                        mt-1
                        text-sm
                        text-muted-foreground
                    ">
                        Your latest account activities.
                    </p>

                </div>

                <div className="divide-y divide-border">

                    {activities.map((activity) => (

                        <div
                            key={activity.id}
                            className="
                                p-5
                                sm:p-6
                                flex
                                items-start
                                gap-4
                                hover:bg-secondary/40
                                transition-all
                            "
                        >

                            {/* Icon */}
                            <div className="
                                w-11
                                h-11
                                shrink-0
                                rounded-xl
                                bg-primary/10
                                text-primary
                                flex
                                items-center
                                justify-center
                            ">
                                {activity.icon}
                            </div>

                            {/* Content */}
                            <div className="min-w-0 flex-1">

                                <div className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    gap-1
                                ">

                                    <h3 className="
                                        font-bold
                                    ">
                                        {activity.title}
                                    </h3>

                                    <span className="
                                        text-xs
                                        text-muted-foreground
                                    ">
                                        {activity.time}
                                    </span>

                                </div>

                                <p className="
                                    mt-1
                                    text-sm
                                    text-muted-foreground
                                ">
                                    {activity.description}
                                </p>

                                <span className="
                                    inline-flex
                                    mt-3
                                    px-2.5
                                    py-1
                                    rounded-lg
                                    bg-secondary
                                    text-xs
                                    font-semibold
                                ">
                                    {activity.category}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    );
}