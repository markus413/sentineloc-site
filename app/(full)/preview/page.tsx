// /preview/ — sentineloc.io home page v3.1 per build-handoff doc
// Section 3. This is the page that will move to / when launch goes
// live. Until then, / is the coming-soon and this is the staging URL.

import Link from "next/link";
import HeroCarousel from "../../components/HeroCarousel";

export const metadata = {
  title: "Sentinel OC — OSINT investigation workspace",
  description:
    "Track entities. Run transforms. Build cases that hold up. " +
    "Export defensible reports. For investigative journalists, " +
    "OSINT analysts, and researchers.",
};

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* DOORS */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            Two ways in.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DoorCard
              href="/for-journalists/"
              label="→ For investigative journalists"
              body="Long cases. Source protection. Story-ready exports. Audit trails that stand up."
            />
            <DoorCard
              href="/for-analysts/"
              label="→ For OSINT analysts and researchers"
              body="Client deliverables. Threat research. Due diligence. Reports that bill."
            />
          </div>
        </div>
      </section>

      {/* SETUP */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            You don&apos;t need another dashboard. You need a workspace.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-sans mb-5">
            Your investigation already lives in eight tabs, three docs,
            and a Notion you forget to update. Sentinel pulls it into
            one place.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed font-sans">
            Not a feed. Not a map. A workspace — built around the
            actual work of investigation.
          </p>
        </div>
      </section>

      {/* CONTRAST TABLE */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            What Sentinel is. And what it isn&apos;t.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-6 text-xs tracking-widest text-slate-500 font-bold w-[40%]">
                    {" "}
                  </th>
                  <th className="text-left py-3 pr-6 text-xs tracking-widest text-sky-400 font-bold">
                    SENTINEL
                  </th>
                  <th className="text-left py-3 text-xs tracking-widest text-slate-500 font-bold">
                    MONITORING DASHBOARDS
                    <span className="block text-[10px] text-slate-600 font-normal normal-case tracking-normal mt-1">
                      SitDeck, World Monitor
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <CompareRow label="Built for" sentinel="People running cases" alt="People watching the world" />
                <CompareRow label="Core unit" sentinel="An investigation" alt="A feed" />
                <CompareRow label="Saved investigations with notes" sentinel="✓" alt="—" />
                <CompareRow label="Entity link analysis" sentinel="✓ Built-in Research tab" alt="—" />
                <CompareRow label="Source citation per fact" sentinel="✓ Mandatory" alt="—" />
                <CompareRow label="Confidence scoring" sentinel="✓ High / medium / low" alt="—" />
                <CompareRow label="Defensible exports" sentinel="✓ PDF, DOCX, Excel, JSON" alt="—" />
                <CompareRow label="Geographic depth (US, Canada, Mexico)" sentinel="✓ City-level" alt="Global generalist" />
                <CompareRow label="Tiered encryption (you pick per case)" sentinel="✓ Three tiers, dated roadmap" alt="—" />
                <CompareRow label="Source-tier separation" sentinel="✓" alt="—" />
                <CompareRow label="Price" sentinel="$79/mo" alt="Free" />
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-sm text-slate-300 font-sans max-w-3xl">
            <strong className="text-white">Honest read:</strong> if you
            want a global firehose to scroll through with your morning
            coffee, the free dashboards are great.{" "}
            <em>Use them.</em> Sentinel is for when you have a case to
            run, sources to track, and a report to file.
          </p>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            FOUR PILLARS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Why people switch.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Pillar
              n="1"
              title="Built for cases, not feeds."
              body="Saved investigations. Entity bookmarks. Notes that survive deadlines. Export an Incident Report that stands on its own — graph, sources, timeline, citations included."
              kicker="Your work is cases. Your tool should know that."
            />
            <Pillar
              n="2"
              title="North American depth, not global breadth."
              body="Crime tracking by city. Threat assessment for the US, Canada, and Mexico. Sanctions, corporate filings, campaign finance, vulnerability intel."
              kicker="Not 180 feeds. The right 25, integrated correctly."
            />
            <Pillar
              n="3"
              title="Built like the targets are watching."
              body="Decoy entry points. Hidden authentication paths. Mutual TLS client certificates. Honeytoken intrusion detection. No source maps. No search engine indexing of operational surfaces."
              kicker="Other tools treat your privacy as a setting. Sentinel treats it as the product."
            />
            <Pillar
              n="4"
              title="Vault: the security tier you choose."
              body="Pick the protection that fits the case. Vault Lite (today) gives every investigation per-user encryption with separated keys. Vault Standard (Q4 2026) adds client-side encryption — your data is unreadable to us. Vault Pro (Q1 2027) adds hardware keys."
              kicker="One platform. Three tiers. Honest about what each protects against."
            />
          </div>
        </div>
      </section>

      {/* VAULT */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            VAULT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            A note on Vault.
          </h2>
          <p className="text-slate-300 max-w-3xl mb-4 font-sans leading-relaxed">
            Most &ldquo;secure&rdquo; SaaS products have one tier of
            encryption: theirs. They hold your keys. They can read your
            data. Subpoenas get content.
          </p>
          <p className="text-slate-300 max-w-3xl mb-12 font-sans leading-relaxed">
            Vault is different. You pick the protection per
            investigation, based on what&apos;s actually at stake.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VaultTier
              name="Vault Lite"
              status="Included, today"
              accent="emerald"
              bullets={[
                "Per-user encryption keys, vendor-held in a separated KMS",
                "Operational separation between auth and data infrastructure",
                "Standard backups, fast password recovery",
              ]}
              defeats="Opportunistic data breach, casual rogue access"
              doesnt="Lawful compulsion of Sentrion Labs"
              best="Routine investigations, background research, day-to-day work"
            />
            <VaultTier
              name="Vault Standard"
              status="Q4 2026"
              accent="amber"
              bullets={[
                "Client-side encryption — content encrypted in your browser before it leaves",
                "24-word recovery phrase (you save it offline)",
                "We literally cannot decrypt your investigation contents",
              ]}
              defeats="Vendor breach, vendor subpoena, vendor sale or acquisition"
              doesnt="Compromise of your own device, phishing, coerced disclosure"
              best="Sensitive investigations, source-protection-critical work"
            />
            <VaultTier
              name="Vault Pro"
              status="Q1 2027"
              accent="red"
              bullets={[
                "Everything in Standard, plus hardware key (FIDO2 / YubiKey) required for login",
                "Per-tier warrant canary",
              ]}
              defeats="Everything Standard defeats, plus phishing"
              doesnt="Total device compromise, coerced disclosure of all your factors"
              best="Investigations that absolutely cannot afford to leak"
            />
          </div>
          <div className="mt-12 max-w-3xl">
            <h3 className="text-base font-bold text-white mb-3">
              What we won&apos;t claim
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
              No system protects against everything. Vault doesn&apos;t
              make your data unreadable to anyone in the universe
              forever. We tell you exactly what each tier protects
              against and where it stops, so you can make a real
              decision about a real threat model.
            </p>
            <Link
              href="/security/"
              className="inline-block text-sm tracking-widest font-bold text-sky-400 hover:text-sky-300 transition-colors"
            >
              [ Read the Vault architecture documentation ]
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            PRICING
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            One tier at launch. Vault as you need it.
          </h2>

          <div className="border-2 border-sky-400/40 rounded p-8 md:p-10 bg-sky-400/[0.04] max-w-3xl">
            <div className="flex items-baseline gap-3 mb-3 flex-wrap">
              <div className="text-xs tracking-[0.3em] font-bold text-sky-400">
                TIER 1 &middot; &ldquo;SPECTRE&rdquo;
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-5xl font-bold text-white">$79</span>
              <span className="text-xl text-slate-400">/mo</span>
            </div>
            <p className="text-slate-300 font-sans mb-6 leading-relaxed">
              All sources. All features. Full export. Vault Lite
              included.
            </p>
            <p className="text-xs text-slate-500 font-sans mb-7">
              $99/mo month-to-month. $79/mo billed annually. 14-day
              free trial. No credit card to start. Cancel anytime.
            </p>
            <a
              href="https://db.sentineloc.io/signup?plan=spectre"
              className="inline-block px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors shadow-[0_0_30px_-8px_rgba(14,165,233,0.6)]"
            >
              START TRIAL
            </a>
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="text-sm tracking-[0.3em] font-bold text-sky-400 mb-4">
              VAULT ADD-ONS · PRE-ORDER
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <VaultAddon
                name="Vault Standard"
                price="+$30/mo"
                avail="Available Q4 2026"
                href="https://db.sentineloc.io/reserve?vault=standard"
              />
              <VaultAddon
                name="Vault Pro"
                price="+$80/mo"
                avail="Available Q1 2027"
                href="https://db.sentineloc.io/reserve?vault=pro"
              />
            </div>
            <p className="mt-4 text-xs text-slate-500 font-sans">
              Reserve a Vault tier add-on today and lock in launch
              pricing. We&apos;ll email you when it ships. Cancel
              anytime.
            </p>
          </div>

          <p className="mt-8 text-xs text-slate-500 font-sans">
            <Link href="/pricing/" className="text-sky-400 hover:underline">
              Full pricing breakdown →
            </Link>
          </p>
        </div>
      </section>

      {/* WHAT IT'S NOT */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Sentinel isn&apos;t for everyone.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-bold text-white mb-5">
                You probably don&apos;t want this if:
              </h3>
              <ul className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed">
                <li>
                  You want a free global news dashboard. Use{" "}
                  <a href="https://www.worldmonitor.app" className="text-sky-400 hover:underline">
                    World Monitor
                  </a>{" "}
                  or{" "}
                  <a href="https://app.sitdeck.com" className="text-sky-400 hover:underline">
                    SitDeck
                  </a>
                  . They&apos;re great at what they do.
                </li>
                <li>
                  You don&apos;t run actual investigations. This is
                  overbuilt for casual world-watching.
                </li>
                <li>
                  Your work doesn&apos;t involve sensitive sources or
                  targets who&apos;d rather not be looked at. The
                  hardening is overkill for general use.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-5">
                You probably do want this if:
              </h3>
              <ul className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed">
                <li>
                  You&apos;re working real cases, with real timelines,
                  and real consequences if your notes leak.
                </li>
                <li>
                  You&apos;ve outgrown a stack of browser tabs, Notion,
                  and your own memory.
                </li>
                <li>
                  You believe the tools you use should respect that the
                  work itself is sensitive.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="cta-band border-b border-white/[0.06]">
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
          <p className="mt-5 text-xs text-slate-500 font-sans">
            No credit card. No ads. No tracking. Cancel anytime.
          </p>

          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-sm text-slate-300 font-sans mb-5">
              Want a tour built for your work?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/for-journalists/"
                className="px-6 py-3 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
              >
                → FOR INVESTIGATIVE JOURNALISTS
              </Link>
              <Link
                href="/for-analysts/"
                className="px-6 py-3 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
              >
                → FOR OSINT ANALYSTS AND RESEARCHERS
              </Link>
            </div>
            <p className="mt-8 text-xs text-slate-500 font-sans">
              Questions? Email{" "}
              <a href="mailto:mark@sentrionlabs.io" className="text-sky-400 hover:underline">
                mark@sentrionlabs.io
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function DoorCard({ href, label, body }: { href: string; label: string; body: string }) {
  return (
    <Link
      href={href}
      className="card-accent block border border-white/[0.10] rounded p-7 bg-white/[0.02] hover:border-sky-400/40 transition-colors"
    >
      <div className="text-base font-bold text-sky-400 mb-3">{label}</div>
      <p className="text-sm text-slate-300 leading-relaxed font-sans">{body}</p>
    </Link>
  );
}

function CompareRow({ label, sentinel, alt }: { label: string; sentinel: string; alt: string }) {
  return (
    <tr className="border-b border-white/[0.04]">
      <td className="py-3 pr-6 text-slate-400">{label}</td>
      <td className="py-3 pr-6 text-white font-medium">{sentinel}</td>
      <td className="py-3 text-slate-500">{alt}</td>
    </tr>
  );
}

function Pillar({ n, title, body, kicker }: { n: string; title: string; body: string; kicker: string }) {
  return (
    <div className="card-accent border border-white/[0.08] rounded p-7 bg-white/[0.02]">
      <div className="flex items-center gap-3 mb-4">
        <div className="hex-badge w-9 h-9 bg-sky-400/10 border border-sky-400/30 flex items-center justify-center">
          <span className="text-xs font-bold text-sky-400">{n}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed font-sans mb-4">{body}</p>
      <p className="text-sm text-sky-300/90 leading-relaxed font-sans italic">{kicker}</p>
    </div>
  );
}

function VaultTier({
  name,
  status,
  accent,
  bullets,
  defeats,
  doesnt,
  best,
}: {
  name: string;
  status: string;
  accent: "emerald" | "amber" | "red";
  bullets: string[];
  defeats: string;
  doesnt: string;
  best: string;
}) {
  const map = {
    emerald: { border: "border-emerald-500/30", badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30" },
    amber: { border: "border-amber-500/30", badge: "bg-amber-400/10 text-amber-300 border-amber-400/30" },
    red: { border: "border-red-500/30", badge: "bg-red-400/10 text-red-300 border-red-400/30" },
  }[accent];
  return (
    <div className={`border rounded p-6 bg-white/[0.02] ${map.border}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold text-white text-lg tracking-wide">{name}</div>
        <span className={`px-2 py-1 text-[9px] tracking-widest font-bold rounded border ${map.badge}`}>
          {status}
        </span>
      </div>
      <ul className="space-y-2 mb-5 text-xs text-slate-300 font-sans">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="text-sky-400 mt-0.5">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="space-y-2 text-[11px] font-sans">
        <div>
          <span className="text-emerald-400 font-bold tracking-wider">PROTECTS AGAINST: </span>
          <span className="text-slate-300">{defeats}</span>
        </div>
        <div>
          <span className="text-slate-500 font-bold tracking-wider">DOESN&apos;T: </span>
          <span className="text-slate-500">{doesnt}</span>
        </div>
        <div>
          <span className="text-sky-400 font-bold tracking-wider">BEST FOR: </span>
          <span className="text-slate-300">{best}</span>
        </div>
      </div>
    </div>
  );
}

function VaultAddon({ name, price, avail, href }: { name: string; price: string; avail: string; href: string }) {
  return (
    <a href={href} className="card-accent block border border-white/[0.10] rounded p-5 bg-white/[0.02]">
      <div className="flex items-center justify-between gap-3 mb-1">
        <div className="font-bold text-white">{name}</div>
        <div className="text-sky-400 font-bold">{price}</div>
      </div>
      <div className="text-xs text-slate-500 font-sans mb-3">{avail}</div>
      <div className="text-xs tracking-widest font-bold text-sky-400">
        [ RESERVE EARLY ACCESS → ]
      </div>
    </a>
  );
}
