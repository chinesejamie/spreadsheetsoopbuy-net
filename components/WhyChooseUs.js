'use client';

export default function WhyChooseUs() {
  const userTypes = [
    {
      title: "Beginners",
      description: "If you have never used a Chinese shopping agent before, this Oopbuy sheet removes the learning curve. Products are pre-selected, links are verified, and prices are displayed in your currency. No need to navigate Chinese websites or use translation tools."
    },
    {
      title: "Experienced buyers",
      description: "For those who already use Oopbuy or similar agents, this spreadsheet saves research time. Instead of browsing Taobao or Weidian manually, you can search a curated database with working links and QC photos from previous orders."
    },
    {
      title: "Sneaker buyers",
      description: "The spreadsheet includes a dedicated category for sneakers from popular sellers on Weidian and Taobao. Each listing shows available sizes, seller reputation, and photos of actual pairs shipped to buyers."
    },
    {
      title: "Streetwear shoppers",
      description: "Clothing, hoodies, jackets, and accessories from Chinese manufacturers are organized by category. The Oopbuy sheet makes it easy to find items from the same sellers featured in communities like FashionReps and RepBudgetSneakers."
    },
    {
      title: "International users",
      description: "Oopbuy ships to over 200 countries with multiple shipping options. This spreadsheet displays prices in USD, EUR, GBP, and other currencies so you can compare costs before purchasing."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Who This Oopbuy Sheet Is For
        </h2>

        <div className="space-y-6">
          {userTypes.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {user.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {user.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
