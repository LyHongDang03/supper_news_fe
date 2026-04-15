import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  showControls?: boolean;
  showArrows?: boolean;
  href?: string;
}

export default function SectionHeader({ title, showControls = true, showArrows = true, href }: SectionHeaderProps) {
  const TitleContent = (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-1.5 h-6 bg-red-600 transition-transform group-hover:scale-y-110"></div>
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-slate-800 group-hover:text-red-600 transition-colors">
        {title}
      </h2>
    </div>
  );

  return (
    <div className="flex items-center justify-between mb-6 mt-12 w-full">
      {href ? (
        <Link href={href}>{TitleContent}</Link>
      ) : (
        TitleContent
      )}
      
      {showControls && (
        <div className="flex items-center gap-4">
          {showArrows && (
            <div className="flex gap-2">
              <button className="text-slate-400 hover:text-slate-700 transition-colors">
                <ChevronLeft className="w-6 h-6" strokeWidth={3} />
              </button>
              <button className="text-slate-400 hover:text-slate-700 transition-colors">
                <ChevronRight className="w-6 h-6" strokeWidth={3} />
              </button>
            </div>
          )}
          {href ? (
            <Link href={href} className="px-3 py-1 border border-slate-300 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1 rounded-sm hidden sm:flex">
                Xem tất cả <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <button className="px-3 py-1 border border-slate-300 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1 rounded-sm hidden sm:flex">
              Xem tất cả <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
