"use client";

import { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import {
    DateSelectArg,
    EventChangeArg,
    EventClickArg,
} from "@fullcalendar/core";

import useCalendar from "@/hooks/useCalendar";

import CalendarHeader from "./CalendarHeader";
import EventModal from "./EventModal";

import { CalendarEvent } from "@/types/calendar";

export default function CalendarView() {
    const {
        calendarRef,
        events,
        currentTitle,
        currentView,
        next,
        prev,
        today,
        changeView,
        addEvent,
        updateTitle,
    } = useCalendar();

    const [modalOpen, setModalOpen] = useState(false);

    const [selectedDate, setSelectedDate] =
        useState<Date | null>(null);

    useEffect(() => {
        updateTitle();
    }, [updateTitle]);

    const handleDateSelect = (info: DateSelectArg) => {
        setSelectedDate(info.start);
        setModalOpen(true);
    };

    const handleAddEvent = () => {
        setSelectedDate(new Date());
        setModalOpen(true);
    };

    const handleSaveEvent = (event: CalendarEvent) => {
        addEvent(event);
    };

    const handleDatesSet = () => {
        updateTitle();
    };

    const handleEventChange = (
        info: EventChangeArg
    ) => {
        console.log("Updated Event:", info.event);
    };

    const handleEventClick = (
        info: EventClickArg
    ) => {
        console.log("Clicked Event:", info.event);
    };

    return (
        <>
            <CalendarHeader
                title={currentTitle}
                currentView={currentView}
                onPrev={prev}
                onNext={next}
                onToday={today}
                onChangeView={changeView}
                onAddEvent={handleAddEvent}
            />

            <div className="rounded-2xl bg-card p-6 shadow-sm">

                <FullCalendar
                    ref={calendarRef}
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]}
                    initialView={currentView}
                    headerToolbar={false}
                    editable
                    selectable
                    selectMirror
                    dayMaxEvents
                    weekends
                    nowIndicator
                    navLinks
                    droppable
                    eventResizableFromStart
                    eventDurationEditable
                    events={events}
                    height="auto"
                    firstDay={6}
                    select={handleDateSelect}
                    datesSet={handleDatesSet}
                    eventChange={handleEventChange}
                    eventDrop={handleEventChange}
                    eventResize={handleEventChange}
                    eventClick={handleEventClick}
                    dayCellClassNames={() => [
                        "hover:bg-card",
                        "cursor-pointer",
                        "transition-all",
                    ]}
                    eventClassNames={() => [
                        "!rounded-lg",
                        "!border-0",
                        "!px-1",
                        "!py-0.5",
                        "!text-sm",
                        "!font-medium",
                        "!shadow-sm",
                    ]}
                    buttonText={{
                        today: "Today",
                        month: "Month",
                        week: "Week",
                        day: "Day",
                        list: "List",
                    }}
                />

            </div>

            <EventModal
                open={modalOpen}
                selectedDate={selectedDate}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveEvent}
            />
        </>
    );
}