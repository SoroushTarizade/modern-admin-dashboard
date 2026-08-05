"use client";

import { IoIosSend } from "react-icons/io";

interface SendInvoiceButtonProps {
    onClick?: () => void;
}

export default function SendInvoiceButton({
    onClick,
}: SendInvoiceButtonProps) {
    return (
        <div
            className="
        mt-10
        flex
        justify-center
        sm:justify-end
      "
        >
            <button
                onClick={onClick}
                className="
          flex
          h-[58px]
          w-full
          items-center
          justify-between
          rounded-2xl
          bg-primary
          px-3
          text-white
          transition-all
          hover:opacity-90
          sm:w-[190px]
        "
            >
                <div
                    className="
            flex
            h-[42px]
            w-[48px]
            items-center
            justify-center
            rounded-xl
            bg-white/20
          "
                >
                    <IoIosSend
                        size={24}
                        className="text-white"
                    />
                </div>

                <span className="pr-5 font-semibold">
                    Send Invoice
                </span>
            </button>
        </div>
    );
}