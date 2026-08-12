"use client";

import { useState } from "react";

import {
    FiBookOpen,
    FiChevronDown,
    FiHelpCircle,
    FiMail,
    FiMessageCircle,
    FiSearch,
} from "react-icons/fi";

const categories = [
    {
        title: "Getting Started",
        description: "Learn the basics of using your dashboard.",
        icon: FiBookOpen,
    },
    {
        title: "Account & Profile",
        description: "Manage your profile, account and preferences.",
        icon: FiHelpCircle,
    },
    {
        title: "Orders & Invoices",
        description: "Learn how to manage orders and invoices.",
        icon: FiBookOpen,
    },
    {
        title: "Messages & Notifications",
        description: "Understand messages and dashboard notifications.",
        icon: FiMessageCircle,
    },
];

const faqs = [
    {
        question: "How do I update my profile?",
        answer:
            "Open the Profile page from the user menu. From there you can view and manage your account information.",
    },
    {
        question: "How do I change the dashboard theme?",
        answer:
            "You can switch between light and dark mode using the theme button in the header or from the Settings page.",
    },
    {
        question: "How do I manage my orders?",
        answer:
            "Open the Orders page from the sidebar. You can search, filter and review your orders from there.",
    },
    {
        question: "How do I access my messages?",
        answer:
            "Use the Messages button in the header to view your latest messages.",
    },
    {
        question: "How do I manage notifications?",
        answer:
            "Use the notification button in the header to review your latest dashboard notifications.",
    },
];

export default function HelpCenterClient() {
    const [search, setSearch] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const filteredFaqs = faqs.filter((faq) => {
        const keyword = search.toLowerCase().trim();

        if (!keyword) {
            return true;
        }

        return (
            faq.question.toLowerCase().includes(keyword) ||
            faq.answer.toLowerCase().includes(keyword)
        );
    });

    return (
        <div className="w-full max-w-6xl mx-auto space-y-8">

            {/* Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold">
                    Help Center
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Find answers and learn how to use your dashboard.
                </p>
            </div>

            {/* Search */}
            <section
                className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-5
                    sm:p-8
                "
            >
                <div className="max-w-2xl mx-auto text-center">

                    <h2 className="text-xl sm:text-2xl font-bold">
                        How can we help?
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Search our frequently asked questions.
                    </p>

                    <div className="relative mt-6">

                        <FiSearch
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-muted-foreground
                            "
                            size={20}
                        />

                        <input
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search for help..."
                            className="
                                w-full
                                h-12
                                rounded-xl
                                border
                                border-border
                                bg-background
                                pl-12
                                pr-4
                                text-sm
                                outline-none
                                focus:border-primary
                                focus:ring-4
                                focus:ring-primary/10
                                transition-all
                            "
                        />

                    </div>
                </div>
            </section>

            {/* Categories */}
            <section>

                <div className="mb-4">
                    <h2 className="text-lg font-bold">
                        Browse topics
                    </h2>

                    <p className="text-sm text-muted-foreground mt-1">
                        Explore help articles by category.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <button
                                key={category.title}
                                type="button"
                                className="
                                    text-left
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-card
                                    p-5
                                    hover:border-primary/40
                                    hover:bg-secondary/50
                                    hover:-translate-y-0.5
                                    transition-all
                                "
                            >
                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-xl
                                        bg-primary/10
                                        text-primary
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Icon size={21} />
                                </div>

                                <h3 className="mt-4 font-bold">
                                    {category.title}
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground leading-6">
                                    {category.description}
                                </p>
                            </button>
                        );
                    })}

                </div>
            </section>

            {/* FAQ */}
            <section
                className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    overflow-hidden
                "
            >

                <div className="p-5 sm:p-6 border-b border-border">

                    <h2 className="text-lg font-bold">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Quick answers to common questions.
                    </p>

                </div>

                <div>

                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="border-b border-border last:border-b-0"
                                >

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(
                                                isOpen
                                                    ? null
                                                    : index
                                            )
                                        }
                                        className="
                                            w-full
                                            flex
                                            items-center
                                            justify-between
                                            gap-4
                                            p-5
                                            sm:px-6
                                            text-left
                                            hover:bg-secondary/50
                                            transition-all
                                        "
                                    >

                                        <span className="font-semibold">
                                            {faq.question}
                                        </span>

                                        <FiChevronDown
                                            className={`
                                                shrink-0
                                                transition-transform
                                                duration-300
                                                ${
                                                    isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                }
                                            `}
                                            size={19}
                                        />

                                    </button>

                                    <div
                                        className={`
                                            grid
                                            transition-all
                                            duration-300
                                            ${
                                                isOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                            }
                                        `}
                                    >
                                        <div className="overflow-hidden">

                                            <p className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-7">
                                                {faq.answer}
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            );
                        })
                    ) : (
                        <div className="p-8 text-center">

                            <FiSearch
                                className="
                                    mx-auto
                                    text-muted-foreground
                                "
                                size={28}
                            />

                            <p className="mt-3 font-semibold">
                                No results found
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Try searching with another keyword.
                            </p>

                        </div>
                    )}

                </div>

            </section>

            {/* Contact Support */}
            <section
                className="
                    rounded-2xl
                    border
                    border-primary/20
                    bg-primary/5
                    p-5
                    sm:p-6
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-5
                "
            >

                <div className="flex items-start gap-4">

                    <div
                        className="
                            w-11
                            h-11
                            shrink-0
                            rounded-xl
                            bg-primary/10
                            text-primary
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <FiMessageCircle size={21} />
                    </div>

                    <div>
                        <h2 className="font-bold">
                            Still need help?
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Contact our support team if you cannot find your answer.
                        </p>
                    </div>

                </div>

                <button
                    type="button"
                    className="
                        h-11
                        px-5
                        rounded-xl
                        bg-primary
                        text-primary-foreground
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        font-semibold
                        hover:opacity-90
                        active:scale-[0.98]
                        transition-all
                    "
                >
                    <FiMail size={17} />
                    Contact Support
                </button>

            </section>

        </div>
    );
}