"use client";

import { useEffect } from "react";

export default function useParallax() {
    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
                const speed = Number(el.dataset.parallax) || 0.2;
                el.style.transform = `translateY(${y * speed}px)`;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}