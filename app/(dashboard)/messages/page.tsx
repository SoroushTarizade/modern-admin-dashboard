import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

import MessagesClient from "./MessagesClient";

export default async function MessagesPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return <MessagesClient />;
}
