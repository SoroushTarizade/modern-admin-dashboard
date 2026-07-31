"use client";

import { IoIosSend } from "react-icons/io";

interface SendInvoiceButtonProps {
    onClick?: () => void;
}

export default function SendInvoiceButton({
    onClick,
}: SendInvoiceButtonProps) {
    return (
        <div className="mt-10 flex justify-end">

            <button
                onClick={onClick}
                className="w-[190px] h-[58px] rounded-2xl bg-primary hover:opacity-90 transition-all text-white flex items-center justify-between px-3"
            >
                <div className="w-[48px] h-[42px] rounded-xl bg-white/20 flex items-center justify-center">

                    <IoIosSend
                        size={24}
                        className="text-white"
                    />

                </div>

                <span className="font-semibold pr-5">
                    Send Invoice
                </span>

            </button>

        </div>
    );
}