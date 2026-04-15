import { MoreHorizontal, Image as ImageIcon } from "lucide-react";

interface NewsCardFeaturedProps {
  title: string;
  imageUrl: string;
  views: string;
  time: string;
}

export default function NewsCardFeatured({ title, imageUrl, views, time }: NewsCardFeaturedProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[420px] rounded-sm overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-slate-400 flex items-center justify-center">
        <ImageIcon className="w-16 h-16 text-white/20" />
      </div>

      {/* Dark gradient from bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

      <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3 drop-shadow-md">
          {title}
        </h2>

        <div className="flex items-center gap-3 text-sm text-white/80 font-medium">
          <span>{views} đã xem</span>
          <span className="w-1 h-1 rounded-full bg-white/60"></span>
          <span>{time}</span>
          <button className="ml-2 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
