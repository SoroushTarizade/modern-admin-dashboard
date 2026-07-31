"use client";

import { useState } from "react";
import {
    FiCalendar,
    FiFilter,
    FiRotateCcw,
} from "react-icons/fi";

const filters = [
    "Today",
    "This Week",
    "This Month",
    "This Year",
];

interface DashboardFiltersProps {
    onChange?: (value: string) => void;
}

export default function DashboardFilters({
    onChange,
}: DashboardFiltersProps) {

    const [selected, setSelected] = useState("This Month");

    const handleSelect = (value: string) => {
        setSelected(value);
        onChange?.(value);
    };

    return (
        <div></div>
    );

}