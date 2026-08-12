import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

import HelpCenterClient from "./HelpCenterClient";

export default async function HelpCenterPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return <HelpCenterClient />;
}