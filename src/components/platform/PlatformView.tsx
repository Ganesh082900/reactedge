"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PLATFORM } from "@/content/site";
import GlobeIcon from "@/components/atoms/GlobeIcon";
import ElasticString from "./ElasticString";
import "@/styles/platform.css";

type Stage = "stage-stack" | "stage-fan" | "stage-deal" | "stage-flip" | "stage-settled";

function Words({ text, className, step = 0.032 }: { text: string; className: string; step?: number }) {
    let i = 0;
    return (
        <>
            {text.split("\n").map((line, li) => (
                <Fragment key={li}>
                    {li > 0 && <br />}
                    {line.split(" ").map((w) => (
                        <Fragment key={`${li}-${i}`}>
                            <span className={className} style={{ transitionDelay: `${(i++ * step).toFixed(3)}s` }}>{w}</span>{" "}
                        </Fragment>
                    ))}
                </Fragment>
            ))}
        </>
    );
}

function CardBack() {
    return (
        <div className="card-face card-face--back">
            <div className="card-back-inner">
                <div className="card-back-border">
                    <div className="card-back-guilloche">
                        <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="8" width="184" height="284" rx="12" stroke="#FFFFFF" strokeWidth="2.5" />
                            <rect x="16" y="16" width="168" height="268" rx="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                            <path d="M16 16L184 284M184 16L16 284" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                            <circle cx="100" cy="150" r="44" fill="#0B2FE3" stroke="#FFFFFF" strokeWidth="2.5" />
                            <circle cx="100" cy="150" r="36" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                            <text x="100" y="162" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="28" fontWeight="900" fill="#FFFFFF" textAnchor="middle">R</text>
                            <circle cx="28" cy="28" r="6" fill="#FFFFFF" />
                            <circle cx="172" cy="28" r="6" fill="#FFFFFF" />
                            <circle cx="28" cy="272" r="6" fill="#FFFFFF" />
                            <circle cx="172" cy="272" r="6" fill="#FFFFFF" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PlatformView() {
    const { hero, features, howItWorks, products, resources } = PLATFORM;
    const rootRef = useRef<HTMLDivElement>(null);
    const [wordIndex, setWordIndex] = useState(0);
    const [exiting, setExiting] = useState(-1);
    const [stage, setStage] = useState<Stage>("stage-stack");
    const [activeRing, setActiveRing] = useState(0);
    const [activeProduct, setActiveProduct] = useState(0);
    const [binary, setBinary] = useState<string[]>(() => Array(6).fill("00000000 00000000 00000000"));
    const [loaded, setLoaded] = useState(false);
    const ringTimer = useRef<ReturnType<typeof setInterval> | null>(null);

    // Hero reveal + scroll reveal
    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        const root = rootRef.current;
        if (!root) return () => clearTimeout(t);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("is-visible");
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });
        root.querySelectorAll(".statement-banner, .key-features, .how-it-works, .products-section, .resources-section").forEach((el) => observer.observe(el));
        return () => { clearTimeout(t); observer.disconnect(); };
    }, []);

    // Rotating hero word
    useEffect(() => {
        const id = setInterval(() => {
            setWordIndex((current) => {
                setExiting(current);
                setTimeout(() => setExiting(-1), 400);
                return (current + 1) % hero.rotatingWords.length;
            });
        }, 3000);
        return () => clearInterval(id);
    }, [hero.rotatingWords.length]);

    // Card deal and flip sequence, played once when the section scrolls into view
    useEffect(() => {
        const section = rootRef.current?.querySelector(".playing-card-section");
        if (!section) return;
        const timers: ReturnType<typeof setTimeout>[] = [];
        let played = false;
        const observer = new IntersectionObserver((entries) => {
            if (played || !entries.some((e) => e.isIntersecting)) return;
            played = true;
            setStage("stage-stack");
            timers.push(setTimeout(() => setStage("stage-fan"), 700));
            timers.push(setTimeout(() => setStage("stage-deal"), 1500));
            timers.push(setTimeout(() => setStage("stage-flip"), 2300));
            timers.push(setTimeout(() => setStage("stage-settled"), 3400));
        }, { threshold: 0.2, rootMargin: "0px 0px -60px 0px" });
        observer.observe(section);
        return () => { observer.disconnect(); timers.forEach(clearTimeout); };
    }, []);

    // How it works auto-cycle
    const startCycle = () => {
        if (ringTimer.current) clearInterval(ringTimer.current);
        ringTimer.current = setInterval(() => setActiveRing((r) => (r + 1) % howItWorks.steps.length), 4000);
    };
    useEffect(() => {
        startCycle();
        return () => { if (ringTimer.current) clearInterval(ringTimer.current); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Binary readout
    useEffect(() => {
        const byte = () => Math.floor(Math.random() * 256).toString(2).padStart(8, "0");
        const id = setInterval(() => setBinary(Array.from({ length: 6 }, () => `${byte()} ${byte()} ${byte()}`)), 2000);
        return () => clearInterval(id);
    }, []);

    const [titleTop, titleBottom] = PLATFORM.featuresHeading.split(" of ");

    return (
        <div ref={rootRef} className="platform-page">
            <section className={`heroPlatform${loaded ? " is-loaded" : ""}`}>
                <div className="hero-left">
                    <p className="hero-static split-text-container">
                        <Words text={hero.eyebrow} className="split-text-word" />
                    </p>
                    <h1 className="hero-tagline">
                        <span className="hero-tagline-static">{hero.text}</span>
                        <span className="hero-rotating">
                            {hero.rotatingWords.map((w, i) => (
                                <span
                                    key={w}
                                    className={`rotate-word${i === wordIndex ? " is-active" : ""}${i === exiting ? " is-exiting" : ""}${w === "Environment." ? " word-environment" : ""}`}
                                >
                                    {w}
                                </span>
                            ))}
                        </span>
                    </h1>
                </div>
                <div className="hero-right">
                    <div className="hero-icon"><GlobeIcon /></div>
                    <h2 className="hero-card-title split-text-container">
                        <Words text={hero.statement.replace(/, /g, ",\n")} className="split-text-word" />
                    </h2>
                    <p className="hero-card-desc split-text-container">
                        <Words text={hero.description} className="split-text-word" />
                    </p>
                </div>
            </section>

            <section className="statement-banner">
                <ElasticString className="statement-line" />
                <p className="statement-text">
                    {hero.intro.split(" ").map((w, i) => (
                        <span key={i} className="statement-word" style={{ transitionDelay: `${(i * 0.03).toFixed(2)}s` }}>{w}</span>
                    ))}
                </p>
            </section>

            <section className="key-features playing-card-section" id="cyber-ew">
                <div className="features-header">
                    <div className="features-header-left">
                        <span className="features-eyebrow">AREA OF EXPERTISE</span>
                        <h2 className="features-title">
                            <Words text={`${titleTop}\nof ${titleBottom}`} className="features-word" step={0.03} />
                        </h2>
                    </div>
                    <div className="features-badges">
                        {features.map((f) => <span key={f.title} className="badge-tag">{f.symbol}</span>)}
                    </div>
                </div>

                <div className="features-card-stage">
                    <div className={`playing-cards-cluster ${stage}`}>
                        {features.map((f, i) => (
                            <div key={f.title} className={`playing-card playing-card--${i + 1}`} data-index={i + 1}>
                                <div className="card-flipper">
                                    <CardBack />
                                    <div className="card-face card-face--front">
                                        <div className="card-front-top">
                                            <h3 className="card-front-title">{f.cardTitle}</h3>
                                            <span className="card-corner-symbol">{f.symbol}</span>
                                        </div>
                                        <ul className="card-bullet-list">
                                            {f.items.map((item) => <li key={item} className="card-bullet-item">{item}</li>)}
                                        </ul>
                                        <div className="card-front-bottom">
                                            <span className="card-corner-symbol inverted">{f.symbol}</span>
                                            <span className="card-front-title inverted">{f.cardTitle}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="how-it-works" id="predictive-maintenance">
                <div className="hiw-content">
                    <div className="hiw-block">
                        <div className="hiw-header">
                            <h2 className="hiw-title">{howItWorks.heading}</h2>
                            <div className="hiw-logo">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/platform/ReActEdge-01-01.png" alt="ReActEdge Logo" className="hiw-logo-img" />
                            </div>
                            <p className="hiw-counter">
                                <span className="hiw-counter-current">{String(activeRing + 1).padStart(2, "0")}</span>
                                <span className="hiw-counter-sep">/</span>
                                <span>{String(howItWorks.steps.length).padStart(2, "0")}</span>
                            </p>
                            <p className="hiw-description">
                                <span className="hiw-spacer">{"\u00a0".repeat(16)}</span>
                                {howItWorks.intro}
                            </p>
                        </div>
                        <div className="hiw-footer">
                            <div className="hiw-binary">
                                {binary.map((b, i) => <div key={i} className="hiw-binary-line">{b}</div>)}
                            </div>
                        </div>
                    </div>

                    <div className="hiw-chart">
                        <div className="hiw-rings">
                            {howItWorks.steps.map((s, i) => (
                                <div
                                    key={s.title}
                                    className={`hiw-ring ring-${i}${i === activeRing ? " is-active" : ""}`}
                                    onMouseEnter={() => setActiveRing(i)}
                                    onClick={() => { setActiveRing(i); startCycle(); }}
                                >
                                    <span className="ring-title">{s.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hiw-labels">
                        {howItWorks.steps.map((s, i) => (
                            <div key={s.title} className={`hiw-label${i === activeRing ? " is-active" : ""}`} data-label={i}>
                                <div className="hiw-label-title">{s.title}</div>
                                <p className="hiw-label-desc">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="products-section" id="compliance">
                <div className="products-content">
                    <div className="products-block">
                        <div className="products-controls">
                            {products.map((p, i) => (
                                <button key={p.name} className={`product-tab${i === activeProduct ? " is-active" : ""}`} onClick={() => setActiveProduct(i)}>
                                    {i === 0 && <span className="tab-dot" />}{p.name}
                                </button>
                            ))}
                        </div>
                        <div className="products-images">
                            {products.map((p, i) => (
                                <div key={p.name} className={`product-asset${i === activeProduct ? " is-active" : ""}`}>
                                    <div className="asset-bg"><span className="asset-label">{p.label}</span></div>
                                    <figure className="asset-figure">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={p.image} alt={p.name} loading="lazy" />
                                    </figure>
                                </div>
                            ))}
                        </div>
                        <div className="products-rotated-title">
                            {products.map((p, i) => (
                                <h2 key={p.name} className={`rotated-name${i === activeProduct ? " is-active" : ""}`}>{p.label}</h2>
                            ))}
                        </div>
                    </div>

                    <div className="products-aside">
                        <div className="aside-description">
                            {products.map((p, i) => (
                                <p key={p.name} className={`aside-desc-text${i === activeProduct ? " is-active" : ""}`}>{p.description}</p>
                            ))}
                        </div>
                        <div className="aside-cta">
                            {products.map((p, i) => (
                                <Link key={p.name} href="/insights" className={`aside-cta-link${i === activeProduct ? " is-active" : ""}`}>
                                    <svg role="presentation" className="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                                        <line x1="15" y1="85" x2="80" y2="20" strokeWidth="6" strokeLinecap="round" />
                                        <polyline points="40,20 80,20 80,60" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    </svg>
                                    <span className="cta-label">{p.tagline}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="resources-section" id="research">
                <div className="resources-content">
                    <ElasticString className="resources-top-line" stroke="#166FB4" />
                    <h2 className="resources-title">Resources</h2>
                    <div className="resources-list">
                        {resources.map((r, i) => (
                            <Link key={r.title} href="/insights" className="resource-item">
                                {i > 0 && <ElasticString className="resource-line" stroke="#166FB4" />}
                                <div className="resource-text">
                                    <h3 className="resource-item-title">{r.title}</h3>
                                    <p className="resource-item-desc">{r.description}</p>
                                </div>
                                <div className="resource-image">
                                    {r.video ? (
                                        <video muted loop autoPlay playsInline src={r.video} />
                                    ) : (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={r.image} alt={r.title} loading="lazy" />
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

