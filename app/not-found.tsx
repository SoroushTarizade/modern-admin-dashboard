import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-primary flex items-center justify-center">

            {/* ================= Background Glow ================= */}

            <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-[170px]" />

            <div className="absolute -bottom-44 -right-40 w-[480px] h-[480px] rounded-full bg-cyan-400/20 blur-[170px]" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-[220px]" />

            {/* ================= Grid Pattern ================= */}

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

            {/* ================= SVG Circle ================= */}

            <svg
                className="absolute top-20 left-20 opacity-10"
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

            {/* ================= SVG Wave ================= */}

            <svg
                className="absolute bottom-10 left-24 opacity-10"
                width="240"
                height="120"
                viewBox="0 0 240 120"
            >
                <path
                    d="M0 60 C40 20 80 100 120 60 S200 20 240 60"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />

                <path
                    d="M0 80 C40 40 80 120 120 80 S200 40 240 80"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>

            {/* ================= SVG Dots ================= */}

            <svg
                className="absolute right-24 top-24 opacity-10"
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

            {/* ================= Decorative Rings ================= */}

            <svg
                className="absolute right-40 bottom-24 opacity-[0.08]"
                width="220"
                height="220"
                viewBox="0 0 220 220"
            >
                <circle
                    cx="110"
                    cy="110"
                    r="90"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />

                <circle
                    cx="110"
                    cy="110"
                    r="65"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />

                <circle
                    cx="110"
                    cy="110"
                    r="40"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>

            {/* ================= Card ================= */}

            <div className="relative z-10 bg-card w-[630px] h-[735px] rounded-2xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,.25)] flex flex-col items-center justify-around">

                {/* Browser */}

                <div className="bg-red-900 w-[390px] h-[298px] rounded-2xl overflow-hidden">

                    <div className="w-full h-[58px] bg-[#E3F4FF] flex items-center p-4 space-x-3">

                        <div className="flex space-x-1">

                            <div className="w-[13px] h-[13px] rounded-full bg-destructive"></div>

                            <div className="w-[13px] h-[13px] rounded-full bg-warning"></div>

                            <div className="w-[13px] h-[13px] rounded-full bg-success"></div>

                        </div>

                        <div className="w-[33px] h-[13px] rounded-full bg-[#BDDFF4]"></div>

                    </div>

                    <div className="w-full h-[240px] bg-primary rounded-b-2xl flex flex-col items-center justify-center">

                        <div className="text-[#FD9E28] flex justify-between w-[297px] font-extrabold">

                            <p className="text-[85px]">4</p>

                            <p className="text-[85px]">0</p>

                            <p className="text-[85px]">4</p>

                        </div>

                        <div className="flex flex-col space-y-2 mt-2">

                            <div className="w-[33px] h-[13px] rounded-full bg-[#E3F4FF] ml-1"></div>

                            <div className="flex justify-between items-center w-[300px]">

                                <div className="w-[52px] h-[13px] rounded-full bg-[#E3F4FF]"></div>

                                <div className="flex space-x-2">

                                    <div className="w-[13px] h-[13px] rounded-full bg-[#E3F4FF]"></div>

                                    <div className="w-[13px] h-[13px] rounded-full bg-[#E3F4FF]"></div>

                                    <div className="w-[13px] h-[13px] rounded-full bg-[#E3F4FF]"></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="w-[418px] h-[135px] flex flex-col justify-around">

                    <h1 className="text-card-foreground font-bold text-[32px] text-center">
                        Looks like you've got lost...
                    </h1>

                    <Link
                        href="/"
                        className="w-full h-[56px] bg-primary rounded-2xl flex items-center justify-center text-white text-xl font-bold hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                    >
                        Back to Dashboard
                    </Link>

                </div>

            </div>

        </div>
    );
}