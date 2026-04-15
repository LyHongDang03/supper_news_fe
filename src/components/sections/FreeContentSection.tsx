'use client';

import ScrollableNewsSection from "./ScrollableNewsSection";

interface FreeContentItem {
  title: string;
  imageUrl: string;
}

interface FreeContentSectionProps {
  items: FreeContentItem[];
}

export default function FreeContentSection({ items }: FreeContentSectionProps) {
  return (
    <ScrollableNewsSection
      title="NỘI DUNG MIỄN PHÍ"
      href="/freecontent"
      items={items}
      className="mt-16 pt-12 border-t border-slate-100"
    />
  );
}
