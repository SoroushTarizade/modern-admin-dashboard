"use client";

import { useMemo, useState } from "react";
import { invoices } from "@/data/invoices";
import { Invoice } from "@/types/invoice";

export default function useInvoice() {
    const [invoice, setInvoice] = useState<Invoice>(invoices[0]);

    const subtotal = useMemo(() => {
        return invoice.items.reduce(
            (total, item) => total + item.quantity * item.price,
            0
        );
    }, [invoice]);

    const total = useMemo(() => {
        return (
            subtotal -
            invoice.discount +
            invoice.tax +
            invoice.shipping
        );
    }, [
        subtotal,
        invoice.discount,
        invoice.tax,
        invoice.shipping,
    ]);

    const sendInvoice = () => {
        console.log("Invoice Sent");
        alert("Invoice Sent Successfully!");
    };

    const changeStatus = (
        status: Invoice["status"]
    ) => {
        setInvoice((prev) => ({
            ...prev,
            status,
        }));
    };

    return {
        invoice,

        subtotal,
        total,

        sendInvoice,
        changeStatus,
    };
}