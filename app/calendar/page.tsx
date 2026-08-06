"use client";
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

            <main
                className="
                    pt-[50px]
                    px-4
                    sm:px-6
                    lg:px-8
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