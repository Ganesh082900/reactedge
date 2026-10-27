"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/seo';

export default function Insights() {
    useScrollAnimation();
    
    const webPageSchema = generateWebPageSchema({
        title: 'Insights - ReActEdge',
        description: 'Explore cybersecurity insights, industry trends, and thought leadership from ReActEdge experts.',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com'}/insights`,
    });
    
    return (
        <>
        <StructuredData data={webPageSchema} />
        <div className="min-h-screen flex items-center justify-center">
            <h1 data-animate className="text-4xl font-bold fade-up">Insights</h1>
        </div>
        </>
    );
}