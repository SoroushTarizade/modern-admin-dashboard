"use client";

import { useMemo, useState } from "react";
import { orders } from "@/data/orders";

export default function useOrders() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [type, setType] = useState("All");
    const [date, setDate] = useState("");

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchSearch =
                order.name.toLowerCase().includes(search.toLowerCase()) ||
                order.id.includes(search);

            const matchStatus =
                status === "All" || order.status === status;

            const matchType =
                type === "All" || order.type === type;

            const matchDate =
                date === "" || order.date === date;

            return (
                matchSearch &&
                matchStatus &&
                matchType &&
                matchDate
            );
        });
    }, [search, status, type, date]);

    function resetFilters() {
        setSearch("");
        setStatus("All");
        setType("All");
        setDate("");
    }

    return {
        search,
        setSearch,

        status,
        setStatus,

        type,
        setType,

        date,
        setDate,

        filteredOrders,

        resetFilters,
    };
}