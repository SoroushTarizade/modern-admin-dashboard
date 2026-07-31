"use client";

interface TodoHeaderProps {
    onAddTask: () => void;
}

export default function TodoHeader({
    onAddTask,
}: TodoHeaderProps) {
    return (
        <div className="mb-8 flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-foreground">
                    To-Do List
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Organize and manage your daily tasks.
                </p>
            </div>

            <button
                onClick={onAddTask}
                className="rounded-2xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
                Add New Task
            </button>
        </div>
    );
}