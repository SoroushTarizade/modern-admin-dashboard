"use client";

import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

import { CalendarEvent, EventColor } from "@/types/calendar";

interface EventModalProps {
    open: boolean;

    onClose: () => void;

    onSave: (event: CalendarEvent) => void;

    selectedDate?: Date | null;
}

const colors: {
    value: EventColor;
    bg: string;
}[] = [
        {
            value: "blue",
            bg: "#4880FF",
        },
        {
            value: "green",
            bg: "#22C55E",
        },
        {
            value: "orange",
            bg: "#F59E0B",
        },
        {
            value: "red",
            bg: "#EF4444",
        },
        {
            value: "purple",
            bg: "#8B5CF6",
        },
    ];

const pad = (value: number) => value.toString().padStart(2, "0");

const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${pad(
        date.getMonth() + 1
    )}-${pad(date.getDate())}`;
};

export default function EventModal({
    open,
    onClose,
    onSave,
    selectedDate,
}: EventModalProps) {
    const [title, setTitle] = useState("");

    const [description, setDescription] =
        useState("");

    const [location, setLocation] =
        useState("");

    const [date, setDate] = useState("");

    const [startTime, setStartTime] =
        useState("09:00");

    const [endTime, setEndTime] =
        useState("10:00");

    const [allDay, setAllDay] =
        useState(false);

    const [color, setColor] =
        useState<EventColor>("blue");

    useEffect(() => {
        if (!selectedDate) return;

        setDate(formatDate(selectedDate));
    }, [selectedDate]);

    useEffect(() => {
        if (!open) return;

        if (!selectedDate) {
            setDate(formatDate(new Date()));
        }

        setTitle("");
        setDescription("");
        setLocation("");
        setStartTime("09:00");
        setEndTime("10:00");
        setColor("blue");
        setAllDay(false);
    }, [open, selectedDate]);

    const handleSubmit = () => {
        if (!title.trim()) return;

        const event: CalendarEvent = {
            id: crypto.randomUUID(),

            title,

            description,

            location,

            allDay,

            color,

            start: allDay
                ? date
                : `${date}T${startTime}:00`,

            end: allDay
                ? undefined
                : `${date}T${endTime}:00`,

            backgroundColor:
                colors.find(
                    (item) => item.value === color
                )?.bg,

            borderColor:
                colors.find(
                    (item) => item.value === color
                )?.bg,

            textColor: "#ffffff",
        };

        onSave(event);

        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="w-full max-w-xl rounded-2xl bg-card shadow-2xl ">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-border p-6">

                    <h2 className="text-2xl font-bold">
                        Add Event
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 transition hover:bg-destructive"
                    >
                        <FiX size={22} />
                    </button>

                </div>

                {/* Body */}

                <div className="space-y-5 p-6">

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                            placeholder="Meeting..."
                            className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Description
                        </label>

                        <textarea
                            rows={4}
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            className="w-full resize-none rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-[#4880FF]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Location
                        </label>

                        <input
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)
                            }
                            className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-primary"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Date
                            </label>

                            <input
                                type="date"
                                value={date}
                                onChange={(e) =>
                                    setDate(e.target.value)
                                }
                                className="w-full rounded-xl border border-border bg-transparent px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Start
                            </label>

                            <input
                                type="time"
                                disabled={allDay}
                                value={startTime}
                                onChange={(e) =>
                                    setStartTime(e.target.value)
                                }
                                className="w-full rounded-xl border border-border bg-transparent px-4 py-3 disabled:opacity-50"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                End
                            </label>

                            <input
                                type="time"
                                disabled={allDay}
                                value={endTime}
                                onChange={(e) =>
                                    setEndTime(e.target.value)
                                }
                                className="w-full rounded-xl border border-border bg-transparent px-4 py-3 disabled:opacity-50"
                            />
                        </div>

                    </div>

                    <div className="flex items-center gap-3">

                        <input
                            id="allDay"
                            type="checkbox"
                            checked={allDay}
                            onChange={(e) =>
                                setAllDay(e.target.checked)
                            }
                        />

                        <label
                            htmlFor="allDay"
                            className="font-medium"
                        >
                            All Day Event
                        </label>

                    </div>

                    <div>

                        <p className="mb-3 text-sm font-medium">
                            Event Color
                        </p>

                        <div className="flex gap-3">

                            {colors.map((item) => (

                                <button
                                    key={item.value}
                                    type="button"
                                    onClick={() =>
                                        setColor(item.value)
                                    }
                                    className={`h-10 w-10 rounded-full border-4 transition border-border ${color === item.value
                                        ? "border-black dark:border-white scale-110"
                                        : "border-transparent"
                                        }`}
                                    style={{
                                        backgroundColor: item.bg,
                                    }}
                                />

                            ))}

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="flex justify-end gap-3 border-t border-border p-6">

                    <button
                        onClick={onClose}
                        className="rounded-xl border px-5 py-2.5 font-medium"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="rounded-xl bg-primary px-6 py-2.5 font-semibold text-muted transition hover:opacity-90"
                    >
                        Save Event
                    </button>

                </div>

            </div>

        </div>
    );
}