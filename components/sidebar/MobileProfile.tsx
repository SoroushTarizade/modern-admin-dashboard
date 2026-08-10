"use client";

import { FiUser } from "react-icons/fi";

interface MobileProfileProps {
    user: {
        username: string;
        email: string;
    };
}

export default function MobileProfile({
    user,
}: MobileProfileProps) {
    return (
        <div className="border-b border-border p-4">
            <button
                className="
                    w-full

                    flex
                    items-center

                    gap-3

                    rounded-xl

                    hover:bg-secondary

                    p-3

                    transition-all

                    text-left
                "
            >
                <div
                    className="
                        w-12
                        h-12

                        shrink-0

                        rounded-full

                        bg-primary

                        text-white

                        flex
                        items-center
                        justify-center
                    "
                >
                    <FiUser size={22} />
                </div>

                <div className="min-w-0">
                    <p
                        className="
                            font-bold
                            truncate
                        "
                    >
                        {user.username}
                    </p>

                    <p
                        className="
                            text-sm
                            text-muted-foreground

                            truncate
                        "
                    >
                        {user.email}
                    </p>
                </div>
            </button>
        </div>
    );
}
