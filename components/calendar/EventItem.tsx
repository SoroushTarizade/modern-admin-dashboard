"use client";

import { CalendarEvent } from "@/types/calendar";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

interface EventItemProps {
    event: CalendarEvent;
    onClick?: (event: CalendarEvent) => void;
}

export default function EventItem({
    event,
    onClick,
}: EventItemProps) {
    return (
        <div
            onClick={() => onClick?.(event)}
            className="rounded-2xl border border-border bg-card p-5 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg"
        >
            <div className="flex items-center justify-between">

                <h3 className="font-bold text-lg">
                    {event.title}
                </h3>

                <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: event.color }}
                />

            </div>

            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">

                <div className="flex bg items-center gap-2">

                    <MdAccessTime />

                    <span>
                        {event.start}
                    </span>

                </div>

                {event.location && (
                    <div className="flex items-center gap-2">

                        <FaLocationDot />

                        <span>{event.location}</span>

                    </div>
                )}

            </div>

            {event.description && (
                <p className="mt-4 text-sm">
                    {event.description}
                </p>
            )}
        </div>
    );
}