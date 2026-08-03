"use client";

import { useState } from "react";

import {
    FiPaperclip,
    FiSend,
    FiX,
} from "react-icons/fi";


interface ComposeModalProps {

    open: boolean;

    onClose: () => void;

    onSend: (mail: {
        to: string;
        subject: string;
        message: string;
    }) => void;

}



export default function ComposeModal({

    open,

    onClose,

    onSend,

}: ComposeModalProps) {


    const [to, setTo] = useState("");

    const [subject, setSubject] = useState("");

    const [message, setMessage] = useState("");



    if (!open) return null;



    const handleSend = () => {

        if (!to || !subject || !message) return;


        onSend({

            to,

            subject,

            message,

        });


        setTo("");

        setSubject("");

        setMessage("");


        onClose();

    };



    return (

        <div
            className="
                fixed
                inset-0
                z-50

                flex
                items-center
                justify-center

                bg-black/40
                backdrop-blur-sm

                px-4
            "
        >


            <div
                className="
                    w-full
                    max-w-[720px]

                    max-h-[90vh]

                    overflow-y-auto

                    rounded-3xl

                    border
                    border-border

                    bg-card

                    p-5
                    sm:p-7

                    shadow-2xl
                "
            >


                <div
                    className="
                        mb-6

                        flex
                        items-center
                        justify-between
                    "
                >

                    <h2 className="text-xl sm:text-2xl font-bold">
                        Compose Email
                    </h2>


                    <button

                        onClick={onClose}

                        className="
                            rounded-xl
                            p-2
                            hover:bg-secondary
                        "

                    >

                        <FiX size={22} />

                    </button>


                </div>




                <div className="space-y-4">


                    <input

                        value={to}

                        onChange={(e) => setTo(e.target.value)}

                        placeholder="To"

                        className="
                            h-12
                            w-full

                            rounded-xl

                            border
                            border-border

                            bg-input

                            px-4

                            outline-none

                            focus:border-primary
                        "

                    />



                    <input

                        value={subject}

                        onChange={(e) => setSubject(e.target.value)}

                        placeholder="Subject"

                        className="
                            h-12
                            w-full

                            rounded-xl

                            border
                            border-border

                            bg-input

                            px-4

                            outline-none

                            focus:border-primary
                        "

                    />



                    <textarea

                        value={message}

                        onChange={(e) => setMessage(e.target.value)}

                        placeholder="Write your message..."

                        rows={8}

                        className="
                            w-full

                            resize-none

                            rounded-xl

                            border
                            border-border

                            bg-input

                            p-4

                            outline-none

                            focus:border-primary
                        "

                    />


                </div>




                <div
                    className="
                        mt-6

                        flex

                        flex-col-reverse
                        gap-3

                        sm:flex-row

                        sm:items-center

                        sm:justify-between
                    "
                >


                    <button

                        className="
                            rounded-xl
                            border
                            border-border

                            p-3

                            hover:bg-secondary
                        "

                    >

                        <FiPaperclip />

                    </button>




                    <div className="flex gap-3">


                        <button

                            onClick={onClose}

                            className="
                                rounded-xl

                                border
                                border-border

                                px-5
                                py-3

                                hover:bg-secondary
                            "

                        >

                            Cancel

                        </button>



                        <button

                            onClick={handleSend}

                            className="
                                rounded-xl

                                bg-primary

                                px-6
                                py-3

                                font-semibold

                                text-white
                            "

                        >

                            <span className="flex items-center gap-2">

                                <FiSend />

                                Send

                            </span>


                        </button>


                    </div>


                </div>



            </div>


        </div>

    );

}