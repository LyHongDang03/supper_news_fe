import { MoreVertical, Image as ImageIcon } from "lucide-react";

interface NewsCardHorizontalProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function NewsCardHorizontal({ title, description, imageUrl }: NewsCardHorizontalProps) {
  return (
    <div className="flex gap-4 group cursor-pointer w-full">
      <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 rounded-sm overflow-hidden bg-slate-200 flex items-center justify-center">
        <ImageIcon className="w-8 h-8 text-slate-400 opacity-20" />
      </div>
      <div className="flex flex-col justify-between py-1 w-full">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-slate-800 text-base md:text-lg leading-snug group-hover:text-blue-700 transition-colors">
            {title}
          </h3>
          <button className="text-slate-400 hover:text-slate-700 flex-shrink-0 pt-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
        <p className="text-slate-500 text-sm mt-2 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
