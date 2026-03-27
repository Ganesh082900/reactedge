"use client";

import { useState, useRef } from "react";
import FeatureCard from "../molecules/FeatureCard";
import { FEATURES } from "@/lib/featureData";
import FeatureVisual from "../atoms/FeatureVisual";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Feature() {
    useScrollAnimation();
    const [index, setIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Infinite scroll navigation
    const prev = () => {
        setIndex((prev) => (prev === 0 ? FEATURES.length - 1 : prev - 1));
    };

    const next = () => {
        setIndex((prev) => (prev === FEATURES.length - 1 ? 0 : prev + 1));
    };

    // Create extended array for infinite scroll effect
    const extendedFeatures = [...FEATURES, ...FEATURES, ...FEATURES];

    return (
        <section className="bg-shift-cream text-shift-dark pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
            <div className="px-6 md:px-12 lg:px-16">
                {/* HEADER */}
                <div className="flex justify-between items-center mb-16 md:mb-20">
                    <h2 
                        data-animate
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold fade-up tracking-tight leading-tight"
                    >
                        Operational Intelligence Solutions
                    </h2>

                    {/* Desktop Arrow Navigation */}
                    <div 
                        data-animate
                        className="hidden md:flex gap-4 fade-up"
                    >
                        <button
                            onClick={prev}
                            className="w-16 h-16 bg-shift-dark text-shift-cream rounded-full hover:bg-shift-orange transition-all duration-500 flex items-center justify-center text-2xl btn-hover shadow-lg hover:shadow-2xl"
                            aria-label="Previous"
                        >
                            ←
                        </button>
                        <button
                            onClick={next}
                            className="w-16 h-16 bg-shift-dark text-shift-cream rounded-full hover:bg-shift-orange transition-all duration-500 flex items-center justify-center text-2xl btn-hover shadow-lg hover:shadow-2xl"
                            aria-label="Next"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* CAROUSEL - Desktop: Arrow controlled, Mobile: Scrollable */}
                <div 
                    data-animate
                    className="relative scale-in"
                >
                    {/* Desktop View - Always show 3 cards */}
                    <div className="hidden md:block overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-out"
                            style={{
                                transform: `translateX(-${(index + FEATURES.length) * (100 / 3)}%)`,
                            }}
                        >
                            {extendedFeatures.map((item, i) => (
                                <div key={i} className="w-1/3 flex-shrink-0">
                                    <FeatureCard
                                        title={item.title}
                                        desc={item.desc}
                                        image={<FeatureVisual type={item.image} />}
                                        link={item.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile View - Horizontal Scroll */}
                    <div
                        ref={scrollRef}
                        className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {FEATURES.map((item, i) => (
                            <div key={i} className="w-[85vw] flex-shrink-0 snap-center">
                                <FeatureCard
                                    title={item.title}
                                    desc={item.desc}
                                    image={<FeatureVisual type={item.image} />}
                                    link={item.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}