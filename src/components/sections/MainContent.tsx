"use client";

import React from "react";

interface RightContent {
    icon?: React.ReactNode;
    statement: string;
    description: string;
}

interface MainContentProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    rightContent: RightContent;
}

export default function MainContent({
    text,
    bgColor = "#F5F7FA",
    textColor = "#000000",
    rightContent,
}: MainContentProps) {
    return (
        <section
            className="relative w-full min-h-screen flex items-center overflow-hidden"
            style={{
                background: bgColor,
                color: textColor,
            }}
        >
            {/* CONTAINER */}
            <div className="max-w-[1280px] mx-auto w-full px-6 relative">

                {/* NAV SPACING */}
                <div className="pt-24" />

                {/* GRID */}
                <div className="flex justify-between items-start">

                    {/* LEFT BIG TEXT */}
                    <div className="w-[65%]">
                        <h1
                            className="font-extrabold leading-[0.85] tracking-[-0.02em]"
                            style={{
                                fontSize: "clamp(64px, 12vw, 180px)",
                            }}
                        >
                            {text}
                        </h1>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="w-[32%] flex justify-end">
                        <div
                            className="p-10 rounded-xl"
                            style={{
                                background: "#ff4d3d",
                                color: "#000",
                                width: "100%",
                                maxWidth: "420px",
                            }}
                        >
                            {/* ICON */}
                            {rightContent.icon && (
                                <div className="mb-6 opacity-80">
                                    {rightContent.icon}
                                </div>
                            )}

                            {/* STATEMENT */}
                            <h2 className="text-2xl font-semibold leading-snug">
                                {rightContent.statement}
                            </h2>

                            {/* DESCRIPTION */}
                            <p
                                className="mt-6 text-[11px] tracking-[0.15em] uppercase leading-relaxed"
                                style={{
                                    fontFamily: "JetBrains Mono, monospace",
                                }}
                            >
                                {rightContent.description}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}