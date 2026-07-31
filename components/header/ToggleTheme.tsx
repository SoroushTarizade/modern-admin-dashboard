"use client";

import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export default function ToggleTheme() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                setTheme(
                    resolvedTheme === "dark" ? "light" : "dark"
                )
            }
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-card text-foreground border border-border hover:bg-muted transition-colors"
        >
            {resolvedTheme === "dark" ? (
                <IoSunnyOutline size={20} />
            ) : (
                <FaRegMoon size={18} />
            )}
        </button>
    );
}