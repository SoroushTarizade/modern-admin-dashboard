interface PriceButtonProps {
    text: string;
    isPopular: boolean;
}

export default function PriceButton({
    text,
    isPopular,
}: PriceButtonProps) {
    return (
        <div className="mt-auto flex w-full flex-col items-center gap-5">
            <button
                className={`
                    h-14
                    w-full
                    rounded-2xl
                    font-semibold
                    transition-all
                    duration-300
                    cursor-pointer

                    ${isPopular
                        ? "bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.03]"
                        : "border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
                    }
                `}
            >
                {text}
            </button>

            <p className="cursor-pointer text-center text-sm text-muted-foreground underline transition hover:text-primary">
                Start your 30 days free trial
            </p>
        </div>
    );
}