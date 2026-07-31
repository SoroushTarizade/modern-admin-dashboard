import { OrderStatus } from "@/types/order";

interface Props {
    status: OrderStatus;
}

export default function StatusBadge({ status }: Props) {
    const statusStyle = {
        Completed: "bg-success text-white",
        Processing: "bg-info text-white",
        Rejected: "bg-destructive text-white",
        "On Hold": "bg-warning text-black",
    };

    return (
        <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${statusStyle[status]}`}
        >
            {status}
        </span>
    );
}