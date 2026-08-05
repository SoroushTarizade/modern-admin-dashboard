import { Invoice } from "@/types/invoice";

interface InvoiceInfoProps {
    invoice: Invoice;
}

export default function InvoiceInfo({
    invoice,
}: InvoiceInfoProps) {
    return (
        <div
            className="
        mb-8
        grid
        grid-cols-1
        gap-6
        border-b
        border-border
        pb-8
        sm:grid-cols-2
        lg:grid-cols-3
        lg:gap-8
      "
        >
            {/* Invoice From */}

            <div>
                <p className="mb-2 text-muted-foreground">
                    Invoice From
                </p>

                <h3 className="text-lg font-bold">
                    {invoice.from.name}
                </h3>

                <p className="mt-2 text-muted-foreground">
                    {invoice.from.address}
                </p>
            </div>


            {/* Invoice To */}

            <div>
                <p className="mb-2 text-muted-foreground">
                    Invoice To
                </p>

                <h3 className="text-lg font-bold">
                    {invoice.to.name}
                </h3>

                <p className="mt-2 text-muted-foreground">
                    {invoice.to.address}
                </p>
            </div>


            {/* Dates */}

            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
                <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">
                        Invoice Date
                    </span>

                    <span className="font-semibold">
                        {invoice.invoiceDate}
                    </span>
                </div>

                <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">
                        Due Date
                    </span>

                    <span className="font-semibold">
                        {invoice.dueDate}
                    </span>
                </div>
            </div>
        </div>
    );
}