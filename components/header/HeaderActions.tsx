"use client";

import ToggleTheme from "./ToggleTheme";
import Notification from "./Notification";
import MessageMenu from "./MessageMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import GuestMenu from "./GuestMenu";
import UserMenu from "./UserMenu";

interface HeaderActionsProps {
    isAuthenticated?: boolean;
}

export default function HeaderActions({
    isAuthenticated = true,
}: HeaderActionsProps) {

    return (

        <div className="flex items-center gap-4">

            <ToggleTheme />

            <Notification />

            <MessageMenu />

            <LanguageSwitcher />

            <div className="w-px h-8 bg-border" />

            {isAuthenticated ? (

                <GuestMenu />

            ) : (

                <UserMenu />

            )}

        </div>

    );
}