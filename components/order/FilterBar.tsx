"use client";

import { FiFilter } from "react-icons/fi";
import { RiResetLeftLine } from "react-icons/ri";
import DateFilter from "./DateFilter";
import OrderStatusFilter from "./OrderStatusFilter";
import OrderTypeFilter from "./OrderTypeFilter";

interface Props {
    date: string;

    status: string[];

    type: string[];

    onDateChange: (value: string) => void;

    onStatusChange: (value: string[]) => void;

    onTypeChange: (value: string[]) => void;

    onReset: () => void;
}
export default function FilterBar({
    date,
    status,
    type,
    onDateChange,
    onStatusChange,
    onTypeChange,
    onReset,
}: Props) {
    return (
        <div className="mt-6 w-full   p-4 bg-border rounded-2xl flex flex-wrap items-center gap-4 ">

            <FiFilter size={20} />

            <span className="font-semibold whitespace-nowrap">
                Filter By
            </span>

            <DateFilter
                value={date}
                onChange={onDateChange}
            />

            <OrderTypeFilter
                value={type}
                onChange={onTypeChange}
            />

            <OrderStatusFilter
                value={status}
                onChange={onStatusChange}
            />

            <button
                onClick={onReset}
                className=" ml-auto flex items-center gap-2 text-destructive font-semibold cursor-pointer"
            >
                <RiResetLeftLine />
                Reset
            </button>

        </div>
    );
}