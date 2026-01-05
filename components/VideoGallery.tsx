"use client";

import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import { useState } from "react";

interface VideoItem {
    title: string;
    videoId: string;
    duration: string;
    thumbnail: string;
}

interface VideoGalleryProps {
    badge: string;
    title: string;
    description: string;
    cta: string;
    channelUrl: string;
    items: VideoItem[];
}

export default function VideoGallery({ badge, title, description, cta, channelUrl, items }: VideoGalleryProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-16 px-6 bg-[#F9F9F7]">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3 max-w-xl"
                    >
                        {/* YouTube Badge */}
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-50 rounded-full border border-red-100">
                            <Youtube size={14} className="text-red-600" />
                            <span className="text-red-600 font-semibold text-xs uppercase tracking-wider">{badge}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-brand-secondary leading-tight">
                            {title}
                        </h2>

                        <p className="text-base text-gray-500 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>

                    {/* View All Button */}
                    <motion.a
                        href={channelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2.5 bg-white border-2 border-brand-secondary text-brand-secondary font-bold text-sm rounded-xl hover:bg-brand-secondary hover:text-white transition-all shadow-sm"
                    >
                        {cta}
                    </motion.a>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {items.map((video, index) => (
                        <motion.a
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            href={`https://www.youtube.com/watch?v=${video.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer"
                        >
                            {/* Video Thumbnail */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-3 bg-gray-200 shadow-lg">
                                {/* Thumbnail Image */}
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Play Button */}
                                <motion.div
                                    animate={{
                                        scale: hoveredIndex === index ? 1.2 : 1,
                                    }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-brand-accent transition-colors">
                                        <Play size={20} className="text-brand-secondary ml-0.5" fill="currentColor" />
                                    </div>
                                </motion.div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 backdrop-blur-sm rounded-md text-white text-xs font-semibold">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Video Title */}
                            <h3 className="text-base md:text-lg font-bold text-brand-secondary group-hover:text-brand-accent transition-colors">
                                {video.title}
                            </h3>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
