export interface InvoiceItem {
    id: number;
    description: string;
    quantity: number;
    price: number;
}

export interface Invoice {
    id: number;

    invoiceNumber: string;

    invoiceDate: string;

    dueDate: string;

    from: {
        name: string;
        address: string;
    };

    to: {
        name: string;
        address: string;
    };

    status: "Paid" | "Pending" | "Cancelled";

    items: InvoiceItem[];

    discount: number;

    tax: number;

    shipping: number;

    notes?: string;
}