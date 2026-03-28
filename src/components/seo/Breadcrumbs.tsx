// components/seo/Breadcrumbs.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/lib/seo';
import StructuredData from './StructuredData';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);
  
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    ...paths.map((path, index) => {
      const url = `/${paths.slice(0, index + 1).join('/')}`;
      const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      return { name, url };
    }),
  ];

  const breadcrumbItemsWithFullUrl = breadcrumbItems.map(item => ({
    name: item.name,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reactedge.com'}${item.url}`,
  }));

  const schema = generateBreadcrumbSchema(breadcrumbItemsWithFullUrl);

  return (
    <>
      <StructuredData data={schema} />
      <nav aria-label="Breadcrumb" className="py-4 px-6 md:px-12 bg-[#0A0F1C]/50">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-shift-orange font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-gray-300 hover:text-shift-orange transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
