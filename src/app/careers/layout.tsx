import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Careers",
  description: "Join ReActEdge and help build the digital operating system for tomorrow's fleets, keeping critical systems secure.",
  url: "/careers",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

