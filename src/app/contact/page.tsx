"use client";

import MainContent from "@/components/sections/MainContent";
import ContactSection from "@/components/sections/ContactSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/seo';

export default function Contact() {
    useScrollAnimation();
    
    const webPageSchema = generateWebPageSchema({
        title: 'Contact - ReActEdge',
        description: 'Get in touch with ReActEdge for product demonstrations, partnership discussions, or to learn more about our solutions.',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com'}/contact`,
    });
    
    return (
        <>
        <StructuredData data={webPageSchema} />
        <div className="min-h-screen flex flex-col items-center justify-center">
            <MainContent
                text={`Get In\nTouch.`}
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
                            <polygon points="50,10 90,80 10,80" />
                            <polygon points="50,25 75,70 25,70" />
                            <polygon points="50,40 60,60 40,60" />
                        </svg>
                    ),
                    statement: "Ready To Learn More About ReActEdge?",
                    description:
                        "REACTEDGE ENABLES SMARTER, FASTER DECISIONS THROUGH REAL-TIME DATA ACCESS, CONTEXTUAL INSIGHTS, AND ACTIONABLE ANALYTICS AT THE EDGE FOR COMMERCIAL AVIATION, RAIL, AND DEFENSE.",
                }}
            />
            <section className="relative w-full bg-[#0A0F1C] text-white py-24 px-6 overflow-hidden">

                {/* TOP BORDER */}
                <div className="absolute top-0 left-0 w-full h-px bg-white/20" />

                {/* CONTENT */}
                <div data-animate className="max-w-[1280px] mx-auto fade-up">
                    <p className="text-[clamp(28px,4vw,64px)] leading-[1.1] font-semibold tracking-[-0.02em] text-white/80">
                        Whether you're interested in learning more about our solutions,
                        product demonstrations, partnership discussions, or joining our team,
                        we'd be happy to help.
                    </p>
                </div>

                {/* BACKGROUND GLOW */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute w-[600px] h-[600px] bg-[#00E5A0]/10 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
                    <div className="absolute w-[600px] h-[600px] bg-[#6C63FF]/10 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />
                </div>

            </section>
            <div className="w-full"><ContactSection /></div>
        </div>
        </>
    );
}