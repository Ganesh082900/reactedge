"use client";

import { useEffect, useRef } from "react";

export default function ElasticString({ className = "", stroke = "#4d4d4d" }: { className?: string; stroke?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const path = pathRef.current;
        if (!container || !path) return;

        const baseY = 60;
        let currentX = 500, currentY = baseY, targetX = 500, targetY = baseY, velocityY = 0;
        let hovered = false;
        let frame: number | null = null;

        const update = () => path.setAttribute("d", `M 0 ${baseY} Q ${currentX.toFixed(2)} ${currentY.toFixed(2)} 1000 ${baseY}`);

        const loop = () => {
            if (hovered) {
                currentX += (targetX - currentX) * 0.28;
                currentY += (targetY - currentY) * 0.28;
                update();
                frame = requestAnimationFrame(loop);
                return;
            }
            velocityY += (baseY - currentY) * 0.09;
            velocityY *= 0.82;
            currentY += velocityY;
            currentX += (500 - currentX) * 0.12;
            update();
            if (Math.abs(velocityY) > 0.04 || Math.abs(currentY - baseY) > 0.04) {
                frame = requestAnimationFrame(loop);
            } else {
                currentX = 500; currentY = baseY; velocityY = 0;
                update();
                frame = null;
            }
        };

        const track = (clientX: number, clientY: number) => {
            const rect = container.getBoundingClientRect();
            targetX = Math.max(30, Math.min(970, ((clientX - rect.left) / rect.width) * 1000));
            targetY = Math.max(10, Math.min(110, ((clientY - rect.top) / rect.height) * 120));
            if (!hovered) {
                hovered = true;
                if (frame === null) frame = requestAnimationFrame(loop);
            }
        };

        const release = () => {
            hovered = false;
            velocityY = (targetY - baseY) * 0.6;
            if (frame === null) frame = requestAnimationFrame(loop);
        };

        const onMove = (e: MouseEvent) => track(e.clientX, e.clientY);
        const onTouch = (e: TouchEvent) => { if (e.touches[0]) track(e.touches[0].clientX, e.touches[0].clientY); };

        container.addEventListener("mousemove", onMove);
        container.addEventListener("mouseleave", release);
        container.addEventListener("touchmove", onTouch, { passive: true });
        container.addEventListener("touchend", release);
        return () => {
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("mouseleave", release);
            container.removeEventListener("touchmove", onTouch);
            container.removeEventListener("touchend", release);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div ref={containerRef} className={`elastic-string ${className}`}>
            <svg className="elastic-svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
                <path ref={pathRef} className="elastic-path" d="M 0 60 Q 500 60 1000 60" stroke={stroke} strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
        </div>
    );
}
