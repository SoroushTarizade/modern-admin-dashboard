"use client";

import { FiCalendar, FiMapPin, FiPackage } from "react-icons/fi";
import { Order } from "@/types/order";
import StatusBadge from "./StatusBadge";

interface Props {
    order: Order;
}

export default function OrderCard({ order }: Props) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-border
                bg-card
                p-5
                shadow-sm
                transition-all
                hover:shadow-lg
                hover:border-primary/30
            "
        >
            {/* Top */}

            <div className="flex items-start justify-between gap-3">

                <div>

                    <p className="text-xs text-muted-foreground">
                        Order ID
                    </p>

                    <h3 className="text-lg font-bold mt-1">
                        #{order.id}
                    </h3>

                </div>

                <StatusBadge status={order.status} />

            </div>

            <div className="mt-5 space-y-4">

                {/* Customer */}

                <div>

                    <p className="text-xs text-muted-foreground">
                        Customer
                    </p>

                    <p className="font-semibold">
                        {order.name}
                    </p>

                </div>

                {/* Address */}

                <div className="flex items-start gap-3">

                    <FiMapPin
                        className="
                            mt-0.5
                            shrink-0
                            text-primary
                        "
                    />

                    <div>

                        <p className="text-xs text-muted-foreground">
                            Address
                        </p>

                        <p className="text-sm">
                            {order.address}
                        </p>

                    </div>

                </div>

                {/* Date */}

                <div className="flex items-center gap-3">

                    <FiCalendar
                        className="text-primary"
                    />

                    <div>

                        <p className="text-xs text-muted-foreground">
                            Date
                        </p>

                        <p className="text-sm">
                            {order.date}
                        </p>

                    </div>

                </div>

                {/* Type */}

                <div className="flex items-center gap-3">

                    <FiPackage
                        className="text-primary"
                    />

                    <div>

                        <p className="text-xs text-muted-foreground">
                            Type
                        </p>

                        <p className="text-sm font-medium">
                            {order.type}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}