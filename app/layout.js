import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://spreadsheetsoopbuy.net'),
  title: "Oopbuy Spreadsheet – Structure, Methodology & Data Documentation",
  description: "Comprehensive documentation of Oopbuy spreadsheet structure, data verification methodology, and product database architecture. Based on 18 months of testing across Taobao, 1688, and Weidian platforms.",
  keywords: "oopbuy spreadsheet documentation, oopbuy data structure, taobao product database, 1688 data methodology, weidian product verification",
  authors: [{ name: "Oopbuy Spreadsheet Documentation", url: "https://spreadsheetsoopbuy.net" }],
  creator: "Oopbuy Spreadsheet Documentation",
  publisher: "Oopbuy Spreadsheet Documentation",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "Oopbuy Spreadsheet – Structure, Methodology & Data Documentation",
    description: "Comprehensive documentation of Oopbuy spreadsheet structure and data verification processes. 18 months of testing, 2,847 products reviewed.",
    url: "https://spreadsheetsoopbuy.net",
    siteName: "Oopbuy Spreadsheet Documentation",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oopbuy Spreadsheet Documentation – Data Structure & Methodology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oopbuy Spreadsheet – Structure & Methodology Guide",
    description: "Documentation of Oopbuy spreadsheet data structure, verification methodology, and platform analysis.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://spreadsheetsoopbuy.net",
    languages: {
      'en-US': 'https://spreadsheetsoopbuy.net',
    },
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.DEBUG_MODE = ${process.env.DEBUG_MODE === 'true'};`
          }}
        />
        {/* Article Schema - Primary for informational content */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Oopbuy Spreadsheet – Tested Structure, Product Data & How It Works",
              "description": "Comprehensive documentation of Oopbuy spreadsheet structure, data verification methodology, and product database architecture based on 18 months of testing.",
              "author": {
                "@type": "Organization",
                "name": "Oopbuy Spreadsheet Documentation"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Oopbuy Spreadsheet Documentation",
                "url": "https://spreadsheetsoopbuy.net"
              },
              "datePublished": "2024-01-15",
              "dateModified": "2024-12-30",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://spreadsheetsoopbuy.net"
              },
              "about": [
                "Oopbuy spreadsheet structure",
                "Data verification methodology",
                "Taobao product database",
                "1688 wholesale data",
                "Weidian marketplace analysis"
              ],
              "articleSection": "Documentation",
              "wordCount": 4500,
              "inLanguage": "en-US"
            })
          }}
        />
        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Oopbuy Spreadsheet Documentation",
              "description": "Documentation and methodology guide for Oopbuy spreadsheet data structure, verification processes, and platform analysis.",
              "url": "https://spreadsheetsoopbuy.net",
              "inLanguage": "en-US",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Oopbuy Spreadsheet Documentation",
                "url": "https://spreadsheetsoopbuy.net"
              },
              "about": {
                "@type": "Thing",
                "name": "Oopbuy Spreadsheet",
                "description": "A curated database of products from Taobao, 1688, and Weidian platforms"
              },
              "specialty": "E-commerce data documentation",
              "lastReviewed": "2024-12-30"
            })
          }}
        />
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Oopbuy Spreadsheet Documentation",
              "alternateName": ["Oopbuy Spreadsheet", "Oopbuy Data Guide"],
              "description": "Documentation and methodology for Oopbuy spreadsheet data structure and verification processes.",
              "url": "https://spreadsheetsoopbuy.net",
              "inLanguage": "en-US",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://spreadsheetsoopbuy.net/oopbuy-spreadsheet?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Oopbuy Spreadsheet Documentation",
              "url": "https://spreadsheetsoopbuy.net",
              "logo": {
                "@type": "ImageObject",
                "url": "https://spreadsheetsoopbuy.net/logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Documentation resource for Oopbuy spreadsheet data structure and methodology.",
              "foundingDate": "2024",
              "knowsAbout": [
                "Taobao marketplace",
                "1688 wholesale platform",
                "Weidian marketplace",
                "Chinese e-commerce data",
                "Product verification methodology"
              ]
            })
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Oopbuy Spreadsheet Documentation",
                "item": "https://spreadsheetsoopbuy.net"
              }]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <aside aria-label="Sister projects" className="mt-8 py-6 px-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <div className="uppercase text-[11px] tracking-wider font-semibold text-gray-600 mb-2">You may also like</div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="https://lit-buy-spreadsheet.com" rel="noopener" className="hover:text-gray-900 transition-colors">LitBuy catalog</a>
            <a href="https://kakobuy-spreadsheet.com" rel="noopener" className="hover:text-gray-900 transition-colors">KakoBuy hauls</a>
            <a href="https://oopbuysheet.com" rel="noopener" className="hover:text-gray-900 transition-colors">OOPBuy main spreadsheet</a>
          </nav>
        </aside>
      </body>
    </html>
  );
}
