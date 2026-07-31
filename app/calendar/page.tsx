import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import CalendarView from "@/components/calendar/CalendarView";

export default function CalendarPage() {
    return (
        <div className="flex min-h-screen bg-background text-foreground justify-center">
            <div className="w-[1440px] flex flex-row justify-between">
                <Sidebar />

                <div className="flex flex-1 flex-col">

                    <Header title="Calendar" />
                    <div className="ml-10 mt-15">
                        <h1 className="text-3xl font-bold">
                            Calendar
                        </h1>
                    </div>
                    <main className="flex-1 p-6">

                        <CalendarView />

                    </main>

                </div>
            </div>

        </div>
    );
}