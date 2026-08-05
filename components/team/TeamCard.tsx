"use client";

interface TeamCardProps {
    name: string;
    role: string;
    email: string;
    image: string;
}

export default function TeamCard({
    name,
    role,
    email,
    image,
}: TeamCardProps) {
    return (
        <div
            className="
        flex
        min-h-[289px]
        items-center
        justify-center
        rounded-2xl
        bg-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
        >
            <div
                className="
          flex
          flex-col
          items-center
          space-y-4
        "
            >

                {/* Image */}

                <div
                    className="
            h-[100px]
            w-[100px]

            sm:h-[110px]
            sm:w-[110px]
          "
                >
                    <img
                        src={image}
                        alt={name}
                        className="
              h-full
              w-full
              rounded-full
              object-cover
            "
                    />
                </div>


                {/* Info */}

                <div className="flex flex-col items-center">

                    <p
                        className="
              text-center
              font-bold
            "
                    >
                        {name}
                    </p>


                    <p
                        className="
              mt-1
              text-center
              text-sm
              text-muted-foreground
            "
                    >
                        {role}
                    </p>

                </div>


                {/* Email */}

                <p
                    className="
            max-w-full
            truncate
            text-center
            text-sm
            text-muted-foreground
          "
                >
                    {email}
                </p>

            </div>
        </div>
    );
}