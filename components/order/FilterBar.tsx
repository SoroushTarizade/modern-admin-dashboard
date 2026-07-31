"use client";

import { FiFilter } from "react-icons/fi";
import { RiResetLeftLine } from "react-icons/ri";
import DateFilter from "./DateFilter";
import OrderStatusFilter from "./OrderStatusFilter";
import OrderTypeFilter from "./OrderTypeFilter";

interface Props {
    date: string;
    status: string;
    type: string;

    onDateChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    onTypeChange: (value: string) => void;

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
        <div className="w-[818px] h-[70px] bg-border rounded-xl flex items-center justify-around ml-10 mt-5">

            <FiFilter size={20} />

            <span className="font-semibold">
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
                className="flex items-center gap-2 text-destructive font-semibold cursor-pointer"
            >
                <RiResetLeftLine />
                Reset
            </button>

        </div>
    );
}