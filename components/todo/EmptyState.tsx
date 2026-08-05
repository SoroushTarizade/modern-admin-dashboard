"use client";

import { ClipboardList } from "lucide-react";

export default function EmptyState() {
    return (
        <div className="flex min-h-[300px] sm:min-h-[450px] flex-col items-center justify-center rounded-2xl bg-card">

            <ClipboardList
                size={60}
                className="text-gray-400 sm:h-[70px] sm:w-[70px]"
            />

            <h2 className="mt-6 text-center text-xl font-semibold sm:text-2xl">
                No Tasks Yet
            </h2>

            <p className="mt-2 px-6 text-center text-sm text-muted-foreground">
                Click on "Add New Task" to create your first task.
            </p>

        </div>
    );
}