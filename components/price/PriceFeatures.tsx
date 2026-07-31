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
                        className="flex items-center gap-3"
                    >

                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />

                        <span className="text-[15px]">
                            {feature}
                        </span>

                    </li>

                ))}

            </ul>

        </div>
    );
}