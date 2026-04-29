// /features — placeholder content per user note ("rough draft fine,
// content fleshes out over time"). Structure is real; copy is bones.

export const metadata = {
  title: "Features — Sentinel OC",
};

const FEATURES = [
  {
    label: "INVESTIGATIONS",
    title: "Durable, encrypted, citable",
    body:
      "Each case is a record, not a tab. Notes, entities, edges, transform results — all encrypted at rest, all exportable to a story-ready PDF.",
  },
  {
    label: "TRANSFORMS",
    title: "Four launch sources, more on the way",
    body:
      "OFAC sanctions, GDELT global event monitoring, urlscan domain investigations, FEC campaign finance. Each transform's output gets cited automatically into your investigation.",
  },
  {
    label: "LINK ANALYSIS",
    title: "Entity graphs that actually load",
    body:
      "Cytoscape-driven graph rendering. Up to 10,000 nodes per investigation. Pan, zoom, filter by entity type. Click a node to see source citations.",
  },
  {
    label: "PDF EXPORT",
    title: "Pass-the-editor-test format",
    body:
      "One click. Sources at the bottom, entities tabulated, dates inline. Format your fact-checker reads. Format that survives the email-to-editor round-trip.",
  },
  {
    label: "VAULT",
    title: "Tiered encryption, your call per case",
    body:
      "Vault Lite ships free with every plan. Vault Standard (Q4 2026) makes us unable to decrypt your contents. Vault Pro (Q1 2027) adds hardware-key auth and team threshold sharing.",
  },
  {
    label: "ROADMAP",
    title: "Vault Desktop · Year 2",
    body:
      "Your existing archive — FOIA returns, scraped datasets, leaks, court records — indexed locally on your machine, queryable from Sentinel without ever leaving the device. The 50 GB problem solved on the right side of your firewall.",
  },
];

export default function Features() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            FEATURES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What&apos;s in the box.
          </h1>
          <p className="text-slate-400 max-w-2xl font-sans">
            Speed and integration over breadth. 25 well-integrated
            sources beat 180 noisy ones. Every feature on this page
            answers a specific journalist pain — none of it exists
            because it&apos;s &ldquo;cool.&rdquo;
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="border border-white/[0.06] rounded p-6 bg-white/[0.015]"
              >
                <div className="text-xs tracking-[0.3em] text-sky-400/70 font-bold mb-3">
                  {f.label}
                </div>
                <div className="text-lg font-bold text-white mb-3">
                  {f.title}
                </div>
                <div className="text-sm text-slate-400 leading-relaxed font-sans">
                  {f.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
