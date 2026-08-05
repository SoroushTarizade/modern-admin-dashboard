interface PriceBadgeProps {
    isPopular: boolean;
}

export default function PriceBadge({
    isPopular,
}: PriceBadgeProps) {
    if (!isPopular) return null;

    return (
        <div className="absolute top-5 right-5 z-20">
            <div className="rounded-full bg-primary px-4 py-2 text-xs font-bold tracking-wider text-white shadow-lg shadow-primary/30">
                MOST POPULAR
            </div>
        </div>
    );
}