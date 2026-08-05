"use client";

import { useState } from "react";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

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
      <Sidebar />

      <Header title="To-Do List" />

      <main
        className="
          pt-[98px]
          px-4
          sm:px-6
          lg:px-8

          md:ml-[220px]
          lg:ml-[240px]
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