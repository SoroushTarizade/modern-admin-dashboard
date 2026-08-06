"use client";

import { useState } from "react";

import MailSidebar from "@/components/mail/MailSidebar";
import MobileMailSidebar from "@/components/mail/MobileMailSidebar";

import MailToolbar from "@/components/mail/MailToolbar";
import MailSearch from "@/components/mail/MailSearch";

import MailList from "@/components/mail/MailList";

import MailPreview from "@/components/mail/MailPreview";

import ComposeModal from "@/components/mail/ComposeModal";
import DeleteModal from "@/components/mail/DeleteModal";

import useMail from "@/hooks/useMail";

import { FiMenu } from "react-icons/fi";


export default function InboxPage() {


    const mail = useMail();


    const [
        openMailSidebar,
        setOpenMailSidebar
    ] = useState(false);


    const [
        openMobilePreview,
        setOpenMobilePreview
    ] = useState(false);



    const handleOpenMail = (item: any) => {

        console.log("OPEN MAIL:", item);

        mail.setActiveMail(item);

        setOpenMobilePreview(true);

    };



    return (

        <div
            className="
                min-h-screen
                bg-background
                text-foreground
                overflow-x-hidden
            "
        >


            {/* Main Sidebar */}



            <div
                className="
                    min-h-screen
                    flex
                    flex-col
                "
            >





                <main
                    className="
                        mt-[50px]
                        p-4
                        sm:p-6
                        lg:p-8
                    "
                >



                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            mb-8
                        "
                    >

                        <h1
                            className="
                                text-2xl
                                sm:text-3xl
                                font-bold
                            "
                        >
                            Inbox
                        </h1>



                        <button

                            onClick={() =>
                                setOpenMailSidebar(true)
                            }

                            className="
                                min-[1400px]:hidden
                                flex
                                items-center
                                justify-center
                                w-10
                                h-10
                                rounded-xl
                                border
                                border-border
                                bg-card
                            "
                        >

                            <FiMenu size={22} />

                        </button>


                    </div>





                    {/* Desktop 1400+ */}

                    <div

                        className="
                            hidden
                            min-[1400px]:grid

                            grid-cols-[280px_minmax(350px,520px)_1fr]

                            gap-6
                        "

                    >


                        <MailSidebar

                            activeCategory={
                                mail.activeCategory
                            }

                            activeLabel={
                                mail.activeLabel
                            }

                            counts={
                                mail.counts
                            }

                            onCategoryChange={
                                mail.setActiveCategory
                            }

                            onLabelChange={
                                mail.setActiveLabel
                            }

                            onCompose={() =>
                                mail.setComposeOpen(true)
                            }

                        />





                        <div className="space-y-5">


                            <MailSearch

                                value={mail.search}

                                onChange={mail.setSearch}

                            />



                            <MailToolbar

                                selectedCount={
                                    mail.selectedIds.length
                                }

                                onSelectAll={
                                    mail.selectAll
                                }

                                onDelete={() =>
                                    mail.setDeleteOpen(true)
                                }

                                onSpam={
                                    mail.moveSpam
                                }

                                onRead={
                                    mail.markRead
                                }

                                onRefresh={() =>
                                    location.reload()
                                }

                                sort={mail.sort}

                                onSortChange={
                                    mail.setSort
                                }

                            />



                            <MailList

                                mails={mail.mails}

                                selectedIds={
                                    mail.selectedIds
                                }

                                activeMailId={
                                    mail.activeMail?.id
                                }

                                onSelect={
                                    mail.toggleSelect
                                }

                                onOpen={
                                    handleOpenMail
                                }

                                onStar={
                                    mail.toggleStar
                                }

                            />


                        </div>






                        <MailPreview

                            mail={
                                mail.activeMail
                            }

                            onToggleStar={() => {

                                if (mail.activeMail) {

                                    mail.toggleStar(
                                        mail.activeMail.id
                                    );

                                }

                            }}

                            onDelete={() =>
                                mail.setDeleteOpen(true)
                            }

                            onReply={() =>
                                mail.setComposeOpen(true)
                            }

                            onForward={() =>
                                mail.setComposeOpen(true)
                            }

                        />


                    </div>








                    {/* Tablet + Mobile */}

                    <div

                        className="
                            min-[1400px]:hidden

                            space-y-5
                        "

                    >


                        <MailSearch

                            value={mail.search}

                            onChange={mail.setSearch}

                        />



                        <MailToolbar

                            selectedCount={
                                mail.selectedIds.length
                            }

                            onSelectAll={
                                mail.selectAll
                            }

                            onDelete={() =>
                                mail.setDeleteOpen(true)
                            }

                            onSpam={
                                mail.moveSpam
                            }

                            onRead={
                                mail.markRead
                            }

                            onRefresh={() =>
                                location.reload()
                            }

                            sort={mail.sort}

                            onSortChange={
                                mail.setSort
                            }

                        />



                        <MailList

                            mails={mail.mails}

                            selectedIds={
                                mail.selectedIds
                            }

                            activeMailId={
                                mail.activeMail?.id
                            }

                            onSelect={
                                mail.toggleSelect
                            }

                            onOpen={
                                handleOpenMail
                            }

                            onStar={
                                mail.toggleStar
                            }

                        />

                    </div>



                </main>


            </div>






            <MobileMailSidebar

                open={
                    openMailSidebar
                }

                onClose={() =>
                    setOpenMailSidebar(false)
                }

                activeCategory={
                    mail.activeCategory
                }

                activeLabel={
                    mail.activeLabel
                }

                counts={
                    mail.counts
                }

                onCategoryChange={
                    mail.setActiveCategory
                }

                onLabelChange={
                    mail.setActiveLabel
                }

                onCompose={() =>
                    mail.setComposeOpen(true)
                }

            />






            <MailPreview

                mail={
                    mail.activeMail
                }

                mobileOpen={
                    openMobilePreview
                }

                onClose={() =>
                    setOpenMobilePreview(false)
                }

                onToggleStar={() => {

                    if (mail.activeMail) {

                        mail.toggleStar(
                            mail.activeMail.id
                        );

                    }

                }}

                onDelete={() =>
                    mail.setDeleteOpen(true)
                }

                onReply={() =>
                    mail.setComposeOpen(true)
                }

                onForward={() =>
                    mail.setComposeOpen(true)
                }

            />







            <ComposeModal

                open={
                    mail.composeOpen
                }

                onClose={() =>
                    mail.setComposeOpen(false)
                }

                onSend={
                    mail.sendMail
                }

            />






            <DeleteModal

                open={
                    mail.deleteOpen
                }

                count={
                    mail.selectedIds.length
                }

                onClose={() =>
                    mail.setDeleteOpen(false)
                }

                onConfirm={
                    mail.deleteSelected
                }

            />


        </div>

    );

}