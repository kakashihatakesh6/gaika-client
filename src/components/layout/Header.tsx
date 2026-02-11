"use client";

import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Services', href: '/blog' },
    { name: 'Industries', href: '/blog' },
    { name: 'About', href: '/blog' },
    { name: 'Insights', href: '/blog' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-center space-x-10">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group pr-40">
                    <span className="text-3xl font-bold text-[#00D285] tracking-tight">
                        Giakaa
                    </span>
                    <div className="flex flex-col border-l border-gray-300 pl-3 h-8 justify-center">
                        <span className="text-[10px] uppercase font-bold text-gray-400 leading-none tracking-widest">Growth</span>
                        <span className="text-[10px] uppercase font-bold text-gray-400 leading-none tracking-widest">For All</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1 group/link"
                        >
                            {link.name}
                            <ChevronDown className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-all group-hover/link:rotate-180" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4 pl-64">
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-[#3B82F6] text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-all hover:shadow-lg flex items-center gap-2 group"
                    >
                        Contact us
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium py-3 text-gray-600 border-b border-gray-100 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex items-center justify-between">
                                        {link.name}
                                        <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400" />
                                    </div>
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="w-full py-4 bg-[#3B82F6] text-white rounded-xl text-center font-bold mt-6 flex items-center justify-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact us
                                <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
