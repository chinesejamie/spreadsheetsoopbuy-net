import Link from 'next/link';
import { Suspense } from 'react';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import ProductCard from '@/components/ProductCard';
import SpreadsheetFilters from '@/components/SpreadsheetFilters';
import SpreadsheetPagination from '@/components/SpreadsheetPagination';

// SEO Metadata
export const metadata = {
  title: "OopBuy Spreadsheet | 10,000+ Verified Products from Taobao, 1688 & Weidian",
  description: "Browse the biggest OopBuy spreadsheet with 10,000+ verified products. Find items from Taobao, 1688, and Weidian with QC photos, working links, and real pricing. Updated daily.",
  openGraph: {
    title: "OopBuy Spreadsheet | 10,000+ Verified Products",
    description: "Browse the biggest OopBuy spreadsheet with 10,000+ verified products from Taobao, 1688, and Weidian. Updated daily.",
    url: "https://spreadsheetsoopbuy.net/oopbuy-spreadsheet",
    siteName: "Spreadsheets Oopbuy",
    type: "website",
  },
  alternates: {
    canonical: "https://spreadsheetsoopbuy.net/oopbuy-spreadsheet",
  },
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an OopBuy spreadsheet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An OopBuy spreadsheet is a curated database of products from Chinese marketplaces (Taobao, 1688, Weidian) organized for use with the OopBuy shopping agent. It includes verified links, pricing, and product photos."
      }
    },
    {
      "@type": "Question",
      "name": "Are the links guaranteed to work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Chinese sellers frequently remove or modify listings. We verify links weekly, but expect 5-10% to be broken at any time. Always check before ordering."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are the prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prices are snapshots that may drift 10-20% over time. They also exclude shipping and agent fees which add 30-100% to total cost."
      }
    },
    {
      "@type": "Question",
      "name": "Is this spreadsheet free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, browsing is completely free. We're supported by affiliate partnerships - if you sign up for OopBuy through our links, we receive a commission at no extra cost to you."
      }
    }
  ]
};

// Server-side data fetching
async function getProducts(params) {
  await connectToDatabase();

  // Await searchParams (Next.js 15 requirement)
  const searchParams = await params;
  const search = searchParams?.search || '';
  const category = searchParams?.category || 'all';
  const page = parseInt(searchParams?.page || '1');
  const limit = 50;
  const now = new Date();

  // Build query
  const query = {};
  if (search) {
    const rx = new RegExp(search, 'i');
    query.$or = [
      { name: { $regex: rx } },
      { description: { $regex: rx } },
      { creatorName: { $regex: rx } },
    ];
  }
  if (category && category !== 'all') {
    query.category = category;
  }

  // Get total count
  const totalProducts = await Product.countDocuments(query);

  // Page IDs for boosts
  const pageIds = ['694a5a96812c23807cdc523b'];

  // Aggregation pipeline with boost sorting
  const pipeline = [
    { $match: query },
    {
      $addFields: {
        totalBoostForPage: {
          $sum: {
            $map: {
              input: {
                $filter: {
                  input: { $ifNull: ['$boosts', []] },
                  as: 'b',
                  cond: {
                    $and: [
                      { $in: ['$$b.boostPage', pageIds] },
                      { $gt: ['$$b.validUntil', now] }
                    ]
                  }
                }
              },
              as: 'validBoost',
              in: '$$validBoost.amount'
            }
          }
        }
      }
    },
    {
      $sort: {
        totalBoostForPage: -1,
        _id: -1
      }
    },
    { $skip: (page - 1) * limit },
    { $limit: limit },
    {
      $project: {
        name: 1,
        description: 1,
        price: 1,
        category: 1,
        store: 1,
        id: 1,
        creatorName: 1,
        images: 1,
        viewCount: 1,
        purchased: 1
      }
    }
  ];

  const products = await Product.aggregate(pipeline);

  // Serialize for client - convert all MongoDB types to plain values
  const normalizedProducts = products.map(p => {
    return {
      _id: p._id.toString(),
      name: p.name || '',
      description: p.description || '',
      price: p.price || 0,
      category: p.category || '',
      store: p.store || '',
      id: p.id || '',
      creatorName: p.creatorName || '',
      images: p.images?.map(img => typeof img === 'string' ? img : img?.url || '').filter(Boolean) || [],
      viewCount: p.viewCount || 0,
      purchased: p.purchased || 0,
    };
  });

  return {
    products: normalizedProducts,
    totalProducts,
    page,
    limit,
    totalPages: Math.ceil(totalProducts / limit),
  };
}

// Product Grid with Suspense wrapper
function ProductGrid({ products, currency }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg mb-4">No products found</p>
        <Link href="/oopbuy-spreadsheet" className="text-[#FF186B] hover:underline">
          Clear filters and try again
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {products.map((product) => (
        <Suspense key={product._id} fallback={<div className="bg-gray-100 rounded-xl h-64 animate-pulse" />}>
          <ProductCard product={product} currency={currency} />
        </Suspense>
      ))}
    </div>
  );
}

