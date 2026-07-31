"use client";

import { useState } from "react";

import { todos } from "@/data/todos";
import { Todo } from "@/types/todo";

export default function useTodo() {
    const [tasks, setTasks] = useState<Todo[]>(todos);

    const addTask = (title: string) => {
        if (!title.trim()) return;

        const newTask: Todo = {
            id: crypto.randomUUID(),
            title: title.trim(),
            completed: false,
            favorite: false,
            createdAt: new Date(),
        };

        setTasks((prev) => [newTask, ...prev]);
    };

    const deleteTask = (id: string) => {
        setTasks((prev) =>
            prev.filter((task) => task.id !== id)
        );
    };

    const toggleComplete = (id: string) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        completed: !task.completed,
                    }
                    : task
            )
        );
    };

    const toggleFavorite = (id: string) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        favorite: !task.favorite,
                    }
                    : task
            )
        );
    };

    const updateTask = (
        id: string,
        title: string
    ) => {
        if (!title.trim()) return;

        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        title: title.trim(),
                    }
                    : task
            )
        );
    };

    const clearCompleted = () => {
        setTasks((prev) =>
            prev.filter((task) => !task.completed)
        );
    };

    const completedCount =
        tasks.filter((task) => task.completed).length;

    const pendingCount =
        tasks.length - completedCount;

    const favoriteTasks =
        tasks.filter((task) => task.favorite);

    const completedTasks =
        tasks.filter((task) => task.completed);

    return {
        tasks,

        addTask,

        deleteTask,

        toggleComplete,

        toggleFavorite,

        updateTask,

        clearCompleted,

        completedCount,

        pendingCount,

        favoriteTasks,

        completedTasks,
    };
}