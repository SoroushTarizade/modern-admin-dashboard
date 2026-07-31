"use client";

import { FiDownload, FiFileText, FiFile } from "react-icons/fi";
import { useState } from "react";

export default function DashboardExport() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">


            {open && (
                <div
                    className="
                        absolute
                        right-0
                        mt-3
                        w-52
                        rounded-2xl
                        border
                        border-border
                        bg-card
                        shadow-xl
                        overflow-hidden
                        z-50
                    "
                >
                    <MenuItem
                        icon={<FiFileText />}
                        title="Export PDF"
                    />

                    <MenuItem
                        icon={<FiFile />}
                        title="Export CSV"
                    />

                    <MenuItem
                        icon={<FiFile />}
                        title="Export Excel"
                    />
                </div>
            )}
        </div>
    );
}

function MenuItem({
    icon,
    title,
}: {
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <button
            className="
                w-full
                px-5
                py-4
                flex
                items-center
                justify-between
                hover:bg-secondary
                transition-all
            "
        >
            <span>{title}</span>

            {icon}
        </button>
    );
}