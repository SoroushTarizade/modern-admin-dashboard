interface PriceBadgeProps {
    isPopular: boolean;
}

export default function PriceBadge({
    isPopular,
}: PriceBadgeProps) {
    if (!isPopular) return null;

    return (
        <div className="absolute top-0 bg-inherit right-5 z-20">

            <div className="px-4 py-2 rounded-full bg-inherit text-white text-xs font-bold tracking-wider shadow-lg shadow-primary/30">
                MOST POPULAR
            </div>

        </div>
    );
}