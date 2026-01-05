"use client";

import { motion } from "framer-motion";
import { Instagram, Video, Youtube, Send, ExternalLink } from "lucide-react";

interface SocialItem {
    platform: string;
    description: string;
    cta: string;
    url: string;
}

interface SocialSectionProps {
    content: SocialItem[];
    lang?: "en" | "am";
}

const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
        case "instagram": return <Instagram size={32} />;
        case "tiktok": return <Video size={32} />;
        case "youtube": return <Youtube size={32} />;
        case "telegram": return <Send size={32} />;
        default: return <ExternalLink size={32} />;
    }
};

export default function SocialSection({ content, lang = "en" }: SocialSectionProps) {
    return (
        <section className="py-24 px-6 bg-brand-primary/20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-brand-secondary/80 rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden"
                >
                    {/* Subtle Glow Effect */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px]" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                    {lang === "am"
                                        ? (
                                            <>
                                                የመልዐከ ብርሃን መምህር <span className="text-brand-accent">ሠሎሞን በቀለ</span> ፍሬዎች
                                            </>
                                        )
                                        : (
                                            <>
                                                Results of Melake Birhan Memhir <span className="text-brand-accent">Solomon Bekele</span>
                                            </>
                                        )}
                                </h2>
                                <p className="text-xl text-brand-muted max-w-md">
                                    {lang === "am"
                                        ? "በመልዐከ ብርሃን መምህር ሠሎሞን በቀለ የተሰሩ የመሠረተ ልማት ስራዎች የ4 ዓመታት የልማት ተጋድሎ ዘጋቢ ፊልም።"
                                        : "A documentary film about the infrastructure work done by Melake Birhan Memhir Solomon Bekele - 4 years of development efforts."}
                                </p>
                            </div>

                            {/* YouTube Video Player */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm relative group"
                            >
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/ZLNhoJ7QEck?si=lXAFGluwOuar3HQ1"
                                    title={lang === "am" ? "ሳሌም ሚዲያ አጠቃላይ እይታ" : "Salem Media Overview"}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl group-hover:border-brand-accent/30 transition-colors" />
                            </motion.div>
                        </div>

                        <div className="grid gap-6">
                            {content.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group flex items-center justify-between p-6 bg-white/5 hover:bg-brand-accent/10 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="text-brand-accent group-hover:scale-110 transition-transform duration-300">
                                            {getIcon(item.platform)}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-brand-accent transition-colors">{item.platform}</h3>
                                            <p className="text-sm text-brand-muted mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2 text-brand-accent font-medium uppercase tracking-wider text-xs group-hover:gap-4 transition-all">
                                        {item.cta} <ExternalLink size={14} />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
