/**
 * Performance utilities for optimizing Core Web Vitals
 */

interface WebVitalMetric {
  id: string;
  name: string;
  value: number;
}

// Report Web Vitals to analytics
export function reportWebVitals(metric: WebVitalMetric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

// Preload critical resources
export function preloadResource(href: string, as: string, type?: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
}

// Prefetch next page
export function prefetchPage(url: string) {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
}

// Lazy load images with Intersection Observer
export function lazyLoadImages(selector = 'img[data-src]') {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers that don't support IntersectionObserver
    const images = document.querySelectorAll(selector);
    images.forEach((node) => {
      const img = node as HTMLImageElement;
      img.src = img.dataset.src ?? img.src;
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  const images = document.querySelectorAll(selector);
  images.forEach((img) => imageObserver.observe(img));
}

// Resource hints helper
export function addResourceHints() {
  // DNS Prefetch for external domains
  const dnsPrefetch = [
    'https://www.google-analytics.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  dnsPrefetch.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });

  // Preconnect to critical domains
  const preconnect = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  preconnect.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
