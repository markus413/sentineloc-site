// /for-journalists — STUB. Per handoff doc: revise from existing
// sentinel-oc-landing-copy-v2.md. Marked [XXX COPY COMING].

import Link from "next/link";
import Stub from "../../components/CopyStub";

export const metadata = {
  title: "For investigative journalists — Sentinel OC",
  description:
    "OSINT investigation workspace built around the work of " +
    "investigative journalism. Copy in revision.",
};

export default function ForJournalists() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-5 font-bold">
            FOR INVESTIGATIVE JOURNALISTS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Built for the way{" "}
            <span className="text-sky-400">investigations actually run.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
            Long cases. Source protection. Story-ready exports. Audit
            trails that stand up.
          </p>
        </div>
      </section>

      <Stub
        title="Page copy in revision"
        notes={[
          "Revise from sentinel-oc-landing-copy-v2.md to fit new architecture.",
          "Strip Team / Newsroom tier references — individuals only at launch.",
          "Replace 'Investigator' with Tier 1 'Spectre' in pricing references.",
          "Tighten voice register: direct, not long-form.",
          "End with door back to /for-analysts/ and home.",
        ]}
      />

      <section className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-sm text-slate-300 font-sans mb-6">
            Working a different angle?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/for-analysts/"
              className="px-6 py-3 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              → FOR OSINT ANALYSTS AND RESEARCHERS
            </Link>
            <Link
              href="/preview/"
              className="px-6 py-3 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
