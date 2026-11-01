"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const INITIAL_MS = 3200;
const FADE_MS = 400;

// Intro loader: shown only on the first load of the home page, never on route transitions.
export default function PageLoader() {
    const pathname = usePathname();
    const [visible, setVisible] = useState(pathname === "/");
    const [fading, setFading] = useState(false);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        if (!visible) return;
        const list = timers.current;
        list.push(
            setTimeout(() => {
                setFading(true);
                list.push(setTimeout(() => setVisible(false), FADE_MS));
            }, INITIAL_MS)
        );
        return () => list.forEach(clearTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.body.style.overflow = visible ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            role="status"
            aria-label="Loading"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-shift-cream transition-opacity"
            style={{ opacity: fading ? 0 : 1, transitionDuration: `${FADE_MS}ms` }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/logo-animated.svg" alt="ReActEdge" className="w-[min(80vw,520px)] h-auto" />
        </div>
    );
}
