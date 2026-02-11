"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        alert("Thank you for your message! We will get back to you soon.");
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Get in <span className="text-[#00D285]">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            We'd love to hear from you. Whether you have a question about our
                            services, pricing, or anything else, our team is ready to answer all
                            your questions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-1 space-y-8"
                        >
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Email Us</p>
                                            <a
                                                href="mailto:contact@giakaa.com"
                                                className="text-gray-600 hover:text-[#00D285] transition-colors"
                                            >
                                                contact@giakaa.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-green-100 rounded-lg text-green-600">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Call Us</p>
                                            <a
                                                href="tel:+1234567890"
                                                className="text-gray-600 hover:text-[#00D285] transition-colors"
                                            >
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Visit Us</p>
                                            <p className="text-gray-600">
                                                123 Business Avenue, Suite 100
                                                <br />
                                                Tech City, TC 90210
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D285] focus:ring-2 focus:ring-[#00D285]/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D285] focus:ring-2 focus:ring-[#00D285]/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D285] focus:ring-2 focus:ring-[#00D285]/20 outline-none transition-all"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D285] focus:ring-2 focus:ring-[#00D285]/20 outline-none transition-all resize-none"
                                        placeholder="Tell us more about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-4 bg-[#00D285] text-white font-semibold rounded-xl hover:bg-[#00b070] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
