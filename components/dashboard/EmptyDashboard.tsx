import { FiInbox } from "react-icons/fi";

interface EmptyDashboardProps {
    title?: string;
    description?: string;
}

export default function EmptyDashboard({
    title = "No Dashboard Data",
    description = "There is currently no information to display.",
}: EmptyDashboardProps) {
    return (
        <div className="bg-card rounded-2xl border border-dashed border-border py-20">

            <div className="flex flex-col items-center">

                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">

                    <FiInbox
                        className="text-primary"
                        size={38}
                    />

                </div>

                <h2 className="mt-6 text-2xl font-bold">
                    {title}
                </h2>

                <p className="mt-3 text-muted-foreground text-center max-w-md">
                    {description}
                </p>

            </div>

        </div>
    );
}