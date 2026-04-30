// /preview/ — Sentinel OC home (locked v3.1).
// Audience-neutral, workflow-led. No founder hint, no journalist framing.
// Copy lifted verbatim from the build handoff doc.

import Link from "next/link";
import Hero from "./_components/Hero";

export const metadata = {
  title: "Sentinel OC — OSINT investigation workspace",
  description:
    "Sentinel is the workspace for investigations. Track entities. Run transforms. Export reports that hold up.",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Section: Doors */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Two ways in.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DoorCard
              href="/preview/for-journalists/"
              label="For investigative journalists"
              body="Long cases. Source protection. Story-ready exports. Audit trails that stand up."
            />
            <DoorCard
              href="/preview/for-analysts/"
              label="For OSINT analysts and researchers"
              body="Client deliverables. Threat research. Due diligence. Reports that bill."
            />
          </div>
        </div>
      </section>

      {/* Section: Setup */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            You don&apos;t need another dashboard. You need a workspace.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-sans mb-5">
            Your investigation already lives in eight tabs, three docs, and a
            Notion you forget to update. Sentinel pulls it into one place.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed font-sans">
            Not a feed. Not a map. A workspace — built around the actual work
            of investigation.
          </p>
        </div>
      </section>

      {/* Section: Contrast Table */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            What Sentinel is. And what it isn&apos;t.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans border border-white/[0.08] rounded">
              <thead>
                <tr className="bg-white/[0.03] text-left">
                  <th className="px-4 py-3 text-xs tracking-widest text-slate-400 font-bold w-1/3"></th>
                  <th className="px-4 py-3 text-xs tracking-widest font-bold text-sky-400">
                    SENTINEL
                  </th>
                  <th className="px-4 py-3 text-xs tracking-widest font-bold text-slate-400">
                    MONITORING DASHBOARDS
                    <div className="text-[10px] text-slate-500 font-normal tracking-wide normal-case mt-0.5">
                      SitDeck, World Monitor
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <Row label="Built for" sentinel="People running cases" other="People watching the world" />
                <Row label="Core unit" sentinel="An investigation" other="A feed" />
                <Row label="Saved investigations with notes" sentinel={<Check />} other={<Dash />} />
                <Row label="Entity link analysis" sentinel="Built-in Research tab" other={<Dash />} />
                <Row label="Source citation per fact" sentinel="Mandatory" other={<Dash />} />
                <Row label="Confidence scoring" sentinel="High / medium / low" other={<Dash />} />
                <Row label="Defensible exports" sentinel="PDF, DOCX, Excel, JSON" other={<Dash />} />
                <Row label="Geographic depth (US, Canada, Mexico)" sentinel="City-level" other="Global generalist" />
                <Row label="Tiered encryption (you pick per case)" sentinel="Three tiers, dated roadmap" other={<Dash />} />
                <Row label="Source-tier separation (verified vs. experimental)" sentinel={<Check />} other={<Dash />} />
                <Row label="Price" sentinel="$79/mo" other="Free" last />
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-slate-300 max-w-3xl font-sans leading-relaxed">
            <span className="text-white font-bold">Honest read:</span> if you
            want a global firehose to scroll through with your morning coffee,
            the free dashboards are great. <em>Use them.</em> Sentinel is for
            when you have a case to run, sources to track, and a report to
            file.
          </p>
        </div>
      </section>

      {/* Section: Four Pillars */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Why people switch.
          </h2>
          <div className="space-y-12">
            <Pillar
              n="1"
              title="Built for cases, not feeds."
              body="Saved investigations. Entity bookmarks. Notes that survive deadlines. Export an Incident Report that stands on its own — graph, sources, timeline, citations included."
              tag="Your work is cases. Your tool should know that."
            />
            <Pillar
              n="2"
              title="North American depth, not global breadth."
              body="Crime tracking by city. Threat assessment for the US, Canada, and Mexico. Sanctions, corporate filings, campaign finance, vulnerability intel."
              tag="Not 180 feeds. The right 25, integrated correctly."
            />
            <Pillar
              n="3"
              title="Built like the targets are watching."
              body="Decoy entry points. Hidden authentication paths. Mutual TLS client certificates. Honeytoken intrusion detection. No source maps. No search engine indexing of operational surfaces."
              tag="Other tools treat your privacy as a setting. Sentinel treats it as the product."
            />
            <Pillar
              n="4"
              title='Vault: the security tier you choose.'
              body="Pick the protection that fits the case. Vault Lite (today) gives every investigation per-user encryption with separated keys. Vault Standard (Q4 2026) adds client-side encryption — your data is unreadable to us. Vault Pro (Q1 2027) adds hardware keys."
              tag="One platform. Three tiers. Honest about what each protects against."
            />
          </div>
        </div>
      </section>

      {/* Section: Vault (dedicated) */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-3 font-bold">
            VAULT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            A note on Vault.
          </h2>
          <p className="text-slate-300 max-w-3xl mb-4 font-sans leading-relaxed">
            Most &ldquo;secure&rdquo; SaaS products have one tier of
            encryption: theirs. They hold your keys. They can read your data.
            Subpoenas get content.
          </p>
          <p className="text-slate-300 max-w-3xl mb-12 font-sans leading-relaxed">
            Vault is different. You pick the protection per investigation,
            based on what&apos;s actually at stake.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VaultCard
              name="Vault Lite"
              status="Included, today"
              accent="emerald"
              bullets={[
                "Per-user encryption keys, vendor-held in a separated KMS",
                "Operational separation between auth and data infrastructure",
                "Standard backups, fast password recovery",
              ]}
              protects="Opportunistic data breach, casual rogue access"
              doesnt="Lawful compulsion of Sentrion Labs"
              best="Routine investigations, background research, day-to-day work"
            />
            <VaultCard
              name="Vault Standard"
              status="Q4 2026"
              accent="amber"
              bullets={[
                "Client-side encryption — content encrypted in your browser before it leaves",
                "24-word recovery phrase (you save it offline)",
                "We literally cannot decrypt your investigation contents",
              ]}
              protects="Vendor breach, vendor subpoena, vendor sale or acquisition"
              doesnt="Compromise of your own device, phishing, coerced disclosure"
              best="Sensitive investigations, source-protection-critical work"
            />
            <VaultCard
              name="Vault Pro"
              status="Q1 2027"
              accent="red"
              bullets={[
                "Everything in Standard, plus hardware key (FIDO2 / YubiKey) required for login",
                "Per-tier warrant canary",
              ]}
              protects="Everything Standard defeats, plus phishing"
              doesnt="Total device compromise, coerced disclosure of all your factors"
              best="Investigations that absolutely cannot afford to leak"
            />
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="text-lg font-bold text-white mb-3">
              What we won&apos;t claim
            </h3>
            <p className="text-slate-300 font-sans leading-relaxed mb-6">
              No system protects against everything. Vault doesn&apos;t make
              your data unreadable to anyone in the universe forever. We tell
              you exactly what each tier protects against and where it stops,
              so you can make a real decision about a real threat model.
            </p>
            <Link
              href="/preview/security/"
              className="inline-block px-6 py-3 text-xs tracking-widest font-bold rounded border border-sky-400/40 text-sky-300 bg-sky-400/5 hover:bg-sky-400/15 transition-colors"
            >
              Read the Vault architecture documentation →
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Pricing */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Pricing
          </h2>

          {/* Tier 1 Spectre */}
          <div className="border border-sky-400/30 rounded p-8 bg-sky-400/[0.04] max-w-2xl mb-10">
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
              trial. No credit card to start. Cancel anytime.
            </p>
            <a
              href="https://db.sentineloc.io/signup?plan=spectre"
              className="inline-block px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors shadow-[0_0_30px_-8px_rgba(14,165,233,0.6)]"
            >
              START TRIAL
            </a>
          </div>

          {/* Vault add-ons */}
          <div className="text-xs tracking-[0.4em] text-slate-400 font-bold mb-4">
            VAULT ADD-ONS · PRE-ORDER
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <AddonCard
              name="Vault Standard"
              price="+$30/mo"
              when="Available Q4 2026"
              cta="Reserve early access"
              ctaHref="https://db.sentineloc.io/signup?plan=spectre&vault=standard"
            />
            <AddonCard
              name="Vault Pro"
              price="+$80/mo"
              when="Available Q1 2027"
              cta="Reserve early access"
              ctaHref="https://db.sentineloc.io/signup?plan=spectre&vault=pro"
            />
          </div>
          <p className="mt-6 text-xs text-slate-500 font-sans max-w-2xl">
            Reserve a Vault tier add-on today and lock in launch pricing.
            We&apos;ll email you when it ships. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Section: What It's Not */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            Sentinel isn&apos;t for everyone.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="text-xs tracking-[0.3em] text-slate-400 font-bold mb-4">
                YOU PROBABLY DON&apos;T WANT THIS IF
              </div>
              <ul className="space-y-4 text-slate-300 font-sans leading-relaxed">
                <li>
                  You want a free global news dashboard. Use{" "}
                  <a
                    href="https://www.worldmonitor.app"
                    className="text-sky-400 hover:underline"
                  >
                    World Monitor
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://app.sitdeck.com"
                    className="text-sky-400 hover:underline"
                  >
                    SitDeck
                  </a>
                  . They&apos;re great at what they do.
                </li>
                <li>
                  You don&apos;t run actual investigations. This is overbuilt
                  for casual world-watching.
                </li>
                <li>
                  Your work doesn&apos;t involve sensitive sources or targets
                  who&apos;d rather not be looked at. The hardening is
                  overkill for general use.
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] text-sky-400 font-bold mb-4">
                YOU PROBABLY DO WANT THIS IF
              </div>
              <ul className="space-y-4 text-slate-300 font-sans leading-relaxed">
                <li>
                  You&apos;re working real cases, with real timelines, and
                  real consequences if your notes leak.
                </li>
                <li>
                  You&apos;ve outgrown a stack of browser tabs, Notion, and
                  your own memory.
                </li>
                <li>
                  You believe the tools you use should respect that the work
                  itself is sensitive.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: CTA Footer */}
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
            Want a tour built for your work?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/preview/for-journalists/"
              className="px-6 py-3 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              FOR INVESTIGATIVE JOURNALISTS →
            </Link>
            <Link
              href="/preview/for-analysts/"
              className="px-6 py-3 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              FOR OSINT ANALYSTS AND RESEARCHERS →
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

function DoorCard({
  href,
  label,
  body,
}: {
  href: string;
  label: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="card-accent block border border-white/[0.08] rounded p-7 bg-white/[0.02] hover:border-sky-400/40"
    >
      <div className="text-xs tracking-[0.3em] text-sky-400 font-bold mb-3 group-hover:text-sky-300">
        → {label.toUpperCase()}
      </div>
      <p className="text-slate-300 font-sans leading-relaxed">{body}</p>
    </Link>
  );
}

function Row({
  label,
  sentinel,
  other,
  last,
}: {
  label: string;
  sentinel: React.ReactNode;
  other: React.ReactNode;
  last?: boolean;
}) {
  return (
    <tr className={last ? "" : "border-b border-white/[0.06]"}>
      <td className="px-4 py-3 text-slate-400 font-sans">{label}</td>
      <td className="px-4 py-3 text-white font-sans">{sentinel}</td>
      <td className="px-4 py-3 text-slate-400 font-sans">{other}</td>
    </tr>
  );
}

function Check() {
  return <span className="text-sky-400 font-bold">✓</span>;
}

function Dash() {
  return <span className="text-slate-600">—</span>;
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

function VaultCard({
  name,
  status,
  accent,
  bullets,
  protects,
  doesnt,
  best,
}: {
  name: string;
  status: string;
  accent: "emerald" | "amber" | "red";
  bullets: string[];
  protects: string;
  doesnt: string;
  best: string;
}) {
  const map = {
    emerald: {
      border: "border-emerald-500/30",
      badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
    },
    amber: {
      border: "border-amber-500/30",
      badge: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    },
    red: {
      border: "border-red-500/30",
      badge: "bg-red-400/10 text-red-300 border-red-400/30",
    },
  }[accent];

  return (
    <div className={`border rounded p-6 bg-white/[0.02] card-accent ${map.border}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold text-white text-base">{name}</div>
        <span
          className={`px-2 py-1 text-[9px] tracking-widest font-bold rounded border ${map.badge}`}
        >
          {status}
        </span>
      </div>
      <ul className="space-y-2 text-sm text-slate-300 font-sans mb-5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="text-sky-400 mt-0.5">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <dl className="space-y-3 text-xs font-sans border-t border-white/[0.06] pt-4">
        <div>
          <dt className="text-emerald-400 tracking-widest font-bold mb-1">
            PROTECTS AGAINST
          </dt>
          <dd className="text-slate-300">{protects}</dd>
        </div>
        <div>
          <dt className="text-slate-500 tracking-widest font-bold mb-1">
            DOESN&apos;T PROTECT AGAINST
          </dt>
          <dd className="text-slate-400">{doesnt}</dd>
        </div>
        <div>
          <dt className="text-sky-400 tracking-widest font-bold mb-1">
            BEST FOR
          </dt>
          <dd className="text-slate-300">{best}</dd>
        </div>
      </dl>
    </div>
  );
}

function AddonCard({
  name,
  price,
  when,
  cta,
  ctaHref,
}: {
  name: string;
  price: string;
  when: string;
  cta: string;
  ctaHref: string;
}) {
  return (
    <div className="border border-white/[0.10] rounded p-6 bg-white/[0.02] card-accent">
      <div className="text-sm font-bold text-white mb-1">{name}</div>
      <div className="text-2xl font-bold text-sky-400 mb-1">{price}</div>
      <div className="text-xs text-slate-500 mb-5 font-sans">{when}</div>
      <a
        href={ctaHref}
        className="block text-center px-4 py-2.5 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
      >
        {cta.toUpperCase()} →
      </a>
    </div>
  );
}
