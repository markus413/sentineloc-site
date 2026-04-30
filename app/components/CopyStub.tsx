// Visible "[XXX COPY COMING]" marker. Used on the dev/staging build
// for pages where copy is pending per handoff doc Section 6 Phase 3.
// Production build can hide these by checking process.env.NODE_ENV
// before rendering — left visible for now since we're staging at
// /preview/ behind coming-soon at /.

export default function CopyStub({
  title,
  notes,
}: {
  title: string;
  notes: string[];
}) {
  return (
    <section className="border-b border-amber-500/30 bg-amber-500/[0.04]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-xs tracking-[0.4em] text-amber-300 mb-3 font-bold">
          [XXX — COPY COMING — XXX]
        </div>
        <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">
          {title}
        </h2>
        <ul className="space-y-2 text-sm text-amber-100/80 font-sans">
          {notes.map((n) => (
            <li key={n} className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">·</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
