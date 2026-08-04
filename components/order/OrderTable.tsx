"use client";

import { Order } from "@/types/order";

import TableHeader from "./TableHeader";
import OrderRow from "./OrderRow";
import OrderCard from "./OrderCard";

interface OrderTableProps {
    orders: Order[];
}

export default function OrderTable({
    orders,
}: OrderTableProps) {

    if (orders.length === 0) {
        return (

            <div
                className="
                    mt-8

                    rounded-2xl

                    bg-card

                    py-20

                    text-center

                    text-muted-foreground

                    font-medium
                "
            >
                No orders found.
            </div>

        );
    }

    return (

        <>

            {/* ------------------ */}
            {/* Desktop Table */}
            {/* ------------------ */}

            <div
                className="
                    hidden
                    lg:block

                    mt-8

                    w-full

                    overflow-hidden

                    rounded-2xl

                    bg-card

                    shadow-sm
                "
            >

                <TableHeader />

                <div>

                    {orders.map((order) => (

                        <OrderRow
                            key={order.id}
                            order={order}
                        />

                    ))}

                </div>

            </div>

            {/* ------------------ */}
            {/* Mobile / Tablet */}
            {/* ------------------ */}

            <div
                className="
                    mt-8

                    grid

                    gap-5

                    lg:hidden
                "
            >

                {orders.map((order) => (

                    <OrderCard
                        key={order.id}
                        order={order}
                    />

                ))}

            </div>

        </>

    );

}