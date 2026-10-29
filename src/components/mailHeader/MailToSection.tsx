import Link from "next/link";
import { SITE } from "@/content/site";

const W = 1000;
const H = 500;
const INNER = { x1: 300, y1: 140, x2: 700, y2: 360 };
const COLS = 12;
const ROWS = 6;
const DEPTHS = [0.18, 0.4, 0.62, 0.8];

function PerspectiveGrid() {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const lines: [number, number, number, number][] = [];

    for (let i = 0; i <= COLS; i++) {
        const f = i / COLS;
        lines.push([f * W, 0, lerp(INNER.x1, INNER.x2, f), INNER.y1]);
        lines.push([f * W, H, lerp(INNER.x1, INNER.x2, f), INNER.y2]);
    }
    for (let j = 1; j < ROWS; j++) {
        const f = j / ROWS;
        lines.push([0, f * H, INNER.x1, lerp(INNER.y1, INNER.y2, f)]);
        lines.push([W, f * H, INNER.x2, lerp(INNER.y1, INNER.y2, f)]);
    }

    const rects = [0, ...DEPTHS, 1].map((t) => ({
        x: lerp(0, INNER.x1, t),
        y: lerp(0, INNER.y1, t),
        w: lerp(W, INNER.x2 - INNER.x1, t),
        h: lerp(H, INNER.y2 - INNER.y1, t),
    }));

    return (
        <svg
            aria-hidden="true"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            stroke="rgba(0,0,0,0.14)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
        >
            {lines.map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} vectorEffect="non-scaling-stroke" />
            ))}
            {rects.map((r, i) => (
                <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} vectorEffect="non-scaling-stroke" />
            ))}
        </svg>
    );
}
export default function MailToSection() {
    return (
        <section
            aria-labelledby="cta-heading"
            className="relative overflow-hidden bg-white px-6 md:px-12 lg:px-16 py-16 md:py-24"
        >
            <PerspectiveGrid />
            <div className="relative mx-auto flex max-w-6xl flex-col items-center">
                <span className="mb-8 rounded-full border-4 border-shift-blue/20 bg-shift-blue px-6 py-2 text-sm font-medium text-white">
                    Real-time protection. Zero downtime.
                </span>

                <div className="grid w-full grid-cols-1 items-center gap-8 rounded-[2rem] bg-black p-4 shadow-2xl md:grid-cols-[1fr_1.4fr] md:gap-12 md:p-6">
                    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-shift-orange via-[#f9a24d] to-[#c4540f]">
                        <div className="absolute h-3/4 w-3/4 rounded-full bg-white/25 blur-2xl" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/ReActEdge_primary_logo.svg"
                            alt={`${SITE.name} logo`}
                            className="relative w-4/5 h-auto"
                        />
                    </div>

                    <div className="px-2 pb-4 md:pb-0 md:pr-10">
                        <h2
                            id="cta-heading"
                            className="font-serif text-3xl font-medium leading-tight text-white md:text-5xl"
                        >
                            {SITE.cta.heading}
                        </h2>
                        <p className="mt-5 text-base text-white/80 md:text-lg">
                            Let&apos;s transform your operational data into actionable intelligence.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-block rounded-full border border-white/20 bg-[#1a1a1a] px-8 py-4 font-serif font-semibold text-white transition-colors hover:bg-shift-orange"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}