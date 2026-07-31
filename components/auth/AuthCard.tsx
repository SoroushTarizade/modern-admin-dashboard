import React from "react";

interface AuthCardProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export default function AuthCard({
    title,
    subtitle,
    children,
}: AuthCardProps) {
    return (
        <div
            className="
                relative
                w-[630px]
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                bg-card/90
                backdrop-blur-2xl
                shadow-[0_25px_80px_rgba(0,0,0,.35)]
                px-14
                py-12
            "
        >
            {/* Glow Top */}

            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />

            {/* Glow Bottom */}

            <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Content */}

            <div className="relative z-10">

                {/* Logo */}

                <div className="flex justify-center mb-8">

                    <div className="w-18 h-18 rounded-2xl bg-primary flex items-center justify-center shadow-lg">

                        <span className="text-white text-3xl font-black">
                            D
                        </span>

                    </div>

                </div>

                {/* Header */}

                <div className="text-center mb-10">

                    <h1 className="text-3xl font-extrabold text-card-foreground">
                        {title}
                    </h1>

                    <p className="text-muted-foreground mt-3 text-base">
                        {subtitle}
                    </p>

                </div>

                {/* Form */}

                {children}

            </div>

        </div>
    );
}
