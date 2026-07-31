export default function TableHeader() {
    const headers = [
        "ID",
        "NAME",
        "ADDRESS",
        "DATE",
        "TYPE",
        "STATUS",
    ];

    return (
        <div className="grid grid-cols-6 items-center px-6 py-5 border-b border-border font-bold text-sm uppercase">
            {headers.map((header) => (
                <div key={header}>{header}</div>
            ))}
        </div>
    );
}