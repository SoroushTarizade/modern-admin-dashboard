import { Invoice } from "@/types/invoice";

export const invoices: Invoice[] = [
    {
        id: 1,

        invoiceNumber: "INV-2026-001",

        invoiceDate: "12 Nov 2026",

        dueDate: "25 Dec 2026",

        from: {
            name: "Virginia Walker",
            address: "9694 Krajcik Locks Suite 635",
        },

        to: {
            name: "Austin Miller",
            address: "Brookview",
        },

        status: "Paid",

        items: [
            {
                id: 1,
                description: "Children Toy",
                quantity: 2,
                price: 40,
            },

            {
                id: 2,
                description: "Laptop Bag",
                quantity: 1,
                price: 80,
            },

            {
                id: 3,
                description: "Gaming Mouse",
                quantity: 3,
                price: 35,
            },

            {
                id: 4,
                description: "Mechanical Keyboard",
                quantity: 1,
                price: 120,
            },

            {
                id: 5,
                description: "USB-C Hub",
                quantity: 2,
                price: 55,
            },
        ],

        discount: 30,

        tax: 40,

        shipping: 20,

        notes:
            "Thank you for your business. Please complete the payment before the due date.",
    },
];