import { FiMail } from "react-icons/fi";

export default function EmptyMail() {
    return (
        <div className="flex h-[600px] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <FiMail className="text-4xl text-primary" />
            </div>

            <h2 className="mt-6 text-2xl font-bold">
                No emails found
            </h2>

            <p className="mt-2 text-center text-muted-foreground max-w-sm">
                There are no emails matching the current filters.
                Try changing the category, label or search keyword.
            </p>

        </div>
    );
}