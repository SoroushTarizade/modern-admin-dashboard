"use client";

import { Order } from "@/types/dashboard";

interface RecentOrdersProps {
    orders: Order[];
}

export default function RecentOrders({
    orders,
}: RecentOrdersProps) {
    const statusColor = {
        Completed: "bg-green-500/10 text-green-500",
        Pending: "bg-yellow-500/10 text-yellow-500",
        Cancelled: "bg-red-500/10 text-red-500",
    };

    return (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-xl font-bold">
                        Recent Orders
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Latest customer orders
                    </p>
                </div>

                <button className="text-sm font-semibold text-primary hover:underline">
                    View All
                </button>

            </div>

            <div className="space-y-4">

                {orders.map((order) => (

                    <div
                        key={order.id}
                        className="flex items-center justify-between rounded-xl border border-border p-4 transition hover:bg-secondary"
                    >

                        <div>
                            <h3 className="font-semibold">
                                #{order.id}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {order.customer}
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                {order.product}
                            </p>
                        </div>

                        <div className="text-right">

                            <p className="font-bold">
                                {order.total}
                            </p>

                            <span
                                className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColor[order.status]}`}
                            >
                                {order.status}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}