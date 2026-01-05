"use client";

import { motion } from "framer-motion";

interface SocialItem {
    platform: string;
    description: string;
    cta: string;
    url: string;
}

interface ClosingSectionProps {
    content: {
        message: string;
        cta: string;
    };
    channelUrl: string;
    socials?: SocialItem[];
}

export default function ClosingSection({ content, channelUrl, socials = [] }: ClosingSectionProps) {
    return (
        <section className="py-20 px-6 text-center bg-brand-secondary relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-accent/5 rounded-full -z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-accent/10 rounded-full -z-0" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                        {content.message}
                    </h2>

                    <div className="flex justify-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={channelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-brand-accent text-brand-secondary font-bold text-base rounded-full shadow-2xl hover:bg-white transition-all duration-300"
                        >
                            {content.cta}
                        </motion.a>
                    </div>
                </motion.div>

                <footer className="mt-20 pt-8 border-t border-white/5 text-brand-muted text-sm space-y-3">
                    <div className="flex justify-center gap-6 mb-2">
                        {(() => {
                            const byPlatform = (name: string) => socials.find(s => s.platform.toLowerCase() === name.toLowerCase())?.url;
                            const ig = byPlatform("Instagram");
                            const tt = byPlatform("TikTok");
                            const yt = byPlatform("YouTube") || channelUrl;
                            return (
                                <>
                                    {ig ? (
                                        <a href={ig} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Instagram</a>
                                    ) : (
                                        <span className="hover:text-brand-accent cursor-default transition-colors">Instagram</span>
                                    )}
                                    {tt ? (
                                        <a href={tt} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">TikTok</a>
                                    ) : (
                                        <span className="hover:text-brand-accent cursor-default transition-colors">TikTok</span>
                                    )}
                                    {yt ? (
                                        <a href={yt} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">YouTube</a>
                                    ) : (
                                        <span className="hover:text-brand-accent cursor-default transition-colors">YouTube</span>
                                    )}
                                </>
                            );
                        })()}
                    </div>
                    <p>© {new Date().getFullYear()} ሳሌም ሚድያ ሙሉ መብቱ የተጠበቀ ነው.</p>
                </footer>
            </div>
        </section>
    );
}
