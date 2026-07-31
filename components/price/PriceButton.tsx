interface PriceButtonProps {
    text: string;
    isPopular: boolean;
}

export default function PriceButton({
    text,
    isPopular,
}: PriceButtonProps) {
    return (
        <div className="w-full flex flex-col items-center gap-5">

            <button
                className={`w-full h-14 rounded-2xl font-semibold transition-all duration-300 cursor-pointer

        ${isPopular
                        ? "bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.03]"
                        : "border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
                    }`}
            >
                {text}
            </button>

            <p className="text-sm text-muted-foreground underline cursor-pointer hover:text-primary transition">
                Start your 30 days free trial
            </p>

        </div>
    );
}