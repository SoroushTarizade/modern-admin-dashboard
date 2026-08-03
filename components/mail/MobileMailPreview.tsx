"use client";

import { FiX } from "react-icons/fi";

import MailPreview from "./MailPreview";

import { Mail } from "@/types/mail";


interface Props {

    open: boolean;

    mail?: Mail;

    onClose: () => void;

    onToggleStar?: () => void;

    onDelete?: () => void;

    onReply?: () => void;

    onForward?: () => void;

}



export default function MobileMailPreview({

    open,

    mail,

    onClose,

    onToggleStar,

    onDelete,

    onReply,

    onForward,

}: Props) {



    if (!mail) return null;



    return (

        <div
            className={`
                fixed
                inset-0
                z-[100]

                lg:hidden

                transition-all
                duration-300

                ${open
                    ?
                    "visible opacity-100"
                    :
                    "invisible opacity-0"
                }
            `}
        >



            {/* Overlay */}

            <div

                onClick={onClose}

                className="
                    absolute
                    inset-0

                    bg-black/40

                "

            />





            {/* Drawer */}

            <div

                className={`
                    absolute

                    right-0
                    top-0

                    h-full

                    w-full
                    sm:w-[520px]

                    bg-card

                    shadow-2xl

                    overflow-y-auto


                    transition-transform
                    duration-300
                    ease-in-out


                    ${open
                        ?
                        "translate-x-0"
                        :
                        "translate-x-full"
                    }

                `}

            >



                <div
                    className="
                        sticky
                        top-0

                        z-10

                        flex
                        justify-end

                        p-4

                        bg-card

                        border-b
                        border-border
                    "
                >


                    <button

                        onClick={onClose}

                        className="
                            flex
                            items-center
                            justify-center

                            w-10
                            h-10

                            rounded-xl

                            hover:bg-secondary
                        "

                    >

                        <FiX size={22} />


                    </button>


                </div>





                <div className="p-4">

                    <MailPreview

                        mail={mail}

                        onToggleStar={
                            onToggleStar
                        }

                        onDelete={
                            onDelete
                        }

                        onReply={
                            onReply
                        }

                        onForward={
                            onForward
                        }

                    />

                </div>



            </div>



        </div>

    );

}