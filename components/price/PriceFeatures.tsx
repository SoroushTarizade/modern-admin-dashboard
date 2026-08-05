interface PriceFeaturesProps {
    features: string[];
}

export default function PriceFeatures({
    features,
}: PriceFeaturesProps) {
    return (
        <div className="w-full py-8">
            <ul className="space-y-5">
                {features.map((feature) => (
                    <li
                        key={feature}
                        className="flex items-start gap-3"
                    >
                        <div className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />

                        <span className="text-[15px] leading-6">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}