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
        <div
            className="
        mb-10
        flex
        flex-col
        gap-5
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
        >
            <div>
                <h1 className="text-2xl font-bold sm:text-3xl">
                    Invoice
                </h1>

                <p className="mt-2 text-muted-foreground">
                    #{invoiceNumber}
                </p>
            </div>

            <div
                className={`
          inline-flex
          w-fit
          rounded-full
          px-5
          py-2
          font-semibold
          ${statusStyles[status]}
        `}
            >
                {status}
            </div>
        </div>
    );
}