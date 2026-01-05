"use client";


import { Languages, Globe } from "lucide-react";

interface LanguageToggleProps {
    currentLang: "en" | "am";
    setLang: (lang: "en" | "am") => void;
}

export default function LanguageToggle({ currentLang, setLang }: LanguageToggleProps) {
    return (
        <div className="fixed top-8 right-8 z-50">
            <button
                onClick={() => setLang(currentLang === "en" ? "am" : "en")}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all text-brand-secondary font-medium"
            >
                <Globe size={18} className="text-brand-accent" />
                <span className="text-sm uppercase">{currentLang === "en" ? "አማ" : "en"}</span>
            </button>
        </div>
    );
}
