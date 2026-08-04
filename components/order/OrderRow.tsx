"use client";

import { Order } from "@/types/order";
import StatusBadge from "./StatusBadge";

interface Props {
    order: Order;
}

export default function OrderRow({ order }: Props) {
    return (
        <div
            className="
                grid
                grid-cols-6

                items-center

                px-6
                py-5

                border-b
                border-border

                transition-colors
                duration-200

                hover:bg-background
            "
        >
            {/* ID */}

            <div className="font-semibold text-primary">
                #{order.id}
            </div>

            {/* Name */}

            <div
                className="
                    font-medium

                    truncate
                "
            >
                {order.name}
            </div>

            {/* Address */}

            <div
                className="
                    truncate

                    text-muted-foreground
                "
            >
                {order.address}
            </div>

            {/* Date */}

            <div className="text-sm">
                {order.date}
            </div>

            {/* Type */}

            <div>
                <span
                    className="
                        inline-flex

                        rounded-full

                        bg-secondary

                        px-3
                        py-1

                        text-xs

                        font-medium
                    "
                >
                    {order.type}
                </span>
            </div>

            {/* Status */}

            <div>
                <StatusBadge status={order.status} />
            </div>
        </div>
    );
}