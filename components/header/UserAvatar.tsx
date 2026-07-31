"use client";

import Image from "next/image";
import UserStatus from "./UserStatus";

interface UserAvatarProps {
    name: string;
    image?: string;
    role?: string;
    status?: "online" | "away" | "busy" | "offline";
    showInfo?: boolean;
    size?: number;
}

export default function UserAvatar({
    name,
    image,
    role = "Administrator",
    status = "online",
    showInfo = true,
    size = 48,
}: UserAvatarProps) {

    const firstLetter = name.charAt(0).toUpperCase();

    return (
        <div className="flex items-center gap-3">

            {/* Avatar */}

            <div
                className="relative shrink-0"
                style={{
                    width: size,
                    height: size,
                }}
            >

                {image ? (

                    <Image
                        src={image}
                        alt={name}
                        width={size}
                        height={size}
                        className="rounded-full object-cover border border-border"
                    />

                ) : (

                    <div
                        className="
                            w-full
                            h-full
                            rounded-full
                            bg-primary
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-lg
                            border
                            border-border
                            shadow-sm
                        "
                    >
                        {firstLetter}
                    </div>

                )}

                {/* Status Dot */}

                <span
                    className="
                        absolute
                        bottom-0
                        right-0
                        w-3.5
                        h-3.5
                        rounded-full
                        border-2
                        border-card
                        bg-green-500
                    "
                />

            </div>

            {showInfo && (

                <div className="leading-tight">

                    <h3 className="font-semibold text-sm text-foreground">
                        {name}
                    </h3>

                    <p className="text-xs text-muted-foreground">
                        {role}
                    </p>

                    <UserStatus status={status} />

                </div>

            )}

        </div>
    );
}