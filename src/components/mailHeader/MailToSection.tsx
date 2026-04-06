"use client";
import React, { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function MailToSection() {
    useScrollAnimation();
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        window.location.href = `mailto:info@reactedge.io?subject=Inquiry&body=Hello, I'm interested. My email is ${email}`;
    };

    return (
        <section className="bg-shift-orange text-white px-6 md:px-12 lg:px-16 py-24 md:py-36 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-shift-blue/20 via-transparent to-shift-blue/10"></div>
            </div>

            {/* Heading */}
            <div data-animate className="max-w-6xl mx-auto text-center mb-20 md:mb-28 fade-up relative z-10">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
                    Ready to harness your{" "}
                    <span className="inline-block relative">
                        <span className="text-shift-blue">Op</span>
                        <span className="text-white/40">/</span>
                        <span className="text-shift-blue">Intelligence</span>
                        <span className="text-white">?</span>
                    </span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light tracking-wide">
                    Let's transform your operational data into actionable intelligence.
                </p>
            </div>

            {/* Email Input with Parentheses */}
            <form data-animate onSubmit={handleSubmit} className="max-w-5xl mx-auto fade-up relative z-10">
                <div className="flex justify-center items-center mb-14 md:mb-20">
                    <div className="flex items-center gap-4 md:gap-8 lg:gap-12 w-full max-w-5xl">
                        <span className="text-6xl md:text-8xl lg:text-[10rem] font-light leading-none text-shift-blue">
                            (
                        </span>

                        <div className="flex-1 max-w-3xl">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-white/10 backdrop-blur-sm border-b-4 border-shift-blue/40 text-center px-6 py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl placeholder-white/50 text-white focus:outline-none focus:border-shift-blue focus:bg-white/15 transition-all duration-300 font-light tracking-wide"
                            />
                        </div>

                        <span className="text-6xl md:text-8xl lg:text-[10rem] font-light leading-none text-shift-blue">
                            )
                        </span>
                    </div>
                </div>

                {/* Continue Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="group relative bg-shift-blue border-2 border-shift-blue px-12 md:px-16 py-4 md:py-5 rounded-full text-sm md:text-base tracking-[0.2em] uppercase hover:bg-white hover:border-white hover:text-shift-blue transition-all duration-500 font-mono font-semibold text-white shadow-lg hover:shadow-2xl hover:shadow-shift-blue/30 lift-md overflow-hidden"
                    >
                        <span className="relative z-10">CONTINUE</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-shift-blue via-[#0d5a94] to-shift-blue bg-size-200 animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                </div>
            </form>

            {/* Contact Information */}
            <div data-animate className="max-w-6xl mx-auto mt-24 md:mt-32 pt-16 md:pt-20 border-t-2 border-white/20 fade-up relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                    {/* Left - Get in touch */}
                    <div className="md:col-span-3">
                        <p className="uppercase tracking-[0.15em] text-sm md:text-base font-mono leading-relaxed text-white/90 font-medium">
                            GET IN<br />
                            TOUCH TO<br />
                            LEARN<br />
                            MORE.
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-4 group">
                        <p className="uppercase text-xs md:text-sm mb-3 font-mono tracking-[0.2em] text-shift-blue font-semibold">
                            PHONE
                        </p>
                        <a
                            href="tel:+17038103320"
                            className="text-3xl md:text-4xl lg:text-5xl font-light text-white hover:text-shift-blue transition-all duration-300 tracking-tight block group-hover:translate-x-2"
                        >
                            +1 703 810 3320
                        </a>
                    </div>

                    {/* Email Addresses */}
                    <div className="md:col-span-5 space-y-8 md:space-y-10">
                        <div className="group">
                            <p className="uppercase text-xs md:text-sm mb-3 font-mono tracking-[0.2em] text-shift-blue font-semibold">
                                GENERAL INQUIRIES
                            </p>
                            <a
                                href="mailto:info@reactedge.io"
                                className="text-2xl md:text-3xl lg:text-4xl font-light text-white hover:text-shift-blue transition-all duration-300 tracking-tight block group-hover:translate-x-2"
                            >
                                info@reactedge.io
                            </a>
                        </div>

                        <div className="group">
                            <p className="uppercase text-xs md:text-sm mb-3 font-mono tracking-[0.2em] text-shift-blue font-semibold">
                                PRESS
                            </p>
                            <a
                                href="mailto:press@reactedge.io"
                                className="text-2xl md:text-3xl lg:text-4xl font-light text-white hover:text-shift-blue transition-all duration-300 tracking-tight block group-hover:translate-x-2"
                            >
                                press@reactedge.io
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}