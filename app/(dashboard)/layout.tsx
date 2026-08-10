import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { verifySession } from "@/lib/session";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session");

    if (!sessionCookie?.value) {
        redirect("/login");
    }

    const session = await verifySession(sessionCookie.value);

    if (!session?.userId) {
        redirect("/login");
    }

    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
}