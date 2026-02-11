"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Slide {
    id: number;
    type: "main" | "strip";
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    cta?: string;
    verticalText?: string;
}

import { Hero } from "@/types";

interface HeroSliderProps {
    heroes?: Hero[];
}

// Helper function to convert Hero API data to Slide format
const convertHeroToSlide = (hero: Hero, index: number): Slide => ({
    id: index,
    type: "main",
    title: hero.title,
    subtitle: hero.description,
    image: hero.mediaUrl,
    cta: hero.ctaText,
});

export function HeroSlider({ heroes }: HeroSliderProps) {
    // Build slides from API heroes only
    let slides: Slide[] = [];
    let initialActiveId = 0;

    if (heroes && heroes.length > 0) {
        // Filter only active heroes and sort by displayOrder
        const activeHeroes = heroes
            .filter(h => h.isActive)
            .sort((a, b) => a.displayOrder - b.displayOrder);

        // Convert heroes to slides
        slides = activeHeroes.map((hero, index) => convertHeroToSlide(hero, index));

        // Set initial active slide to the second one (index 1), or first if only one slide exists
        if (slides.length > 1) {
            initialActiveId = slides[1].id;
        } else if (slides.length > 0) {
            initialActiveId = slides[0].id;
        }
    }

    const [activeId, setActiveId] = useState<number>(initialActiveId);

    // If no slides available, show empty state
    if (slides.length === 0) {
        return (
            <div className="w-full h-[600px] md:h-[700px] bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <p className="text-muted-foreground text-lg">No hero slides available.</p>
                    <p className="text-sm text-muted-foreground mt-2">Create slides in the admin panel to display them here.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-[600px] md:h-[700px] bg-background text-foreground overflow-hidden flex">
            {slides.map((slide) => {
                const isActive = slide.id === activeId;

                return (
                    <motion.div
                        key={slide.id}
                        layout
                        onClick={() => setActiveId(slide.id)}
                        className={cn(
                            "relative h-full border-r border-white/10 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out",
                            isActive ? "flex-[4]" : "flex-[0.5] hover:flex-[0.7]"
                        )}
                    >
                        {/* Background Image/Gradient for Main/Active Slide */}
                        {isActive && (
                            <div className="absolute inset-0 z-0">
                                {/* Fallback Gradient if no image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black" />

                                {slide.image && (
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover object-center opacity-80"
                                        priority
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            </div>
                        )}

                        {/* Overlay for Inactive Slides */}
                        <div className={cn(
                            "absolute inset-0 transition-colors duration-300 z-10",
                            isActive ? "bg-black/20" : "bg-black/80 hover:bg-black/60"
                        )} />

                        {/* Content Container */}
                        <div className="relative z-20 h-full p-6 flex flex-col justify-between">

                            {/* Top Section */}
                            <div className="flex justify-between items-start h-[100px]">
                                {/* Show title when inactive */}
                                {!isActive && (
                                    <div className="writing-vertical-rl text-lg font-bold tracking-widest text-[#cccccc] opacity-80 rotate-180 absolute top-32 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        {slide.title}
                                    </div>
                                )}

                                {/* Small Label for Main Slide */}
                                {isActive && slide.type === 'main' && (
                                    <div className="flex w-full justify-end">
                                        <span className="px-5 py-2 rounded-lg border border-white/10 bg-black/60 text-sm font-medium backdrop-blur-md">
                                            Services
                                        </span>
                                    </div>

                                )}
                            </div>

                            {/* Middle/Main Content for Active Main Slide */}
                            {isActive && slide.type === 'main' && (
                                <div className="max-w-2xl mt-12 md:mt-0 px-4">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-5xl md:text-7xl font-bold leading-tight mb-6 whitespace-pre-line"
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
                                    >
                                        {slide.subtitle}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <Button className="rounded-full px-8 py-7 text-lg bg-blue-600 hover:bg-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all">
                                            {slide.cta} <span className="ml-2">↗</span>
                                        </Button>
                                    </motion.div>
                                </div>
                            )}

                            {/* Bottom Section (Plus Button) */}
                            <div className="flex justify-center md:justify-center mb-8">
                                {!isActive && (
                                    <button
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                                        )}
                                    >
                                        <Plus className={cn("w-6 h-6 transition-transform", isActive ? "rotate-45" : "rotate-0")} />
                                    </button>
                                )}

                            </div>

                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
