import React from "react";

export interface Deal {
    id: number;
    customer: string;
    company: string;
    amount: string;
    status: "Completed" | "Pending" | "Cancelled";
}

interface DealRowProps {
    deal: Deal;
}

export default function DealRow({
    deal,
}: DealRowProps) {

    const statusColor = {
        Completed: "bg-green-500/10 text-green-500",
        Pending: "bg-yellow-500/10 text-yellow-500",
        Cancelled: "bg-red-500/10 text-red-500",
    };

    return (
        <tr className="border-b border-border hover:bg-secondary transition-all">

            <td className="py-4 font-medium">
                {deal.customer}
            </td>

            <td>
                {deal.company}
            </td>

            <td className="font-semibold">
                {deal.amount}
            </td>

            <td>

                <span
                    className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        ${statusColor[deal.status]}
                    `}
                >
                    {deal.status}
                </span>

            </td>

        </tr>
    );
}