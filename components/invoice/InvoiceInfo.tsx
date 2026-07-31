import { Invoice } from "@/types/invoice";

interface InvoiceInfoProps {
    invoice: Invoice;
}

export default function InvoiceInfo({
    invoice,
}: InvoiceInfoProps) {
    return (
        <div className="grid grid-cols-3 gap-8 border-b border-border pb-8 mb-8">
            {/* Invoice From */}

            <div>
                <p className="text-muted-foreground mb-2">
                    Invoice From
                </p>

                <h3 className="font-bold text-lg">
                    {invoice.from.name}
                </h3>

                <p className="text-muted-foreground mt-2">
                    {invoice.from.address}
                </p>
            </div>

            {/* Invoice To */}

            <div>
                <p className="text-muted-foreground mb-2">
                    Invoice To
                </p>

                <h3 className="font-bold text-lg">
                    {invoice.to.name}
                </h3>

                <p className="text-muted-foreground mt-2">
                    {invoice.to.address}
                </p>
            </div>

            {/* Dates */}

            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Invoice Date
                    </span>

                    <span className="font-semibold">
                        {invoice.invoiceDate}
                    </span>
                </div>

                <div className="flex justify-between">
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