import { MetadataRoute } from 'next';
import { INSIGHTS, SOLUTIONS_SECTION } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com';
  
  // Static pages
  const routes = [
    '', '/platform', '/company', '/careers', '/insights', '/contact',
    '/privacy-policy', '/terms-of-use', '/license',
    ...SOLUTIONS_SECTION.cards.map((s) => `/solutions/${s.slug}`),
    ...INSIGHTS.map((i) => `/insights/${i.slug}`),
  ].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  );

  // Add dynamic routes here (e.g., blog posts, products)
  // Example:
  // const posts = await getPosts();
  // const postRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...routes];
}
