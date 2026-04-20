'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Database, X } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    if (sessionStorage.getItem('floatingCTADismissed') === 'true') {
      setIsDismissed(true);
      return;
    }

    // Show after user scrolls past hero section (300px)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem('floatingCTADismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
      <Link
        href="/oopbuy-spreadsheet"
        className="group flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <div className="w-8 h-8 bg-[#FF186B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <Database className="w-4 h-4" />
        </div>
        <span className="font-semibold text-sm hidden sm:inline">View Spreadsheet</span>
        <span className="font-semibold text-sm sm:hidden">Spreadsheet</span>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="ml-1 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </Link>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
