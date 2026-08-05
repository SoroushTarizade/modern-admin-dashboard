import React from "react";

interface AuthBackgroundProps {
    children: React.ReactNode;
}

export default function AuthBackground({
    children,
}: AuthBackgroundProps) {
    return (
        <div
            className="
                relative
                min-h-screen
                w-full
                overflow-hidden

                bg-primary

                flex
                items-center
                justify-center

                px-4
                py-8
            "
        >

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


            {/* Glow Top */}

            <div
                className="
                    absolute

                    -top-40
                    -left-40

                    h-[350px]
                    w-[350px]

                    sm:h-[520px]
                    sm:w-[520px]

                    rounded-full
                    bg-blue-500/20

                    blur-[120px]

                    sm:blur-[170px]
                "
            />


            {/* Glow Bottom */}

            <div
                className="
                    absolute

                    -bottom-40
                    -right-40

                    h-[350px]
                    w-[350px]

                    sm:h-[500px]
                    sm:w-[500px]

                    rounded-full
                    bg-cyan-400/20

                    blur-[120px]

                    sm:blur-[170px]
                "
            />


            {/* Grid */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.03]
                "
                style={{
                    backgroundImage: `
                        linear-gradient(to right,#ffffff 1px,transparent 1px),
                        linear-gradient(to bottom,#ffffff 1px,transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />


            {/* Floating Circle Left */}

            <div
                className="
                    absolute

                    top-10
                    left-5

                    sm:top-20
                    sm:left-24

                    h-28
                    w-28

                    sm:h-40
                    sm:w-40

                    rounded-full

                    border
                    border-white/10

                    backdrop-blur-3xl

                    bg-white/5
                "
            />


            {/* Floating Circle Right */}

            <div
                className="
                    absolute

                    bottom-10
                    right-5

                    sm:bottom-24
                    sm:right-32

                    h-20
                    w-20

                    sm:h-28
                    sm:w-28

                    rounded-full

                    border
                    border-white/10

                    backdrop-blur-xl

                    bg-white/5
                "
            />


            {/* Decorative Rings */}

            <svg
                className="
                    absolute

                    top-10
                    right-5

                    opacity-10

                    sm:top-24
                    sm:right-32
                "
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

            <div
                className="
                    relative
                    z-10
                    w-full
                    flex
                    justify-center
                "
            >
                {children}
            </div>

        </div>
    );
}