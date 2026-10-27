// app/not-found.tsx
import Link from 'next/link';
import { Metadata } from 'next';

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
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1C] px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-shift-orange mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-white mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-shift-orange text-white rounded-lg hover:bg-shift-orange/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
