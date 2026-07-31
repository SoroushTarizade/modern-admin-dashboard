import { CalendarEvent } from "@/types/calendar";

export const calendarEvents: CalendarEvent[] = [
    {
        id: "1",
        title: "Design Meeting",
        description: "Discuss Dashboard UI",
        start: "2026-07-24T09:00:00",
        end: "2026-07-24T10:30:00",
        color: "blue",
        backgroundColor: "#4880FF",
        borderColor: "#4880FF",
        textColor: "#ffffff",
        location: "Meeting Room",
    },

    {
        id: "2",
        title: "Team Standup",
        start: "2026-07-25T10:00:00",
        end: "2026-07-25T10:30:00",
        color: "green",
        backgroundColor: "#22C55E",
        borderColor: "#22C55E",
        textColor: "#ffffff",
    },

    {
        id: "3",
        title: "Client Call",
        start: "2026-07-26T14:00:00",
        end: "2026-07-26T15:00:00",
        color: "orange",
        backgroundColor: "#F59E0B",
        borderColor: "#F59E0B",
        textColor: "#ffffff",
    },

    {
        id: "4",
        title: "Volleyball Training",
        start: "2026-07-27T18:00:00",
        end: "2026-07-27T20:00:00",
        color: "red",
        backgroundColor: "#EF4444",
        borderColor: "#EF4444",
        textColor: "#ffffff",
        location: "University Gym",
    },

    {
        id: "5",
        title: "Project Deadline",
        start: "2026-07-29",
        allDay: true,
        color: "purple",
        backgroundColor: "#8B5CF6",
        borderColor: "#8B5CF6",
        textColor: "#ffffff",
    },
];