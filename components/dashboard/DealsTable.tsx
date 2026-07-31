"use client";

import { Deal } from "@/types/dashboard";
import DealRow from "./DealRow";

interface DealsTableProps {
    deals: Deal[];
}

export default function DealsTable({
    deals,
}: DealsTableProps) {
    return (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold">
                        Latest Deals
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Recent business deals
                    </p>
                </div>

                <button className="text-sm font-semibold text-primary hover:underline">
                    View All
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-border text-left text-sm text-muted-foreground">
                            <th className="pb-3">Customer</th>
                            <th className="pb-3">Company</th>
                            <th className="pb-3">Amount</th>
                            <th className="pb-3">Date</th>
                            <th className="pb-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {deals.map((deal) => (
                            <DealRow
                                key={deal.id}
                                deal={deal}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}