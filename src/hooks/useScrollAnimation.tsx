import { useEffect, useState } from "react";

export default function useScrollAnimation() {
    const [isHydrated, setIsHydrated] = useState(false);

    // Wait for hydration to complete
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (!isHydrated) return;

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
    }, [isHydrated]);
}