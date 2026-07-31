"use client";

import {
    FiTrash2,
    FiAlertCircle,
    FiMail,
    FiCheckSquare,
    FiRefreshCw,
    FiChevronDown,
} from "react-icons/fi";

interface MailToolbarProps {
    selectedCount: number;

    onSelectAll: () => void;

    onDelete: () => void;

    onSpam: () => void;

    onRead: () => void;

    onRefresh: () => void;

    sort: string;

    onSortChange: (value: string) => void;
}

export default function MailToolbar({
    selectedCount,
    onSelectAll,
    onDelete,
    onSpam,
    onRead,
    onRefresh,
    sort,
    onSortChange,
}: MailToolbarProps) {
    return (
        <div
            className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
                rounded-2xl
                border
                border-border
                bg-card
                p-4
            "
        >

            {/* Left */}

            <div className="flex items-center gap-2">

                <button
                    onClick={onSelectAll}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        hover:bg-secondary
                        transition-all
                    "
                >
                    <FiCheckSquare />
                </button>

                <button
                    onClick={onDelete}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        hover:bg-red-100
                        hover:text-red-600
                        transition-all
                    "
                >
                    <FiTrash2 />
                </button>

                <button
                    onClick={onSpam}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        hover:bg-yellow-100
                        hover:text-yellow-600
                        transition-all
                    "
                >
                    <FiAlertCircle />
                </button>

                <button
                    onClick={onRead}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        hover:bg-blue-100
                        hover:text-blue-600
                        transition-all
                    "
                >
                    <FiMail />
                </button>

                <button
                    onClick={onRefresh}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        hover:bg-secondary
                        transition-all
                    "
                >
                    <FiRefreshCw />
                </button>

            </div>

            {/* Center */}

            <div className="text-sm font-medium text-muted-foreground">
                {selectedCount === 0
                    ? "No email selected"
                    : `${selectedCount} email${selectedCount > 1 ? "s" : ""} selected`}
            </div>

            {/* Right */}

            <div className="relative">

                <select
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="
                        h-10
                        appearance-none
                        rounded-xl
                        border
                        border-border
                        bg-card
                        px-4
                        pr-10
                        text-sm
                        outline-none
                        transition-all
                        focus:border-primary
                    "
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="starred">Starred</option>
                    <option value="unread">Unread</option>
                </select>

                <FiChevronDown
                    className="
                        pointer-events-none
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-muted-foreground
                    "
                />

            </div>

        </div>
    );
}