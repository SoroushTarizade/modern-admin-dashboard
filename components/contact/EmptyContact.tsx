import { HiOutlineUserGroup } from "react-icons/hi2";

export default function EmptyContact() {
    return (
        <div className="w-full py-24 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-card">

            <HiOutlineUserGroup
                size={70}
                className="text-primary"
            />

            <h2 className="mt-6 text-2xl font-bold">
                No Contacts Found
            </h2>

            <p className="mt-3 text-muted-foreground">
                Start by adding your first contact.
            </p>

        </div>
    );
}