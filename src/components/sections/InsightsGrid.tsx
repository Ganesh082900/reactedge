"use client";

import { useRef } from "react";
import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { INSIGHT } from "@/content/site";


export default function InsightsGrid() {
    useScrollAnimation();
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-shift-white"
        >
            <div className="sticky top-0 h-screen flex flex-col md:flex-row">
                {/* LEFT FEATURED ARTICLE */}
                <div 
                    data-animate
                    className="w-full h-full relative overflow-hidden group fade-up"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 transition-all duration-700 group-hover:from-black/40 group-hover:to-black/80">
                        <img
                            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80"
                            alt={INSIGHT.title}
                            className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-10 md:p-14 lg:p-20 text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-8 tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                            {INSIGHT.title}
                        </h2>

                        <p className="text-[10px] md:text-xs font-mono tracking-[0.15em] mb-5 opacity-70 uppercase group-hover:opacity-90 transition-opacity duration-400">
                            {INSIGHT.date}
                        </p>

                        <p className="text-base md:text-lg mb-10 max-w-2xl opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity duration-400 font-light">
                            {INSIGHT.description}
                        </p>

                        <Link
                            href="/insights"
                            className="btn-hover inline-block px-10 py-4 border-2 border-shift-blue bg-shift-blue rounded-full text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-shift-blue hover:border-white transition-all duration-500 w-fit font-mono shadow-lg hover:shadow-2xl"
                        >
                            READ MORE
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}


