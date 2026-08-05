"use client";

import { HiOutlineUserGroup } from "react-icons/hi2";

export default function EmptyTeam() {
    return (
        <div
            className="
        flex
        min-h-[300px]
        w-full
        flex-col
        items-center
        justify-center

        rounded-3xl
        border-2
        border-dashed
        border-border
        bg-card

        px-6
        text-center

        sm:min-h-[450px]
      "
        >

            <HiOutlineUserGroup
                size={70}
                className="text-primary"
            />


            <h2
                className="
          mt-6
          text-xl
          font-bold

          sm:text-2xl
        "
            >
                No Team Members
            </h2>


            <p
                className="
          mt-3
          text-sm
          text-muted-foreground

          sm:text-base
        "
            >
                Start by adding your first team member.
            </p>

        </div>
    );
}