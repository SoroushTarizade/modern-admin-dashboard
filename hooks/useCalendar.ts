"use client";

import { useRef, useState } from "react";
import { CalendarApi } from "@fullcalendar/core";
import { CalendarEvent, CalendarView } from "@/types/calendar";
import { calendarEvents } from "@/data/calendarEvents";

export default function useCalendar() {
    const calendarRef = useRef<any>(null);

    const [events, setEvents] =
        useState<CalendarEvent[]>(calendarEvents);

    const [currentView, setCurrentView] =
        useState<CalendarView>("dayGridMonth");

    const [currentTitle, setCurrentTitle] =
        useState("");

    const getApi = (): CalendarApi | null => {
        return calendarRef.current?.getApi() ?? null;
    };

    const updateTitle = () => {
        const api = getApi();

        if (!api) return;

        setCurrentTitle(api.view.title);
    };

    const next = () => {
        const api = getApi();

        if (!api) return;

        api.next();
        updateTitle();
    };

    const prev = () => {
        const api = getApi();

        if (!api) return;

        api.prev();
        updateTitle();
    };

    const today = () => {
        const api = getApi();

        if (!api) return;

        api.today();
        updateTitle();
    };

    const changeView = (view: CalendarView) => {
        const api = getApi();

        if (!api) return;

        api.changeView(view);

        setCurrentView(view);

        updateTitle();
    };

    const addEvent = (event: CalendarEvent) => {
        setEvents((prev) => [...prev, event]);
    };

    return {
        calendarRef,

        events,

        currentView,

        currentTitle,

        next,

        prev,

        today,

        changeView,

        addEvent,

        updateTitle,
    };
}