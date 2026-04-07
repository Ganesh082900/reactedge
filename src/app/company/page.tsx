"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/seo';

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
        <div className="min-h-screen flex items-center justify-center">
            <h1 data-animate className="text-4xl font-bold fade-up">Company</h1>
        </div>
        </>
    );
}