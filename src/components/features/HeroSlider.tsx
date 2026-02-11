"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Hero } from "@/types";

interface HeroSliderProps {
    heroes?: Hero[];
}

export function HeroSlider({ heroes = [] }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Filter active heroes and sort by displayOrder
    const activeHeroes = heroes
        .filter(hero => hero.isActive)
        .sort((a, b) => a.displayOrder - b.displayOrder);

    // Auto-rotate slides if there are multiple
    useEffect(() => {
        if (activeHeroes.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % activeHeroes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeHeroes.length]);

    // Construct the current slide data from API or use a fallback if no heroes exist
    const currentHero = activeHeroes[currentIndex];

    // Fallback if no data is available
    if (!currentHero) {
        return (
            <div className="w-full bg-white flex justify-center pt-32 pb-10">
                <div className="w-[80%] h-[600px] bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400">
                    No active hero slides found.
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-white flex justify-center pt-8 pb-10">
            {/* Main Container - 80% Width */}
            <div className="w-[80%] h-[600px] flex gap-4">

                {/* Left Sidebar - Global Overview */}
                <div className="w-16 md:w-20 bg-[#1A1F2B] rounded-2xl flex flex-col items-center justify-end pb-8 relative overflow-hidden group hover:w-24 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <div className="writing-vertical-rl rotate-180 text-gray-400 font-medium tracking-widest text-xs uppercase mb-10 whitespace-nowrap">
                        Global Overview
                    </div>
                    <button className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white z-10">
                        <Plus className="w-5 h-5" />
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 rounded-3xl overflow-hidden relative group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentHero._id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            {/* Background Image */}
                            {currentHero.mediaUrl && (
                                <Image
                                    src={currentHero.mediaUrl}
                                    alt={currentHero.title}
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            )}

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Top Right Label */}
                    <div className="absolute top-8 right-8 z-20">
                        <span className="px-4 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/90 text-sm font-medium">
                            Services
                        </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-16 left-12 max-w-2xl z-20">
                        <AnimatePresence mode="wait">
                            <div key={currentHero._id}>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line"
                                >
                                    {currentHero.title}
                                </motion.h1>

                                <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
                                    <Button
                                        asChild
                                        className="h-auto py-3.5 px-6 rounded-full bg-[#3B82F6] hover:bg-blue-600 text-white font-medium text-base shadow-lg shadow-blue-600/25 flex items-center gap-2 cursor-pointer"
                                    >
                                        <a href={currentHero.ctaLink || "#"}>
                                            {currentHero.ctaText || "Learn More"}
                                            <ArrowUpRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </Button>

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-gray-300 text-sm leading-relaxed max-w-sm mb-1.5"
                                    >
                                        {currentHero.description}
                                    </motion.p>
                                </div>
                            </div>
                        </AnimatePresence>
                    </div>

                    {/* Slide Indicators (if multiple) */}
                    {activeHeroes.length > 1 && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {activeHeroes.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all",
                                        idx === currentIndex ? "bg-white w-6" : "bg-white/40"
                                    )}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Sidebar 1 - Industries */}
                <div className="w-16 md:w-20 bg-[#1E1E1E] rounded-2xl flex flex-col items-center justify-end pb-8 relative overflow-hidden group hover:w-24 transition-all duration-300">
                    <div className="writing-vertical-rl rotate-180 text-gray-500 font-medium tracking-widest text-xs uppercase mb-10 whitespace-nowrap">
                        Industries
                    </div>
                    <button className="w-8 h-8 rounded-full bg-[#3B82F6]/20 hover:bg-[#3B82F6] text-[#3B82F6] hover:text-white flex items-center justify-center transition-colors z-10">
                        <Plus className="w-5 h-5" />
                    </button>
                    {/* Background Image Overlay (Optional to match design depth) */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay" />
                </div>

                {/* Right Sidebar 2 - Solutions */}
                <div className="w-16 md:w-20 bg-[#151515] rounded-2xl flex flex-col items-center justify-end pb-8 relative overflow-hidden group hover:w-24 transition-all duration-300">
                    <div className="writing-vertical-rl rotate-180 text-gray-500 font-medium tracking-widest text-xs uppercase mb-10 whitespace-nowrap">
                        Solutions
                    </div>
                    <button className="w-8 h-8 rounded-full bg-[#3B82F6]/20 hover:bg-[#3B82F6] text-[#3B82F6] hover:text-white flex items-center justify-center transition-colors z-10">
                        <Plus className="w-5 h-5" />
                    </button>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay" />
                </div>
            </div>
        </div>
    );
}
