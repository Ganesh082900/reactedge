import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INSIGHTS, getInsight } from "@/content/site";

export function generateStaticParams() {
    return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const insight = getInsight(slug);
    return insight ? { title: insight.title, description: insight.description } : {};
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const insight = getInsight(slug);
    if (!insight) notFound();
    const { body } = insight;

    return (
        <article className="min-h-screen bg-[#EDEDED] text-[#0A0F1C]">
            <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
                <nav className="font-mono text-xs tracking-[0.15em] uppercase opacity-60 mb-10">
                    <Link href="/insights" className="hover:text-shift-blue">Insights</Link>
                </nav>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">{insight.title}</h1>
                <p className="mt-6 font-mono text-xs tracking-[0.15em] uppercase opacity-60">{insight.date}</p>
                <p className="mt-8 text-xl md:text-2xl font-medium leading-snug">{body?.subtitle ?? insight.description}</p>

                {body && (
                    <div className="mt-10 space-y-6 text-lg leading-relaxed">
                        <p><strong>{body.dateline}</strong> — {body.paragraphs[0]}</p>
                        <p>{body.paragraphs[1]}</p>
                        {body.quotes.map((q) => (
                            <blockquote key={q.author} className="border-l-4 border-shift-blue pl-6">
                                “{q.text}”
                                <footer className="mt-2 text-sm font-semibold">— {q.author}</footer>
                            </blockquote>
                        ))}
                        {body.paragraphs.slice(2).map((p) => <p key={p}>{p}</p>)}
                        <h2 className="text-2xl font-semibold pt-8">About ReActEdge</h2>
                        <p>{body.about}</p>
                        <ul className="space-y-4 pt-4">
                            {body.related.map((r) => (
                                <li key={r.title}><strong>{r.title}</strong> – {r.description}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </article>
    );
}
