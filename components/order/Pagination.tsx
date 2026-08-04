"use client";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    return (
        <div className="flex flex-wrap justify-end items-center gap-2 mt-6 ">

            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-4 py-2 rounded-lg border border-border disabled:opacity-40"
            >
                Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`w-10 h-10 rounded-lg transition ${currentPage === index + 1
                        ? "bg-primary text-white"
                        : "bg-card"
                        }`}
                >
                    {index + 1}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-4 py-2 rounded-lg border border-border disabled:opacity-40"
            >
                Next
            </button>
        </div>
    );
}