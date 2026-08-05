"use client";

interface TeamHeaderProps {
    onAddMember?: () => void;
}

export default function TeamHeader({
    onAddMember,
}: TeamHeaderProps) {
    return (
        <div
            className="
        mb-8
        flex
        flex-col
        gap-5

        sm:flex-row
        sm:items-center
        sm:justify-between
      "
        >

            <div>
                <h1
                    className="
            text-2xl
            font-bold

            sm:text-3xl
          "
                >
                    Team
                </h1>

                <p
                    className="
            mt-2
            text-muted-foreground
          "
                >
                    Manage your team members
                </p>
            </div>


            <button
                onClick={onAddMember}
                className="
          h-12
          w-full
          rounded-2xl
          bg-primary
          text-white
          transition
          hover:opacity-90

          sm:w-[147px]
        "
            >
                Add New Member
            </button>

        </div>
    );
}