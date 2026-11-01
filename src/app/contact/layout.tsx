import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Contact",
  description: "Get in touch with ReActEdge for product demonstrations, partnership discussions, or to learn more about our solutions.",
  url: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

