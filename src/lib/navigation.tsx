export interface NavItem {
    title: string;
    href?: string;
    count?: number;
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
        count: 4,
        children: [
            { title: "Cyber / EW", href: "/solutions/cyber" },
            { title: "Predictive Maintenance", href: "/solutions/predictive" },
            { title: "Compliance", href: "/solutions/compliance" },
            { title: "Research", href: "/solutions/research" },
        ],
    },
    {
        title: "About",
        count: 2,
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
];