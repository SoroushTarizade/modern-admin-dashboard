"use client";

import { useMemo, useState } from "react";

import FilterBar from "@/components/order/FilterBar";
import OrderTable from "@/components/order/OrderTable";
import Pagination from "@/components/order/Pagination";

import { orders } from "@/data/orders";

export default function OrdersPage() {
    const [date, setDate] = useState("");
    const [status, setStatus] = useState<string[]>([]);
    const [type, setType] = useState<string[]>([]);

    const [currentPage, setCurrentPage] = useState(1);

    const ordersPerPage = 5;

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchStatus =
                status.length === 0 ||
                status.includes(order.status);

            const matchType =
                type.length === 0 ||
                type.includes(order.type);

            const matchDate =
                date === "" ||
                order.date === date;

            return (
                matchStatus &&
                matchType &&
                matchDate
            );
        });
    }, [status, type, date]);

    const totalPages = Math.ceil(
        filteredOrders.length / ordersPerPage
    );

    const currentOrders = filteredOrders.slice(
        (currentPage - 1) * ordersPerPage,
        currentPage * ordersPerPage
    );

    function resetFilters() {
        setDate("");
        setStatus([]);
        setType([]);
        setCurrentPage(1);
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main
                className="
                    pt-[50px]
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                <h1
                    className="
                        text-2xl
                        sm:text-3xl
                        font-bold
                    "
                >
                    Order Lists
                </h1>

                <FilterBar
                    date={date}
                    status={status}
                    type={type}
                    onDateChange={setDate}
                    onStatusChange={setStatus}
                    onTypeChange={setType}
                    onReset={resetFilters}
                />

                <OrderTable
                    orders={currentOrders}
                />

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </main>
        </div>
    );
}