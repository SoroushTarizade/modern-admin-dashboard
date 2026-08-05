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

                w-full
                max-w-[630px]

                rounded-3xl

                overflow-hidden

                border
                border-white/10

                bg-card/90

                backdrop-blur-2xl

                shadow-[0_25px_80px_rgba(0,0,0,.35)]

                px-5
                py-8

                sm:px-10
                sm:py-12

                lg:px-14
            "
        >

            {/* Glow Top */}

            <div
                className="
                    absolute

                    -top-24
                    -right-24

                    h-56
                    w-56

                    rounded-full

                    bg-primary/10

                    blur-3xl
                "
            />


            {/* Glow Bottom */}

            <div
                className="
                    absolute

                    -bottom-24
                    -left-24

                    h-56
                    w-56

                    rounded-full

                    bg-cyan-400/10

                    blur-3xl
                "
            />


            {/* Content */}

            <div className="relative z-10">


                {/* Logo */}

                <div
                    className="
                        mb-8

                        flex
                        justify-center
                    "
                >

                    <div
                        className="
                            flex

                            h-16
                            w-16

                            items-center
                            justify-center

                            rounded-2xl

                            bg-primary

                            shadow-lg
                        "
                    >

                        <span
                            className="
                                text-3xl
                                font-black
                                text-white
                            "
                        >
                            D
                        </span>

                    </div>

                </div>


                {/* Header */}

                <div
                    className="
                        mb-8

                        text-center

                        sm:mb-10
                    "
                >

                    <h1
                        className="
                            text-2xl

                            font-extrabold

                            sm:text-3xl

                            text-card-foreground
                        "
                    >
                        {title}
                    </h1>


                    <p
                        className="
                            mt-3

                            text-sm

                            text-muted-foreground

                            sm:text-base
                        "
                    >
                        {subtitle}
                    </p>

                </div>


                {/* Form Content */}

                {children}


            </div>

        </div>
    );
}