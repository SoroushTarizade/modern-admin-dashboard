import { InvoiceItem } from "@/types/invoice";

import InvoiceRow from "./InvoiceRow";

interface InvoiceTableProps {
    items: InvoiceItem[];
}

export default function InvoiceTable({
    items,
}: InvoiceTableProps) {
    return (
        <div
            className="
        overflow-x-auto
        rounded-2xl
        border
        border-border
      "
        >
            <table className="min-w-[700px] w-full">
                <thead className="bg-border">
                    <tr>
                        <th className="py-4 text-center">
                            Serial No.
                        </th>

                        <th className="py-4 text-left">
                            Description
                        </th>

                        <th className="py-4 text-center">
                            Quantity
                        </th>

                        <th className="py-4 text-center">
                            Base Cost
                        </th>

                        <th className="py-4 text-center">
                            Total Cost
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (
                        <InvoiceRow
                            key={item.id}
                            index={index}
                            item={item}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}