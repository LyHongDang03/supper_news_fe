import { MoreVertical, Image as ImageIcon } from "lucide-react";

interface NewsCardSquareProps {
  title: string;
  imageUrl: string;
}

export default function NewsCardSquare({ title, imageUrl }: NewsCardSquareProps) {
  return (
    <div className="group cursor-pointer flex flex-col w-full">
      <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-3 bg-slate-200 flex items-center justify-center">
        <ImageIcon className="w-8 h-8 text-slate-400 opacity-20" />
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <button className="text-slate-400 hover:text-slate-700 p-0.5 rounded flex-shrink-0">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
