export interface Stat {
    id: number;
    title: string;
    value: string;
    change: number;
    trend: "up" | "down";
    icon: string;
    color: string;
}

export interface SalesData {
    month: string;
    sales: number;
}

export interface CustomerData {
    name: string;
    value: number;
}

export interface AnalyticsData {
    name: string;
    value: number;
}

export interface Deal {
    id: number;
    customer: string;
    company: string;
    amount: string;
    status: "Completed" | "Pending" | "Cancelled";
    date: string;
}

export interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    stock: number;
    price: string;
    sales: number;
}

export interface Order {
    id: number;
    customer: string;
    product: string;
    total: string;
    status: "Completed" | "Pending" | "Cancelled";
}

export interface Activity {
    id: number;
    title: string;
    description: string;
    time: string;
    icon: string;
    color: string;
}

export interface DashboardData {
    stats: Stat[];
    sales: SalesData[];
    customers: CustomerData[];
    analytics: AnalyticsData[];
    deals: Deal[];
    featuredProducts: Product[];
    recentOrders: Order[];
    recentActivities: Activity[];
}