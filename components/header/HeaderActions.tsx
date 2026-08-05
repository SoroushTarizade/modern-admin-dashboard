"use client";

import { useState } from "react";

import ToggleTheme from "./ToggleTheme";
import Notification from "./Notification";
import MessageMenu from "./MessageMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import GuestMenu from "./GuestMenu";
import UserMenu from "./UserMenu";

import MobileSidebar from "@/components/sidebar/MobileSidebar";

import { FiMenu } from "react-icons/fi";


interface HeaderActionsProps {
    isAuthenticated?: boolean;
}


export default function HeaderActions({
    isAuthenticated = true,
}: HeaderActionsProps) {


    const [openSidebar, setOpenSidebar] = useState(false);



    return (

        <>

            <div
                className="
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                "
            >


                {/* Theme */}

                <ToggleTheme />



                {/* Notification */}

                <Notification />





                {/* Message */}

                <div
                    className="
                        hidden
                        xl:block
                    "
                >

                    <MessageMenu />

                </div>





                {/* Language */}

                <div
                    className="
                        hidden
                        xl:block
                    "
                >

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
                        lg:block
                    "
                >

                    {
                        isAuthenticated
                            ?
                            <UserMenu />

                            :

                            <GuestMenu />
                    }

                </div>






                {/* Mobile / Tablet Menu */}

                <button

                    onClick={() => setOpenSidebar(true)}

                    className="
                        flex

                        lg:hidden

                        w-10
                        h-10

                        items-center
                        justify-center

                        rounded-xl

                        border
                        border-border

                        bg-card

                        hover:bg-secondary

                        transition
                    "

                >

                    <FiMenu size={22} />

                </button>


            </div>





            {/* Mobile Drawer */}

            <MobileSidebar

                open={openSidebar}

                onClose={() => setOpenSidebar(false)}

            />

        </>

    );

}