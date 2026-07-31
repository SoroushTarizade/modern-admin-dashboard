import { Order } from "@/types/order";
import StatusBadge from "./StatusBadge";

interface Props {
    order: Order;
}

export default function OrderRow({ order }: Props) {
    return (
        <div className="grid grid-cols-6 items-center px-6 py-5 border-b border-border hover:bg-background transition-colors duration-200">
            <div className="font-semibold">
                {order.id}
            </div>

            <div>
                {order.name}
            </div>

            <div>
                {order.address}
            </div>

            <div>
                {order.date}
            </div>

            <div>
                {order.type}
            </div>

            <div>
                <StatusBadge status={order.status} />
            </div>
        </div>
    );
}