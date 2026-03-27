"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Insights() {
    useScrollAnimation();
    
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 data-animate className="text-4xl font-bold fade-up">Insights</h1>
        </div>
    );
}