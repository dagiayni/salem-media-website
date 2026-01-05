"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
    content: {
        title: string;
        subtitle: string;
        description: string;
        cta: string;
    };
    lang: string;
    channelUrl: string;
}

export default function Hero({ content, lang, channelUrl }: HeroProps) {
    // Logic to highlight specific words based on language
    const renderSubtitle = () => {
        if (lang === "en") {
            return (
                <>
                    Amplifying <span className="text-brand-accent">Voices</span>
                    <br />
                    That Matter
                </>
            );
        } else {
            return (
                <>
                    ተፅዕኖ ፈጣሪ <span className="text-brand-accent">ድምፆችን</span>
                    <br />
                    ማጉላት
                </>
            );
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-[#F9F9F7]">
            {/* Decorative Circles from Image */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] bg-brand-accent/5 rounded-full translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] bg-brand-primary/5 rounded-full -translate-x-1/4 translate-y-1/4" />

            <div className="container mx-auto flex flex-col items-center text-center z-10">
                {/* Logo image only (no background) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <img
                        src="/images/salem-logo.png"
                        alt="Salem Media logo"
                        className="w-24 h-24 object-contain"
                    />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-secondary leading-[1.1] max-w-4xl tracking-tight"
                >
                    {renderSubtitle()}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed"
                >
                    {content.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10"
                >
                    <a
                        href={channelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-brand-accent text-white font-bold rounded-full shadow-[0_10px_30px_rgba(217,164,65,0.3)] hover:scale-105 transition-all active:scale-95"
                    >
                        {content.cta}
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10"
                >
                    <ChevronDown className="text-brand-secondary/30 animate-bounce" size={32} />
                </motion.div>
            </div>
        </section>
    );
}
