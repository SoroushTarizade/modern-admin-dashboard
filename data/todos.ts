import { Todo } from "@/types/todo";

export const todos: Todo[] = [
    {
        id: crypto.randomUUID(),
        title: "Meeting with CEO",
        completed: false,
        favorite: false,
        createdAt: new Date(),
    },
    {
        id: crypto.randomUUID(),
        title: "Finish Dashboard UI",
        completed: false,
        favorite: true,
        createdAt: new Date(),
    },
];