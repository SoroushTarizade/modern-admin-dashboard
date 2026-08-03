"use client";

import { Mail } from "@/types/mail";

import {
    FiCornerUpRight,
    FiTrash2,
    FiPaperclip,
    FiStar,
    FiX,
} from "react-icons/fi";

import { GoReply } from "react-icons/go";
import { FaStar } from "react-icons/fa";


interface Props {

    mail?: Mail;

    desktopPreview?: boolean;

    mobileOpen?: boolean;

    onClose?: () => void;

    onReply?: () => void;

    onForward?: () => void;

    onDelete?: () => void;

    onToggleStar?: () => void;

}



export default function MailPreview({

    mail,

    mobileOpen = false,

    onClose,

    onReply,

    onForward,

    onDelete,

    onToggleStar,

}: Props) {


    if (!mail) {

        return (

            <div
                className="
                    h-full
                    flex
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-border
                    bg-card
                "
            >

                <p className="text-muted-foreground">
                    Select an email to preview
                </p>

            </div>

        );

    }



    return (

        <>


            {/* Desktop */}

            <div

                className="
                    hidden
                    min-[1400px]:block

                    rounded-3xl
                    border
                    border-border
                    bg-card

                    p-6

                    h-full

                    overflow-y-auto
                "

            >

                <PreviewContent

                    mail={mail}

                    onToggleStar={onToggleStar}

                    onDelete={onDelete}

                    onReply={onReply}

                    onForward={onForward}

                />

            </div>





            {/* Tablet + Mobile Drawer */}

            <div

                className={`
                    fixed
                    inset-0
                    z-50

                    min-[1400px]:hidden

                    transition-all
                    duration-300

                    ${mobileOpen
                        ?
                        "visible"
                        :
                        "invisible"
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

                        ${mobileOpen
                            ?
                            "translate-x-0"
                            :
                            "translate-x-full"
                        }
                    `}

                >


                    <div
                        className="
                            flex
                            justify-end
                            p-4
                            border-b
                            border-border
                        "
                    >

                        <button

                            onClick={onClose}

                            className="
                                w-10
                                h-10
                                rounded-xl
                                flex
                                items-center
                                justify-center
                                hover:bg-secondary
                            "

                        >

                            <FiX size={22} />

                        </button>


                    </div>





                    <div className="p-5">


                        <PreviewContent

                            mail={mail}

                            onToggleStar={onToggleStar}

                            onDelete={onDelete}

                            onReply={onReply}

                            onForward={onForward}

                        />


                    </div>


                </div>


            </div>


        </>

    );

}







interface PreviewContentProps {

    mail: Mail;

    onReply?: () => void;

    onForward?: () => void;

    onDelete?: () => void;

    onToggleStar?: () => void;

}



function PreviewContent({

    mail,

    onReply,

    onForward,

    onDelete,

    onToggleStar,

}: PreviewContentProps) {


    return (

        <>


            <div className="flex justify-between gap-4">


                <div className="flex gap-4">


                    <img

                        src={mail.avatar}

                        alt={mail.sender}

                        className="
                            w-14
                            h-14
                            rounded-full
                            object-cover
                        "

                    />



                    <div>


                        <h2 className="text-xl font-bold">

                            {mail.subject}

                        </h2>



                        <p className="font-semibold mt-1">

                            {mail.sender}

                        </p>



                        <p className="text-sm text-muted-foreground">

                            {mail.email}

                        </p>


                    </div>


                </div>




                <button

                    onClick={onToggleStar}

                    className="
                        p-3
                        rounded-xl
                        hover:bg-secondary
                    "

                >

                    {
                        mail.starred

                            ?

                            <FaStar className="text-yellow-400" />

                            :

                            <FiStar />

                    }

                </button>


            </div>






            <div
                className="
                    my-6
                    border-y
                    border-border
                    py-4
                "
            >

                <p className="font-semibold">

                    {mail.date}

                </p>


                <p className="text-sm text-muted-foreground">

                    {mail.time}

                </p>


                {
                    mail.attachment && (

                        <div className="flex gap-2 mt-3">

                            <FiPaperclip />

                            Attachment

                        </div>

                    )
                }


            </div>






            <p
                className="
                    whitespace-pre-line
                    leading-8
                "
            >

                {mail.message}

            </p>






            <div
                className="
                    mt-8
                    flex
                    flex-wrap
                    gap-3
                "
            >

                <button

                    onClick={onReply}

                    className="
                        bg-primary
                        text-white
                        px-5
                        py-3
                        rounded-xl
                    "

                >

                    <span className="flex items-center gap-2">

                        <GoReply />

                        Reply

                    </span>


                </button>





                <button

                    onClick={onForward}

                    className="
                        border
                        border-border
                        px-5
                        py-3
                        rounded-xl
                    "

                >

                    <span className="flex items-center gap-2">

                        <FiCornerUpRight />

                        Forward

                    </span>


                </button>





                <button

                    onClick={onDelete}

                    className="
                        border
                        border-border
                        px-5
                        py-3
                        rounded-xl
                    "

                >

                    <span className="flex items-center gap-2">

                        <FiTrash2 />

                        Delete

                    </span>


                </button>


            </div>


        </>

    );

}