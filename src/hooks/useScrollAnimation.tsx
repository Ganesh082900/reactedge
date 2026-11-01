import { useEffect } from "react";

export default function useScrollAnimation() {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-animate]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("active");
                        }, i * 100);
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}