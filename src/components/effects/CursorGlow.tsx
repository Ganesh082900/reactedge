// components/effects/CursorGlow.tsx

"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (!glowRef.current) return;

            glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed top-0 left-0 z-[999] w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-30"
            style={{
                background:
                    "radial-gradient(circle, rgba(0,229,160,0.4), transparent 70%)",
            }}
        />
    );
}