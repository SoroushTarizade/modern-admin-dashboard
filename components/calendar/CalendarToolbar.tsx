"use client";

import { FiSearch } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CalendarToolbarProps {
    onToday?: () => void;
    onPrev?: () => void;
    onNext?: () => void;
    onAddEvent?: () => void;
}

export default function CalendarToolbar({
    onToday,
    onPrev,
    onNext,
    onAddEvent,
}: CalendarToolbarProps) {
    return (
        <div className="bg-card border border-border rounded-2xl p-5 mb-8">

            <div className="flex flex-wrap items-center justify-between gap-4">

                {/* Search */}

                <div className="relative w-[320px]">

                    <FiSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search events..."
                        className="w-full h-11 rounded-xl border border-border bg-background pl-11 pr-4 outline-none focus:border-primary transition"
                    />

                </div>

                {/* Controls */}

                <div className="flex items-center gap-3">

                    <button
                        onClick={onToday}
                        className="px-5 h-11 rounded-xl border border-border hover:bg-primary hover:text-muted transition cursor-pointer"
                    >
                        Today
                    </button>

                    <button
                        onClick={onPrev}
                        className="w-11 h-11 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-muted transition cursor-pointer"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={onNext}
                        className="w-11 h-11 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-muted transition cursor-pointer"
                    >
                        <FaChevronRight />
                    </button>

                    <button
                        onClick={onAddEvent}
                        className="h-11 px-5 rounded-xl bg-primary text-muted flex items-center gap-2 hover:opacity-90 transition cursor-pointer"
                    >
                        <HiOutlinePlus size={20} />
                        Add Event
                    </button>

                </div>

            </div>

        </div>
    );
}