"use client";

import { Fragment, useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";

type Props = {
    /** Plain text (split into words) or an array of lines. */
    text: string | string[];
    /** "words": words appear one after another. "lines": each line sweeps in from left to right. */
    mode?: "words" | "lines";
    as?: ElementType;
    className?: string;
    /** Delay before the animation starts, in seconds. */
    delay?: number;
    style?: CSSProperties;
};

export default function AnimatedHeading({ text, mode = "words", as: Tag = "h2", className = "", delay = 0, style }: Props) {
    const ref = useRef<HTMLElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const lines = Array.isArray(text) ? text : [text];
    let wordIndex = 0;

    return (
        <Tag ref={ref} style={style} className={`ah ${shown ? "ah-in" : ""} ${className}`} aria-label={lines.join(" ")}>
            {lines.map((line, li) =>
                mode === "lines" ? (
                    <span key={li} className="ah-line block" aria-hidden="true">
                        <span className="ah-sweep" style={{ animationDelay: `${delay + li * 0.45}s` }}>
                            {line}
                        </span>
                    </span>
                ) : (
                    <span key={li} className={Array.isArray(text) ? "block" : undefined} aria-hidden="true">
                        {line.split(" ").map((word, wi) => (
                            <Fragment key={wi}>
                                <span className="ah-word-wrap">
                                    <span className="ah-word" style={{ animationDelay: `${delay + wordIndex++ * 0.12}s` }}>
                                        {word}
                                    </span>
                                </span>{" "}
                            </Fragment>
                        ))}
                    </span>
                )
            )}
        </Tag>
    );
}