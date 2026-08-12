"use client";

import {
    FiUser,
    FiMail,
    FiShield,
    FiLogOut,
    FiChevronRight,
    FiLock,
} from "react-icons/fi";

import ToggleTheme from "@/components/header/ToggleTheme";
import LogoutButton from "@/components/auth/LogoutButton";

interface SettingsClientProps {
    user: {
        username: string;
        email: string;
    };
}

export default function SettingsClient({
    user,
}: SettingsClientProps) {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 pb-8">

            {/* Page Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Settings
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Manage your account, appearance and security preferences.
                </p>
            </div>

            {/* =========================
                ACCOUNT
            ========================= */}
            <section className="rounded-2xl border border-border bg-card overflow-hidden">

                <div className="p-5 sm:p-6 border-b border-border">
                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <FiUser size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg">
                                Account
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Manage your account information.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="divide-y divide-border">

                    {/* Username */}
                    <div className="p-5 sm:p-6 flex items-center justify-between gap-4">

                        <div className="flex items-center gap-4 min-w-0">

                            <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary flex items-center justify-center">
                                <FiUser size={18} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-muted-foreground">
                                    Username
                                </p>

                                <p className="font-semibold truncate">
                                    {user.username}
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Email */}
                    <div className="p-5 sm:p-6 flex items-center justify-between gap-4">

                        <div className="flex items-center gap-4 min-w-0">

                            <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary flex items-center justify-center">
                                <FiMail size={18} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-muted-foreground">
                                    Email
                                </p>

                                <p className="font-semibold truncate">
                                    {user.email}
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Password */}
                    <div className="p-5 sm:p-6 flex items-center justify-between gap-4">

                        <div className="flex items-center gap-4 min-w-0">

                            <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary flex items-center justify-center">
                                <FiLock size={18} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold">
                                    Password
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    Your password is securely protected.
                                </p>
                            </div>

                        </div>

                        <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                            Protected
                        </span>

                    </div>

                </div>

            </section>

            {/* =========================
                APPEARANCE
            ========================= */}
            <section className="rounded-2xl border border-border bg-card overflow-hidden">

                <div className="p-5 sm:p-6 border-b border-border">

                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <FiShield size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg">
                                Appearance
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Customize how your dashboard looks.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="p-5 sm:p-6">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>
                            <p className="font-semibold">
                                Theme
                            </p>

                            <p className="text-sm text-muted-foreground mt-1">
                                Switch between light and dark mode.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <ToggleTheme />
                        </div>

                    </div>

                </div>

            </section>

            {/* =========================
                SECURITY
            ========================= */}
            <section className="rounded-2xl border border-border bg-card overflow-hidden">

                <div className="p-5 sm:p-6 border-b border-border">

                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <FiShield size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg">
                                Security
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Review your current authentication status.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="divide-y divide-border">

                    {/* Session */}
                    <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>
                            <p className="font-semibold">
                                Current session
                            </p>

                            <p className="text-sm text-muted-foreground mt-1">
                                Your current login session is active.
                            </p>
                        </div>

                        <span className="
                            w-fit
                            px-3
                            py-1.5
                            rounded-full
                            bg-green-500/10
                            text-green-600
                            dark:text-green-400
                            text-xs
                            font-bold
                        ">
                            Active
                        </span>

                    </div>

                    {/* Authentication */}
                    <div className="p-5 sm:p-6 flex items-center justify-between gap-4">

                        <div className="flex items-center gap-4">

                            <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary flex items-center justify-center">
                                <FiLock size={18} />
                            </div>

                            <div>
                                <p className="font-semibold">
                                    Authentication
                                </p>

                                <p className="text-sm text-muted-foreground mt-1">
                                    Your account is protected by a secure session.
                                </p>
                            </div>

                        </div>

                        <FiChevronRight className="text-muted-foreground shrink-0" />

                    </div>

                </div>

            </section>

            {/* =========================
                DANGER ZONE
            ========================= */}
            <section className="rounded-2xl border border-red-500/20 bg-card overflow-hidden">

                <div className="p-5 sm:p-6 border-b border-red-500/10">

                    <div>
                        <h2 className="font-bold text-lg text-red-500">
                            Danger Zone
                        </h2>

                        <p className="text-sm text-muted-foreground mt-1">
                            Actions that affect your current account session.
                        </p>
                    </div>

                </div>

                <div className="p-5 sm:p-6">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                        <div>
                            <p className="font-semibold">
                                Sign out
                            </p>

                            <p className="text-sm text-muted-foreground mt-1">
                                Sign out from your current account.
                            </p>
                        </div>

                        <LogoutButton
                            className="
                                h-11
                                w-full
                                sm:w-auto
                                px-5
                                rounded-xl
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-sm
                                font-semibold
                                text-red-500
                                bg-red-500/10
                                hover:bg-red-500/20
                                active:scale-[0.98]
                                transition-all
                            "
                        >
                            <FiLogOut size={18} />
                            Logout
                        </LogoutButton>

                    </div>

                </div>

            </section>

        </div>
    );
}