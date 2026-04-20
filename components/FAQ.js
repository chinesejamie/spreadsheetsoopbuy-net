'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is an Oopbuy spreadsheet?",
      answer: "An Oopbuy spreadsheet is a database of products that can be purchased through the Oopbuy shopping agent. It contains product names, prices, seller links, and often QC (quality control) photos. The spreadsheet format makes it easy to search, filter, and compare products from Chinese platforms like Taobao, 1688, and Weidian without navigating those sites directly."
    },
    {
      question: "Is this Oopbuy sheet updated daily?",
      answer: "Yes. New products are added to this Oopbuy sheet every day, and dead or expired links are removed during regular maintenance. The database is monitored for accuracy to ensure that product links remain active and purchasable."
    },
    {
      question: "Is the Oopbuy sheet free to use?",
      answer: "Yes. This Oopbuy spreadsheet is completely free to browse and use. There is no registration required to search products or view details. You only pay when you decide to purchase a product through Oopbuy."
    },
    {
      question: "Can I use the Oopbuy spreadsheet on mobile?",
      answer: "Yes. This website is fully responsive and works on smartphones and tablets. You can browse the Oopbuy sheet, filter products, and click through to purchase from any device with a web browser."
    },
    {
      question: "How does this compare to other Oopbuy spreadsheets?",
      answer: "This Oopbuy sheet includes over 10,000 products with verified links, daily updates, and QC photos where available. Unlike static spreadsheets shared in forums or Discord servers, this database is actively maintained with working links and accurate pricing in multiple currencies."
    },
    {
      question: "What products are included in the Oopbuy sheet?",
      answer: "The spreadsheet covers multiple categories including sneakers, clothing, bags, accessories, watches, electronics, and home goods. Products are sourced from Taobao, 1688, and Weidian sellers and organized by category for easy browsing."
    },
    {
      question: "Do I need an Oopbuy account to use this spreadsheet?",
      answer: "You do not need an account to browse the spreadsheet. However, you will need a free Oopbuy account to complete purchases. Account registration takes a few minutes and allows you to access shipping options, warehouse storage, and order tracking."
    },
    {
      question: "What are QC photos and why do they matter?",
      answer: "QC (quality control) photos are images taken at the Oopbuy warehouse after a product arrives from the seller. They show the actual item you will receive, not just the seller's marketing photos. QC photos help you verify quality, check for defects, and decide whether to ship or return an item before it leaves China."
    }
  ];

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-4 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
