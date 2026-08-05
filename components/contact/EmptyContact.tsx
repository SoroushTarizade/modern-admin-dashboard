import { HiOutlineUserGroup } from "react-icons/hi2";

export default function EmptyContact() {
    return (
        <div className="flex w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-card px-6 py-20 sm:py-24">
            <HiOutlineUserGroup
                size={60}
                className="text-primary"
            />

            <h2 className="mt-6 text-center text-xl font-bold sm:text-2xl">
                No Contacts Found
            </h2>

            <p className="mt-3 text-center text-muted-foreground">
                Start by adding your first contact.
            </p>
        </div>
    );
}