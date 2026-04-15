import { ReactNode } from "react";

interface FilterPillProps {
  label: string;
  isActive?: boolean;
  icon?: ReactNode;
}

export default function FilterPill({ label, isActive = false, icon }: FilterPillProps) {
  return (
    <button
      className={`
        inline-flex h-12 items-center justify-center gap-2.5 rounded-lg border px-5 text-base font-medium whitespace-nowrap transition-all
        ${isActive
          ? "border-[#0b5cd5] bg-[#0b5cd5] text-white"
          : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
        }
      `}
    >
      {icon ? (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center [&_svg]:h-6 [&_svg]:w-6">
          {icon}
        </span>
      ) : null}
      <span className="leading-none">{label}</span>
    </button>
  );
}
