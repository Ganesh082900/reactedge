import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Privacy Policy",
  description: "How ReActEdge collects, uses and protects your personal information.",
  url: "/privacy-policy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

