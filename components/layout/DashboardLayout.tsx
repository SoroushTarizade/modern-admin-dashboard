"use client";

import { useState } from "react";

import Sidebar from "@/components/sidebar/sideBar";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import Header from "@/components/header/Header";

interface DashboardUser {
    username: string;
    email: string;
}

interface DashboardLayoutProps {
    children: React.ReactNode;
    user: DashboardUser;
}

export default function DashboardLayout({
    children,
    user,
}: DashboardLayoutProps) {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Mobile Sidebar */}
            <MobileSidebar
                open={openSidebar}
                onClose={() => setOpenSidebar(false)}
                user={user}
            />

            {/* Main */}
            <div
                className="
                    md:ml-[220px]
                    lg:ml-[240px]
                    min-h-screen
                    flex
                    flex-col
                "
            >
                <Header
                    user={user}
                    onMenuClick={() => setOpenSidebar(true)}
                />

                <main
                    className="
                        flex-1
                        mt-20
                        p-4
                        sm:p-6
                        lg:p-8
                    "
                >
                    {children}
                </main>
            </div>
        </>
    );
}
