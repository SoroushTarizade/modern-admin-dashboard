import Link from "next/link";

export default function NotFound() {
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

            {/* Glow */}

            <div
                className="
                    absolute
                    -top-40
                    -left-40

                    w-[320px]
                    h-[320px]

                    sm:w-[520px]
                    sm:h-[520px]

                    rounded-full
                    bg-blue-500/20

                    blur-[120px]
                    sm:blur-[170px]
                "
            />


            <div
                className="
                    absolute
                    -bottom-40
                    -right-40

                    w-[320px]
                    h-[320px]

                    sm:w-[480px]
                    sm:h-[480px]

                    rounded-full
                    bg-cyan-400/20

                    blur-[120px]
                    sm:blur-[170px]
                "
            />


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


            {/* Decorative */}

            <svg
                className="
                    absolute

                    top-10
                    left-5

                    sm:top-20
                    sm:left-20

                    opacity-10
                "
                width="260"
                height="260"
                viewBox="0 0 260 260"
            >
                <circle
                    cx="130"
                    cy="130"
                    r="90"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />

                <circle
                    cx="130"
                    cy="130"
                    r="55"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>


            <svg
                className="
                    absolute

                    right-5
                    top-10

                    sm:right-24
                    sm:top-24

                    opacity-10
                "
                width="180"
                height="180"
                viewBox="0 0 180 180"
            >

                {[...Array(6)].map((_, y) =>
                    [...Array(6)].map((_, x) => (
                        <circle
                            key={`${x}-${y}`}
                            cx={x * 30 + 15}
                            cy={y * 30 + 15}
                            r="3"
                            fill="white"
                        />
                    ))
                )}

            </svg>



            {/* Card */}

            <div
                className="
                    relative
                    z-10

                    w-full
                    max-w-[630px]

                    rounded-3xl

                    border
                    border-white/10

                    bg-card

                    shadow-[0_25px_80px_rgba(0,0,0,.25)]

                    flex
                    flex-col
                    items-center

                    px-5
                    py-8

                    sm:px-10
                    sm:py-12

                    gap-10
                "
            >


                {/* Browser */}

                <div
                    className="
                        w-full
                        max-w-[390px]

                        h-[240px]

                        sm:h-[298px]

                        rounded-2xl

                        overflow-hidden
                    "
                >

                    {/* Header */}

                    <div
                        className="
                            h-12
                            sm:h-[58px]

                            bg-[#E3F4FF]

                            flex
                            items-center

                            p-4

                            gap-3
                        "
                    >

                        <div className="flex gap-1">

                            <div className="w-3 h-3 rounded-full bg-destructive" />

                            <div className="w-3 h-3 rounded-full bg-warning" />

                            <div className="w-3 h-3 rounded-full bg-success" />

                        </div>


                        <div
                            className="
                                w-8
                                h-3

                                rounded-full

                                bg-[#BDDFF4]
                            "
                        />

                    </div>


                    {/* Body */}

                    <div
                        className="
                            h-[192px]
                            sm:h-[240px]

                            bg-primary

                            rounded-b-2xl

                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                    >

                        <div
                            className="
                                flex
                                justify-between

                                w-[220px]

                                sm:w-[297px]

                                text-[#FD9E28]

                                font-extrabold
                            "
                        >

                            <p className="text-6xl sm:text-[85px]">
                                4
                            </p>

                            <p className="text-6xl sm:text-[85px]">
                                0
                            </p>

                            <p className="text-6xl sm:text-[85px]">
                                4
                            </p>

                        </div>


                    </div>

                </div>



                {/* Bottom */}

                <div
                    className="
                        w-full

                        flex
                        flex-col

                        gap-6

                        items-center
                    "
                >

                    <h1
                        className="
                            text-card-foreground

                            font-bold

                            text-2xl

                            sm:text-[32px]

                            text-center
                        "
                    >
                        Looks like you've got lost...
                    </h1>


                    <Link
                        href="/"
                        className="
                            w-full

                            h-14

                            bg-primary

                            rounded-2xl

                            flex
                            items-center
                            justify-center

                            text-white

                            text-lg

                            font-bold

                            hover:scale-[1.02]

                            hover:shadow-lg

                            transition-all
                        "
                    >
                        Back to Dashboard
                    </Link>


                </div>


            </div>


        </div>
    );
}