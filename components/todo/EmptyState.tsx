"use client";

import { ClipboardList } from "lucide-react";

export default function EmptyState() {
    return (
        <div className="flex h-[450px] flex-col items-center justify-center rounded-2xl bg-card">

            <ClipboardList
                size={70}
                className="text-gray-400"
            />

            <h2 className="mt-6 text-2xl font-semibold text-foreground">
                No Tasks Yet
            </h2>

            <p className="mt-2 text-muted-foreground">
                Click on "Add New Task" to create your first task.
            </p>

        </div>
    );
}