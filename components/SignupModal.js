'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Database, CheckCircle, Search, Clock, ArrowRight, Sparkles } from 'lucide-react';

// Bot/crawler detection - prevents modal from showing to search engine crawlers
const isBot = () => {
  if (typeof window === 'undefined') return true;

  const botPatterns = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
    'yandexbot', 'sogou', 'exabot', 'facebot', 'ia_archiver',
    'crawler', 'spider', 'robot', 'crawling', 'bot/', 'bot;',
    'headless', 'phantom', 'selenium', 'puppeteer', 'playwright',
    'lighthouse', 'pagespeed', 'gtmetrix', 'pingdom'
  ];

  const userAgent = navigator.userAgent.toLowerCase();
  return botPatterns.some(pattern => userAgent.includes(pattern));
};

// Check if user has interacted with the site before
const isReturningUser = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('hasVisitedBefore') === 'true';
};

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Don't show to bots/crawlers
    if (isBot()) return;

    // Check if modal was dismissed recently (within last 3 days)
    const lastDismissed = localStorage.getItem('modalDismissedAt');
    const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;

    if (lastDismissed && Date.now() - parseInt(lastDismissed) < threeDaysInMs) {
      return;
    }

    // Check if user already signed up (clicked the signup link)
    if (localStorage.getItem('hasSignedUp') === 'true') {
      return;
    }

    let timeoutId;
    let hasShown = false;

    const showModal = () => {
      if (!hasShown && !isBot()) {
        hasShown = true;
        setIsOpen(true);
        // Mark that user has visited
        localStorage.setItem('hasVisitedBefore', 'true');
      }
    };

    // Show after 15 seconds for all users
    timeoutId = setTimeout(showModal, 15000);

    // Also show on scroll engagement (40% for returning users, 25% for new)
    const scrollThreshold = isReturningUser() ? 40 : 25;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > scrollThreshold) {
        showModal();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('modalDismissedAt', Date.now().toString());
  };

  const handleSignupClick = () => {
    localStorage.setItem('hasSignedUp', 'true');
    setIsOpen(false);
  };

  const handleSpreadsheetClick = () => {
    setHasInteracted(true);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
        onClick={handleClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
        style={{ animation: 'slideUp 0.4s ease-out' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-[#FF186B] to-purple-600 px-6 py-8 text-center relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Database className="w-8 h-8 text-[#FF186B]" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              Unlock the Full Database
            </h2>
            <p className="text-white/90 text-sm">
              Access 10,000+ verified products from Taobao, 1688 & Weidian
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Benefits list */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-sm">
                  <strong>Verified links</strong> – checked weekly for accuracy
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Search className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 text-sm">
                  <strong>QC photos</strong> – see real product images before ordering
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 text-sm">
                  <strong>Updated daily</strong> – new products added continuously
                </span>
              </div>
            </div>

            {/* Primary CTA - Spreadsheet */}
            <Link
              href="/oopbuy-spreadsheet"
              onClick={handleSpreadsheetClick}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-200 mb-3 group"
            >
              Browse the Spreadsheet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA - Signup */}
            <a
              href="https://oopbuy.com/register?inviteCode=DMP60XRTF"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSignupClick}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#FF186B] text-[#FF186B] hover:bg-[#FF186B] hover:text-white rounded-xl font-semibold transition-all duration-200 mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Create Free Oopbuy Account
            </a>

            {/* Trust indicator */}
            <p className="text-center text-xs text-gray-500">
              No registration required to browse • Free to use
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
