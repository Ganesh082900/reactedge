"use client";

import { useState } from "react";
import FeatureCard from "../molecules/FeatureCard";
import { FEATURES } from "@/lib/featureData";
import FeatureVisual from "../atoms/FeatureVisual";

export default function Feature() {
    const [index, setIndex] = useState(1);

    const prev = () => {
        setIndex((prev) => (prev === 0 ? FEATURES.length - 1 : prev - 1));
    };

    const next = () => {
        setIndex((prev) => (prev === FEATURES.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-light text-black py-4 overflow-hidden">
            <div className="">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Operational Intelligence Solutions
                    </h2>

                    <div className="flex gap-3">
                        <button onClick={prev} className="w-12 h-12 border rounded-full">←</button>
                        <button onClick={next} className="w-12 h-12 border rounded-full">→</button>
                    </div>
                </div>

                {/* CAROUSEL */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700"
                        style={{
                            transform: `translateX(calc(-${index * 100}% / 3))`,
                        }}
                    >
                        {FEATURES.map((item, i) => (
                            <div key={i} className="w-full md:w-1/3 px-4">
                                <FeatureCard
                                    title={item.title}
                                    desc={item.desc}
                                    highlight={i === index}
                                    image={<FeatureVisual type={item.image} />}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}