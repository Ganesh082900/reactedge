import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CursorGlow from "@/components/effects/CursorGlow";
import Footer from "@/components/footer/Footer";
import PageLoader from "@/components/layout/PageLoader";
import LayoutClient from "@/components/layout/LayoutClient";
import StructuredData from "@/components/seo/StructuredData";
import Analytics from "@/components/seo/Analytics";
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { generateSEO, generateOrganizationSchema } from '@/lib/seo';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plex-sans',
  preload: true,
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-plex-mono',
  preload: true,
});

export const metadata: Metadata = generateSEO({
  title: 'Cyber & Predictive Intelligence Platform',
  description: 'Advanced cybersecurity, predictive maintenance, and compliance solutions for defense and transportation systems.',
  keywords: [
    'cybersecurity',
    'predictive maintenance',
    'defense technology',
    'compliance solutions',
    'EW systems',
    'military cybersecurity',
    'operational technology security',
    'threat detection',
  ],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0F1C' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData data={organizationSchema} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body 
        className={`${plexSans.variable} ${plexMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <PageLoader />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-shift-orange focus:text-white focus:rounded">
          Skip to main content
        </a>
        <CursorGlow />
        <Navbar />
        <main id="main-content" role="main">{children}</main>
        <LayoutClient />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
