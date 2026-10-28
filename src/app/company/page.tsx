"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/seo';
import { INSIGHTS } from '@/content/site';

const ABOUT = INSIGHTS.find((i) => i.body)?.body?.about;

export default function Company() {
    useScrollAnimation();
    
    const webPageSchema = generateWebPageSchema({
        title: 'Company - ReActEdge',
        description: 'Learn about ReActEdge\'s mission to protect defense and transportation systems with advanced cybersecurity solutions.',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com'}/company`,
    });
    
    return (
        <>
        <StructuredData data={webPageSchema} />
        <section className="min-h-screen bg-[#EDEDED] text-[#0A0F1C]">
            <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
                <h1 data-animate className="text-5xl md:text-7xl font-bold tracking-tight fade-up">Company</h1>
                <p className="mt-10 text-lg leading-relaxed">{ABOUT}</p>
            </div>
        </section>
        </>
    );
}