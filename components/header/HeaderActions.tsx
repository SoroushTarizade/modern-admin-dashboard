"use client";

import ToggleTheme from "./ToggleTheme";
import Notification from "./Notification";
import MessageMenu from "./MessageMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import UserMenu from "./UserMenu";

import { FiMenu } from "react-icons/fi";

interface HeaderUser {
    username: string;
    email: string;
}

interface HeaderActionsProps {
    user: HeaderUser;
    onMenuClick?: () => void;
}

export default function HeaderActions({
    user,
    onMenuClick,
}: HeaderActionsProps) {
    return (
        <div
            className="
                flex

                items-center

                gap-2
            "
        >
            <ToggleTheme />

            <Notification />

            <div
                className="
                    hidden

                    md:flex
                "
            >
                <MessageMenu />
            </div>

            <div
                className="
                    hidden

                    lg:flex
                "
            >
                <LanguageSwitcher />
            </div>

            <div
                className="
                    hidden

                    lg:block

                    h-8

                    w-px

                    bg-border

                    mx-1
                "
            />

            <div
                className="
                    hidden

                    lg:flex
                "
            >
                <UserMenu user={user} />
            </div>

            <button
                onClick={onMenuClick}
                aria-label="Open sidebar"
                className="
                    flex

                    lg:hidden

                    items-center

                    justify-center

                    w-11

                    h-11

                    rounded-xl

                    border

                    border-border

                    bg-card

                    hover:bg-secondary

                    active:scale-95

                    transition-all
                "
            >
                <FiMenu size={22} />
            </button>
        </div>
    );
}