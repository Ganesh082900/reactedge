import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Company",
  description: "Learn about ReActEdge, the team building cyber and predictive intelligence for defense, aerospace and transportation systems.",
  url: "/company",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

