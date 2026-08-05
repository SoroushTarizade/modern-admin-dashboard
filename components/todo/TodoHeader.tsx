"use client";

interface TodoHeaderProps {
    onAddTask: () => void;
}

export default function TodoHeader({
    onAddTask,
}: TodoHeaderProps) {
    return (
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                    To-Do List
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Organize and manage your daily tasks.
                </p>
            </div>

            <button
                onClick={onAddTask}
                className="w-full rounded-2xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90
                sm:w-auto
                "
            >
                Add New Task
            </button>
        </div>
    );
}