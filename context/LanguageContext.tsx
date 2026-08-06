"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

import { languages } from "@/data/languages";

export type Language = (typeof languages)[number];

interface LanguageContextType {
    language: Language;
    languages: Language[];
    setLanguage: (language: Language) => void;
}

const LanguageContext =
    createContext<LanguageContextType | null>(null);

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [language, setLanguage] = useState(languages[0]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                languages,
                setLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
}