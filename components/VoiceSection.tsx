"use client";

import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Users } from "lucide-react";

interface VoiceItem {
    title: string;
    description: string;
}

interface VoiceSectionProps {
    content: VoiceItem[];
    header: {
        badge: string;
        title: string;
        description: string;
    };
    lang: string;
}

const icons = [
    <MessageCircle key="1" size={32} />,
    <BookOpen key="2" size={32} />,
    <Users key="3" size={32} />
];

export default function VoiceSection({ content, header, lang }: VoiceSectionProps) {
    return (
        <section className="py-32 md:py-48 px-6 bg-[#F9F9F7] relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand-accent/5 to-transparent -z-0 opacity-50" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 max-w-3xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        className="inline-block px-4 py-1.5 bg-brand-accent/10 rounded-full mb-8"
                    >
                        <span className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em]">{header.badge}</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-7xl font-black text-brand-secondary mb-8 leading-[1.1]">
                        {header.title}
                    </h2>

                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                        {header.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {content.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                                whileHover={{
                                    y: -15,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] border border-gray-50/50 flex flex-col items-start transition-all duration-300 hover:shadow-[0_40px_80px_-20px_rgba(217,164,65,0.15)] group h-full relative"
                            >
                                {/* Squircle Icon Wrapper */}
                                <div className="w-12 h-12 bg-brand-accent rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_8px_20px_-4px_rgba(217,164,65,0.4)] transition-all group-hover:scale-110 group-hover:rotate-6">
                                    {icons[index % icons.length]}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-brand-secondary mb-3 leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
