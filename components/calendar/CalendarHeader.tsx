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
        <div
            className="
                mb-6
                rounded-2xl
                border
                border-border
                bg-card
                p-4
                sm:p-6
                shadow-sm
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-6
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                "
            >
                {/* Left */}

                <div
                    className="
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                        sm:flex-wrap
                        sm:items-center
                    "
                >
                    <button
                        onClick={onToday}
                        className="
                            h-11
                            rounded-xl
                            bg-primary
                            px-5
                            font-semibold
                            text-white
                            transition
                            hover:opacity-90
                        "
                    >
                        Today
                    </button>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={onPrev}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-border
                                transition
                                hover:bg-muted
                            "
                        >
                            <FiChevronLeft size={18} />
                        </button>

                        <button
                            onClick={onNext}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-border
                                transition
                                hover:bg-muted
                            "
                        >
                            <FiChevronRight size={18} />
                        </button>
                    </div>

                    <h2
                        className="
                            text-xl
                            sm:text-2xl
                            font-bold
                        "
                    >
                        {title}
                    </h2>
                </div>

                {/* Right */}

                <div
                    className="
                        flex
                        flex-col
                        gap-4
                        lg:flex-row
                        lg:items-center
                    "
                >
                    <div
                        className="
                            flex
                            flex-wrap
                            gap-2
                        "
                    >
                        {views.map((view) => (
                            <button
                                key={view.value}
                                onClick={() =>
                                    onChangeView(view.value)
                                }
                                className={`
                                    h-11
                                    rounded-xl
                                    px-4
                                    text-sm
                                    font-medium
                                    transition

                                    ${currentView === view.value
                                        ? "bg-primary text-white"
                                        : "border border-border hover:bg-muted"
                                    }
                                `}
                            >
                                {view.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={onAddEvent}
                        className="
                            flex
                            h-11
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-primary
                            px-5
                            font-semibold
                            text-white
                            transition
                            hover:opacity-90
                        "
                    >
                        <FiPlus />

                        Add Event
                    </button>
                </div>
            </div>
        </div>
    );
}