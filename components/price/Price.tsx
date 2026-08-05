interface PriceProps {
    price: number;
    duration: string;
}

export default function Price({
    price,
    duration,
}: PriceProps) {
    return (
        <div className="mt-8 flex w-full flex-col items-center border-b border-border pb-8">
            <div className="flex items-end justify-center">
                <span className="text-5xl font-extrabold text-primary">
                    ${price}
                </span>

                <span className="ml-2 pb-1 text-muted-foreground">
                    {duration}
                </span>
            </div>
        </div>
    );
}