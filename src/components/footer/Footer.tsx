import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/content/site";
import { NAV_ITEMS } from "@/lib/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://reactedge.com";
const PROMPT = encodeURIComponent(
    `Summarize what ${SITE.name} does, its platform and solutions, based on ${SITE_URL}`
);

const AI_LINKS = [
    { name: "Claude", href: `https://claude.ai/new?q=${PROMPT}`, icon: "/icons/ai-claude.svg" },
    { name: "ChatGPT", href: `https://chatgpt.com/?q=${PROMPT}`, icon: "/icons/ai-openai.svg" },
    { name: "Perplexity", href: `https://www.perplexity.ai/search?q=${PROMPT}`, icon: "/icons/ai-perplexity.svg" },
    { name: "Google", href: `https://www.google.com/search?udm=50&q=${PROMPT}`, icon: "/icons/ai-google.svg" },
];

const SOCIALS = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/reactedge",
        path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75Z",
    },
    {
        name: "X",
        href: "https://twitter.com/reactedge",
        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
    },
];

export default function Footer() {
    const linkClass = "text-sm text-white/60 hover:text-white transition-colors";
    const groups = NAV_ITEMS.filter((i) => i.children?.length);
    const singles = NAV_ITEMS.filter((i) => !i.children?.length);

    return (
        <footer className="relative overflow-hidden bg-black text-white">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 pt-16 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(240px,1fr)_3fr] gap-12 lg:gap-16">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Link href="/" className="inline-block" aria-label={SITE.name}>
                                <Image
                                    src="/images/primary_black.svg"
                                    alt="ReActEdge Logo"
                                    width={1626}
                                    height={1080}
                                    className="h-auto w-80 max-w-none -ml-10 -my-16 brightness-0 invert"
                                />
                            </Link>
                            <p className="text-sm text-white/60 max-w-xs">{SITE.tagline}</p>
                            <div className="flex items-center gap-4">
                                {SOCIALS.map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.name}
                                        className="text-white/50 hover:text-white transition-colors"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                            <path d={s.path} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Get AI Summaries</h3>
                            <div className="flex items-center gap-3">
                                {AI_LINKS.map((a) => (
                                    <a
                                        key={a.name}
                                        href={a.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Summarize ${SITE.name} with ${a.name}`}
                                        title={a.name}
                                        className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 text-sm font-bold text-white hover:bg-white/30 transition-colors"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={a.icon} alt="" className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="text-sm text-white/60 space-y-1">
                            <p>{SITE.contact.phone}</p>
                            <a href={`mailto:${SITE.contact.email}`} className="hover:text-white transition-colors">
                                {SITE.contact.email}
                            </a>
                            {SITE.contact.address.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                            <p>{SITE.contact.regions}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 content-start">
                        {groups.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-base font-semibold mb-4">{group.title}</h3>
                                <ul className="space-y-3">
                                    {group.children!.map((child) => (
                                        <li key={child.href}>
                                            <Link href={child.href} className={linkClass}>
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <h3 className="text-base font-semibold mb-4">Explore</h3>
                            <ul className="space-y-3">
                                {singles.map((item) => (
                                    <li key={item.title}>
                                        <Link href={item.href ?? "/"} className={linkClass}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/40">
                    <p>© {SITE.year} {SITE.legalName}</p>
                    <p>{SITE.footerTagline}</p>
                </div>
            </div>

            <div className="bg-shift-white">
              <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 py-8">
                <div
                    aria-hidden="true"
                    className="select-none pointer-events-none text-center font-bold leading-none tracking-tighter text-shift-dark/10 whitespace-nowrap text-[clamp(2.5rem,13vw,10rem)]"
                >
                    {SITE.name}
                </div>
              </div>
            </div>
        </footer>
    );
}