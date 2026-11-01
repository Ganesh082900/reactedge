"use client";

import DynamicForm from "@/components/organisms/DynamicForm";
import { CONTACT_FORM } from "@/lib/formConfig";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function ContactSection() {
    useScrollAnimation();
    
    const handleSubmit = async (data) => {
        try {
            await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="relative isolate overflow-hidden min-h-screen bg-shift-cream text-shift-dark flex items-center py-28 sm:py-48">
            <style>{`
                @keyframes cs-scroll { from { background-position-x: 0; } to { background-position-x: -1200px; } }
                @keyframes cs-spin { to { transform: rotate(360deg); } }
                @keyframes cs-spin-rev { to { transform: rotate(-360deg); } }
                .cs-strip { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='105' viewBox='0 0 300 105' fill='none' stroke='%23166FB4' stroke-opacity='.35' stroke-width='1.5'%3E%3Cpath d='M0 80 L50 30 L100 80 L150 30 L200 80 L250 30 L300 80'/%3E%3Ccircle cx='50' cy='30' r='4'/%3E%3Ccircle cx='150' cy='30' r='4'/%3E%3Ccircle cx='250' cy='30' r='4'/%3E%3C/svg%3E"); background-repeat: repeat-x; background-size: 300px 105px; animation: cs-scroll 40s linear infinite; }
                .cs-spin { animation: cs-spin 40s linear infinite; }
                .cs-spin-rev { animation: cs-spin-rev 30s linear infinite; }
                @media (prefers-reduced-motion: reduce) { .cs-strip, .cs-spin, .cs-spin-rev { animation: none; } }
            `}</style>

            {/* ANIMATED BACKGROUND */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="cs-strip absolute left-0 top-8 w-full h-[105px] opacity-70" />
                <div className="cs-strip absolute left-0 bottom-6 w-full h-[105px] opacity-40" />
                <svg className="cs-spin absolute -left-48 bottom-28 w-[420px] h-[420px] hidden md:block" viewBox="0 0 200 200" fill="none" stroke="#166FB4" strokeOpacity="0.3" strokeWidth="1.2">
                    <circle cx="100" cy="100" r="95" strokeDasharray="4 6" />
                    <circle cx="100" cy="100" r="68" />
                    <circle cx="100" cy="100" r="40" strokeDasharray="2 5" />
                    <circle cx="100" cy="5" r="5" fill="#166FB4" fillOpacity="0.6" stroke="none" />
                    <circle cx="168" cy="100" r="4" fill="#166FB4" fillOpacity="0.6" stroke="none" />
                </svg>
                <svg className="cs-spin-rev absolute -right-64 bottom-28 w-[420px] h-[420px] opacity-60" viewBox="0 0 200 200" fill="none" stroke="#F07F22" strokeOpacity="0.35" strokeWidth="1.2">
                    <polygon points="100,8 180,150 20,150" />
                    <polygon points="100,40 154,134 46,134" strokeDasharray="4 5" />
                    <circle cx="100" cy="100" r="92" strokeDasharray="2 6" />
                    <circle cx="100" cy="8" r="5" fill="#F07F22" fillOpacity="0.7" stroke="none" />
                </svg>
            </div>

            

            <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1280px] flex-col items-center gap-10 px-6 lg:flex-row lg:justify-start lg:gap-10 xl:gap-16">
                <div aria-hidden="true" className="w-full min-w-0 max-w-[640px] lg:flex-1 lg:-ml-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/contact/globe-network.svg" alt="" className="h-auto w-full" />
                </div>

                <div data-animate className="w-full min-w-0 max-w-[520px] p-0 sm:p-8 lg:w-[440px] lg:shrink-0 lg:p-8 xl:w-[520px] xl:p-12 fade-up">
                    <DynamicForm
                        fields={CONTACT_FORM}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>

        </section>
    );
}
