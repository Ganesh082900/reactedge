// lib/seo.ts
import { Metadata } from 'next';

// Base configuration
export const siteConfig = {
  name: 'ReActEdge',
  title: 'ReActEdge | Cyber & Predictive Intelligence Platform',
  description: 'Advanced cybersecurity, predictive maintenance, and compliance solutions for defense and transportation systems.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@reactedge',
  author: 'ReActEdge',
  keywords: [
    'cybersecurity',
    'predictive maintenance',
    'defense technology',
    'compliance solutions',
    'EW systems',
    'military cybersecurity',
    'transportation security',
    'operational technology',
    'threat detection',
    'real-time monitoring'
  ],
};

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

export function generateSEO({
  title,
  description,
  image,
  url,
  keywords,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  noindex = false,
  nofollow = false,
  canonical,
}: SEOProps = {}): Metadata {
  const pageTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;
  const pageUrl = url || siteConfig.url;
  const pageKeywords = keywords || siteConfig.keywords;

  const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: author || siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    
    // Robots
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Open Graph
    openGraph: {
      type: type === 'product' ? 'website' : type,
      locale: 'en_US',
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [author || siteConfig.author],
        section,
      }),
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
      images: [pageImage],
    },

    // Alternate links
    alternates: {
      canonical: canonical || pageUrl,
    },

    // Verification
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
      },
    },

    // Category
    category: 'technology',
  };

  return metadata;
}

// JSON-LD Schema generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@reactedge.com',
    },
    sameAs: [
      // Add social media profiles
      'https://twitter.com/reactedge',
      'https://linkedin.com/company/reactedge',
    ],
  };
}

export function generateWebPageSchema(props: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: props.title,
    description: props.description,
    url: props.url,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    image: props.image,
    datePublished: props.publishedTime,
    dateModified: props.modifiedTime || props.publishedTime,
    author: {
      '@type': 'Person',
      name: props.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProductSchema(props: {
  name: string;
  description: string;
  image: string;
  brand?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    image: props.image,
    brand: {
      '@type': 'Brand',
      name: props.brand || siteConfig.name,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}