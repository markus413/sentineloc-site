// /preview/for-analysts — locked v1.1 copy from the build handoff.
// Audience door for OSINT analysts and researchers.

import Link from "next/link";

export const metadata = {
  title: "For OSINT analysts and researchers — Sentinel OC",
  description:
    "OSINT research, professionalized. Reports your client will read. Sources that hold up.",
};

export default function ForAnalysts() {
  return (
    <>
      {/* Above the fold */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-6 font-bold">
            FOR OSINT ANALYSTS AND RESEARCHERS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            OSINT research, <span className="text-sky-400">professionalized</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl mb-5">
            You&apos;re not running a feed. You&apos;re running a case for a
            client, a stakeholder, or a team that needs the work to hold up
            under scrutiny.
          </p>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl mb-10">
            Sentinel is the workspace for that work — from initial entity
            research through link analysis, source citation, and the report
            that lands on someone&apos;s desk.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://db.sentineloc.io/signup?plan=spectre"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors shadow-[0_0_40px_-10px_rgba(14,165,233,0.7)]"
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
          <p className="mt-6 text-xs text-slate-500 font-sans">
            No credit card to start. $79/mo when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Who this is for.
          </h2>
          <div className="space-y-10">
            <Audience
              label="OSINT consultants and freelance researchers"
              body="You bill time or deliverables. The cleaner your report and the faster you can produce it, the more you make. Your tools should help, not slow you down."
            />
            <Audience
              label="Corporate security and threat intel teams"
              body="You produce assessments your team or your stakeholders act on. The work needs to be defensible if a decision goes sideways. Source attribution and confidence scoring aren't nice-to-haves — they're the floor."
            />
            <Audience
              label="In-house analysts at firms doing OSINT-adjacent work"
              body="Fraud investigation. Pre-litigation research. Vendor risk assessment. Asset tracing. Anything where you're connecting entities across public records and reporting findings to someone who'll act on them."
            />
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            What the workflow looks like.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WorkflowStep
              n="01"
              title="Start a case."
              body="One investigation. One persistent graph. Notes, bookmarks, saved queries — all in one workspace. No more reconstructing yesterday's progress from scratch."
            />
            <WorkflowStep
              n="02"
              title="Pivot through transforms."
              body="Click an entity. Run a transform — OFAC, OpenSanctions, SEC EDGAR, urlscan, AbuseIPDB, GDELT, Wikidata, FEC. Eight integrated transforms at launch. New entities and edges added to your graph automatically."
            />
            <WorkflowStep
              n="03"
              title="Build the picture."
              body="Force-directed link analysis. Entity merge across sources. Confidence scoring per fact. Conflicting facts surfaced rather than silently reconciled. The graph reflects what you actually know, with sources you can defend."
            />
            <WorkflowStep
              n="04"
              title="Export the deliverable."
              body="Story-ready PDF with graph, entity profiles, source bibliography, timeline, evidence appendix. DOCX for clients who want to edit. Excel for raw data. JSON for technical handoff. STIX 2.1 coming in Phase 3 for security-team workflows."
            />
          </div>
        </div>
      </section>

      {/* What makes Sentinel different */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            What makes Sentinel different for this work.
          </h2>
          <div className="space-y-12">
            <Pillar
              n="1"
              title="Source discipline by default."
              body="Every entity property and every edge has at least one source attached. Confidence scored as high, medium, or low based on source count and authority. When two sources disagree, both are stored — not silently reconciled."
              tag={'Your client asks "where did this come from?" The answer is in the report.'}
            />
            <Pillar
              n="2"
              title="Built so subjects don't see you coming."
              body="Decoy entry points. Hidden authentication paths. Mutual TLS. Honeytoken intrusion detection. No source maps, no search engine indexing of operational surfaces."
              tag="Your subject doesn't see you coming. Your client's adversary doesn't see your work."
            />
            <Pillar
              n="3"
              title="Tiered encryption you choose per case."
              body="Routine work uses Vault Lite — encrypted at rest with separated key management. Sensitive engagements use Vault Standard (Q4 2026) — client-side encryption where we cannot decrypt your case. Critical work uses Vault Pro (Q1 2027) — hardware key required."
              tag="One platform. Three tiers. You pick what fits the engagement."
            />
            <Pillar
              n="4"
              title="Reports your client will actually read."
              body="Story-ready PDF export. Graph included as visualization, not screenshot. Source bibliography auto-generated. Timeline reconstructed from your activity log. Confidence levels visible per fact."
              tag="The export is the deliverable. Not a starting point you reformat for two hours."
            />
          </div>
        </div>
      </section>

      {/* What Sentinel isn't */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            What Sentinel isn&apos;t.
          </h2>
          <div className="space-y-6 font-sans">
            <NotBlock
              label="Not a Maltego replacement."
              body="Maltego Pro has more transforms, deeper graph horsepower, and a transform marketplace. If you need every transform under the sun and you can pay enterprise pricing, Maltego is still the heavyweight."
            />
            <NotBlock
              label="Not a SIEM, not a TIP, not a vulnerability scanner."
              body="If your work is monitoring infrastructure or running automated reconnaissance, you have better tools. Sentinel is for the part of the job where you're building a case, not running a scanner."
            />
            <NotBlock
              label="Not a reporting platform with OSINT bolted on."
              body="You can't import a CSV of entities and have Sentinel write your report. The work happens in the workspace; the report comes out the other side."
            />
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            Pricing
          </h2>
          <div className="border border-sky-400/30 rounded p-8 bg-sky-400/[0.04] mb-8">
            <div className="text-xs tracking-[0.3em] text-sky-400 font-bold mb-2">
              TIER 1 &ldquo;SPECTRE&rdquo;
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-white">$79</span>
              <span className="text-xl text-slate-400">/mo</span>
            </div>
            <p className="text-slate-300 font-sans mb-3">
              All sources. All features. Full export. Vault Lite included.
            </p>
            <p className="text-xs text-slate-500 font-sans mb-6">
              $99/mo month-to-month. $79/mo billed annually. 14-day free
              trial. No credit card to start.
            </p>
            <a
              href="https://db.sentineloc.io/signup?plan=spectre"
              className="inline-block px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors"
            >
              START TRIAL
            </a>
          </div>
          <ul className="text-sm text-slate-400 font-sans space-y-2">
            <li>
              Vault Standard add-on (+$30/mo) available Q4 2026 —{" "}
              <a
                href="https://db.sentineloc.io/signup?plan=spectre&vault=standard"
                className="text-sky-400 hover:underline"
              >
                reserve early access
              </a>
            </li>
            <li>
              Vault Pro add-on (+$80/mo) available Q1 2027 —{" "}
              <a
                href="https://db.sentineloc.io/signup?plan=spectre&vault=pro"
                className="text-sky-400 hover:underline"
              >
                reserve early access
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="cta-band">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to try it?
          </h2>
          <a
            href="https://db.sentineloc.io/signup?plan=spectre"
            className="inline-block px-8 py-4 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors shadow-[0_0_40px_-10px_rgba(14,165,233,0.7)]"
          >
            START YOUR 14-DAY TRIAL
          </a>
          <p className="mt-6 text-sm text-slate-400 font-sans">
            No credit card. No ads. No tracking. Cancel anytime.
          </p>

          <div className="my-12 mx-auto max-w-md scan-divider" />

          <p className="text-slate-300 font-sans mb-6">
            Working a different angle?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/preview/for-journalists/"
              className="px-6 py-3 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              FOR INVESTIGATIVE JOURNALISTS →
            </Link>
            <Link
              href="/preview/"
              className="px-6 py-3 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </div>

          <p className="mt-12 text-xs text-slate-500 font-sans">
            Questions?{" "}
            <a
              href="mailto:mark@sentrionlabs.io"
              className="text-sky-400 hover:underline"
            >
              mark@sentrionlabs.io
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

function Audience({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-3">{label}.</h3>
      <p className="text-slate-300 font-sans leading-relaxed max-w-3xl">{body}</p>
    </div>
  );
}

function WorkflowStep({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="card-accent border border-white/[0.08] rounded p-6 bg-white/[0.02]">
      <div className="text-xs tracking-[0.3em] text-sky-400 font-bold mb-3">
        STEP {n}
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-300 font-sans leading-relaxed">{body}</p>
    </div>
  );
}

function Pillar({
  n,
  title,
  body,
  tag,
}: {
  n: string;
  title: string;
  body: string;
  tag: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6">
      <div>
        <div className="hex-badge w-12 h-12 bg-sky-400/10 border border-sky-400/40 flex items-center justify-center">
          <span className="text-sm font-bold text-sky-400">{n}</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-300 font-sans leading-relaxed mb-3">{body}</p>
        <p className="text-slate-400 font-sans italic">{tag}</p>
      </div>
    </div>
  );
}

function NotBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-slate-700 pl-5">
      <div className="text-base font-bold text-white mb-1">{label}</div>
      <p className="text-slate-300 leading-relaxed">{body}</p>
    </div>
  );
}
