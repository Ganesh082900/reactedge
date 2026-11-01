import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "License Agreement",
  description: "ReActEdge software license agreement and usage terms.",
  url: "/license",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

