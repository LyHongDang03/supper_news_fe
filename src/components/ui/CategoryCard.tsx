import Link from "next/link";

interface CategoryCardProps {
  title: string;
  href: string;
  description?: string;
}

export default function CategoryCard({ title, href, description }: CategoryCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="p-8 bg-white border-2 border-slate-900 hover:bg-slate-900 transition-colors duration-300 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 group-hover:text-white uppercase tracking-tighter">
            {title}
          </h2>
          {description && (
            <p className="text-sm font-medium text-slate-500 group-hover:text-slate-400 mt-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="mt-8 flex items-center justify-end">
          <span className="text-slate-900 font-black group-hover:text-blue-400 group-hover:translate-x-2 transition-all block">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
