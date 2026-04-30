// /preview/for-journalists — STUB. Per handoff: revise from existing
// sentinel-oc-landing-copy-v2.md. Tier 1 "Spectre", individuals only,
// tighter voice. Structure visible, copy coming.

import Link from "next/link";
import StubBanner from "../_components/StubBanner";

export const metadata = {
  title: "For investigative journalists — Sentinel OC (stub)",
};

export default function ForJournalists() {
  return (
    <>
      <StubBanner
        pageName="/for-journalists"
        source="Source: revise sentinel-oc-landing-copy-v2.md"
      />

      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-6 font-bold">
            FOR INVESTIGATIVE JOURNALISTS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Long cases. Source protection.{" "}
            <span className="text-sky-400">Story-ready exports</span>.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed font-sans max-w-3xl mb-10">
            [XXX — COPY COMING — XXX] Lift-and-revise from existing v2
            landing copy. Required changes:
          </p>
          <ul className="text-sm text-slate-400 font-sans space-y-2 max-w-2xl list-disc pl-6 mb-10">
            <li>Strip all Team / Newsroom tier references (individuals only)</li>
            <li>Replace &ldquo;Investigator&rdquo; with Tier 1 &ldquo;Spectre&rdquo; in pricing</li>
            <li>Tighten voice register (direct, not long-form)</li>
            <li>Keep journalist-specific vocabulary and examples</li>
            <li>End with door back to /for-analysts and home</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://db.sentineloc.io/signup?plan=spectre"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors"
            >
              START A 14-DAY TRIAL
            </a>
            <Link
              href="/preview/features/"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              SEE HOW IT WORKS
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-3 font-bold">
            PLACEHOLDER STRUCTURE
          </div>
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
            Sections expected on this page
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 font-sans">
            <li className="border border-white/[0.08] rounded p-4 bg-white/[0.02]">
              Workflow — case-led, not feed-led
            </li>
            <li className="border border-white/[0.08] rounded p-4 bg-white/[0.02]">
              Source protection — Vault tiers per case
            </li>
            <li className="border border-white/[0.08] rounded p-4 bg-white/[0.02]">
              Defensible exports — PDF / DOCX, citations included
            </li>
            <li className="border border-white/[0.08] rounded p-4 bg-white/[0.02]">
              What Sentinel isn&apos;t for journalists
            </li>
            <li className="border border-white/[0.08] rounded p-4 bg-white/[0.02]">
              Pricing — Tier 1 &ldquo;Spectre&rdquo; only
            </li>
            <li className="border border-white/[0.08] rounded p-4 bg-white/[0.02]">
              CTA + door to /for-analysts and home
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-slate-300 font-sans mb-6">Working a different angle?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/preview/for-analysts/"
              className="px-6 py-3 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              FOR OSINT ANALYSTS AND RESEARCHERS →
            </Link>
            <Link
              href="/preview/"
              className="px-6 py-3 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
