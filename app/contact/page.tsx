"use client";
import ContactGrid from "@/components/contact/ContactGrid";
import AddContactModal from "@/components/contact/AddContactModal";

import useContact from "@/hooks/useContact";

import { FiPlus, FiSearch } from "react-icons/fi";

export default function Page() {
  const {
    contacts,
    search,
    setSearch,
    isModalOpen,
    openModal,
    closeModal,
  } = useContact();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main
        className="
          pt-[50px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">
                Contact
              </h1>

              <p className="mt-2 text-muted-foreground">
                Manage your contacts
              </p>
            </div>

            <button
              onClick={openModal}
              className="
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-primary
                px-6
                text-white
                transition
                hover:opacity-90
                sm:w-auto
              "
            >
              <FiPlus />

              Add Contact
            </button>
          </div>

          {/* Search */}

          <div className="relative mt-8 w-full sm:max-w-[360px]">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search Contact..."
              className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-4 outline-none focus:border-primary"
            />
          </div>

          {/* Grid */}

          <ContactGrid contacts={contacts} />
        </div>
      </main>

      <AddContactModal
        open={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}