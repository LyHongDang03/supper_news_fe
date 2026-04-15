import { Loader2 } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="relative mb-6">
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">
        {title}
      </h1>
      <p className="text-slate-500 font-medium max-w-sm">
        Tính năng đang được phát triển. Vui lòng quay lại sau để trải nghiệm những nội dung hấp dẫn nhất.
      </p>
      <div className="mt-8 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-red-600"></div>
        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
      </div>
    </div>
  );
}
