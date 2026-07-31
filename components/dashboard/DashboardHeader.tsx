"use client";

import {
    FiDownload,
    FiRefreshCw,
    FiCalendar,
    FiActivity,
} from "react-icons/fi";

interface DashboardHeaderProps {
    title?: string;
    description?: string;
    onRefresh?: () => void;
    onExport?: () => void;
}

export default function DashboardHeader({
    title = "Dashboard",
    description = "Welcome back! Here's what's happening today.",
    onRefresh,
    onExport,
}: DashboardHeaderProps) {

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (

        <div
            className="
                w-full
                rounded-3xl
                border
                border-border
                bg-card/80
                backdrop-blur-xl
                shadow-sm
                p-7

            "
        >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="space-y-4">

                    <div className="flex items-center gap-3">

                        <h1 className="text-4xl font-bold tracking-tight">

                            {title}

                        </h1>

                        <span
                            className="
                                rounded-full
                                bg-primary/10
                                text-primary
                                px-3
                                py-1
                                text-xs
                                font-semibold
                            "
                        >
                            LIVE
                        </span>

                    </div>

                    <p className="text-muted-foreground text-[15px]">

                        {description}

                    </p>

                    <div className="flex flex-wrap items-center gap-5 text-sm">

                        <div className="flex items-center gap-2 text-muted-foreground">

                            <FiCalendar />

                            <span>{today}</span>

                        </div>

                        <div className="flex items-center gap-2 text-emerald-500">

                            <FiActivity />

                            <span>System Status : Online</span>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="flex items-center gap-4">

                    <button
                        onClick={onRefresh}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-border
                            bg-background
                            px-5
                            py-3
                            transition-all
                            hover:border-primary
                            hover:shadow-md
                        "
                    >

                        <div
                            className="
                                w-10
                                h-10
                                rounded-xl
                                bg-primary/10
                                flex
                                items-center
                                justify-center
                                group-hover:rotate-180
                                transition-all
                                duration-500
                            "
                        >

                            <FiRefreshCw
                                className="text-primary"
                                size={18}
                            />

                        </div>

                        <div className="text-left">

                            <p className="font-semibold">

                                Refresh

                            </p>

                            <p className="text-xs text-muted-foreground">

                                Sync latest data

                            </p>

                        </div>

                    </button>

                    <button
                        onClick={onExport}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-primary
                            px-5
                            py-3
                            text-white
                            transition-all
                            hover:scale-[1.03]
                            hover:shadow-xl
                        "
                    >

                        <div
                            className="
                                w-10
                                h-10
                                rounded-xl
                                bg-white/20
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <FiDownload size={18} />

                        </div>

                        <div className="text-left">

                            <p className="font-semibold">

                                Export

                            </p>

                            <p className="text-xs text-white/80">

                                Download Report

                            </p>

                        </div>

                    </button>

                </div>

            </div>

        </div>

    );

}