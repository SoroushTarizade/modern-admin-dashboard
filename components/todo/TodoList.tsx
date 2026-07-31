"use client";

import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

import { Todo } from "@/types/todo";

interface TodoListProps {
    tasks: Todo[];

    onToggleComplete: (id: string) => void;

    onToggleFavorite: (id: string) => void;

    onDelete: (id: string) => void;
}

export default function TodoList({
    tasks,
    onToggleComplete,
    onToggleFavorite,
    onDelete,
}: TodoListProps) {
    if (tasks.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className="space-y-4">

            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onToggleFavorite={onToggleFavorite}
                    onDelete={onDelete}
                />
            ))}

        </div>
    );
}