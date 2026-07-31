import { Order } from "@/types/order";
import OrderRow from "./OrderRow";
import TableHeader from "./TableHeader";

interface OrderTableProps {
    orders: Order[];
}

export default function OrderTable({
    orders,
}: OrderTableProps) {
    return (
        <div className="w-[1141px] bg-card rounded-2xl mt-10 ml-10 overflow-hidden shadow-sm">

            <TableHeader />

            {orders.length === 0 ? (
                <div className="flex items-center justify-center py-20 text-muted-foreground font-medium">
                    No orders found.
                </div>
            ) : (
                <div>
                    {orders.map((order) => (
                        <OrderRow
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}