"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

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
    <div className="bg-background text-foreground flex justify-center">

      <div className="w-[1440px] flex">

        <Sidebar />

        <div className="flex-1">

          <Header />

          <div className="px-10 py-10">

            {/* Header */}

            <div className="flex items-center justify-between">

              <div>

                <h1 className="text-3xl font-bold">
                  Contact
                </h1>

                <p className="text-muted-foreground mt-2">
                  Manage your contacts
                </p>

              </div>

              <button
                onClick={openModal}
                className="h-12 px-6 rounded-2xl bg-primary text-white flex items-center gap-2 hover:opacity-90 transition"
              >
                <FiPlus />

                Add Contact
              </button>

            </div>

            {/* Search */}

            <div className="relative mt-8 w-[360px]">

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
                className="w-full h-12 rounded-xl border border-border bg-card pl-11 pr-4 outline-none focus:border-primary"
              />

            </div>

            {/* Grid */}

            <ContactGrid contacts={contacts} />

          </div>

        </div>

      </div>

      <AddContactModal
        open={isModalOpen}
        onClose={closeModal}
      />

    </div>
  );
}