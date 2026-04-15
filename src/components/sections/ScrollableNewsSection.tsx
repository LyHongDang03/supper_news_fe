'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsCardSquare from "@/components/ui/NewsCardSquare";

interface NewsItem {
  title: string;
  imageUrl: string;
}

interface ScrollableNewsSectionProps {
  title: string;
  href: string;
  items: NewsItem[];
  className?: string;
}

export default function ScrollableNewsSection({ title, href, items, className = "" }: ScrollableNewsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={`mb-12 ${className}`}>
      {/* Header with arrows - only render if title is provided */}
      <div className="flex items-center justify-between mb-6 w-full">
        <div className="flex items-center gap-3 group cursor-pointer">
          {title ? (
            <Link href={href} className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-red-600 transition-transform group-hover:scale-y-110"></div>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-slate-800 group-hover:text-red-600 transition-colors">
                {title}
              </h2>
            </Link>
          ) : (
            <div className="h-6"></div> // Spacer or empty
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <button
              onClick={() => scroll('left')}
              className="text-slate-400 hover:text-slate-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={3} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="text-slate-400 hover:text-slate-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={3} />
            </button>
          </div>
          {title && (
            <Link
              href={href}
              className="px-3 py-1 border border-slate-300 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1 rounded-sm hidden sm:flex"
            >
              Xem tất cả <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {items.map((item, i) => (
          <div key={i} className="w-[160px] md:w-[200px] lg:w-[220px] flex-shrink-0">
            <NewsCardSquare title={item.title} imageUrl={item.imageUrl} />
          </div>
        ))}
      </div>
    </section>
  );
}
