"use client";

import { FiX } from "react-icons/fi";

import MailSidebar from "./MailSidebar";

import { MailCategory, MailLabel } from "@/types/mail";


interface Props {

    open: boolean;

    onClose: () => void;


    activeCategory: MailCategory;

    activeLabel: MailLabel | "All";


    counts: Record<MailCategory, number>;


    onCategoryChange: (
        category: MailCategory
    ) => void;


    onLabelChange: (
        label: MailLabel | "All"
    ) => void;


    onCompose: () => void;

}



export default function MobileMailSidebar({

    open,

    onClose,

    activeCategory,

    activeLabel,

    counts,

    onCategoryChange,

    onLabelChange,

    onCompose,

}: Props) {


    return (

        <>


            {/* Overlay */}

            {
                open && (

                    <div
                        onClick={onClose}
                        className="
                            fixed
                            inset-0
                            z-[90]
                            bg-black/40
                            lg:hidden
                        "

                    />

                )
            }




            {/* Drawer */}

            <aside

                className={`
                    fixed
                    top-0
                    left-0
                    z-[100]
                    h-screen
                    w-[300px]
                    bg-card
                    border-r
                    border-border
                    p-4
                    shadow-2xl
                    transition-transform
                    duration-300
                    ${open
                        ?
                        "translate-x-0"
                        :
                        "-translate-x-full"
                    }
                    lg:hidden

                `}

            >


                <div

                    className="
                        flex
                        items-center
                        justify-between

                        mb-5
                    "

                >

                    <h2
                        className="
                            text-xl
                            font-bold
                        "
                    >
                        Mail
                    </h2>



                    <button

                        onClick={onClose}

                        className="
                            flex
                            items-center
                            justify-center

                            w-10
                            h-10

                            rounded-xl

                            border
                            border-border

                            hover:bg-secondary
                        "

                    >

                        <FiX size={22} />


                    </button>


                </div>





                <MailSidebar

                    activeCategory={activeCategory}

                    activeLabel={activeLabel}

                    counts={counts}

                    onCategoryChange={
                        onCategoryChange
                    }

                    onLabelChange={
                        onLabelChange
                    }

                    onCompose={() => {

                        onCompose();

                        onClose();

                    }}

                />



            </aside>


        </>

    );

}