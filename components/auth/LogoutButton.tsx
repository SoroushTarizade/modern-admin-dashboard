"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import LogoutModal from "./LogoutModal";

interface LogoutButtonProps {
className?: string;
children: React.ReactNode;
onLogoutStart?: () => void;
}

export default function LogoutButton({
className = "",
children,
onLogoutStart,
}: LogoutButtonProps) {

const router = useRouter();

const [open, setOpen] = useState(false);
const [loading, setLoading] = useState(false);


const handleLogout = async () => {

    if (loading) {
        return;
    }

    setLoading(true);

    onLogoutStart?.();

    try {

        const response = await fetch(
            "/api/auth/logout",
            {
                method: "POST",
            }
        );

        if (!response.ok) {

            console.error(
                "Logout request failed."
            );

            setLoading(false);

            return;
        }

        setOpen(false);

        router.push("/login");
        router.refresh();

    } catch (error) {

        console.error(
            "Logout error:",
            error
        );

        setLoading(false);
    }
};


return (
    <>
        <button
            type="button"
            onClick={() => setOpen(true)}
            disabled={loading}
            className={className}
        >
            {children}
        </button>


        <LogoutModal
            open={open}
            onClose={() => {

                if (!loading) {
                    setOpen(false);
                }

            }}
            onConfirm={handleLogout}
            loading={loading}
        />
    </>
);

}
