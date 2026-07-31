"use client";

import { PricingPlan } from "@/types/pricing";

interface PriceCardProps {
    plan: PricingPlan;
}

export default function PriceCard({
    plan,
}: PriceCardProps) {
    return (
        <div
            className={`relative overflow-hidden w-[350px] rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
        >
            {/* Background Blur */}

            <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient}`}
            />

            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Badge */}

            {plan.isPopular && (
                <div className="absolute top-5 right-5 z-20 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                </div>
            )}

            {/* Content */}

            <div className="relative z-10 flex flex-col items-center p-8">

                {/* Title */}

                <h2 className="text-3xl font-bold">
                    {plan.title}
                </h2>

                <p className="text-muted-foreground mt-2">
                    {plan.subtitle}
                </p>

                {/* Price */}

                <div className="w-full border-b border-border mt-8 pb-8 flex flex-col items-center">

                    <div className="flex items-end">

                        <span className="text-5xl font-extrabold text-primary">
                            ${plan.price}
                        </span>

                        <span className="ml-2 text-muted-foreground">
                            {plan.duration}
                        </span>

                    </div>

                </div>

                {/* Features */}

                <div className="w-full py-8">

                    <ul className="space-y-5">

                        {plan.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary" />

                                <span>
                                    {feature}
                                </span>

                            </li>
                        ))}

                    </ul>

                </div>

                {/* Button */}

                <button
                    className={`w-full h-14 rounded-2xl font-semibold transition-all duration-300

          ${plan.isPopular
                            ? "bg-primary text-white hover:opacity-90"
                            : "border border-primary text-primary hover:bg-primary hover:text-white"
                        }`}
                >
                    {plan.buttonText}
                </button>

                <p className="mt-5 text-sm underline text-muted-foreground cursor-pointer">
                    Start your 30 days free trial
                </p>

            </div>
        </div>
    );
}