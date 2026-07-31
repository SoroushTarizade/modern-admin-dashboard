"use client";

import Image from "next/image";
import { Product } from "@/types/dashboard";

interface FeaturedProductsProps {
    products: Product[];
}

export default function FeaturedProducts({
    products,
}: FeaturedProductsProps) {
    return (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold">
                        Featured Products
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Best selling products
                    </p>
                </div>

                <button className="text-sm font-semibold text-primary hover:underline">
                    View All
                </button>
            </div>

            <div className="space-y-5">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center justify-between rounded-xl border border-border p-4 transition hover:bg-secondary"
                    >
                        <div className="flex items-center gap-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={60}
                                height={60}
                                className="rounded-xl object-cover"
                            />

                            <div>
                                <h3 className="font-semibold">
                                    {product.name}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {product.category}
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-bold">
                                {product.price}
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Stock: {product.stock}
                            </p>

                            <p className="text-xs font-medium text-green-500">
                                {product.sales} sales
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}