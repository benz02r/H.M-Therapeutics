export default function handler(req, res) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://yourdomain.com/</loc>
            <priority>1.0</priority>
            <changefreq>daily</changefreq>
        </url>
        <url>
            <loc>https://yourdomain.com/about</loc>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>https://yourdomain.com/contact</loc>
            <priority>0.7</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>https://yourdomain.com/services</loc>
            <priority>0.8</priority>
            <changefreq>monthly</changefreq>
        </url>
        <url>
            <loc>https://yourdomain.com/policy</loc>
            <priority>0.6</priority>
            <changefreq>yearly</changefreq>
        </url>
    </urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
}
