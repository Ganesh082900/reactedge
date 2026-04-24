"use client";

import React, { useState } from "react";
import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Footer() {
    useScrollAnimation();
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribe:", email);
    };

    return (
        <footer className="bg-shift-orange relative overflow-hidden">
            {/* Newsletter Section - Orange Background */}
            <div data-animate className="px-6 md:px-12 lg:px-16 py-8 md:py-12 fade-up">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="flex-1 max-w-2xl">
                        <label
                            htmlFor="email_newsletter"
                            className="block text-xs md:text-sm tracking-widest uppercase mb-3 text-white/90 font-mono font-semibold"
                        >
                            SIGN UP FOR UPDATES
                        </label>
                        <input
                            type="email"
                            id="email_newsletter"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-0 py-2 bg-transparent border-b-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors text-xl md:text-3xl font-light"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-8 py-3 bg-shift-blue text-white font-bold tracking-wider hover:bg-white hover:text-shift-blue transition-all duration-400 whitespace-nowrap rounded-full text-sm lift-sm hover:scale-105"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>

            {/* Main Footer Content - Dark Block */}
            <div className="bg-shift-gray text-shift-white px-6 md:px-12 lg:px-16 py-12 md:py-16">
                {/* Navigation Grid */}
                <div data-animate className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 fade-up">
                    {/* Logo */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block">
                            <div className="text-5xl md:text-6xl font-bold text-shift-blue hover:text-shift-orange transition-all duration-300">
                                ›
                            </div>
                        </Link>
                    </div>

                    {/* Platform */}
                    <div className="md:col-span-2">
                        <Link
                            href="/platform"
                            className="block text-lg md:text-xl font-semibold text-white hover:text-shift-blue transition-all duration-400 hover:translate-x-1"
                        >
                            Platform
                        </Link>
                    </div>

                    {/* Solutions */}
                    <div className="md:col-span-3">
                        <h3 className="text-lg md:text-xl font-normal mb-4 text-white">
                            Solutions<sup className="text-xs">4</sup>
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-shift-blue">└</span>
                                <Link
                                    href="/cyber-ew"
                                    className="text-white/80 hover:text-shift-blue transition-colors inline-flex items-center gap-1"
                                >
                                    <span>Cyber</span>
                                    <span>/</span>
                                    <span>EW</span>
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-shift-blue">└</span>
                                <Link
                                    href="/predictive-maintenance"
                                    className="text-white/80 hover:text-shift-blue transition-colors"
                                >
                                    Predictive Maintenance
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-shift-blue">└</span>
                                <Link
                                    href="/compliance"
                                    className="text-white/80 hover:text-shift-blue transition-colors"
                                >
                                    Compliance
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-shift-blue">└</span>
                                <Link
                                    href="/research"
                                    className="text-white/80 hover:text-shift-blue transition-colors"
                                >
                                    Research
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About + Other Links */}
                    <div className="md:col-span-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg md:text-xl font-normal mb-4 text-white">
                                    About<sup className="text-xs">2</sup>
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-shift-blue">└</span>
                                        <Link
                                            href="/company"
                                            className="text-white/80 hover:text-shift-blue transition-colors"
                                        >
                                            Company
                                        </Link>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-shift-blue">└</span>
                                        <Link
                                            href="/careers"
                                            className="text-white/80 hover:text-shift-blue transition-colors"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/insights"
                                            className="text-lg md:text-xl font-normal text-white hover:text-shift-blue transition-colors"
                                        >
                                            Insights
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="text-lg md:text-xl font-normal text-white hover:text-shift-blue transition-colors"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div data-animate className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 md:py-12 fade-up">
                    {/* <div className="flex items-start gap-3">
                        <div className="text-2xl">🇦🇪</div>
                        <p className="text-sm md:text-base font-mono tracking-wider uppercase text-white/90">
                            UAE
                        </p>
                    </div> */}
                    <div className="text-sm md:text-base font-mono tracking-wider uppercase text-white/90">
                        <p>REACTEDGE HQ</p>
                        <p>1100 WILSON BLVD,</p>
                        <p>STE 2100</p>
                        <p>ROSSLYN, VA 22209</p>
                    </div>
                </div>

                {/* Large REACTEDGE Branding */}
                <div data-animate className="overflow-hidden my-8 md:my-12 scale-in">
                    <h2 className="text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-bold tracking-tighter leading-none text-shift-blue select-none">
                        REACTEDGE
                    </h2>
                </div>
            </div>

            {/* Bottom Copyright - Orange Background */}
            <div className="bg-shift-orange px-6 md:px-12 lg:px-16 py-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs md:text-sm font-mono tracking-wider uppercase text-white">
                    <p>©2026 REACTEDGE, INC.</p>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:opacity-70 transition-opacity"
                        >
                            LICENSE AGREEMENT
                        </a>
                        <Link
                            href="/privacy-policy"
                            className="hover:opacity-70 transition-opacity"
                        >
                            PRIVACY POLICY
                        </Link>
                        <Link
                            href="/terms-of-use"
                            className="hover:opacity-70 transition-opacity"
                        >
                            TERMS OF USE
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}