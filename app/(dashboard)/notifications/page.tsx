import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

import NotificationsClient from "./NotificationsClient";

export default async function NotificationsPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return <NotificationsClient />;
}