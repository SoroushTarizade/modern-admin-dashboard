export interface PricingPlan {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    duration: string;
    features: string[];
    buttonText: string;
    isPopular: boolean;
    gradient: string;
}