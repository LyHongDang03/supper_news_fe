export default function Tag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 border border-slate-300 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors cursor-pointer rounded-sm">
      {label}
    </span>
  );
}
