import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CursorGlow from "@/components/effects/CursorGlow";
import Footer from "@/components/footer/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
export const metadata: Metadata = {
  title: "SHIFT5 | Cyber & Predictive Intelligence Platform",
  description:
    "SHIFT5 delivers advanced cybersecurity, predictive maintenance, and compliance solutions for defense and transportation systems.",
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
      <body>
        <CursorGlow />
        <Navbar />
        <main className="pt-24">{children}</main>
        <LayoutClient />
        <Footer />
      </body>
    </html>
  );
}