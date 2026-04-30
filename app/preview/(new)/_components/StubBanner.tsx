// Visible marker for pages where copy is still coming. Only shown
// on /preview/ builds — the public coming-soon site at apex never
// renders this.

export default function StubBanner({
  pageName,
  source,
}: {
  pageName: string;
  source?: string;
}) {
  return (
    <div className="border-b border-amber-500/20 bg-amber-500/[0.04]">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3 text-xs">
        <span className="px-2 py-1 rounded bg-amber-400/15 border border-amber-400/30 text-amber-300 tracking-widest font-bold text-[10px]">
          STUB
        </span>
        <span className="text-slate-300 font-sans">
          {pageName} — copy coming. Structure visible for review.
        </span>
        {source && (
          <span className="ml-auto text-slate-500 font-sans hidden sm:inline">
            {source}
          </span>
        )}
      </div>
    </div>
  );
}
