import { MdOutlineReceiptLong } from "react-icons/md";

export default function EmptyInvoice() {
    return (
        <div className="w-full h-[500px] flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-card">

            <MdOutlineReceiptLong
                size={80}
                className="text-primary"
            />

            <h2 className="mt-6 text-2xl font-bold">
                No Invoice Found
            </h2>

            <p className="mt-3 text-muted-foreground">
                There is currently no invoice to display.
            </p>

        </div>
    );
}