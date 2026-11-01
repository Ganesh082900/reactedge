import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SOLUTIONS_SECTION } from "@/content/site";
import { generateSEO } from "@/lib/seo";

const solutions = SOLUTIONS_SECTION.cards;

const solutionImages: Record<string, string> = {
    "critical-infrastructure": "/images/solutions/critical-infrastructure.svg",
    "ot-cyber-security": "/images/solutions/ot-cyber-security.svg",
    "national-security": "/images/solutions/national-security.svg",
    "advanced-technologies": "/images/solutions/advanced-technologies.svg",
};

export function generateStaticParams() {
    return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const solution = solutions.find((s) => s.slug === slug);
    return solution
        ? generateSEO({ title: solution.title, description: solution.desc, url: `/solutions/${slug}` })
        : {};
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const solution = solutions.find((s) => s.slug === slug);
    if (!solution) notFound();
    const image = solutionImages[slug];

    return (
        <section className="min-h-screen bg-[#EDEDED] text-[#0A0F1C] flex items-center">
            <style>{`
                @keyframes sol-from-top { from { opacity: 0; transform: translateY(-80px); } to { opacity: 1; transform: none; } }
                @keyframes sol-from-bottom { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: none; } }
                @keyframes sol-from-left { from { opacity: 0; transform: translateX(-80px); } to { opacity: 1; transform: none; } }
                .sol-img { animation: sol-from-top 1s cubic-bezier(.22,1,.36,1) both; }
                .sol-text > * { will-change: transform, opacity; animation: sol-from-left 1s cubic-bezier(.22,1,.36,1) both; }
                .sol-text > *:nth-child(1) { animation-delay: .7s; }
                .sol-text > *:nth-child(2) { animation-delay: .85s; }
                .sol-text > *:nth-child(3) { animation-delay: 1s; }
                .sol-text > .sol-btns { animation-name: sol-from-bottom; animation-delay: 1.3s; }
                @media (prefers-reduced-motion: reduce) { .sol-img, .sol-text > * { will-change: transform, opacity; animation: none; } }
            `}</style>
            <div className={`max-w-[1280px] mx-auto w-full px-6 pt-40 pb-24 ${image ? "grid lg:grid-cols-2 gap-12 items-center overflow-hidden" : ""}`}>
                {image && (
                    <div className="sol-img lg:order-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={image} alt={solution.title} width={800} height={600} fetchPriority="high" className="w-full h-auto" />
                    </div>
                )}
                <div className="sol-text">
                <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-60 mb-6">Solutions</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-4xl">
                    {solution.title}
                </h1>
                <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed">{solution.desc}</p>
                <div className="sol-btns mt-12 flex flex-wrap gap-4">
                    <Link href="/contact" className="px-10 py-4 rounded-full bg-shift-blue text-white text-xs font-mono tracking-[0.15em] uppercase hover:bg-shift-orange transition-colors">
                        Get in touch
                    </Link>
                    <Link href="/platform" className="px-10 py-4 rounded-full border-2 border-shift-blue text-shift-blue text-xs font-mono tracking-[0.15em] uppercase hover:bg-shift-blue hover:text-white transition-colors">
                        Explore the platform
                    </Link>
                </div>
                </div>
            </div>
        </section>
    );
}
