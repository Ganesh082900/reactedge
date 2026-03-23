// lib/seo.ts

export function generateSEO({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
        },
    };
}