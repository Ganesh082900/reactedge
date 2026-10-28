import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SOLUTIONS_SECTION } from "@/content/site";

const solutions = SOLUTIONS_SECTION.cards;

export function generateStaticParams() {
    return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const solution = solutions.find((s) => s.slug === slug);
    return solution ? { title: solution.title, description: solution.desc } : {};
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const solution = solutions.find((s) => s.slug === slug);
    if (!solution) notFound();

    return (
        <section className="min-h-screen bg-[#EDEDED] text-[#0A0F1C] flex items-center">
            <div className="max-w-[1280px] mx-auto w-full px-6 pt-40 pb-24">
                <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-60 mb-6">Solutions</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-4xl">
                    {solution.title}
                </h1>
                <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed">{solution.desc}</p>
                <div className="mt-12 flex flex-wrap gap-4">
                    <Link href="/contact" className="px-10 py-4 rounded-full bg-shift-blue text-white text-xs font-mono tracking-[0.15em] uppercase hover:bg-shift-orange transition-colors">
                        Get in touch
                    </Link>
                    <Link href="/platform" className="px-10 py-4 rounded-full border-2 border-shift-blue text-shift-blue text-xs font-mono tracking-[0.15em] uppercase hover:bg-shift-blue hover:text-white transition-colors">
                        Explore the platform
                    </Link>
                </div>
            </div>
        </section>
    );
}
