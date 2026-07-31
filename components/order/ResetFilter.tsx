"use client";

import { RiResetLeftLine } from "react-icons/ri";

interface ResetFilterProps {
    onReset: () => void;
}

export default function ResetFilter({
    onReset,
}: ResetFilterProps) {
    return (
        <button
            onClick={onReset}
            className="flex items-center gap-2 text-destructive font-semibold hover:opacity-80 transition cursor-pointer"
        >
            <RiResetLeftLine size={18} />
            <span>Reset Filter</span>
        </button>
    );
}