"use client";

import { MailLabel } from "@/types/mail";

interface MailLabelsProps {
    active: MailLabel | "All";
    onChange: (label: MailLabel | "All") => void;
}

const labels: {
    name: MailLabel;
    color: string;
}[] = [
        {
            name: "Primary",
            color: "bg-blue-500",
        },
        {
            name: "Social",
            color: "bg-purple-500",
        },
        {
            name: "Work",
            color: "bg-yellow-500",
        },
        {
            name: "Friends",
            color: "bg-red-500",
        },
    ];

export default function MailLabels({
    active,
    onChange,
}: MailLabelsProps) {
    return (
        <div className="mt-8">

            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Labels
            </h3>

            <div className="space-y-2">

                <button
                    onClick={() => onChange("All")}
                    className={`
                        w-full
                        rounded-xl
                        px-3
                        py-2
                        text-left
                        font-medium
                        transition-all

                        ${active === "All"
                            ? "bg-secondary"
                            : "hover:bg-secondary/70"
                        }
                    `}
                >
                    All Labels
                </button>

                {labels.map((label) => (

                    <button
                        key={label.name}
                        onClick={() => onChange(label.name)}
                        className={`
                            w-full
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            px-3
                            py-2
                            transition-all

                            ${active === label.name
                                ? "bg-secondary"
                                : "hover:bg-secondary/70"
                            }
                        `}
                    >

                        <span
                            className={`
                                w-3
                                h-3
                                rounded-full
                                ${label.color}
                            `}
                        />

                        <span className="font-medium">
                            {label.name}
                        </span>

                    </button>

                ))}

            </div>

        </div>
    );
}