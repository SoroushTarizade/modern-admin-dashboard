"use client";

import { useEffect, useState } from "react";

import { dashboardData } from "@/data/dashboard";

import {
    Stat,
    SalesData,
    CustomerData,
    AnalyticsData,
    Deal,
    Product,
    Order,
    Activity,
} from "@/types/dashboard";

export default function useDashboard() {
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState<Stat[]>([]);
    const [sales, setSales] = useState<SalesData[]>([]);
    const [customers, setCustomers] = useState<CustomerData[]>([]);
    const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
    const [deals, setDeals] = useState<Deal[]>([]);
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [recentOrders, setRecentOrders] = useState<Order[]>([]);
    const [recentActivities, setRecentActivities] = useState<Activity[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStats(dashboardData.stats);
            setSales(dashboardData.sales);
            setCustomers(dashboardData.customers);
            setAnalytics(dashboardData.analytics);
            setDeals(dashboardData.deals);
            setFeaturedProducts(dashboardData.featuredProducts);
            setRecentOrders(dashboardData.recentOrders);
            setRecentActivities(dashboardData.recentActivities);

            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return {
        loading,
        stats,
        sales,
        customers,
        analytics,
        deals,
        featuredProducts,
        recentOrders,
        recentActivities,
    };
}