import { InvoiceItem } from "@/types/invoice";

interface InvoiceRowProps {
    index: number;
    item: InvoiceItem;
}

export default function InvoiceRow({
    index,
    item,
}: InvoiceRowProps) {
    const total = item.quantity * item.price;

    return (
        <tr className="border-b border-border hover:bg-background transition-all">

            <td className="py-4 px-6 text-center">
                {index + 1}
            </td>

            <td className="py-4 px-6 font-medium">
                {item.description}
            </td>

            <td className="py-4 px-6 text-center">
                {item.quantity}
            </td>

            <td className="py-4 px-6 text-center">
                ${item.price}
            </td>

            <td className="py-4 px-6 text-center font-semibold">
                ${total}
            </td>

        </tr>
    );
}