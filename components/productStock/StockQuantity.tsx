interface StockQuantityProps {
    quantity: number;
}

export default function StockQuantity({
    quantity,
}: StockQuantityProps) {
    const getQuantityStyle = () => {
        if (quantity <= 10) {
            return "bg-destructive text-white";
        }

        if (quantity <= 30) {
            return "bg-warning text-black";
        }

        return "bg-success text-white";
    };

    return (
        <div
            className={`w-[70px] h-[34px] rounded-xl flex items-center justify-center font-semibold ${getQuantityStyle()}`}
        >
            {quantity}
        </div>
    );
}