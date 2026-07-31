import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import PriceCard from "@/components/price/PriceCard";

import { pricingPlans } from "@/data/pricing";

export default function Page() {
    return (
        <div className="bg-background text-foreground flex justify-center">
            <div className="w-[1440px] flex">

                <Sidebar />

                <div className="flex-1">

                    <Header />

                    <div className="ml-10 mt-15">

                        <h1 className="text-3xl font-bold">
                            Pricing Plan
                        </h1>

                        <div className="flex gap-8 mt-10">

                            {pricingPlans.map((plan) => (
                                <PriceCard
                                    key={plan.id}
                                    plan={plan}
                                />
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}