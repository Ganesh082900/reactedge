import { Metadata } from 'next';
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import InsightsGrid from "@/components/sections/InsightsGrid";
import { generateSEO, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = generateSEO({
  title: 'Home',
  description: 'Discover ReActEdge\'s advanced cybersecurity and predictive intelligence platform. Protecting defense and transportation systems with cutting-edge technology.',
  keywords: [
    'cybersecurity platform',
    'predictive maintenance',
    'defense technology',
    'real-time monitoring',
    'threat detection',
    'operational technology',
  ],
});

export default function Home() {
  const webPageSchema = generateWebPageSchema({
    title: 'ReActEdge - Cyber & Predictive Intelligence Platform',
    description: 'Advanced cybersecurity and predictive maintenance solutions for defense and transportation systems.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com',
  });

  return (
    <>
      <StructuredData data={webPageSchema} />
      <Hero />
      <Features />
      <InsightsGrid/>
    </>
  );
}