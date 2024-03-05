import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
    return new Response(
        `
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
            <url>
                <loc>https://www.prmaloney.com/</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>1.00</priority>
            </url>
            <url>
                <loc>https://www.prmaloney.com/projects</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.prmaloney.com/about</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.prmaloney.com/projects/valet</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://www.prmaloney.com/projects/macboxx</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://www.prmaloney.com/projects/abicht-gruppe</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://www.prmaloney.com/projects/inline-fold</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://www.prmaloney.com/projects/portfolio</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://www.prmaloney.com/projects/holoride</loc>
                <lastmod>2024-03-05T08:20:12+00:00</lastmod>
                <priority>0.64</priority>
            </url>
		</urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
};
