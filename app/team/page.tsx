"use client";
import TeamGrid from "@/components/team/TeamGrid";

export default function Page() {
  return (
    <div
      className="
        min-h-screen
        bg-background
        text-foreground
      "
    >
      <main
        className="
          pt-[50px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
          "
        >

          {/* Header */}

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


          <TeamGrid />

        </div>

      </main>
    </div>
  );
}