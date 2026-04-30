// /preview/features — STUB. Per handoff: audience-neutral inventory,
// organized by tab/area of the product. Required sections: Operations,
// Research, Cases, Exports, Sources/Feeds, Vault, Security, COMMS.
// Constraint: must reflect what actually ships at launch. Phase 2-4
// features can be referenced but must be clearly labeled as roadmap.

import Link from "next/link";
import StubBanner from "../_components/StubBanner";

export const metadata = {
  title: "Features — Sentinel OC (stub)",
};

const SECTIONS = [
  {
    label: "OPERATIONS",
    title: "Operations tab",
    body: "[XXX — COPY COMING — XXX] Crime tracking by city, threat assessment for the US, Canada, Mexico, day-to-day situational awareness.",
  },
  {
    label: "RESEARCH",
    title: "Research tab — link analysis",
    body: "[XXX — COPY COMING — XXX] Force-directed entity graph, transforms, entity merge across sources, confidence scoring, conflict surfacing.",
  },
  {
    label: "CASES",
    title: "Investigations as durable records",
    body: "[XXX — COPY COMING — XXX] Saved cases, notes, bookmarks, saved queries, activity log per investigation.",
  },
  {
    label: "EXPORTS",
    title: "Defensible deliverables",
    body: "[XXX — COPY COMING — XXX] PDF, DOCX, Excel, JSON. Story-ready format, auto-generated bibliography, timeline, evidence appendix. STIX 2.1 in Phase 3.",
  },
  {
    label: "SOURCES",
    title: "Integrated feeds and transforms",
    body: "[XXX — COPY COMING — XXX] 25 integrated sources at launch, including OFAC, OpenSanctions, SEC EDGAR, urlscan, AbuseIPDB, GDELT, Wikidata, FEC.",
  },
  {
    label: "VAULT",
    title: "Tiered encryption per case",
    body: "[XXX — COPY COMING — XXX] Vault Lite (today), Standard (Q4 2026), Pro (Q1 2027). Pick per investigation. Honest about what each protects against.",
  },
  {
    label: "SECURITY",
    title: "Hardening posture",
    body: "[XXX — COPY COMING — XXX] Decoy entry points, hidden auth paths, mutual TLS, honeytoken intrusion detection, no source maps. Detail on /security.",
  },
  {
    label: "COMMS",
    title: "Roadmap — post-launch",
    body: "[XXX — COPY COMING — XXX] Communications layer for source contact, deferred to a later phase. Listed here for completeness; not at launch.",
    roadmap: true,
  },
];

export default function Features() {
  return (
    <>
      <StubBanner
        pageName="/features"
        source="Source: audience-neutral inventory, by tab/area"
      />

      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            FEATURES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What ships at launch.
          </h1>
          <p className="text-slate-300 max-w-2xl font-sans leading-relaxed">
            Audience-neutral. Organized by tab. Phase 2-4 features are
            referenced where relevant, clearly labeled as roadmap.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECTIONS.map((s) => (
              <div
                key={s.label}
                className={
                  "card-accent border rounded p-6 " +
                  (s.roadmap
                    ? "border-amber-500/20 bg-amber-500/[0.03]"
                    : "border-white/[0.08] bg-white/[0.02]")
                }
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs tracking-[0.3em] text-sky-400 font-bold">
                    {s.label}
                  </div>
                  {s.roadmap && (
                    <span className="px-2 py-1 text-[9px] tracking-widest font-bold rounded bg-amber-400/10 border border-amber-400/30 text-amber-300">
                      ROADMAP
                    </span>
                  )}
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  {s.title}
                </div>
                <div className="text-sm text-slate-300 leading-relaxed font-sans">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <Link
            href="/preview/"
            className="px-6 py-3 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </section>
    </>
  );
}
