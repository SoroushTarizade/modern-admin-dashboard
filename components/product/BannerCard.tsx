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
      h-[346px]
      rounded-2xl
      overflow-hidden
      flex
      justify-between
      items-center
      px-20
      `}
        >
            <div className="space-y-5 z-10">

                <p className="text-white font-semibold">
                    {banner.date}
                </p>

                <h1 className="text-white text-5xl font-bold leading-tight max-w-md">
                    {banner.title}
                </h1>

                <p className="text-white/90">
                    {banner.desc}
                </p>

                <button
                    className={`
            ${banner.button}
            px-8
            py-3
            rounded-xl
            text-white
            font-semibold
            transition
            hover:scale-105
            hover:cursor-pointer
          `}
                >
                    Get Started →
                </button>

            </div>

            <img
                src={banner.image}
                className="h-[300px] object-contain z-10"
            />

            <div className="absolute right-44 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/10 blur-sm">
            </div>
        </div>
    );
}