"use client";

import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Hero() {
    useScrollAnimation();
    
    return (
        <section className="min-h-screen bg-shift-orange text-shift-dark overflow-x-hidden">
            <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row pt-24 lg:pt-28">
                
                {/* ================= LEFT CONTENT ================= */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    
                    {/* HERO BLOCK */}
                    <div className="flex flex-col gap-4 overflow-hidden pb-8">
                        {/* DESCRIPTION */}
                        <p 
                            data-animate
                            className="text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl fade-up font-medium tracking-tight"
                        >
                            Operational Intelligence for Every Vehicle, Every Fleet, Every Mission.
                        </p>
                        
                        {/* LARGE TITLE */}
                        <h1 
                            data-animate
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-[0.85] tracking-[-0.04em] break-words fade-up"
                        >
                            Op<span className="text-shift-dark/30 font-light">/</span>Intelligence
                        </h1>
                    </div>

                    {/* VIDEO */}
                    <div 
                        data-animate
                        className="card-container relative aspect-video lg:aspect-[16/10] overflow-hidden bg-black scale-in border-4 border-shift-dark/20 hover:border-shift-orange/50 shadow-2xl"
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
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Card 1 */}
                        <Link
                            data-animate
                            href="https://reactedge.io/insights/reactedge-partners-with-anduril-armys-ngc2/"
                            target="_blank"
                            rel="noreferrer"
                            className="card-container relative bg-shift-cream p-6 lg:p-8 hover:bg-white transition-all duration-500 group fade-up border border-shift-dark/10 hover:border-shift-dark/20"
                        >
                            {/* Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-shift-orange group-hover:w-full transition-all duration-700"></div>
                            
                            <h2 className="text-lg lg:text-xl font-medium mb-4 leading-tight tracking-tight group-hover:text-shift-orange transition-colors duration-400">
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
                            className="card-container relative bg-shift-cream p-6 lg:p-8 hover:bg-white transition-all duration-500 group fade-up border border-shift-dark/10 hover:border-shift-dark/20"
                        >
                            {/* Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-shift-orange group-hover:w-full transition-all duration-700"></div>
                            
                            <h2 className="text-lg lg:text-xl font-medium mb-4 leading-tight tracking-tight group-hover:text-shift-orange transition-colors duration-400">
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
                            className="card-container relative bg-shift-cream p-6 lg:p-8 hover:bg-white transition-all duration-500 group fade-up border border-shift-dark/10 hover:border-shift-dark/20"
                        >
                            {/* Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-shift-orange group-hover:w-full transition-all duration-700"></div>
                            
                            <h2 className="text-lg lg:text-xl font-medium mb-4 leading-tight tracking-tight group-hover:text-shift-orange transition-colors duration-400">
                                ReActEdge Achieves NIAP Certification for Full Encryption, Enabling Secure Deployment in Classified Environments
                            </h2>
                            <p className="text-[10px] lg:text-xs text-shift-dark/60 uppercase tracking-wider font-mono leading-relaxed group-hover:text-shift-dark/80 transition-colors duration-400">
                                First and only provider in its class to receive certification for devices capable of handling classified data at rest
                            </p>
                        </Link>
                    </div>
                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <aside className="w-full lg:w-[380px] xl:w-[420px] flex flex-col lg:sticky lg:top-28 lg:self-start">
                    
                    {/* DESCRIPTION BOX */}
                    <div 
                        data-animate
                        className="card-container bg-shift-cream p-8 lg:p-10 fade-up border-l-4 border-shift-orange hover:bg-white transition-all duration-500"
                    >
                        <p className="text-lg lg:text-xl leading-relaxed font-medium tracking-tight">
                            Powering actionable insights for America's defense and transportation systems.
                        </p>
                    </div>

                    {/* SYSTEM STATUS */}
                    <div 
                        data-animate
                        className="card-container bg-shift-dark text-white p-8 lg:p-10 flex flex-col fade-up transition-all duration-500 border-l-4 border-shift-orange/0 hover:border-shift-orange/100"
                    >
                        <h3 className="text-xl lg:text-2xl font-semibold mb-6 tracking-tight">System Status</h3>
                        
                        <ul className="space-y-3 mb-8 font-mono text-sm">
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
                        <div className="flex items-end gap-3 mt-auto pt-5 border-t border-white/20">
                            {/* Graph Bar */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-1.5 h-20 bg-white/30 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-[78%] bg-white/60"></div>
                                </div>
                                <div className="w-2 h-1 bg-white/50"></div>
                            </div>
                            
                            {/* Binary Code */}
                            <div className="font-mono text-[10px] lg:text-xs opacity-40 leading-relaxed flex-1">
                                <div>00001100  01100011  10101110</div>
                                <div>11000100  01001110  10101110</div>
                                <div>10110110  01010010  10100011</div>
                                <div>11000010  10011010  11101100</div>
                                <div>11011111  00001111  10101011</div>
                                <div>11011101  01001100  00010000</div>
                                <div>00100001  11011111  00100111</div>
                                <div>00111100  00011000  10101101</div>
                                <div>01011101  10000000  10000100</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        data-animate
                        href="/platform"
                        className="card-container bg-shift-orange text-shift-dark p-10 lg:p-12 flex flex-col items-center justify-center text-center hover:bg-shift-dark hover:text-shift-orange transition-all duration-600 group border-2 border-shift-dark hover:border-shift-orange fade-up"
                    >
                        <svg
                            className="w-16 h-16 lg:w-20 lg:h-20 mb-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 group-hover:rotate-12"
                            viewBox="0 0 132 132"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M112.967 19.8906L19.9668 111.891"
                                stroke="currentColor"
                                strokeWidth="20"
                            />
                            <path
                                d="M110 27L110 106"
                                stroke="currentColor"
                                strokeWidth="20"
                            />
                            <path
                                d="M106.498 23L26.9993 23.4458"
                                stroke="currentColor"
                                strokeWidth="20"
                            />
                        </svg>
                        <p className="text-base lg:text-lg font-normal">
                            Explore<br />the platform.
                        </p>
                    </Link>
                </aside>
            </div>
        </section>
    );
}
