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
        <section className="bg-shift-orange text-shift-dark px-6 md:px-12 lg:px-16 py-20 md:py-32 relative overflow-hidden">
            {/* Heading */}
            <div data-animate className="max-w-6xl mx-auto text-center mb-16 md:mb-24 fade-up">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                    Ready to harness your{" "}
                    <span className="inline-block">
                        Op<span className="opacity-60">/</span>Intelligence?
                    </span>
                </h2>
            </div>

            {/* Email Input with Parentheses */}
            <form data-animate onSubmit={handleSubmit} className="max-w-5xl mx-auto fade-up">
                <div className="flex justify-center items-center mb-12 md:mb-16">
                    <div className="flex items-center gap-6 md:gap-12 w-full max-w-4xl">
                        <span className="text-6xl md:text-8xl lg:text-9xl font-light leading-none">
                            (
                        </span>

                        <div className="flex-1 max-w-2xl">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-transparent border-b-2 border-shift-dark/30 text-center px-4 py-3 md:py-4 text-xl md:text-2xl lg:text-3xl placeholder-shift-dark/60 focus:outline-none focus:border-shift-dark transition-colors"
                            />
                        </div>

                        <span className="text-6xl md:text-8xl lg:text-9xl font-light leading-none">
                            )
                        </span>
                    </div>
                </div>

                {/* Continue Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="border-2 border-shift-dark/40 px-10 py-3 rounded-full text-xs tracking-widest uppercase hover:bg-shift-dark hover:text-shift-orange transition-all duration-400 font-mono lift-sm hover:scale-105"
                    >
                        CONTINUE
                    </button>
                </div>
            </form>

            {/* Contact Information */}
            <div data-animate className="max-w-6xl mx-auto mt-20 md:mt-28 pt-12 md:pt-16 border-t border-shift-dark/30 fade-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Left - Get in touch */}
                    <div className="md:col-span-3">
                        <p className="uppercase tracking-wider text-xs md:text-sm font-mono leading-relaxed">
                            GET IN<br />
                            TOUCH TO<br />
                            LEARN<br />
                            MORE.
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-4">
                        <p className="uppercase text-xs md:text-sm mb-2 font-mono tracking-wider">
                            PHONE
                        </p>
                        <a
                            href="tel:+17038103320"
                            className="text-2xl md:text-3xl lg:text-4xl font-normal hover:opacity-70 transition-opacity"
                        >
                            +1 703 810 3320
                        </a>
                    </div>

                    {/* Email Addresses */}
                    <div className="md:col-span-5 space-y-6 md:space-y-8">
                        <div>
                            <p className="uppercase text-xs md:text-sm mb-2 font-mono tracking-wider">
                                GENERAL INQUIRIES
                            </p>
                            <a
                                href="mailto:info@reactedge.io"
                                className="text-xl md:text-2xl lg:text-3xl font-normal hover:opacity-70 transition-opacity"
                            >
                                info@reactedge.io
                            </a>
                        </div>

                        <div>
                            <p className="uppercase text-xs md:text-sm mb-2 font-mono tracking-wider">
                                PRESS
                            </p>
                            <a
                                href="mailto:press@reactedge.io"
                                className="text-xl md:text-2xl lg:text-3xl font-normal hover:opacity-70 transition-opacity"
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