"use client";

import MainContent from "@/components/sections/MainContent";
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/seo';

export default function Careers() {
    const webPageSchema = generateWebPageSchema({
        title: 'Careers - ReActEdge',
        description: 'Join our team building the digital operating system for tomorrow\'s fleets. Keeping the world\'s most critical systems secure.',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com'}/careers`,
    });
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <MainContent
                text="Careers."
                bgColor="#EDEDED"
                textColor="#111"
                rightContent={{
                    icon: (
                        <div className="w-10 h-10 border border-black rotate-45" />
                    ),
                    statement: "Keeping the world's most critical systems secure.",
                    description:
                        "Forged in America. For America. We're building the digital operating system for tomorrow's fleets.",
                }}
            />
        </div>
    );
}