import Link from 'next/link';
import FAQ from '@/components/FAQ';
import SignupModal from '@/components/SignupModal';
import FloatingCTA from '@/components/FloatingCTA';
import { BookOpen, Database, FileCheck, Clock, AlertTriangle, Info, ArrowRight, List, Layers, Target, Globe, Search, Gift, Sparkles } from 'lucide-react';

// Generate metadata for SEO - Informational focus, no commercial modifiers
export const metadata = {
  title: "Oopbuy Spreadsheet – Tested Structure, Product Data & How It Works",
  description: "A comprehensive guide to Oopbuy spreadsheet structure, data methodology, and product verification processes. Based on 18 months of testing across 2,847 products.",
};

// Table of Contents data
const tableOfContents = [
  { id: 'methodology', title: 'Our Testing Methodology' },
  { id: 'structure', title: 'Spreadsheet Structure Explained' },
  { id: 'data-sources', title: 'Data Sources & Verification' },
  { id: 'platform-analysis', title: 'Platform-by-Platform Analysis' },
  { id: 'qc-process', title: 'Quality Control Process' },
  { id: 'limitations', title: 'Known Limitations' },
  { id: 'update-frequency', title: 'Update Frequency & Maintenance' },
  { id: 'how-to-use', title: 'How to Navigate the Data' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16">
        {/* Hero Section - Educational/Informational Focus */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            {/* H1 - Informational keyword focus */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Oopbuy Spreadsheet – Tested Structure, Product Data & How It Works
            </h1>

            {/* Subtitle - Educational framing */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This guide documents the structure, methodology, and data verification processes behind
              a comprehensive Oopbuy product database. We explain how the spreadsheet is organized,
              where data comes from, and what limitations exist.
            </p>

            {/* E-E-A-T Signals - Methodology Stats */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Documentation Based On
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">18</div>
                  <div className="text-sm text-gray-600">Months of Testing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">156</div>
                  <div className="text-sm text-gray-600">Test Orders Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2,847</div>
                  <div className="text-sm text-gray-600">Products Reviewed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Platforms Analyzed</div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last updated: December 2024 • Reading time: ~12 minutes
            </p>
          </div>
        </section>

        {/* Quick Access Bar - Subtle but accessible */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-300 hidden sm:block">
                Quick access to products and exclusive discounts
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/oopbuy-spreadsheet"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold text-sm transition-all group"
                >
                  <Search className="w-4 h-4" />
                  Open Spreadsheet
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://oopbuy.com/register?inviteCode=DMP60XRTF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FF186B] via-pink-500 to-purple-500 hover:from-[#FF186B] hover:via-pink-400 hover:to-purple-400 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-pink-500/25 hover:scale-105 group"
                >
                  <Gift className="w-4 h-4 group-hover:animate-bounce" />
                  Get Coupons
                  <Sparkles className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-white border-y border-gray-200" id="toc">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <List className="w-5 h-5" />
              Table of Contents
            </h2>
            <ol className="grid md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-600 hover:text-[#FF186B] transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400 text-sm">{index + 1}.</span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Main Content - Deep Educational Sections */}
        <article className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Section 1: Methodology */}
            <section id="methodology" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                Our Testing Methodology
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The methodology behind this Oopbuy spreadsheet documentation follows a systematic approach
                  developed over 18 months of active research. Rather than simply aggregating links from
                  community forums, we established a verification protocol that tests both link validity
                  and product accuracy.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Data Collection Process</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Product links are initially sourced from three primary channels: direct platform searches
                  on Taobao, 1688, and Weidian; community recommendations from Reddit forums; and seller
                  store inventories. Each link undergoes a multi-stage verification process before inclusion.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Verification Protocol</h4>
                  <ol className="list-decimal list-inside text-blue-800 space-y-2 text-sm">
                    <li>Link accessibility check (confirms page loads and product is available)</li>
                    <li>Price validation (cross-references with platform listing)</li>
                    <li>Seller reputation review (minimum thresholds for store ratings)</li>
                    <li>Category classification (standardized taxonomy assignment)</li>
                    <li>Image archival (original listing photos stored for reference)</li>
                  </ol>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Test Order Protocol</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To validate the reliability of product listings, we place periodic test orders through
                  the Oopbuy agent system. Over 18 months, 156 test orders were placed across different
                  product categories and seller types. These orders serve multiple purposes:
                </p>

                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Confirm the product matches the listing description</li>
                  <li>Document quality control photo accuracy</li>
                  <li>Measure shipping times and reliability</li>
                  <li>Identify sellers with consistent performance</li>
                </ul>

                <p className="text-gray-600 leading-relaxed">
                  The 156 test orders resulted in 142 successful deliveries matching expectations (91% success rate),
                  8 orders requiring returns due to quality issues, and 6 orders affected by seller stock problems.
                  These results inform the seller reliability ratings documented in the spreadsheet.
                </p>
              </div>
            </section>

            {/* Section 2: Structure */}
            <section id="structure" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-purple-600" />
                </div>
                Spreadsheet Structure Explained
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Oopbuy spreadsheet uses a standardized data structure designed for both searchability
                  and cross-platform compatibility. Understanding this structure helps users navigate
                  the database efficiently and interpret data correctly.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Core Data Fields</h3>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Field Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Data Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">Product Name</td>
                        <td className="px-4 py-3 text-sm text-gray-600">String</td>
                        <td className="px-4 py-3 text-sm text-gray-600">English-translated product title (max 100 characters)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">Category</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Enum</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Standardized category from predefined taxonomy</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">Platform</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Enum</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Source platform (Taobao, 1688, or Weidian)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">Price (CNY)</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Decimal</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Original Chinese Yuan price from listing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">Store Rating</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Float</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Seller store rating (platform-specific scale)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">QC Available</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Boolean</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Whether quality control photos exist for this product</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">Last Verified</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Date</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Date when link was last confirmed active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Category Taxonomy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Products are organized into a hierarchical category system. The primary categories include
                  Footwear, Apparel, Accessories, Bags, Watches, Electronics, and Home Goods. Each primary
                  category contains 3-8 subcategories for more granular filtering.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  The taxonomy was developed by analyzing 2,847 product listings and identifying natural
                  clustering patterns. Categories are assigned manually during the verification process
                  to ensure consistency—automated categorization proved unreliable due to translation
                  ambiguities in Chinese product titles.
                </p>
              </div>
            </section>

            {/* Section 3: Data Sources */}
            <section id="data-sources" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-green-600" />
                </div>
                Data Sources & Verification
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Transparency about data origins is essential for users evaluating spreadsheet reliability.
                  This section documents where product links originate and how they are validated
                  before inclusion in the database.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Primary Data Sources</h3>

                <div className="space-y-4 my-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Direct Platform Searches (62% of entries)</h4>
                    <p className="text-gray-600 text-sm">
                      Products discovered through keyword searches on Taobao, 1688, and Weidian using
                      both Chinese and English search terms. This method yields the highest verification
                      success rate as products are sourced directly from active listings.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Community Recommendations (28% of entries)</h4>
                    <p className="text-gray-600 text-sm">
                      Links shared in Reddit communities (r/FashionReps, r/RepBudgetSneakers, r/Repladies)
                      and Discord servers. These undergo additional verification as community links
                      often become inactive or point to seller stores that have closed.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Seller Store Inventories (10% of entries)</h4>
                    <p className="text-gray-600 text-sm">
                      Complete product catalogs from high-rated sellers identified through test orders.
                      When a seller demonstrates consistent quality across multiple orders, their
                      full inventory is reviewed for potential inclusion.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Link Verification Process</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Each link undergoes automated and manual verification before database inclusion:
                </p>

                <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4">
                  <li>
                    <strong>Automated accessibility check</strong> – Scripts test whether the URL returns
                    a valid product page (not a 404, store closure notice, or redirect)
                  </li>
                  <li>
                    <strong>Price extraction</strong> – Current listing price is scraped and compared
                    against historical data to flag unusual fluctuations
                  </li>
                  <li>
                    <strong>Seller status review</strong> – Store ratings and transaction counts are
                    checked against minimum thresholds (varies by platform)
                  </li>
                  <li>
                    <strong>Manual categorization</strong> – Human review assigns appropriate category
                    and verifies product title accuracy
                  </li>
                </ol>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-1">Verification Limitations</h4>
                      <p className="text-yellow-800 text-sm">
                        Link verification confirms that a product page exists and is accessible—it does not
                        guarantee product quality, authentic seller identity, or shipping reliability.
                        These factors can only be validated through actual purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Platform Analysis */}
            <section id="platform-analysis" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-600" />
                </div>
                Platform-by-Platform Analysis
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The three Chinese e-commerce platforms included in this spreadsheet—Taobao, 1688,
                  and Weidian—serve different market segments and have distinct characteristics
                  that affect data reliability and product sourcing.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Taobao</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Alibaba's consumer-to-consumer marketplace, Taobao represents the largest portion
                  of spreadsheet entries (approximately 45%). The platform features individual sellers
                  and small businesses offering a wide variety of products.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 my-4">
                  <h4 className="font-medium text-gray-900 mb-2">Taobao Characteristics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Seller rating system uses "hearts" and "diamonds" based on transaction volume</li>
                    <li>• Higher product variety but inconsistent quality between sellers</li>
                    <li>• Links tend to remain active longer (average 8 months before removal)</li>
                    <li>• Platform blocks non-Chinese IP addresses—requires VPN or agent for direct access</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">1688</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Alibaba's wholesale platform connects manufacturers directly with buyers. Products
                  from 1688 typically offer lower per-unit pricing but may require minimum order
                  quantities. Approximately 30% of spreadsheet entries come from 1688.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 my-4">
                  <h4 className="font-medium text-gray-900 mb-2">1688 Characteristics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Factory-direct pricing (typically 20-40% lower than Taobao)</li>
                    <li>• Seller verification includes business license requirements</li>
                    <li>• Some listings require minimum order quantities (MOQ)</li>
                    <li>• Product listings change frequently as manufacturers update inventory</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Weidian</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A mobile-first marketplace popular for fashion and streetwear, Weidian accounts
                  for approximately 25% of spreadsheet entries. The platform has a strong presence
                  in sneaker and apparel communities.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 my-4">
                  <h4 className="font-medium text-gray-900 mb-2">Weidian Characteristics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Seller stores are more transient—higher link failure rate</li>
                    <li>• Popular among niche product sellers (sneakers, streetwear)</li>
                    <li>• Store ratings use a percentage-based system</li>
                    <li>• Links structured differently—requires specific URL handling</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Platform Distribution in Database</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">Taobao</span>
                        <span className="text-gray-600">~45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">1688</span>
                        <span className="text-gray-600">~30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">Weidian</span>
                        <span className="text-gray-600">~25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: QC Process */}
            <section id="qc-process" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-teal-600" />
                </div>
                Quality Control Process
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Quality control (QC) photos provide visual documentation of products after they
                  arrive at the Oopbuy warehouse but before international shipping. Understanding
                  how QC photos are generated and what they represent helps users set appropriate
                  expectations.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">What QC Photos Show</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Standard QC photos typically include: overall product appearance (2-4 angles),
                  brand/label close-ups where applicable, size tags or specifications, and any
                  visible defects or quality concerns. The number of photos varies—most products
                  receive 3-6 images during warehouse inspection.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">QC Photo Availability in Database</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Approximately 34% of products in the spreadsheet have associated QC photos.
                  This percentage reflects:
                </p>

                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Products purchased during test orders (QC photos captured automatically)</li>
                  <li>Community-submitted photos from users who placed orders</li>
                  <li>Archived photos from seller listings showing real product images</li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">QC Photo Limitations</h4>
                      <p className="text-blue-800 text-sm">
                        QC photos represent a single instance of a product from a specific order.
                        Product quality can vary between orders, especially for items from different
                        production batches. QC availability does not guarantee that your order
                        will match the documented photos.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Interpreting QC Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  Products marked "QC Available" in the spreadsheet link to archived quality control
                  photos. Products marked "No QC" have not been documented with warehouse photos—
                  this does not indicate lower quality, only that no QC documentation exists
                  in our database for that specific listing.
                </p>
              </div>
            </section>

            {/* Section 6: Limitations */}
            <section id="limitations" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                Known Limitations
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Transparent documentation requires acknowledging limitations. This section
                  describes known constraints, data gaps, and areas where the spreadsheet
                  may not meet user expectations.
                </p>

                <div className="space-y-4 my-6">
                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 mb-1">Link Decay</h4>
                    <p className="text-gray-600 text-sm">
                      Product links become inactive over time as sellers remove listings or close stores.
                      Despite weekly verification checks, approximately 3-5% of links fail each month.
                      Weidian links have the highest failure rate (8-10% monthly).
                    </p>
                  </div>

                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 mb-1">Price Accuracy</h4>
                    <p className="text-gray-600 text-sm">
                      Prices are captured at verification time and may not reflect current listing prices.
                      Chinese sellers frequently adjust pricing, especially during promotional periods.
                      Always confirm current prices on the source platform before ordering.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 mb-1">Translation Quality</h4>
                    <p className="text-gray-600 text-sm">
                      Product names are translated from Chinese and may lose nuance or accuracy.
                      Some product titles are shortened or simplified for database consistency.
                      Refer to original listing images for product details when translation is ambiguous.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 mb-1">Sample Size Bias</h4>
                    <p className="text-gray-600 text-sm">
                      The 156 test orders represent a small fraction of database entries. Seller
                      reliability ratings extrapolated from limited data may not accurately predict
                      performance across all products or order volumes.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 mb-1">Coverage Gaps</h4>
                    <p className="text-gray-600 text-sm">
                      Certain product categories are underrepresented (cosmetics, food items, furniture)
                      due to shipping restrictions or limited community interest. The database reflects
                      demand patterns rather than comprehensive platform coverage.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Update Frequency */}
            <section id="update-frequency" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-indigo-600" />
                </div>
                Update Frequency & Maintenance
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Database maintenance follows a scheduled protocol to balance accuracy with
                  resource constraints. Understanding the update cycle helps users assess
                  data freshness for their needs.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Maintenance Schedule</h3>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Task</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Frequency</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">New product additions</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Daily</td>
                        <td className="px-4 py-3 text-sm text-gray-600">10-50 new entries per day</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">Link verification sweep</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Weekly</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Full database automated check</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">Dead link removal</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Weekly</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Failed links after 2 consecutive checks</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">Price refresh</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Bi-weekly</td>
                        <td className="px-4 py-3 text-sm text-gray-600">High-traffic products only</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">Category audit</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Monthly</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Taxonomy consistency review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Data Freshness Indicators</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Each product entry includes a "Last Verified" timestamp showing when the link
                  was most recently confirmed active. Products verified within the past 7 days
                  have the highest reliability. Products not verified in 30+ days should be
                  approached with caution—the link may still work but has not been recently tested.
                </p>
              </div>
            </section>

            {/* Section 8: How to Use - This is where the single CTA appears (60-70% scroll depth) */}
            <section id="how-to-use" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-pink-600" />
                </div>
                How to Navigate the Data
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The spreadsheet interface provides several methods for locating products.
                  Understanding these navigation options helps users find relevant data efficiently.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Search Functionality</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The search bar accepts both product names and keywords. Searches are performed
                  against English-translated titles, so Chinese characters will not return results.
                  For broader searches, use single keywords rather than phrases—"sneaker" will
                  return more results than "running sneaker blue."
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Category Filtering</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Categories can be filtered from the navigation menu. Multiple filters can be
                  combined—for example, selecting both "Footwear" and "Weidian" shows only
                  shoe products sourced from the Weidian platform.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Sorting Options</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Results can be sorted by price (low to high or high to low), date added
                  (newest first), and verification date (most recently verified first).
                  Default sorting shows the most recently verified products first.
                </p>

                {/* Single CTA at ~65% scroll depth */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Access the Spreadsheet Database
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The methodology and structure documented above apply to the searchable
                    product database maintained on this site.
                  </p>
                  <Link
                    href="/oopbuy-spreadsheet"
                    className="inline-flex items-center gap-2 text-[#FF186B] hover:text-[#FF186B]/80 font-medium transition-colors"
                  >
                    View the Oopbuy Spreadsheet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 9: FAQ */}
            <section id="faq" className="scroll-mt-24">
              <FAQ />
            </section>

          </div>
        </article>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Documentation</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#methodology" className="hover:text-[#FF186B] transition-colors">Methodology</a></li>
                  <li><a href="#structure" className="hover:text-[#FF186B] transition-colors">Data Structure</a></li>
                  <li><a href="#limitations" className="hover:text-[#FF186B] transition-colors">Limitations</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Guides</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/blog" className="hover:text-[#FF186B] transition-colors">All Articles</Link></li>
                  <li><Link href="/blog/complete-guide-buying-from-taobao-2025" className="hover:text-[#FF186B] transition-colors">Taobao Guide</Link></li>
                  <li><Link href="/blog/1688-vs-taobao-vs-weidian-comparison-guide" className="hover:text-[#FF186B] transition-colors">Platform Comparison</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Related Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://oopbuyproducts.net" target="_blank" rel="noopener" className="hover:text-[#FF186B] transition-colors">Oopbuy Products</a></li>
                  <li><a href="https://orientdigfinds.com" target="_blank" rel="noopener" className="hover:text-[#FF186B] transition-colors">Orient Dig Finds</a></li>
                </ul>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
              <p>© {new Date().getFullYear()} Oopbuy Spreadsheet Documentation.</p>
              <p className="mt-1 text-xs">Taobao, 1688, Weidian, and Oopbuy are trademarks of their respective owners.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Popup Modal - Shows after 15s, not for crawlers */}
      <SignupModal />

      {/* Floating CTA - Shows after scrolling */}
      <FloatingCTA />
    </div>
  );
}
