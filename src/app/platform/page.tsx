import type { Metadata } from "next";
import Link from "next/link";
import { PLATFORM } from "@/content/site";

export const metadata: Metadata = {
    title: "Platform",
    description: PLATFORM.hero.description,
};

export default function Platform() {
    const { hero, features, howItWorks, products, resources } = PLATFORM;

    return (
        <div className="bg-[#EDEDED] text-[#0A0F1C]">
            <section className="max-w-[1280px] mx-auto px-6 pt-40 pb-24 grid md:grid-cols-[1.3fr_1fr] gap-12 items-start">
                <h1 className="font-extrabold leading-[0.85] tracking-tighter whitespace-pre-line" style={{ fontSize: "clamp(64px, 12vw, 180px)" }}>
                    {hero.text}
                </h1>
                <div className="bg-[#ff4d3d] text-black p-10 rounded-xl">
                    <h2 className="text-2xl font-bold leading-snug tracking-tight">{hero.statement}</h2>
                    <p className="mt-6 text-[11px] tracking-[0.15em] uppercase leading-relaxed font-mono">{hero.description}</p>
                </div>
                <p className="md:col-span-2 text-xl max-w-3xl leading-relaxed">{hero.intro}</p>
            </section>

            <section className="max-w-[1280px] mx-auto px-6 py-24">
                <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-60 mb-4">Area of expertise</p>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-14">{PLATFORM.featuresHeading}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f) => (
                        <div key={f.title} className="bg-[#F5F7FA] p-8 border border-black/10">
                            <h3 className="font-mono text-xs tracking-[0.2em] uppercase mb-6 text-shift-blue">{f.title}</h3>
                            <ul className="space-y-3">
                                {f.items.map((item) => <li key={item} className="text-lg font-medium">{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#0A0F1C] text-white py-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">{howItWorks.heading}</h2>
                    <p className="mt-6 max-w-3xl text-lg text-white/70">{howItWorks.intro}</p>
                    <ol className="mt-14 grid md:grid-cols-5 gap-6">
                        {howItWorks.steps.map((s, i) => (
                            <li key={s.title} className="border-t border-white/20 pt-6">
                                <span className="font-mono text-xs opacity-50">{String(i + 1).padStart(2, "0")} / {String(howItWorks.steps.length).padStart(2, "0")}</span>
                                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                                <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="max-w-[1280px] mx-auto px-6 py-24 space-y-10">
                {products.map((p) => (
                    <div key={p.name} className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-black/20 pt-8">
                        <div>
                            <h3 className="text-3xl font-semibold tracking-tight">{p.name}</h3>
                            <p className="mt-2 font-mono text-xs tracking-[0.1em] uppercase opacity-60">{p.tagline}</p>
                        </div>
                        <p className="text-lg leading-relaxed">{p.description}</p>
                    </div>
                ))}
            </section>

            <section className="max-w-[1280px] mx-auto px-6 pb-24">
                <h2 className="text-3xl font-semibold tracking-tight mb-8">Resources</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {resources.map((r) => (
                        <div key={r.title} className="bg-[#F5F7FA] p-8 border border-black/10">
                            <h3 className="text-xl font-medium leading-tight">{r.title}</h3>
                            <p className="mt-4 font-mono text-[11px] tracking-[0.08em] uppercase opacity-60 leading-relaxed">{r.description}</p>
                        </div>
                    ))}
                </div>
                <Link href="/contact" className="inline-block mt-12 px-10 py-4 rounded-full bg-shift-blue text-white text-xs font-mono tracking-[0.15em] uppercase hover:bg-shift-orange transition-colors">
                    Get in touch to learn more
                </Link>
            </section>
        </div>
    );
}
