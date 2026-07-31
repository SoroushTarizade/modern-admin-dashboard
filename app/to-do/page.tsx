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

  const [modalOpen, setModalOpen] =
    useState(false);

  return (
    <div className="bg-background text-foreground flex justify-center">

      <div className="flex w-[1440px]">

        <Sidebar />

        <div className="flex-1">

          <Header />

          <main className="p-10">

            <TodoHeader
              onAddTask={() =>
                setModalOpen(true)
              }
            />

            <TodoList
              tasks={tasks}
              onToggleComplete={
                toggleComplete
              }
              onToggleFavorite={
                toggleFavorite
              }
              onDelete={deleteTask}
            />

          </main>

        </div>

      </div>

      <AddTaskModal
        open={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onSave={addTask}
      />

    </div>
  );
}