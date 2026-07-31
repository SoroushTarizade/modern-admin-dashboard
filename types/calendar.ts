export type CalendarView =
    | "dayGridMonth"
    | "timeGridWeek"
    | "timeGridDay"
    | "listWeek";

export type EventColor =
    | "blue"
    | "green"
    | "orange"
    | "red"
    | "purple";

export interface CalendarEvent {
    id: string;

    title: string;

    description?: string;

    start: string;

    end?: string;

    allDay?: boolean;

    color: EventColor;

    location?: string;

    backgroundColor?: string;

    borderColor?: string;

    textColor?: string;
}