'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search, Filter, X } from 'lucide-react';

const categories = ['all', 'Sneakers', 'Clothing', 'Bags', 'Watches', 'Accessories', 'Electronics', 'Other'];

export default function SpreadsheetFilters({ initialSearch, initialCategory, initialCurrency }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParams = (updates) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== '') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    if (updates.search !== undefined || updates.category !== undefined) {
      params.delete('page');
    }
    router.push(`/oopbuy-spreadsheet?${params.toString()}`);
  };

  const clearAll = () => {
    router.push('/oopbuy-spreadsheet');
  };

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              defaultValue={initialSearch}
              onKeyDown={(e) => e.key === 'Enter' && updateParams({ search: e.target.value })}
              onBlur={(e) => e.target.value !== initialSearch && updateParams({ search: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF186B] focus:border-transparent outline-none"
            />
          </div>

          {/* Category */}
          <div className="relative sm:w-48">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <select
              defaultValue={initialCategory}
              onChange={(e) => updateParams({ category: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF186B] focus:border-transparent outline-none appearance-none bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Currency */}
          <select
            defaultValue={initialCurrency}
            onChange={(e) => updateParams({ currency: e.target.value })}
            className="sm:w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF186B] focus:border-transparent outline-none appearance-none bg-white"
          >
            <option value="USD">🇺🇸 USD</option>
            <option value="EUR">🇪🇺 EUR</option>
            <option value="GBP">🇬🇧 GBP</option>
            <option value="CAD">🇨🇦 CAD</option>
            <option value="AUD">🇦🇺 AUD</option>
            <option value="CNY">🇨🇳 CNY</option>
          </select>
        </div>

        {/* Active filters */}
        {(initialSearch || initialCategory !== 'all') && (
          <div className="flex flex-wrap gap-2 mt-3">
            {initialSearch && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF186B]/10 text-[#FF186B] rounded-full text-sm">
                "{initialSearch}"
                <button onClick={() => updateParams({ search: '' })} className="hover:bg-[#FF186B]/20 rounded-full p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {initialCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {initialCategory}
                <button onClick={() => updateParams({ category: 'all' })} className="hover:bg-purple-200 rounded-full p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={clearAll}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
