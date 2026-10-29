"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const INITIAL_MS = 3200;
const TRANSITION_MS = 1800;
const FADE_MS = 400;

export default function PageLoader() {
    const pathname = usePathname();
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);
    const [runId, setRunId] = useState(0);
    const startRef = useRef(Date.now());
    const minRef = useRef(INITIAL_MS);
    const pendingRef = useRef(false);
    const lastPath = useRef(pathname);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    const clearTimers = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    };

    const hideAfterMin = () => {
        clearTimers();
        const wait = Math.max(0, minRef.current - (Date.now() - startRef.current));
        timers.current.push(
            setTimeout(() => {
                setFading(true);
                timers.current.push(setTimeout(() => setVisible(false), FADE_MS));
            }, wait)
        );
    };

    const show = (min: number) => {
        clearTimers();
        startRef.current = Date.now();
        minRef.current = min;
        pendingRef.current = true;
        setFading(false);
        setVisible(true);
        setRunId((n) => n + 1);
    };

    // Landing
    useEffect(() => {
        hideAfterMin();
        return clearTimers;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Route transition start: internal link clicks
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const a = (e.target as Element | null)?.closest?.("a");
            if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
            const url = new URL(a.href, window.location.href);
            if (url.origin !== window.location.origin) return;
            if (url.pathname === window.location.pathname) return;
            show(TRANSITION_MS);
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    // Route transition end
    useEffect(() => {
        if (lastPath.current === pathname) return;
        lastPath.current = pathname;
        if (!pendingRef.current) show(TRANSITION_MS);
        pendingRef.current = false;
        hideAfterMin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0F1C] transition-opacity"
            style={{ opacity: fading ? 0 : 1, transitionDuration: `${FADE_MS}ms` }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                key={runId}
                src={`/images/logo-animi.svg?r=${runId}`}
                alt="ReActEdge"
                className="w-[min(80vw,520px)] h-auto"
            />
        </div>
    );
}
