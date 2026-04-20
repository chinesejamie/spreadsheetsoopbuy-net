'use client';

import { Search, Image, ExternalLink, ShoppingCart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      step: "1",
      title: "Browse categories or filter products",
      description: "Use the search bar to find specific items or filter by category. The Oopbuy sheet includes sneakers, clothing, bags, electronics, and more from Taobao, 1688, and Weidian.",
    },
    {
      icon: Image,
      step: "2",
      title: "Review QC photos and product info",
      description: "Click on any product to see details including price, store name, and QC photos when available. These photos show actual products received by previous buyers.",
    },
    {
      icon: ExternalLink,
      step: "3",
      title: "Open the Oopbuy link",
      description: "Click the purchase button to open the product directly on Oopbuy. The link takes you to the correct listing with all product details pre-loaded.",
    },
    {
      icon: ShoppingCart,
      step: "4",
      title: "Purchase safely and efficiently",
      description: "Complete your purchase through Oopbuy. They handle communication with the seller, quality inspection, and international shipping to your address.",
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          How to Use the Oopbuy Spreadsheet
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF186B] flex items-center justify-center text-white font-bold">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-gray-50 rounded-xl">
          <p className="text-gray-600 text-sm">
            <strong>Note:</strong> Oopbuy is a shopping agent that purchases products on your behalf from Chinese sellers.
            They provide warehouse storage, quality inspection photos, and consolidated shipping to over 200 countries.
            You pay Oopbuy directly, and they handle all communication with sellers in Chinese.
          </p>
        </div>
      </div>
    </section>
  );
}
