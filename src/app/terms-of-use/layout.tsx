import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Terms of Use",
  description: "The terms and conditions governing use of the ReActEdge website and services.",
  url: "/terms-of-use",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

