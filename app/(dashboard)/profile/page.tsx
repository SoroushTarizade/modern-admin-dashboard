import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

import {
    FiMail,
    FiUser,
    FiShield,
    FiCalendar,
} from "react-icons/fi";

export default async function ProfilePage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <div className="space-y-6">

            {/* Header */}

            <div>
                <h1 className="text-2xl font-extrabold">
                    My Profile
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage and view your account information.
                </p>
            </div>


            {/* Profile Card */}

            <div
                className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    shadow-sm
                    overflow-hidden
                "
            >

                {/* Profile Header */}

                <div
                    className="
                        border-b
                        border-border
                        p-6
                        sm:p-8
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            gap-5
                        "
                    >

                        {/* Avatar */}

                        <div
                            className="
                                flex
                                h-20
                                w-20
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-primary
                                text-2xl
                                font-extrabold
                                text-white
                            "
                        >
                            {user.username
                                .charAt(0)
                                .toUpperCase()}
                        </div>


                        {/* User */}

                        <div className="min-w-0">

                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    truncate
                                "
                            >
                                {user.username}
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-muted-foreground
                                    truncate
                                "
                            >
                                {user.email}
                            </p>

                            <div
                                className="
                                    mt-3
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-green-500/10
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-green-600
                                    dark:text-green-400
                                "
                            >
                                <span
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-green-500
                                    "
                                />

                                Active
                            </div>

                        </div>

                    </div>

                </div>


                {/* Account Information */}

                <div className="p-6 sm:p-8">

                    <h3
                        className="
                            mb-5
                            text-lg
                            font-bold
                        "
                    >
                        Account Information
                    </h3>


                    <div
                        className="
                            grid
                            gap-4
                            sm:grid-cols-2
                        "
                    >

                        {/* Username */}

                        <div
                            className="
                                rounded-xl
                                border
                                border-border
                                p-4
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-primary/10
                                        text-primary
                                    "
                                >
                                    <FiUser size={18} />
                                </div>

                                <div className="min-w-0">

                                    <p
                                        className="
                                            text-xs
                                            text-muted-foreground
                                        "
                                    >
                                        Username
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            font-semibold
                                            truncate
                                        "
                                    >
                                        {user.username}
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Email */}

                        <div
                            className="
                                rounded-xl
                                border
                                border-border
                                p-4
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-primary/10
                                        text-primary
                                    "
                                >
                                    <FiMail size={18} />
                                </div>

                                <div className="min-w-0">

                                    <p
                                        className="
                                            text-xs
                                            text-muted-foreground
                                        "
                                    >
                                        Email
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            font-semibold
                                            truncate
                                        "
                                    >
                                        {user.email}
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Account Status */}

                        <div
                            className="
                                rounded-xl
                                border
                                border-border
                                p-4
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-primary/10
                                        text-primary
                                    "
                                >
                                    <FiShield size={18} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            text-muted-foreground
                                        "
                                    >
                                        Account Status
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            font-semibold
                                        "
                                    >
                                        Active
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Account ID */}

                        <div
                            className="
                                rounded-xl
                                border
                                border-border
                                p-4
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-primary/10
                                        text-primary
                                    "
                                >
                                    <FiCalendar size={18} />
                                </div>

                                <div className="min-w-0">

                                    <p
                                        className="
                                            text-xs
                                            text-muted-foreground
                                        "
                                    >
                                        Account ID
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            font-semibold
                                            truncate
                                        "
                                    >
                                        {user.id}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}