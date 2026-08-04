"use client";

import { useMemo, useState } from "react";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import FilterBar from "@/components/order/FilterBar";
import OrderTable from "@/components/order/OrderTable";
import Pagination from "@/components/order/Pagination";

import { orders } from "@/data/orders";

export default function OrdersPage() {
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("All");
    const [type, setType] = useState("All");

    const [currentPage, setCurrentPage] = useState(1);

    const ordersPerPage = 5;

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchStatus =
                status === "All" || order.status === status;

            const matchType =
                type === "All" || order.type === type;

            const matchDate =
                date === "" || order.date === date;

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
        setStatus("All");
        setType("All");
        setCurrentPage(1);
    }

    return (
        <div className="min-h-screen bg-background text-foreground">

            <Sidebar />

            <Header />

            <main
                className="
            pt-[98px]

            px-4
            sm:px-6
            lg:px-8

            md:ml-[220px]
            lg:ml-[240px]
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