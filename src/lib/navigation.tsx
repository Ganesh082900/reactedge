import { SOLUTIONS_SECTION } from "@/content/site";

export interface NavItem {
    title: string;
    href?: string;
    children?: {
        title: string;
        href: string;
    }[];
}

export const NAV_ITEMS: NavItem[] = [
    {
        title: "Platform",
        href: "/platform",
    },
    {
        title: "Solutions",
        children: SOLUTIONS_SECTION.cards.map((s) => ({
            title: s.short,
            href: `/solutions/${s.slug}`,
        })),
    },
    {
        title: "About",
        children: [
            { title: "Company", href: "/company" },
            { title: "Careers", href: "/careers" },
        ],
    },
    {
        title: "Insights",
        href: "/insights",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Legal",
        children: [
            { title: "Privacy Policy", href: "/privacy-policy" },
            { title: "Terms of Use", href: "/terms-of-use" },
            { title: "License", href: "/license" },
        ],
    },
];
export const getNavCount = (item: NavItem) => item.children?.length ?? 0;
