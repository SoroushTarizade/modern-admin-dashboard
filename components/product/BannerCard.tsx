interface BannerCardProps {
    banner: {
        title: string;
        desc: string;
        date: string;
        bg: string;
        button: string;
        image: string;
    };
}

export default function BannerCard({
    banner,
}: BannerCardProps) {

    return (

        <div
            className={`
                ${banner.bg}

                relative

                min-h-[420px]
                sm:min-h-[360px]
                lg:h-[346px]

                rounded-2xl

                overflow-hidden

                flex

                flex-col
                sm:flex-row

                justify-center
                sm:justify-between

                items-center

                gap-6

                px-6
                sm:px-10
                lg:px-20

                py-8
                sm:py-0
            `}
        >


            {/* Content */}

            <div
                className="
                    relative
                    z-10

                    w-full
                    sm:w-1/2

                    space-y-3
                    sm:space-y-5

                    text-center
                    sm:text-left
                "
            >

                <p
                    className="
                        text-white
                        font-semibold
                        text-sm
                        sm:text-base
                    "
                >
                    {banner.date}
                </p>


                <h1
                    className="
                        text-white

                        text-3xl
                        sm:text-4xl
                        lg:text-5xl

                        font-bold

                        leading-tight

                        max-w-md

                        mx-auto
                        sm:mx-0
                    "
                >
                    {banner.title}
                </h1>


                <p
                    className="
                        text-white/90

                        text-sm
                        sm:text-base

                        max-w-md

                        mx-auto
                        sm:mx-0
                    "
                >
                    {banner.desc}
                </p>



                <button
                    className={`
                        ${banner.button}

                        px-6
                        sm:px-8

                        py-2.5
                        sm:py-3

                        rounded-xl

                        text-white

                        font-semibold

                        transition

                        hover:scale-105
                    `}
                >
                    Get Started →
                </button>


            </div>





            {/* Image */}

            <div
                className="
                    relative
                    z-10

                    flex
                    justify-center

                    w-full
                    sm:w-1/2
                "
            >

                <img
                    src={banner.image}
                    alt=""
                    className="
                        object-contain

                        h-[150px]
                        sm:h-[220px]
                        lg:h-[300px]

                        max-w-full
                    "
                />

            </div>





            {/* Background Circle */}

            <div
                className="
                    absolute

                    right-[-80px]
                    sm:right-[-40px]
                    lg:right-44

                    top-1/2

                    -translate-y-1/2

                    w-56
                    sm:w-72

                    h-56
                    sm:h-72

                    rounded-full

                    bg-white/10

                    blur-sm
                "
            />

        </div>

    );
}