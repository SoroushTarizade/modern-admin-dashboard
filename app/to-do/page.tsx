"use client";

import { useState } from "react";

import TodoHeader from "@/components/todo/TodoHeader";
import TodoList from "@/components/todo/TodoList";
import AddTaskModal from "@/components/todo/AddTaskModal";

import useTodo from "@/hooks/useTodo";

export default function TodoPage() {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
    toggleFavorite,
  } = useTodo();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="
        min-h-screen
        bg-background
        text-foreground
      "
    >

      <main
        className="
          pt-[50px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
          "
        >
          <TodoHeader
            onAddTask={() => setModalOpen(true)}
          />

          <TodoList
            tasks={tasks}
            onToggleComplete={toggleComplete}
            onToggleFavorite={toggleFavorite}
            onDelete={deleteTask}
          />
        </div>
      </main>

      <AddTaskModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={addTask}
      />
    </div>
  );
}