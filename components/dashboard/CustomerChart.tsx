"use client";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

import { CustomerData } from "@/types/dashboard";

interface CustomerChartProps {
    data: CustomerData[];
}

const COLORS = [
    "#4880FF",
    "#34D399",
    "#F59E0B",
];

export default function CustomerChart({
    data,
}: CustomerChartProps) {
    return (
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">

            <div className="mb-6">

                <h2 className="text-xl font-bold">
                    Customers
                </h2>

                <p className="text-sm text-muted-foreground mt-1">
                    Customer distribution
                </p>

            </div>

            <div className="h-[360px]">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={70}
                            outerRadius={110}
                            paddingAngle={3}
                        >

                            {data.map((_, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}