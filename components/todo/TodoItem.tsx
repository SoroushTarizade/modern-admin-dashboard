"use client";

import { Star, Trash2, X } from "lucide-react";

import { Todo } from "@/types/todo";

interface TodoItemProps {
    task: Todo;

    onToggleComplete: (id: string) => void;

    onToggleFavorite: (id: string) => void;

    onDelete: (id: string) => void;
}

export default function TodoItem({
    task,
    onToggleComplete,
    onToggleFavorite,
    onDelete,
}: TodoItemProps) {
    return (
        <div
            className={`flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between rounded-2xl  transition-all duration-300
      ${task.completed
                    ? "bg-primary"
                    : "bg-card"
                }`}
        >
            <div className="flex items-start gap-5">

                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                        onToggleComplete(task.id)
                    }
                    className="h-6 w-6 cursor-pointer rounded accent-primary"
                />

                <p
                    className={`text-base sm:text-lg break-words transition-all
                            ${task.completed
                            ? "line-through text-white opacity-80"
                            : "text-foreground"
                        }`}
                >
                    {task.title}
                </p>

            </div>

            <div className="flex items-center justify-end  gap-5 sm:justify-center">

                {task.completed ? (
                    <Trash2
                        size={24}
                        className="cursor-pointer text-white transition hover:scale-110"
                        onClick={() =>
                            onDelete(task.id)
                        }
                    />
                ) : (
                    <>
                        <Star
                            size={24}
                            fill={
                                task.favorite
                                    ? "#FACC15"
                                    : "transparent"
                            }
                            className={`cursor-pointer transition
              ${task.favorite
                                    ? "text-yellow-400"
                                    : "text-gray-400"
                                }`}
                            onClick={() =>
                                onToggleFavorite(task.id)
                            }
                        />

                        <X
                            size={24}
                            className="cursor-pointer text-red-500 transition hover:scale-110"
                            onClick={() =>
                                onDelete(task.id)
                            }
                        />
                    </>
                )}

            </div>
        </div>
    );
}