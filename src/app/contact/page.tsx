"use client";

import AnimatedHeading from "@/components/atoms/AnimatedHeading";
import MainContent from "@/components/sections/MainContent";
import ContactSection from "@/components/sections/ContactSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/seo';
import { SITE } from '@/content/site';

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
                bgColor="#F2F0E6"
                textColor="#0A0A0F"
                rightContent={{
                    icon: (
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 100 100"
                            fill="none"
                            stroke="#0A0A0F"
                            strokeWidth="1.2"
                        >
                            <polygon points="50,10 90,80 10,80" />
                            <polygon points="50,25 75,70 25,70" />
                            <polygon points="50,40 60,60 40,60" />
                        </svg>
                    ),
                    statement: "Get in touch to secure your systems.",
                    description:
                        `${SITE.contact.phone} | ${SITE.contact.email}`.toUpperCase(),
                }}
            />
            <section className="relative w-full bg-shift-cream text-shift-dark pt-8 pb-24 px-6 overflow-hidden">
                <div className="max-w-[1280px] mx-auto">
                    <AnimatedHeading
                        as="p"
                        mode="words"
                        text="Whether you're interested in learning more about our solutions, product demonstrations, partnership discussions, or joining our team, we'd be happy to help."
                        className="text-[clamp(28px,4vw,64px)] leading-[1.1] font-bold tracking-[-0.02em] text-shift-dark"
                    />
                </div>
            </section>
            <div className="w-full"><ContactSection /></div>
        </div>
        </>
    );
}