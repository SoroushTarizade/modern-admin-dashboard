export type MailCategory =
    | "Inbox"
    | "Starred"
    | "Sent"
    | "Draft"
    | "Spam"
    | "Bin";

export type MailLabel =
    | "Primary"
    | "Social"
    | "Work"
    | "Friends";

export interface Mail {
    id: string;

    sender: string;

    email: string;

    avatar: string;

    subject: string;

    message: string;

    date: string;

    time: string;

    category: MailCategory;

    label: MailLabel;

    read: boolean;

    starred: boolean;

    selected: boolean;

    attachment?: boolean;
}