"use client";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import { SalesData } from "@/types/dashboard";

interface SalesChartProps {
    data: SalesData[];
}

export default function SalesChart({
    data,
}: SalesChartProps) {
    return (
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">

            <div className="mb-6">

                <h2 className="text-xl font-bold">
                    Sales Overview
                </h2>

                <p className="text-sm text-muted-foreground mt-1">
                    Revenue over the last months
                </p>

            </div>

            <div className="h-[360px]">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={data}>

                        <defs>

                            <linearGradient
                                id="salesGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#4880FF"
                                    stopOpacity={0.4}
                                />

                                <stop
                                    offset="100%"
                                    stopColor="#4880FF"
                                    stopOpacity={0}
                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            strokeOpacity={0.2}
                        />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#4880FF"
                            strokeWidth={3}
                            fill="url(#salesGradient)"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}