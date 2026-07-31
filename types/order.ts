export type OrderStatus =
    | "Completed"
    | "Processing"
    | "Rejected"
    | "On Hold";

export type OrderType =
    | "Book"
    | "Electronics"
    | "Furniture"
    | "Fashion";

export interface Order {
    id: string;
    name: string;
    address: string;
    date: string;
    type: OrderType;
    status: OrderStatus;
}