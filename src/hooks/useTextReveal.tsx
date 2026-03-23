"use client";

import { useEffect } from "react";

export default function useTextReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".mask-line");

        els.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add("active");
            }, i * 150);
        });
    }, []);
}