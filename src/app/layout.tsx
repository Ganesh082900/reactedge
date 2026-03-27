import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CursorGlow from "@/components/effects/CursorGlow";
import Footer from "@/components/footer/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: "REACTEDGE | Cyber & Predictive Intelligence Platform",
  description:
    "REACTEDGE delivers advanced cybersecurity, predictive maintenance, and compliance solutions for defense and transportation systems.",
  keywords: [
    "cybersecurity",
    "predictive maintenance",
    "defense technology",
    "compliance solutions",
    "EW systems",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <LayoutClient />
        <Footer />
      </body>
    </html>
  );
}