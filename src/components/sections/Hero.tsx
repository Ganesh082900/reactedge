"use client";

import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

// Binary Display Component with animations
function BinaryDisplay() {
    const [mounted, setMounted] = useState(false);
    const [binaryRows, setBinaryRows] = useState<string[]>([
        '00001100  01100011  10101110',
        '11000100  01001110  10101110',
        '10110110  01010010  10100011',
        '11000010  10011010  11101100',
        '11011111  00001111  10101011',
        '11011101  01001100  00010000',
        '00100001  11011111  00100111',
        '00111100  00011000  10101101',
        '01011101  10000000  10000100'
    ]);
    const [graphHeight, setGraphHeight] = useState(78);

    // Wait for component to mount before starting animations
    useEffect(() => {
        setMounted(true);
    }, []);

    // Randomly flip binary digits
    useEffect(() => {
        if (!mounted) return;
        
        const binaryInterval = setInterval(() => {
            setBinaryRows(prev => prev.map(row => {
                // Split into characters, randomly flip some 0s and 1s
                return row.split('').map(char => {
                    if ((char === '0' || char === '1') && Math.random() > 0.85) {
                        return char === '0' ? '1' : '0';
                    }
                    return char;
                }).join('');
            }));
        }, 150); // Update every 150ms

        return () => clearInterval(binaryInterval);
    }, [mounted]);

    // Animate graph bar height - smooth continuous movement
    useEffect(() => {
        if (!mounted) return;
        
        const graphInterval = setInterval(() => {
            setGraphHeight(prev => {
                // Smoothly vary between 40% and 95% with smaller, more frequent changes
                const change = (Math.random() - 0.5) * 8;
                const newHeight = prev + change;
                return Math.max(40, Math.min(95, newHeight));
            });
        }, 200); // Update every 200ms for smoother animation

        return () => clearInterval(graphInterval);
    }, [mounted]);

    return (
        <div className="flex items-end gap-2 sm:gap-3 mt-auto pl-2 sm:pl-4 py-6 sm:py-8 border-t border-white/20">
            {/* Graph Bar */}
            <div className="flex flex-col items-center gap-1">
                <div className="w-[0.3rem] sm:w-[0.4rem] h-20 sm:h-24 bg-white/30 relative overflow-hidden">
                    <div
                        className="absolute bottom-0 left-0 w-full bg-white/60 transition-all duration-300 ease-out"
                        style={{ height: `${graphHeight}%` }}
                    ></div>
                </div>
                <div className="w-1.5 sm:w-2 h-0.5 sm:h-1 bg-white/50"></div>
            </div>

            {/* Binary Code */}
            <div className="font-mono text-[10px] sm:text-[12px] lg:text-sm opacity-40 leading-relaxed flex-1 overflow-hidden">
                {binaryRows.map((row, i) => (
                    <div key={i} className="transition-opacity duration-100">
                        {row}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    useScrollAnimation();

    return (
        <section className="min-h-screen bg-shift-orange text-shift-dark overflow-x-hidden">
            <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:min-h-screen">

                {/* ================= LEFT CONTENT ================= */}
                <div className="flex-1 flex flex-col overflow-hidden lg:min-h-screen">
                    <div className="pt-52 flex-1 flex flex-col">

                        {/* HERO BLOCK */}
                        <div className="flex flex-col overflow-hidden pb-6 lg:pb-8 relative px-4 sm:px-6 lg:px-8">
                            {/* DESCRIPTION - TOP RIGHT */}
                            <p
                                data-animate
                                className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-md lg:max-w-sm xl:max-w-md fade-up font-medium tracking-tight mb-4 lg:mb-0 lg:ml-auto"
                            >
                                Operational Intelligence for Every Vehicle, Every Fleet, Every Mission.
                            </p>

                            {/* LARGE TITLE - LEFT */}
                            <h1
                                data-animate
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-bold leading-[0.85] tracking-[-0.04em] break-words fade-up"
                            >
                                Op<span className="text-shift-dark/30 font-light">/</span>
                                <br />
                                Intelligence
                            </h1>
                        </div>

                        {/* VIDEO */}
                        <div
                            data-animate
                            className="card-container relative aspect-video lg:aspect-[2/1] overflow-hidden bg-black scale-in shadow-2xl"
                        >
                            <video
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                src="https://player.vimeo.com/progressive_redirect/playback/1115346282/rendition/1080p/file.mp4?loc=external&log_user=0&signature=81b5307af8ed08f6cac540d1081ccf840bd349e00b8ce781a55859a5913a3a57"
                                muted
                                loop
                                playsInline
                                autoPlay
                                poster="/images/poster.jpg"
                            />
                        </div>

                        {/* NEWS CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 flex-grow">
                            {/* Card 1 */}
                            <Link
                                data-animate
                                href="https://reactedge.io/insights/reactedge-partners-with-anduril-armys-ngc2/"
                                target="_blank"
                                rel="noreferrer"
                                className="card-container relative bg-shift-white p-6 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] hover:bg-white transition-all duration-500 group fade-up border border-shift-gray/30 hover:border-shift-blue flex flex-col"
                            >
                                {/* Accent Line */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-shift-orange group-hover:w-full transition-all duration-700"></div>

                                <h2 className="text-base sm:text-lg lg:text-xl font-medium mb-3 lg:mb-4 leading-tight tracking-tight group-hover:text-shift-orange transition-colors duration-400">
                                    ReActEdge Partners with Anduril on Army's Next Generation Command and Control Initiative
                                </h2>
                                <p className="text-[10px] lg:text-xs text-shift-dark/60 uppercase tracking-wider font-mono leading-relaxed group-hover:text-shift-dark/80 transition-colors duration-400">
                                    Operational Intelligence Platform Integrates with Lattice Mesh to Deliver Near Real-Time Vehicle Health Data for Enhanced Mission Readiness
                                </p>
                            </Link>

                            {/* Card 2 */}
                            <Link
                                data-animate
                                href="https://reactedge.io/insights/reactedge-advanced-rf-enabled-gps-threat-detection/"
                                target="_blank"
                                rel="noreferrer"
                                className="card-container relative bg-shift-white p-6 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] hover:bg-white transition-all duration-500 group fade-up border border-shift-gray/30 hover:border-shift-blue flex flex-col"
                            >
                                {/* Accent Line */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-shift-orange group-hover:w-full transition-all duration-700"></div>

                                <h2 className="text-base sm:text-lg lg:text-xl font-medium mb-3 lg:mb-4 leading-tight tracking-tight group-hover:text-shift-orange transition-colors duration-400">
                                    ReActEdge Launches Advanced RF-Enabled GPS Threat Detection
                                </h2>
                                <p className="text-[10px] lg:text-xs text-shift-dark/60 uppercase tracking-wider font-mono leading-relaxed group-hover:text-shift-dark/80 transition-colors duration-400">
                                    Next-generation capability delivers early warning of GPS threats up to 200 nautical miles away with plug-and-play deployment
                                </p>
                            </Link>

                            {/* Card 3 */}
                            <Link
                                data-animate
                                href="https://reactedge.io/insights/reactedge-achieves-niap-certification-for-full-drive-encryption/"
                                target="_blank"
                                rel="noreferrer"
                                className="card-container relative bg-shift-white p-6 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] hover:bg-white transition-all duration-500 group fade-up border border-shift-gray/30 hover:border-shift-blue flex flex-col"
                            >
                                {/* Accent Line */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-shift-orange group-hover:w-full transition-all duration-700"></div>

                                <h2 className="text-base sm:text-lg lg:text-xl font-medium mb-3 lg:mb-4 leading-tight tracking-tight group-hover:text-shift-orange transition-colors duration-400">
                                    ReActEdge Achieves NIAP Certification for Full Encryption, Enabling Secure Deployment in Classified Environments
                                </h2>
                                <p className="text-[10px] lg:text-xs text-shift-dark/60 uppercase tracking-wider font-mono leading-relaxed group-hover:text-shift-dark/80 transition-colors duration-400">
                                    First and only provider in its class to receive certification for devices capable of handling classified data at rest
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <aside className="w-full lg:w-[380px] xl:w-[420px] flex flex-col lg:min-h-screen">

                    {/* DESCRIPTION BOX */}
                    <div
                        data-animate
                        className="card-container bg-shift-white p-6 sm:p-8 lg:px-10 lg:pb-10 pt-12 lg:pt-52 fade-up transition-all duration-500 hover:border-shift-orange"
                    >
                        <p className="w-full sm:w-3/4 text-base sm:text-lg lg:text-xl leading-relaxed font-medium tracking-tight text-shift-dark">
                            Powering actionable insights for America's defense and transportation systems.
                        </p>
                    </div>

                    {/* SYSTEM STATUS */}
                    <div
                        data-animate
                        className="card-container bg-shift-dark text-white p-6 sm:p-8 lg:px-10 py-12 sm:py-16 lg:py-20 flex flex-col flex-grow fade-up transition-all duration-500"
                    >
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 tracking-tight">System Status</h3>

                        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 font-mono text-xs sm:text-sm">
                            {[
                                '01. GPS',
                                '02. Radar',
                                '03. Engines',
                                '04. Electrical',
                                '05. Fuel',
                                '06. Electronic Warfare',
                                '07. Countermeasures',
                                '08. Environmental',
                                '09. Communications',
                                '10. Flight Data Links'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center justify-between">
                                    <span className="opacity-90">{item}</span>
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </li>
                            ))}
                        </ul>

                        {/* BINARY CODE WITH GRAPH */}
                        <BinaryDisplay />
                    </div>

                    {/* CTA */}
                    <Link
                        data-animate
                        href="/platform"
                        className="card-container group bg-shift-blue text-white hover:bg-shift-orange p-8 sm:p-10 lg:p-12 flex flex-col items-center justify-center text-center transition-all duration-500"
                    >
                        <svg
                            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-4 sm:mb-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500"
                            viewBox="360 460 160 160"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M471.88,601.96l-74.25-74.25v85.18h-35.82v-146.34h124.26c15.23,0,27.58,12.35,27.58,27.58v30.97h-35.69v-22.73h-55l64.5,64.5c6.72,6.72,15.84,10.5,25.35,10.5h.59v35.82h-14.37c-10.18,0-19.95-4.04-27.15-11.24Z" />
                        </svg>
                        <p className="text-sm sm:text-base lg:text-xl font-normal">
                            Explore<br />the platform.
                        </p>
                    </Link>
                </aside>
            </div>
        </section>
    );
}
