"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import PriceCard from "@/components/price/PriceCard";
import { pricingPlans } from "@/data/pricing";

export default function Page() {
    return (
        <div className="min-h-screen bg-background text-foreground">

            <Sidebar />

            <Header />

            <main
                className="
                    pt-[98px]
                    px-4
                    sm:px-6
                    lg:px-8

                    md:ml-[220px]
                    lg:ml-[240px]
                "
            >
                <div className="mx-auto w-full max-w-7xl">

                    <h1 className="text-2xl sm:text-3xl font-bold">
                        Pricing Plan
                    </h1>

                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            xl:grid-cols-3
                            gap-8
                        "
                    >
                        {pricingPlans.map((plan) => (
                            <PriceCard
                                key={plan.id}
                                plan={plan}
                            />
                        ))}
                    </div>

                </div>
            </main>

        </div>
    );
}