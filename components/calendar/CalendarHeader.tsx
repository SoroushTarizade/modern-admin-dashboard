"use client";

import { CalendarView } from "@/types/calendar";
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
} from "react-icons/fi";

interface CalendarHeaderProps {
    title: string;

    currentView: CalendarView;

    onPrev: () => void;

    onNext: () => void;

    onToday: () => void;

    onChangeView: (view: CalendarView) => void;

    onAddEvent: () => void;
}

const views: {
    label: string;
    value: CalendarView;
}[] = [
        {
            label: "Month",
            value: "dayGridMonth",
        },
        {
            label: "Week",
            value: "timeGridWeek",
        },
        {
            label: "Day",
            value: "timeGridDay",
        },
        {
            label: "List",
            value: "listWeek",
        },
    ];

export default function CalendarHeader({
    title,
    currentView,
    onPrev,
    onNext,
    onToday,
    onChangeView,
    onAddEvent,
}: CalendarHeaderProps) {
    return (
        <div className="mb-6 flex items-center justify-between rounded-xl bg-card p-5 shadow-sm">

            <div className="flex items-center gap-3">

                <button
                    onClick={onToday}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-muted"
                >
                    Today
                </button>

                <button
                    onClick={onPrev}
                    className="rounded-lg border p-2"
                >
                    <FiChevronLeft size={20} />
                </button>

                <button
                    onClick={onNext}
                    className="rounded-lg border p-2"
                >
                    <FiChevronRight size={20} />
                </button>

                <h2 className="ml-2 text-2xl font-bold">
                    {title}
                </h2>

            </div>

            <div className="flex items-center gap-2">

                {views.map((view) => (
                    <button
                        key={view.value}
                        onClick={() =>
                            onChangeView(view.value)
                        }
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition
              ${currentView === view.value
                                ? "bg-primary text-white"
                                : "bg-card "
                            }
            `}
                    >
                        {view.label}
                    </button>
                ))}

                <button
                    onClick={onAddEvent}
                    className="ml-3 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-muted"
                >
                    <FiPlus />

                    Add Event
                </button>

            </div>

        </div>
    );
}