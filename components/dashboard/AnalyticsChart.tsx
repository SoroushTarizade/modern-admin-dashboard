"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Cell,
} from "recharts";

import { AnalyticsData } from "@/types/dashboard";

interface AnalyticsChartProps {
    data?: AnalyticsData[];
}

const defaultAnalyticsData: AnalyticsData[] = [
    { name: "Mon", value: 420 },
    { name: "Tue", value: 650 },
    { name: "Wed", value: 590 },
    { name: "Thu", value: 810 },
    { name: "Fri", value: 720 },
    { name: "Sat", value: 910 },
    { name: "Sun", value: 670 },
];

export default function AnalyticsChart({
    data = defaultAnalyticsData,
}: AnalyticsChartProps) {
    return (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-xl font-bold">
                        Weekly Analytics
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Website traffic overview
                    </p>
                </div>

                <span className="rounded-lg bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">
                    +15%
                </span>

            </div>

            <ResponsiveContainer width="100%" height={320}>

                <BarChart data={data}>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        strokeOpacity={0.15}
                    />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="value"
                        radius={[10, 10, 0, 0]}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={index}
                                fill={
                                    index === data.length - 1
                                        ? "#4880FF"
                                        : "#AFCBFF"
                                }
                            />
                        ))}
                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
}