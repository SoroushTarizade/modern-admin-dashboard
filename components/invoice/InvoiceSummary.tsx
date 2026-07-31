import { Invoice } from "@/types/invoice";

interface InvoiceSummaryProps {
    invoice: Invoice;
}

export default function InvoiceSummary({
    invoice,
}: InvoiceSummaryProps) {
    const subtotal = invoice.items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );

    const total =
        subtotal -
        invoice.discount +
        invoice.tax +
        invoice.shipping;

    return (
        <div className="mt-10 flex justify-end">

            <div className="w-[360px] space-y-4">

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Subtotal
                    </span>

                    <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Discount
                    </span>

                    <span className="font-semibold text-red-500">
                        -${invoice.discount.toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Tax
                    </span>

                    <span className="font-semibold">
                        +${invoice.tax.toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Shipping
                    </span>

                    <span className="font-semibold">
                        +${invoice.shipping.toFixed(2)}
                    </span>
                </div>

                <hr className="border-border" />

                <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>

                    <span>${total.toFixed(2)}</span>
                </div>

                {invoice.notes && (
                    <div className="mt-8 rounded-2xl bg-background border border-border p-4">
                        <h3 className="font-semibold mb-2">
                            Notes
                        </h3>

                        <p className="text-sm text-muted-foreground leading-6">
                            {invoice.notes}
                        </p>
                    </div>
                )}

            </div>

        </div>
    );
}