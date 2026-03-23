"use client";

import { useEffect } from "react";

export default function useMenuAnimation(open: boolean) {
    useEffect(() => {
        const items = document.querySelectorAll(".menu-item");

        items.forEach((el, i) => {
            if (open) {
                setTimeout(() => {
                    el.classList.add("active");
                }, i * 120);
            } else {
                el.classList.remove("active");
            }
        });
    }, [open]);
}