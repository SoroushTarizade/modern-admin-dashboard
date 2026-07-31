"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import MailSidebar from "@/components/mail/MailSidebar";
import MailToolbar from "@/components/mail/MailToolbar";
import MailSearch from "@/components/mail/MailSearch";
import MailList from "@/components/mail/MailList";
import MailPreview from "@/components/mail/MailPreview";
import ComposeModal from "@/components/mail/ComposeModal";
import DeleteModal from "@/components/mail/DeleteModal";

import useMail from "@/hooks/useMail";

export default function InboxPage() {

    const mail = useMail();

    return (

        <div className="bg-background text-foreground flex justify-center">

            <div className="flex w-[1440px]">

                <Sidebar />

                <div className="flex-1">

                    <Header />

                    <div className="p-8">

                        <h1 className="mb-8 text-3xl font-bold">
                            Inbox
                        </h1>

                        <div className="grid grid-cols-[280px_520px_1fr] gap-6">

                            {/* Sidebar */}

                            <MailSidebar

                                activeCategory={mail.activeCategory}

                                activeLabel={mail.activeLabel}

                                counts={mail.counts}

                                onCategoryChange={mail.setActiveCategory}

                                onLabelChange={mail.setActiveLabel}

                                onCompose={() =>
                                    mail.setComposeOpen(true)
                                }

                            />

                            {/* Mail List */}

                            <div className="space-y-5">

                                <MailSearch

                                    value={mail.search}

                                    onChange={mail.setSearch}

                                />

                                <MailToolbar

                                    selectedCount={mail.selectedIds.length}

                                    onSelectAll={mail.selectAll}

                                    onDelete={() =>
                                        mail.setDeleteOpen(true)
                                    }

                                    onSpam={mail.moveSpam}

                                    onRead={mail.markRead}

                                    onRefresh={() =>
                                        location.reload()
                                    }

                                    sort={mail.sort}

                                    onSortChange={mail.setSort}

                                />

                                <MailList

                                    mails={mail.mails}

                                    selectedIds={mail.selectedIds}

                                    activeMailId={mail.activeMail?.id}

                                    onSelect={mail.toggleSelect}

                                    onOpen={mail.setActiveMail}

                                    onStar={mail.toggleStar}

                                />

                            </div>

                            {/* Preview */}

                            <MailPreview

                                mail={mail.activeMail}

                                onToggleStar={() => {

                                    if (!mail.activeMail) return;

                                    mail.toggleStar(
                                        mail.activeMail.id
                                    );

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

                    </div>

                </div>

            </div>

            {/* Compose */}

            <ComposeModal

                open={mail.composeOpen}

                onClose={() =>
                    mail.setComposeOpen(false)
                }

                onSend={mail.sendMail}

            />

            {/* Delete */}

            <DeleteModal

                open={mail.deleteOpen}

                count={mail.selectedIds.length}

                onClose={() =>
                    mail.setDeleteOpen(false)
                }

                onConfirm={mail.deleteSelected}

            />

        </div>

    );

}