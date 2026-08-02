"use client";


import ToggleTheme from "./ToggleTheme";
import Notification from "./Notification";
import MessageMenu from "./MessageMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import GuestMenu from "./GuestMenu";
import UserMenu from "./UserMenu";
import { FiMenu } from "react-icons/fi";


interface HeaderActionsProps {
    isAuthenticated?: boolean;
}


export default function HeaderActions({
    isAuthenticated = true,
}: HeaderActionsProps) {


    return (

        <div
            className="
                flex
                items-center

                gap-2
                sm:gap-4
            "
        >


            <ToggleTheme />


            {/* Notification */}

            <Notification />


            {/* Message */}

            <div className="hidden sm:block">
                <MessageMenu />
            </div>



            {/* Language */}

            <div className="hidden lg:block">
                <LanguageSwitcher />
            </div>



            {/* Divider */}

            <div
                className="
                    hidden
                    lg:block

                    w-px
                    h-8

                    bg-border
                "
            />



            {/* User */}

            <div
                className="
                    hidden
                    md:block
                "
            >

                {
                    isAuthenticated
                        ?
                        <GuestMenu />
                        :
                        <UserMenu />
                }

            </div>



            {/* Mobile Menu */}

            <button
                className="
                    flex
                    md:hidden

                    w-10
                    h-10

                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-border

                    bg-card
                "
            >

                <FiMenu size={22} />

            </button>


        </div>

    );
}