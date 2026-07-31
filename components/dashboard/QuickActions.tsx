"use client";

import Link from "next/link";

import {
    FiUserPlus,
    FiShoppingCart,
    FiPackage,
    FiFileText,
} from "react-icons/fi";

const actions = [
    {
        title: "New User",
        icon: FiUserPlus,
        href: "/contact",
        color: "bg-blue-500/10",
    },
    {
        title: "New Order",
        icon: FiShoppingCart,
        href: "/orders",
        color: "bg-green-500/10",
    },
    {
        title: "New Product",
        icon: FiPackage,
        href: "/product-stock",
        color: "bg-orange-500/10",
    },
    {
        title: "Invoice",
        icon: FiFileText,
        href: "/invoice",
        color: "bg-purple-500/10",
    },
];

export default function QuickActions() {
    return (
        <div className="bg-card rounded-2xl border border-border p-6">

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-xl font-bold">
                    Quick Actions
                </h2>

                <span className="text-sm text-muted-foreground">
                    Shortcuts
                </span>

            </div>

            <div className="grid grid-cols-2 gap-4">

                {actions.map((action) => {

                    const Icon = action.icon;

                    return (
                        <Link
                            key={action.title}
                            href={action.href}
                            className="
                                rounded-2xl
                                border
                                border-border
                                p-5
                                transition-all
                                hover:-translate-y-1
                                hover:shadow-lg
                                hover:border-primary
                            "
                        >
                            <div
                                className={`
                                    w-14
                                    h-14
                                    rounded-2xl
                                    flex
                                    items-center
                                    justify-center
                                    mb-4
                                    ${action.color}
                                `}
                            >
                                <Icon
                                    className="text-primary"
                                    size={26}
                                />
                            </div>

                            <h3 className="font-semibold">
                                {action.title}
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Create {action.title.toLowerCase()}
                            </p>

                        </Link>
                    );
                })}

            </div>

        </div>
    );
}