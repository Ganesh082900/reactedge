"use client";

import MainContent from "@/components/sections/MainContent";
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/seo';

export default function Platform() {
    const webPageSchema = generateWebPageSchema({
        title: 'Platform - ReActEdge',
        description: 'Mission-first cybersecurity platform with relentless innovation and data-driven precision for defense systems.',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com'}/platform`,
    });
    return (
        <div className="min-h-screen flex items-center justify-center">
            <MainContent
                text={`Every\nMission.`}
                bgColor="#EDEDED"
                textColor="#0A0F1C"
                rightContent={{
                    icon: (
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 100 100"
                            fill="none"
                            stroke="#0A0F1C"
                            strokeWidth="1.2"
                        >
                            <circle cx="50" cy="50" r="18" />
                            <ellipse cx="50" cy="50" rx="30" ry="12" />
                            <line x1="10" y1="50" x2="90" y2="50" />
                        </svg>
                    ),
                    statement:
                        "Mission-First Mindset, Relentless Innovation, Data-Driven Precision",
                    description:
                        "WE'RE NOT JUST PROTECTING TODAY'S SYSTEMS THAT DEFEND NATIONS AND POWER ECONOMIES — WE'RE BUILDING THE DIGITAL OPERATING SYSTEM FOR TOMORROW'S FLEETS.",
                }}
            />
        </div>
    );
}