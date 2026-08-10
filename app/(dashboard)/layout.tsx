import { redirect } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { getCurrentUser } from "@/lib/session";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <DashboardLayout user={user}>
            {children}
        </DashboardLayout>
    );
}

