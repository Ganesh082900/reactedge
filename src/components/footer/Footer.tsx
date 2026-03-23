// app/components/Footer.tsx

"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="bg-primary text-secondary px-6 md:px-16 py-10">
            {/* Top Subscribe Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-secondary/20 pb-8">
                <div>
                    <p className="text-xs tracking-widest uppercase opacity-70">
                        Sign up for updates
                    </p>
                    <h2 className="text-2xl md:text-4xl font-semibold mt-1">
                        Enter your email address
                    </h2>
                </div>

                <div className="flex w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full md:w-72 px-4 py-3 bg-transparent border border-secondary/40 text-secondary placeholder-secondary/50 focus:outline-none"
                    />
                    <button className="bg-secondary text-primary px-5 py-3 text-sm font-medium hover:opacity-80 transition">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
                {/* Logo / Brand */}
                <div>
                    <div className="text-4xl font-bold tracking-widest">›</div>
                </div>

                {/* Platform */}
                <div>
                    <h3 className="text-lg mb-4">Platform</h3>
                </div>

                {/* Solutions */}
                <div>
                    <h3 className="text-lg mb-4">Solutions</h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li>Cyber / EW</li>
                        <li>Predictive Maintenance</li>
                        <li>Compliance</li>
                        <li>Research</li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h3 className="text-lg mb-4">About</h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li>Company</li>
                        <li>Careers</li>
                        <li>Insights</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            {/* Middle Info */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6 text-xs opacity-70 py-6 border-t border-secondary/20">
                <div>
                    <p>🇺🇸</p>
                    <p className="mt-2">Forged in America. For America.</p>
                </div>

                <div>
                    <p>
                        Shifts HQ <br />
                        1100 Wilson Blvd, <br />
                        Ste 2100 <br />
                        Rosslyn, VA 22209
                    </p>
                </div>
            </div>

            {/* Big Branding */}
            <div className="overflow-hidden">
                <h1 className="text-[80px] md:text-[180px] font-bold tracking-tight leading-none text-secondary opacity-90">
                    SHIFT5
                </h1>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col md:flex-row justify-between items-center text-xs mt-6 gap-4 opacity-70">
                <p>© 2026 SHIFT5, Inc.</p>

                <div className="flex gap-6">
                    <a href="#" className="hover:underline">
                        License Agreement
                    </a>
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:underline">
                        Terms of Use
                    </a>
                </div>
            </div>
        </footer>
    );
}