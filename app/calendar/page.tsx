"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import CalendarView from "@/components/calendar/CalendarView";

export default function CalendarPage() {
    return (
        <div
            className="
                min-h-screen
                bg-background
                text-foreground
            "
        >
            <Sidebar />

            <Header title="Calendar" />

            <main
                className="
                    pt-[98px]
                    px-4
                    sm:px-6
                    lg:px-8

                    md:ml-[220px]
                    lg:ml-[240px]
                "
            >
                <div
                    className="
                        mx-auto
                        w-full
                        max-w-7xl
                    "
                >
                    <h1
                        className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            mb-8
                        "
                    >
                        Calendar
                    </h1>

                    <CalendarView />
                </div>
            </main>
        </div>
    );
}