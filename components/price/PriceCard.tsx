"use client";

import { PricingPlan } from "@/types/pricing";

import PriceBadge from "./PriceBadge";
import PriceFeatures from "./PriceFeatures";
import PriceButton from "./PriceButton";
import Price from "./Price";

interface PriceCardProps {
    plan: PricingPlan;
}

export default function PriceCard({
    plan,
}: PriceCardProps) {
    return (
        <div
            className="
                relative
                overflow-hidden
                w-full
                max-w-[380px]
                mx-auto
                rounded-3xl
                border
                border-border
                bg-card
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >
            {/* Background */}

            <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient}`}
            />

            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-blue-500/10 blur-3xl" />

            <PriceBadge
                isPopular={plan.isPopular}
            />

            <div className="relative z-10 flex flex-col p-8">

                <div className="text-center">

                    <h2 className="text-3xl font-bold">
                        {plan.title}
                    </h2>

                    <p className="text-muted-foreground mt-2">
                        {plan.subtitle}
                    </p>

                </div>

                <Price
                    price={plan.price}
                    duration={plan.duration}
                />

                <PriceFeatures
                    features={plan.features}
                />

                <div className="mt-auto">

                    <PriceButton
                        text={plan.buttonText}
                        isPopular={plan.isPopular}
                    />

                </div>

            </div>

        </div>
    );
}