// Home — workflow first (Maya pain #1), privacy as the trust closer.
// DevShield-density treatment: globe hero, stats, capabilities grid,
// vault tiers, pricing on home, founder, CTA band.

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed photo over solid black */}
      <section className="relative border-b border-white/[0.06] overflow-hidden bg-black">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/hero-investigator.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
            transform: "scaleX(-1) translateX(-15%)",
          }}
          aria-hidden="true"
        />

        {/* Falling data streams — kept, suit the after-hours mood */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="stream" style={{ left: "62%", animationDuration: "5s", animationDelay: "0s" }} />
          <span className="stream" style={{ left: "70%", animationDuration: "7s", animationDelay: "1.4s" }} />
          <span className="stream" style={{ left: "82%", animationDuration: "6s", animationDelay: "2.6s" }} />
          <span className="stream" style={{ left: "92%", animationDuration: "8s", animationDelay: "0.8s" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-44">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-sky-400/60" />
            <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
              OSINT WORKSPACE · FOR INVESTIGATIVE JOURNALISTS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-3xl tracking-tight">
            Your investigation,<br />organized.{" "}
            <span className="text-sky-400">Citable. Encrypted. Yours.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans">
            Built by an investigative journalist. For the people who do
            this for a living. Stop integrating six tools yourself.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://db.sentineloc.io/signup?plan=investigator"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors shadow-[0_0_40px_-10px_rgba(14, 165, 233,0.7)]"
            >
              START — $79/MO
            </a>
            <Link
              href="/preview/legacy/features/"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              SEE FEATURES →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="4" label="Launch transforms" sub="OFAC · GDELT · urlscan · FEC" />
          <Stat value="3" label="Vault encryption tiers" sub="Lite · Standard · Pro" />
          <Stat value="$79" label="Investigator / month" sub="Annual prepay 20% off" />
          <Stat value="0" label="Marketing-grade claims" sub="No 'military-grade' anything" />
        </div>
      </section>

      {/* PAIN GRID — what it replaces */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            WHAT IT REPLACES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mb-3">
            Six browser tabs and a Google Doc. No more.
          </h2>
          <p className="text-slate-300 font-sans max-w-2xl mb-12">
            Four pain points. Each numbered the way the persona doc
            ranks them — workflow first, privacy fourth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PainCard
              n="01"
              pain="Tools don't connect"
              answer="One workspace. Transforms (OFAC, GDELT, urlscan, FEC) flow into investigations you actually save and revisit."
            />
            <PainCard
              n="02"
              pain="Note-taking is fragile"
              answer="Investigations are durable records — encrypted, exportable, recoverable. Not a Google Doc one subpoena from disclosure."
            />
            <PainCard
              n="03"
              pain="No defensible audit trail"
              answer="Source citation on every fact. When your editor or lawyer asks where it came from, you have an answer that survives scrutiny."
            />
            <PainCard
              n="04"
              pain="Exporting takes hours"
              answer="Story-ready PDFs. One click. Sources, entities, dates. Pass-the-editor-test format."
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mb-3">
            Everything an investigation actually needs.
          </h2>
          <p className="text-slate-300 font-sans max-w-2xl mb-12">
            Six core capabilities, designed by someone who&apos;s used
            the alternatives at 11pm on a Tuesday.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Capability
              icon="LINK"
              title="Link Analysis"
              body="Force-directed entity graph. Drop a name, see who connects to who. Drag-to-pin, zoom, color by type."
            />
            <Capability
              icon="XFRM"
              title="Transform Stack"
              body="OFAC sanctions, GDELT events, urlscan domains, FEC filings. More queued for v1.1."
            />
            <Capability
              icon="DOC"
              title="Story-Ready Export"
              body="Story-ready PDF with citations formatted the way a fact-checker reads. One click. Pass the editor email test."
            />
            <Capability
              icon="VLT"
              title="Vault Encryption"
              body="Three tiers: Lite (today), Standard (Q4), Pro (Q1 2027). Pick per investigation. Honest about what each defeats."
            />
            <Capability
              icon="LOG"
              title="Source Audit Trail"
              body="Every fact pinned to a source. Timestamps, hashes, original URL captures. Survives lawyer scrutiny."
            />
            <Capability
              icon="TEAM"
              title="Editorial Workflow"
              body="Editor / reporter / fact-checker roles. Comments, @mentions, activity feed. Built around how newsrooms actually run."
            />
          </div>
        </div>
      </section>

      {/* VAULT TIERS */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            VAULT — TIERED PRIVACY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mb-6">
            Pick your threat model. Pay for the protection that fits.
          </h2>
          <p className="text-slate-300 max-w-2xl mb-10 font-sans">
            Most OSINT tools encrypt with vendor-held keys and call it a
            day. Fine for routine research. Not enough when sources,
            queries, and notes are sensitive enough that a subpoena to
            us is a real risk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VaultTier
              name="Vault Lite"
              status="Today, included"
              accent="emerald"
              desc="Per-user encryption, vendor-held keys, separated KMS. Recoverable. Subpoena-readable. Best for routine investigations."
            />
            <VaultTier
              name="Vault Standard"
              status="Q4 2026"
              accent="amber"
              desc="Encrypted in your browser before reaching us. We cannot decrypt your investigations. Subpoena gets ciphertext."
            />
            <VaultTier
              name="Vault Pro"
              status="Q1 2027"
              accent="red"
              desc="Hardware-key authentication. Optional team threshold sharing. No single member can be compelled to disclose."
            />
          </div>
          <p className="mt-8 text-xs text-slate-500 font-sans">
            We do not claim &ldquo;military-grade.&rdquo; We do not claim
            &ldquo;unhackable.&rdquo; We tell you what each tier actually
            defeats.{" "}
            <Link href="/preview/legacy/pricing/" className="text-sky-400 hover:underline">
              Full Vault breakdown →
            </Link>
          </p>
        </div>
      </section>

      {/* PRICING — surfaced on home */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            PRICING
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mb-3">
            Two plans. Add encryption as your work demands it.
          </h2>
          <p className="text-slate-300 font-sans max-w-2xl mb-12">
            Vault Lite encryption is included on every plan. Stronger
            tiers attach as add-ons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PriceCard
              name="Investigator"
              tagline="One journalist, solo cases"
              price="$79"
              priceSuffix="/mo"
              priceNote="Annual prepay · $99/mo monthly"
              features={[
                "Unlimited investigations",
                "Story-ready PDF export with citations",
                "Link Analysis (entity graphs)",
                "4 launch transforms (OFAC, GDELT, urlscan, FEC)",
                "Vault Lite encryption (always)",
              ]}
              ctaHref="https://db.sentineloc.io/signup?plan=investigator"
              ctaLabel="START — $79/MO"
            />
            <PriceCard
              name="Team"
              tagline="Editor + reporters on a beat"
              price="$299"
              priceSuffix="/mo"
              priceNote="5 seats · annual prepay 20% off"
              features={[
                "Everything in Investigator",
                "Shared investigations",
                "Per-investigation comments + @mentions",
                "Activity feed across the team",
                "Editor / reporter / fact-checker roles",
              ]}
              ctaHref="https://db.sentineloc.io/signup?plan=team"
              ctaLabel="START — $299/MO"
              featured
            />
          </div>
          <p className="text-center mt-10 text-xs text-slate-500 font-sans">
            10+ seats?{" "}
            <Link href="/preview/legacy/about/" className="text-sky-400 hover:underline">
              Contact for newsroom licensing
            </Link>
            {" · "}
            <Link href="/preview/legacy/pricing/" className="text-sky-400 hover:underline">
              Full pricing breakdown
            </Link>
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            BUILT BY ONE OF YOU
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mb-6">
            Every product decision answers to a journalist&apos;s Tuesday afternoon.
          </h2>
          <p className="text-slate-300 max-w-3xl leading-relaxed font-sans text-lg">
            The PDF export passes the editor-email test on the first
            try. Source citations format the way a fact-checker reads
            them. Investigations are durable records, not browser
            sessions. Pricing fits the OOP-versus-outlet-expense
            ranges your reimbursement cycle actually runs on.{" "}
            <Link href="/preview/legacy/about/" className="text-sky-400 hover:underline">
              More on the founder &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            BETA THIS SUMMER
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Stop being the integration layer.
          </h2>
          <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
            Investigator pricing locked at $79/mo for the first 12
            months for early access. Team at $299/mo for five seats.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://db.sentineloc.io/signup?plan=investigator"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors shadow-[0_0_40px_-10px_rgba(14, 165, 233,0.7)]"
            >
              START — $79/MO
            </a>
            <Link
              href="/preview/legacy/pricing/"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              SEE PRICING
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold text-sky-400 tracking-tight">
        {value}
      </div>
      <div className="text-xs tracking-[0.2em] text-slate-200 font-bold mt-2 uppercase">
        {label}
      </div>
      {sub && <div className="text-[10px] text-slate-500 mt-1 font-sans">{sub}</div>}
    </div>
  );
}

function PainCard({ n, pain, answer }: { n: string; pain: string; answer: string }) {
  return (
    <div className="card-accent border border-white/[0.08] rounded p-7 bg-white/[0.02]">
      <div className="flex items-center gap-3 mb-3">
        <div className="hex-badge w-9 h-9 bg-sky-400/10 border border-sky-400/30 flex items-center justify-center">
          <span className="text-[9px] tracking-[0.1em] font-bold text-sky-400">
            {n}
          </span>
        </div>
        <div className="text-[10px] tracking-[0.3em] text-sky-400/80 font-bold">
          PAIN
        </div>
      </div>
      <div className="text-lg font-bold text-white mb-3">{pain}</div>
      <div className="text-sm text-slate-300 leading-relaxed font-sans">{answer}</div>
    </div>
  );
}

function Capability({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="card-accent border border-white/[0.08] rounded p-6 bg-white/[0.02]">
      <div className="hex-badge w-12 h-12 bg-sky-400/10 border border-sky-400/30 flex items-center justify-center mb-5">
        <span className="text-[9px] tracking-[0.15em] font-bold text-sky-400">
          {icon}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed font-sans">{body}</p>
    </div>
  );
}

function VaultTier({
  name,
  status,
  desc,
  accent,
}: {
  name: string;
  status: string;
  desc: string;
  accent: "emerald" | "amber" | "red";
}) {
  const map = {
    emerald: {
      border: "border-emerald-500/30",
      badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
      hex: "bg-emerald-400/10 border-emerald-400/40 text-emerald-300",
    },
    amber: {
      border: "border-amber-500/30",
      badge: "bg-amber-400/10 text-amber-300 border-amber-400/30",
      hex: "bg-amber-400/10 border-amber-400/40 text-amber-300",
    },
    red: {
      border: "border-red-500/30",
      badge: "bg-red-400/10 text-red-300 border-red-400/30",
      hex: "bg-red-400/10 border-red-400/40 text-red-300",
    },
  }[accent];
  return (
    <div className={`border rounded p-7 bg-white/[0.02] card-accent ${map.border}`}>
      <div className="flex items-start justify-between mb-5">
        <div className={`hex-badge w-10 h-10 border flex items-center justify-center ${map.hex}`}>
          <span className="text-[9px] tracking-[0.1em] font-bold">
            {name.split(" ")[1].slice(0, 4).toUpperCase()}
          </span>
        </div>
        <span className={`px-2 py-1 text-[9px] tracking-widest font-bold rounded border ${map.badge}`}>
          {status}
        </span>
      </div>
      <div className="font-bold text-white text-lg mb-2 tracking-wide">{name}</div>
      <div className="text-sm text-slate-300 leading-relaxed font-sans">{desc}</div>
    </div>
  );
}

function PriceCard({
  name,
  tagline,
  price,
  priceSuffix,
  priceNote,
  features,
  ctaHref,
  ctaLabel,
  featured,
}: {
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  priceNote: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  featured?: boolean;
}) {
  return (
    <div
      className={
        "relative rounded p-8 card-accent " +
        (featured
          ? "border-2 border-sky-400/50 bg-sky-400/[0.04]"
          : "border border-white/[0.10] bg-white/[0.02]")
      }
    >
      {featured && (
        <div className="absolute -top-3 left-8 px-3 py-1 text-[10px] tracking-widest font-bold rounded bg-sky-400 text-[#04070d]">
          ★ MOST COMMON
        </div>
      )}
      <div className="text-xs tracking-[0.3em] font-bold text-sky-400 mb-2">
        {name.toUpperCase()}
      </div>
      <div className="text-slate-300 mb-6 font-sans">{tagline}</div>
      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-5xl font-bold text-white">{price}</span>
        <span className="text-xl text-slate-400">{priceSuffix}</span>
      </div>
      <div className="text-xs text-slate-500 mb-8 font-sans">{priceNote}</div>
      <ul className="space-y-3 mb-8 font-sans">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
            <span className="text-sky-400 mt-0.5 font-bold">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={
          "block text-center px-6 py-3.5 text-sm tracking-widest font-bold rounded transition-colors " +
          (featured
            ? "bg-sky-400 text-[#04070d] hover:bg-sky-300 shadow-[0_0_30px_-8px_rgba(14, 165, 233,0.6)]"
            : "border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40")
        }
      >
        {ctaLabel}
      </a>
    </div>
  );
}
