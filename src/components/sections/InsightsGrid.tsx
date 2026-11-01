"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { INSIGHT } from "@/content/site";

export default function InsightsGrid() {
    const ref = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="relative min-h-screen bg-shift-white text-shift-dark overflow-hidden flex items-center"
        >
            <style>{`
                @keyframes ig-from-left { from { opacity: 0; transform: translateX(-80px); } to { opacity: 1; transform: none; } }
                @keyframes ig-from-right { from { opacity: 0; transform: translateX(80px); } to { opacity: 1; transform: none; } }
                @keyframes ig-from-bottom { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: none; } }
                .ig-img, .ig-text > * { opacity: 0; }
                .ig-in .ig-img { animation: ig-from-left 1s cubic-bezier(.22,1,.36,1) both; }
                .ig-in .ig-text > * { animation: ig-from-right 1s cubic-bezier(.22,1,.36,1) both; }
                .ig-in .ig-text > *:nth-child(1) { animation-delay: .4s; }
                .ig-in .ig-text > *:nth-child(2) { animation-delay: .55s; }
                .ig-in .ig-text > *:nth-child(3) { animation-delay: .7s; }
                .ig-in .ig-text > .ig-btns { animation-name: ig-from-bottom; animation-delay: 1s; }
                @media (prefers-reduced-motion: reduce) { .ig-img, .ig-text > * { opacity: 1; animation: none !important; } }
            `}</style>
            <div className={`${inView ? "ig-in" : ""} w-full px-6 py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                <div className="ig-img max-w-[640px] w-full mx-auto aspect-[690/750]">
                    {/* Mounted on scroll so the SVG's own animation starts when it becomes visible */}
                    {inView && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src="/images/home/platform-overview.svg"
                            alt={INSIGHT.title}
                            className="w-full h-auto"
                        />
                    )}
                </div>

                <div className="ig-text">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight">
                        {INSIGHT.title}
                    </h2>
                    <p className="mt-6 text-[10px] md:text-xs font-mono tracking-[0.15em] opacity-70 uppercase">
                        {INSIGHT.date}
                    </p>
                    <p className="mt-6 text-base md:text-lg max-w-2xl opacity-80 leading-relaxed font-light">
                        {INSIGHT.description}
                    </p>
                    <div className="ig-btns mt-10">
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