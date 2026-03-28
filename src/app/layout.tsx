import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CursorGlow from "@/components/effects/CursorGlow";
import Footer from "@/components/footer/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";
import Analytics from "@/components/seo/Analytics";
import { Inter, JetBrains_Mono } from 'next/font/google';
import { generateSEO, generateOrganizationSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-shift-orange focus:text-white focus:rounded">
          Skip to main content
        </a>
        <CursorGlow />
        <Navbar />
        <Breadcrumbs />
        <main id="main-content" role="main">{children}</main>
        <LayoutClient />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}