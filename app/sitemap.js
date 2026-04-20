import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import { generateSlug } from '@/lib/slugify';
import { getAllArticles } from '@/lib/articles';

export default async function sitemap() {
  const baseUrl = 'https://spreadsheetsoopbuy.net';

  try {
    await connectDB();

    // Get all product IDs and names
    const products = await Product.find({ hidden: { $ne: true } })
      .select('_id name updatedAt')
      .lean()
      .limit(50000); // Sitemap limit

    // Individual product pages - priority 0.7 (lower than guides)
    const productUrls = products.map((product) => ({
      url: `${baseUrl}/product/${generateSlug(product.name, product._id)}`,
      lastModified: product.updatedAt || new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    }));

    // Blog articles - priority 0.8
    const articles = getAllArticles();
    const blogUrls = articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    // Static pages with priority hierarchy
    const staticPages = [
      // Homepage - highest priority (informational hub)
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      // Blog index - high priority
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      // Spreadsheet page - high priority (but below homepage)
      {
        url: `${baseUrl}/oopbuy-spreadsheet`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
    ];

    return [...staticPages, ...blogUrls, ...productUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return at least the homepage
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ];
  }
}