export default async function OopbuySpreadsheetPage({ searchParams }) {
  // Await searchParams (Next.js 15 requirement)
  const params = await searchParams;
  const { products, totalProducts, page, limit, totalPages } = await getProducts(searchParams);

  const search = params?.search || '';
  const category = params?.category || 'all';
  const currency = params?.currency || 'USD';

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero - Compact, SEO optimized */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              OopBuy Spreadsheet
            </h1>
            <p className="text-gray-600 text-lg">
              Browse {totalProducts.toLocaleString()}+ verified products from Taobao, 1688, and Weidian
            </p>
          </div>
        </header>

        {/* Filters - Client Component */}
        <Suspense fallback={<div className="h-20 bg-white border-b border-gray-200" />}>
          <SpreadsheetFilters
            initialSearch={search}
            initialCategory={category}
            initialCurrency={currency}
          />
        </Suspense>

        {/* Products Grid - Server Rendered */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Results count */}
          <p className="text-sm text-gray-500 mb-6">
            Showing {((page - 1) * limit) + 1} - {Math.min(page * limit, totalProducts)} of {totalProducts.toLocaleString()} products
          </p>

          {/* Grid */}
          <ProductGrid products={products} currency={currency} />

          {/* Pagination - Client Component */}
          <Suspense fallback={null}>
            <SpreadsheetPagination currentPage={page} totalPages={totalPages} />
          </Suspense>
        </main>

        {/* Informational Content - Server Rendered for SEO */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About This OopBuy Spreadsheet
            </h2>

            <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
              <p>
                This spreadsheet contains verified products from <strong>Taobao</strong>, <strong>1688</strong>,
                and <strong>Weidian</strong> - China's largest e-commerce platforms. Each product is checked
                weekly to ensure working links and accurate pricing.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">How to Use the OopBuy Spreadsheet</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Browse or search for products using the filters above</li>
                <li>Click a product to see details, QC photos, and sizing information</li>
                <li>Copy the product link and paste it into OopBuy.com to order</li>
                <li>Request QC photos from the warehouse before shipping internationally</li>
              </ol>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Important Notes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prices shown are product cost only - add 30-100% for shipping, agent fees, and international freight</li>
                <li>5-10% of links may be dead at any time - Chinese sellers remove listings frequently</li>
                <li>Always verify size charts on the original listing - Chinese sizing differs from Western standards</li>
                <li>Request QC photos before shipping to catch defects early and avoid international return costs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section - SEO */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="bg-gray-50 rounded-lg border border-gray-200 group" open>
                <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-gray-700 list-none flex justify-between items-center">
                  <span>What is an OopBuy spreadsheet?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm">
                  An OopBuy spreadsheet is a curated database of products from Chinese marketplaces (Taobao, 1688, Weidian)
                  organized for use with the OopBuy shopping agent. It includes verified links, pricing, and product photos
                  to help international buyers shop more easily.
                </div>
              </details>

              <details className="bg-gray-50 rounded-lg border border-gray-200 group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-gray-700 list-none flex justify-between items-center">
                  <span>Are the product links guaranteed to work?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm">
                  No. Chinese sellers frequently remove or modify listings. We verify links weekly, but expect 5-10% to be
                  broken at any time. Always verify the link works on the original platform before placing an order.
                </div>
              </details>

              <details className="bg-gray-50 rounded-lg border border-gray-200 group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-gray-700 list-none flex justify-between items-center">
                  <span>How accurate are the prices shown?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm">
                  Prices are snapshots that may drift 10-20% over time as sellers adjust pricing. They also exclude shipping
                  to the agent warehouse, agent service fees (5-10%), and international shipping which can add 30-100% to total cost.
                </div>
              </details>

              <details className="bg-gray-50 rounded-lg border border-gray-200 group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-gray-700 list-none flex justify-between items-center">
                  <span>Is this spreadsheet free to use?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm">
                  Yes, browsing and using the OopBuy spreadsheet is completely free. We're supported by affiliate partnerships -
                  if you sign up for OopBuy through our referral links, we receive a small commission at no extra cost to you.
                </div>
              </details>

              <details className="bg-gray-50 rounded-lg border border-gray-200 group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-gray-700 list-none flex justify-between items-center">
                  <span>What platforms does the spreadsheet cover?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm">
                  Our OopBuy spreadsheet includes products from Taobao (China's largest consumer marketplace), 1688 (Alibaba's
                  wholesale platform with factory-direct pricing), and Weidian (a mobile marketplace popular for fashion and streetwear).
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-sm text-gray-500 mb-4">
              <strong>Affiliate Disclosure:</strong> This site participates in the OopBuy affiliate program.
              We receive a commission when you sign up through our referral links at no extra cost to you.
              This helps us maintain the spreadsheet and add new products daily.
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <Link href="/" className="hover:text-gray-700">Home</Link>
                <Link href="/blog" className="hover:text-gray-700">Guides</Link>
                <a href="mailto:contact@spreadsheetsoopbuy.net" className="hover:text-gray-700">Contact</a>
              </div>
              <p>© {new Date().getFullYear()} Spreadsheets Oopbuy. Free OopBuy spreadsheet for Taobao, 1688, and Weidian.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
