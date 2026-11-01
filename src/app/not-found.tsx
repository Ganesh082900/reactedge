// app/not-found.tsx
import Link from 'next/link';
import { Metadata } from 'next';
import AnimatedHeading from '@/components/atoms/AnimatedHeading';

export const metadata: Metadata = {
  title: '404 - Page Not Found | ReActEdge',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="nf-page min-h-screen bg-shift-white text-shift-dark flex items-center overflow-hidden">
      <style>{`
        body:has(.nf-page) footer, body:has(.nf-page) section[aria-labelledby="cta-heading"] { display: none; }
        @keyframes nf-from-top { from { opacity: 0; transform: translateY(-80px); } to { opacity: 1; transform: none; } }
        @keyframes nf-from-left { from { opacity: 0; transform: translateX(-80px); } to { opacity: 1; transform: none; } }
        @keyframes nf-from-bottom { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: none; } }
        .nf-img { animation: nf-from-top 1s cubic-bezier(.22,1,.36,1) both; }
        .nf-text > * { animation: nf-from-left 1s cubic-bezier(.22,1,.36,1) both; }
        .nf-text > *:nth-child(1) { animation-delay: .7s; }
        .nf-text > *:nth-child(2) { animation-delay: .85s; }
        .nf-text > .nf-btns { animation-name: nf-from-bottom; animation-delay: 1.3s; }
        @media (prefers-reduced-motion: reduce) { .nf-img, .nf-text > * { animation: none; } }
      `}</style>
      <div className="max-w-[1280px] mx-auto w-full px-6 pt-36 pb-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="nf-img max-w-[640px] w-full mx-auto lg:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/errors/not-found.svg" alt="404 - page not found" className="w-full h-auto" />
        </div>

        <div className="nf-text">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-60 mb-6">Error 404</p>
            <AnimatedHeading
              as="h1"
              mode="words"
              delay={0.9}
              text="Page not found"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]"
            />
          </div>
          <p className="mt-8 max-w-md text-lg md:text-xl leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Everything else is still protected.
          </p>
          <div className="nf-btns mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="px-10 py-4 rounded-full bg-shift-blue text-white text-xs font-mono tracking-[0.15em] uppercase hover:bg-shift-orange transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full border-2 border-shift-blue text-shift-blue text-xs font-mono tracking-[0.15em] uppercase hover:bg-shift-blue hover:text-white transition-colors"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}