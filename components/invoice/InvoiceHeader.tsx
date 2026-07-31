interface InvoiceHeaderProps {
    invoiceNumber: string;
    status: "Paid" | "Pending" | "Cancelled";
}

export default function InvoiceHeader({
    invoiceNumber,
    status,
}: InvoiceHeaderProps) {
    const statusStyles = {
        Paid: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Cancelled: "bg-red-100 text-red-700",
    };

    return (
        <div className="flex items-center justify-between mb-10">

            <div>
                <h1 className="text-3xl font-bold">Invoice</h1>

                <p className="text-muted-foreground mt-2">
                    #{invoiceNumber}
                </p>
            </div>

            <div
                className={`px-5 py-2 rounded-full font-semibold ${statusStyles[status]}`}
            >
                {status}
            </div>

        </div>
    );
}