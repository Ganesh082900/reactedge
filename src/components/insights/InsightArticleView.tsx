"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { INSIGHTS_PAGE, type Insight } from "@/content/site";
import "@/styles/insights.css";

function QuoteMark() {
    return (
        <div className="card-quote-mark">
            <svg width="36" height="28" viewBox="0 0 30 24" fill="none">
                <path d="M0 14.5C0 6.6 5.2 1.45 12.3 0L13.5 3.5C8.9 4.8 6.5 7.7 6.1 11.2H12.8V24H0V14.5ZM16.5 14.5C16.5 6.6 21.7 1.45 28.8 0L30 3.5C25.4 4.8 23 7.7 22.6 11.2H29.3V24H16.5V14.5Z" fill="#BCE3DA" />
            </svg>
        </div>
    );
}

function Quote({ text, author }: { text: string; author: string }) {
    const idx = text.indexOf(". ");
    const first = idx > -1 ? text.slice(0, idx) : text.replace(/\.$/, "");
    const rest = idx > -1 ? text.slice(idx + 2) : "";
    return (
        <p className="article-paragraph">
            “{first},” <strong>said {author}</strong>.{rest && <> “{rest}”</>}
        </p>
    );
}

export default function InsightArticleView({ insight }: { insight: Insight }) {
    const rootRef = useRef<HTMLDivElement>(null);
    const { body } = insight;

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const deck = root.querySelector<HTMLElement>(".additional-reading-deck");
        const cluster = root.querySelector<HTMLElement>(".cards-fan-cluster");
        let hovered = false;
        let unfolded = false;
        let observing = false;
        let timer: ReturnType<typeof setTimeout> | null = null;
        let touchTimer: ReturnType<typeof setTimeout> | null = null;

        // The deck alternates between a joined fan and an expanded grid
        const cycle = () => {
            if (timer) clearTimeout(timer);
            if (!observing || !deck) return;
            if (hovered) {
                timer = setTimeout(cycle, 1000);
                return;
            }
            unfolded = !unfolded;
            deck.classList.toggle("is-unfolded", unfolded);
            timer = setTimeout(cycle, unfolded ? 5000 : 1000);
        };

        const onEnter = () => { hovered = true; };
        const onLeave = () => { hovered = false; };
        const onTouchStart = () => { hovered = true; if (touchTimer) clearTimeout(touchTimer); };
        const onTouchEnd = () => {
            if (touchTimer) clearTimeout(touchTimer);
            touchTimer = setTimeout(() => { hovered = false; }, 4000);
        };
        cluster?.addEventListener("mouseenter", onEnter);
        cluster?.addEventListener("mouseleave", onLeave);
        cluster?.addEventListener("touchstart", onTouchStart, { passive: true });
        cluster?.addEventListener("touchend", onTouchEnd, { passive: true });

        const deckObserver = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    observing = true;
                    deck?.classList.add("is-visible");
                    if (!timer) {
                        unfolded = false;
                        deck?.classList.remove("is-unfolded");
                        timer = setTimeout(cycle, 1000);
                    }
                } else {
                    observing = false;
                    if (timer) clearTimeout(timer);
                    timer = null;
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
        if (deck) deckObserver.observe(deck);

        return () => {
            deckObserver.disconnect();
            if (timer) clearTimeout(timer);
            if (touchTimer) clearTimeout(touchTimer);
            cluster?.removeEventListener("mouseenter", onEnter);
            cluster?.removeEventListener("mouseleave", onLeave);
            cluster?.removeEventListener("touchstart", onTouchStart);
            cluster?.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    const shortTitle = insight.title.length > 50 ? `${insight.title.slice(0, 50)}...` : insight.title;

    return (
        <div ref={rootRef} className="insights-page">
            <section className="heroInsights">
                <div className="content">
                    <h1 className="insights-banner-title" aria-label={INSIGHTS_PAGE.bannerTitle}>
                        {INSIGHTS_PAGE.bannerTitle.split("").map((ch, i) => (
                            <span key={i} className="banner-char-mask" aria-hidden="true">
                                <span className="banner-char" style={{ animationDelay: `${(0.2 + i * 0.04).toFixed(2)}s` }}>
                                    {ch === " " ? "\u00A0" : ch}
                                </span>
                            </span>
                        ))}
                    </h1>
                    <div className="insights-banner-visual">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={INSIGHTS_PAGE.bannerImage} alt="ReActEdge Brand Identity" className="insights-banner-gif" />
                    </div>
                </div>
            </section>

            <section className="heroArticle">
                <div className="content">
                    <nav className="heroArticle-breadcrumb">
                        <Link href="/insights">Insights</Link>
                        <span>/</span>
                        <span>{shortTitle}</span>
                    </nav>
                    <h2 className="heroArticle-title">{insight.title}</h2>
                    <p className="heroArticle-date">{insight.date}</p>
                </div>
            </section>

            <section className="article-body">
                <div className="rich-text">
                    <h2 className="article-featured">{body?.subtitle ?? insight.description}</h2>

                    {body && (
                        <>
                            <p className="article-paragraph">
                                <strong>{body.dateline}</strong> — {body.paragraphs[0]}
                            </p>
                            <div className="article-image">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={INSIGHTS_PAGE.articleImages[0]} alt="ReActEdge Partnership Announcement" />
                            </div>
                            <p className="article-paragraph">{body.paragraphs[1]}</p>
                            {body.quotes[0] && <Quote {...body.quotes[0]} />}
                            {body.paragraphs.slice(2).map((p) => <p key={p} className="article-paragraph">{p}</p>)}
                            {body.quotes[1] && <Quote {...body.quotes[1]} />}

                            <h3 className="article-about-title">About ReActEdge</h3>
                            <div className="article-image">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={INSIGHTS_PAGE.articleImages[1]} alt="About ReActEdge" />
                            </div>
                            <p className="article-paragraph">{body.about}</p>

                            <div className="article-logo-grid">
                                {body.related.map((r, i) => (
                                    <a key={r.title} href="#" className="article-logo-item">
                                        <div className="article-project-preview">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={INSIGHTS_PAGE.relatedImages[i]} alt={r.title} loading="lazy" />
                                        </div>
                                        <p className="article-project-caption">
                                            <strong>{r.title}</strong> – {r.description}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            <section className="sliderCards additional-reading-deck" id="careers">
                <div className="sliderCards-header">
                    <h2 className="sliderCards-title">{INSIGHTS_PAGE.additionalReadingTitle}</h2>
                </div>
                <div className="cards-fan-wrapper">
                    <div className="cards-fan-cluster">
                        {INSIGHTS_PAGE.additionalReading.map((c, i) => (
                            <Link key={c.brand} href="/insights" className={`fan-card fan-card--${i + 1} ${c.theme}`}>
                                <QuoteMark />
                                <div className="card-inner-content">
                                    <p className="fan-card-quote">“{c.quote}”</p>
                                </div>
                                <div className="card-meta-bottom">
                                    <span className="card-brand-logo"><strong>{c.brand}</strong>{c.suffix} / {c.tag}</span>
                                    <span className="card-read-link">
                                        Read{" "}
                                        <svg className="card-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
