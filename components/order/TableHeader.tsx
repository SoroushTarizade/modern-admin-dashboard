"use client";

export default function TableHeader() {
    const headers = [
        "ID",
        "Customer",
        "Address",
        "Date",
        "Type",
        "Status",
    ];

    return (
        <div
            className="
                grid
                grid-cols-6

                items-center

                px-6
                py-5

                border-b
                border-border

                bg-secondary/40

                text-xs
                uppercase
                tracking-wider

                font-bold

                text-muted-foreground
            "
        >
            {headers.map((header) => (
                <div key={header}>
                    {header}
                </div>
            ))}
        </div>
    );
}