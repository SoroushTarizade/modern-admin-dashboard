import { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        title: "Basic",
        subtitle: "Perfect for individuals",
        price: 14.99,
        duration: "/month",
        buttonText: "Get Started",
        isPopular: false,
        gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
        features: [
            "Free Setup",
            "10 GB Bandwidth",
            "20 User Connection",
            "Analytics Report",
            "Public API Access",
            "Plugins Integration",
            "Custom Content Management",
        ],
    },

    {
        id: 2,
        title: "Standard",
        subtitle: "Best for growing teams",
        price: 29.99,
        duration: "/month",
        buttonText: "Start Free Trial",
        isPopular: false,
        gradient: "from-primary/25 via-primary/10 to-transparent",
        features: [
            "Free Setup",
            "50 GB Bandwidth",
            "100 User Connection",
            "Advanced Analytics",
            "Public API Access",
            "Plugins Integration",
            "Custom Content Management",
        ],
    },

    {
        id: 3,
        title: "Premium",
        subtitle: "Enterprise Solution",
        price: 59.99,
        duration: "/month",
        buttonText: "Contact Sales",
        isPopular: false,
        gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
        features: [
            "Unlimited Setup",
            "Unlimited Bandwidth",
            "Unlimited Users",
            "Advanced Analytics",
            "Public API Access",
            "Premium Plugins",
            "Custom Content Management",
        ],
    },
];