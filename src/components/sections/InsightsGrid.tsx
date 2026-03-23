"use client";

import { useEffect, useRef, useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";

export default function InsightsGrid() {
    const rightRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { x, y } = useMousePosition();
    const [lockScroll, setLockScroll] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (!rightRef.current || !sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            // When section is in view
            if (rect.top <= 0 && rect.bottom > window.innerHeight) {
                if (rightRef.current.scrollTop <
                    rightRef.current.scrollHeight - rightRef.current.clientHeight
                ) {
                    setLockScroll(true);
                    rightRef.current.scrollTop += window.scrollY * 0.002;
                } else {
                    setLockScroll(false);
                }
            }
        };

        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-[100vh] bg-primary overflow-hidden"
        >
            {/* 👇 BACKGROUND LAYER */}
            <div className="noise-bg pointer-events-none z-0"
                style={{
                    transform: `translate(${x * 0.02}px, ${y * 0.02}px)`
                }}
            />
            <div className="relative z-10 sticky top-0 h-screen flex">

                {/* LEFT FEATURE */}
                <div className="w-1/2 p-10 flex flex-col justify-end bg-black text-white">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Shift5 Awarded Key Contract for AF's Fighter of Choice, the F-16
                    </h2>

                    <p className="mt-4 text-sm text-muted">
                        December 4, 2025
                    </p>

                    <button className="mt-6 border px-6 py-3 rounded-full w-fit">
                        Read More
                    </button>
                </div>

                {/* RIGHT SCROLL GRID */}
                <div
                    ref={rightRef}
                    className="w-1/2 h-full overflow-hidden"
                >
                    <div className="grid grid-cols-2 gap-6 p-10">

                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-secondary p-6 rounded-xl h-[200px] flex flex-col justify-between hover:scale-[1.02] transition"
                            >
                                <h3 className="text-lg font-semibold">
                                    Insight Title {i + 1}
                                </h3>

                                <p className="text-xs text-muted">
                                    January {i + 1}, 2026
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}