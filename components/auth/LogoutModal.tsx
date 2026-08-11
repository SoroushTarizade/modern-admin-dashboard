"use client";

import { useEffect } from "react";
import { FiAlertTriangle, FiX } from "react-icons/fi";

interface LogoutModalProps {
open: boolean;
onClose: () => void;
onConfirm: () => void;
loading?: boolean;
}

export default function LogoutModal({
open,
onClose,
onConfirm,
loading = false,
}: LogoutModalProps) {

useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && !loading) {
            onClose();
        }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
        document.removeEventListener("keydown", handleEscape);
    };
}, [open, loading, onClose]);

if (!open) {
    return null;
}

return (
    <div
        className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            p-4
            sm:p-6

            bg-black/50
            backdrop-blur-sm
        "
        onMouseDown={(event) => {
            if (
                event.target === event.currentTarget &&
                !loading
            ) {
                onClose();
            }
        }}
    >

        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-modal-title"
            aria-describedby="logout-modal-description"

            className="
                relative

                w-full
                max-w-md

                rounded-2xl
                sm:rounded-3xl

                bg-card
                text-card-foreground

                border
                border-border

                shadow-2xl

                overflow-hidden

                animate-in
                fade-in
                zoom-in-95
                duration-200
            "
        >

            {/* Close */}

            <button
                type="button"
                onClick={onClose}
                disabled={loading}
                aria-label="Close logout confirmation"

                className="
                    absolute
                    right-4
                    top-4

                    flex
                    items-center
                    justify-center

                    w-9
                    h-9

                    rounded-xl

                    text-muted-foreground

                    hover:bg-secondary
                    hover:text-foreground

                    disabled:opacity-50
                    disabled:cursor-not-allowed

                    transition-all
                "
            >
                <FiX size={20} />
            </button>


            {/* Content */}

            <div
                className="
                    px-5
                    py-7

                    sm:px-7
                    sm:py-8

                    text-center
                "
            >

                {/* Icon */}

                <div
                    className="
                        mx-auto

                        flex
                        items-center
                        justify-center

                        w-14
                        h-14

                        sm:w-16
                        sm:h-16

                        rounded-2xl

                        bg-red-500/10
                        text-red-500

                        mb-5
                    "
                >
                    <FiAlertTriangle
                        size={28}
                        className="sm:hidden"
                    />

                    <FiAlertTriangle
                        size={32}
                        className="hidden sm:block"
                    />
                </div>


                {/* Title */}

                <h2
                    id="logout-modal-title"

                    className="
                        text-xl
                        sm:text-2xl

                        font-bold
                    "
                >
                    Logout
                </h2>


                {/* Description */}

                <p
                    id="logout-modal-description"

                    className="
                        mt-3

                        text-sm
                        sm:text-base

                        leading-6

                        text-muted-foreground
                    "
                >
                    Are you sure you want to logout
                    from your account?
                </p>


                {/* Actions */}

                <div
                    className="
                        mt-7

                        flex
                        flex-col-reverse
                        sm:flex-row

                        gap-3
                    "
                >

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}

                        className="
                            w-full

                            h-11
                            sm:h-12

                            rounded-xl

                            border
                            border-border

                            font-semibold

                            hover:bg-secondary

                            disabled:opacity-50
                            disabled:cursor-not-allowed

                            transition-all
                        "
                    >
                        Cancel
                    </button>


                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={loading}

                        className="
                            w-full

                            h-11
                            sm:h-12

                            rounded-xl

                            bg-red-500
                            text-white

                            font-semibold

                            hover:bg-red-600

                            disabled:opacity-70
                            disabled:cursor-not-allowed

                            transition-all

                            flex
                            items-center
                            justify-center
                            gap-2
                        "
                    >

                        {loading ? (
                            <>
                                <span
                                    className="
                                        w-4
                                        h-4

                                        rounded-full

                                        border-2
                                        border-white/40
                                        border-t-white

                                        animate-spin
                                    "
                                />

                                Logging out...
                            </>
                        ) : (
                            "Logout"
                        )}

                    </button>

                </div>

            </div>

        </div>

    </div>
);


}