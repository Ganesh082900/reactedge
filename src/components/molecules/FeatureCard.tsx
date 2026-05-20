// components/molecules/FeatureCard.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface FeatureCardProps {
    title: string;
    desc: string;
    image?: React.ReactNode;
    link?: string;
}

export default function FeatureCard({
    title,
    desc,
    image,
    link = "#",
}: FeatureCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`card-container group relative h-[480px] md:h-[540px] p-10 md:p-12 flex flex-col justify-between transition-all duration-600 overflow-hidden border ${
                isHovered
                    ? "bg-shift-blue border-shift-blue shadow-2xl scale-[1.02] text-white"
                    : "bg-shift-white border-shift-gray/30 hover:border-shift-blue"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none bg-gradient-to-br from-white/10 to-transparent`}></div>
            
            {/* IMAGE/VISUAL */}
            <div className="flex justify-center items-center h-[200px] md:h-[220px] transition-transform duration-500 group-hover:scale-110">
                {image || (
                    <div className={`w-32 h-32 border-2 rounded-full opacity-30 ${isHovered ? 'border-white' : 'border-shift-blue'}`} />
                )}
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col justify-end relative z-10">
                <h3 className={`text-2xl md:text-3xl font-semibold mb-5 tracking-tight leading-tight transition-all duration-400 group-hover:translate-x-1 ${
                    isHovered ? 'text-white' : 'text-shift-dark'
                }`}>
                    {title}
                </h3>
                <p className={`text-[10px] md:text-xs font-mono tracking-[0.1em] uppercase leading-relaxed mb-8 transition-all duration-400 ${
                    isHovered ? 'text-white/80 group-hover:text-white' : 'text-shift-dark/70 group-hover:text-shift-dark/90'
                }`}>
                    {desc}
                </p>

                {/* CTA Button */}
                <Link
                    href={link}
                    className={`btn-hover inline-block px-10 py-4 rounded-full text-[10px] font-mono tracking-[0.15em] uppercase transition-all duration-500 w-fit ${
                        isHovered
                            ? "bg-white text-shift-blue shadow-lg hover:shadow-2xl hover:bg-shift-orange hover:text-white"
                            : "bg-transparent text-shift-blue border-2 border-shift-blue hover:bg-shift-blue hover:text-white"
                    }`}
                >
                    EXPLORE
                </Link>
            </div>
        </div>
    );
}