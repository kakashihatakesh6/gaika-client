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
    hero?: Hero;
}

const defaultSlides: Slide[] = [
    {
        id: 1,
        type: "strip",
        title: "Global Overview",
        verticalText: "Global Overview",
    },
    {
        id: 2,
        type: "main",
        title: "AI-First.\nResults-Driven.",
        subtitle: "Unlike traditional consultancies, we embed artificial intelligence at the core of every solution we build.",
        cta: "Get Free AI Assessment",
    },
    {
        id: 3,
        type: "strip",
        title: "Industries",
        verticalText: "Industries",
    },
    {
        id: 4,
        type: "strip",
        title: "Solutions",
        verticalText: "Solutions",
    },
];

export function HeroSlider({ hero }: HeroSliderProps) {
    const [activeId, setActiveId] = useState<number>(2);

    const slides = [...defaultSlides];
    if (hero) {
        slides[1] = {
            ...slides[1],
            title: hero.title || slides[1].title,
            subtitle: hero.description || slides[1].subtitle,
            image: hero.mediaUrl, // mediaUrl from DB -> image
            cta: hero.ctaText || slides[1].cta,
        };
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
                            isActive ? "bg-black/20" : "bg-black/60 hover:bg-black/40"
                        )} />

                        {/* Content Container */}
                        <div className="relative z-20 h-full p-6 flex flex-col justify-between">

                            {/* Top Section */}
                            <div className="flex justify-between items-start">
                                {/* Vertical Text for strips (Active or Inactive) */}
                                {!isActive && slide.verticalText && (
                                    <div className="writing-vertical-rl text-xs font-bold tracking-widest uppercase text-muted-foreground opacity-70 rotate-180 absolute top-24 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        {slide.verticalText}
                                    </div>
                                )}

                                {isActive && slide.type === 'strip' && (
                                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                                )}

                                {/* Small Label for Main Slide */}
                                {isActive && slide.type === 'main' && (
                                    <span className="px-3 py-1 rounded-full border border-white/20 bg-black/40 text-xs backdrop-blur-sm">
                                        Services
                                    </span>
                                )}
                            </div>

                            {/* Middle/Main Content for Active Main Slide */}
                            {isActive && slide.type === 'main' && (
                                <div className="max-w-2xl mt-12 md:mt-0">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-4xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line"
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-lg text-gray-300 mb-8 max-w-lg"
                                    >
                                        {slide.subtitle}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <Button className="rounded-full px-8 py-6 text-base bg-blue-600 hover:bg-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                                            {slide.cta} <span className="ml-2">↗</span>
                                        </Button>
                                    </motion.div>
                                </div>
                            )}

                            {/* Bottom Section (Plus Button) */}
                            <div className="flex justify-end md:justify-start">
                                <button
                                    className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                        isActive ? "bg-blue-600 text-white" : "bg-white/10 text-white hover:bg-white/20"
                                    )}
                                >
                                    <Plus className={cn("w-5 h-5 transition-transform", isActive ? "rotate-45" : "rotate-0")} />
                                </button>
                            </div>

                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
