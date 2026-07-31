import React from "react";

interface AuthBackgroundProps {
    children: React.ReactNode;
}

export default function AuthBackground({
    children,
}: AuthBackgroundProps) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-primary flex items-center justify-center">

            {/* Mesh Gradient */}

            <div
                className="absolute inset-0"
                style={{
                    background: `
                        radial-gradient(circle at 15% 20%, rgba(72,128,255,.35), transparent 30%),
                        radial-gradient(circle at 80% 25%, rgba(0,212,255,.20), transparent 30%),
                        radial-gradient(circle at 75% 80%, rgba(99,102,241,.18), transparent 35%),
                        radial-gradient(circle at 20% 85%, rgba(255,255,255,.05), transparent 30%)
                    `,
                }}
            />

            {/* Glow */}

            <div className="absolute -top-48 -left-48 w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-[170px]" />

            <div className="absolute -bottom-52 -right-52 w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[170px]" />

            {/* Grid */}

            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right,#ffffff 1px,transparent 1px),
                        linear-gradient(to bottom,#ffffff 1px,transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Floating Circle */}

            <div className="absolute top-20 left-24 w-40 h-40 rounded-full border border-white/10 backdrop-blur-3xl bg-white/5" />

            <div className="absolute bottom-24 right-32 w-28 h-28 rounded-full border border-white/10 backdrop-blur-xl bg-white/5" />

            {/* Decorative Rings */}

            <svg
                className="absolute top-24 right-32 opacity-10"
                width="220"
                height="220"
                viewBox="0 0 220 220"
            >
                <circle
                    cx="110"
                    cy="110"
                    r="80"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />

                <circle
                    cx="110"
                    cy="110"
                    r="50"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>

            {/* Content */}

            <div className="relative z-10">
                {children}
            </div>

        </div>
    );
}