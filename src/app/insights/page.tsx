import Link from "next/link";
import { INSIGHTS } from "@/content/site";

export const metadata = {
    title: "Insights",
    description: "News, announcements and thought leadership from ReActEdge.",
};

export default function Insights() {
    return (
        <section className="min-h-screen bg-[#EDEDED] text-[#0A0F1C]">
            <div className="max-w-[1280px] mx-auto px-6 pt-40 pb-24">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-16">Insights</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
                    {INSIGHTS.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/insights/${item.slug}`}
                            className="group bg-[#F5F7FA] hover:bg-white transition-colors p-8 min-h-[300px] flex flex-col justify-between"
                        >
                            <h2 className="text-xl font-medium leading-tight tracking-tight group-hover:text-shift-blue transition-colors">
                                {item.title}
                            </h2>
                            <div>
                                <p className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-50 mb-3">{item.date}</p>
                                <p className="font-mono text-[10px] tracking-[0.08em] uppercase leading-relaxed opacity-60">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
