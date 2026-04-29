// Home page — leads with WORKFLOW (the Maya pain #1) not feeds.
// Privacy is the trust closer, not the hero.

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero — single sentence does most of the work. The persona
          doc's 8-second filter ("finally, someone built this for us")
          is a line we earn, not claim. */}
      <section className="bg-grid sweep-line border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="text-xs tracking-[0.4em] text-cyan-400 mb-6 font-bold">
            OSINT WORKSPACE · FOR INVESTIGATIVE JOURNALISTS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl tracking-tight">
            Your investigation, organized.<br />
            <span className="text-cyan-400">Citable. Encrypted. Yours.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-sans">
            Built by an investigative journalist. For the people who do
            this for a living. Stop integrating six tools yourself.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://db.sentineloc.io/signup?plan=investigator"
              className="px-6 py-3 text-sm tracking-widest font-bold rounded bg-cyan-400 text-[#06090f] hover:bg-cyan-300 transition-colors"
            >
              START — $79/MO
            </a>
            <Link
              href="/features/"
              className="px-6 py-3 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-300 hover:bg-white/5 transition-colors"
            >
              SEE FEATURES →
            </Link>
          </div>
        </div>
      </section>

      {/* Pain → answer grid. Each row maps to a numbered persona
          pain. Marketing emphasis matches the persona doc's pain
          ordering: integration #1, fragile note-taking #2, audit
          trail #3, privacy #4. */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            WHAT IT REPLACES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mb-12">
            Six browser tabs and a Google Doc. No more.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Privacy — fourth, not first. Honest about what each tier
          protects against (matches the Vault Build Plan's posture
          that overclaiming destroys exactly the trust we want to
          build). */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-3 font-bold">
            VAULT — TIERED PRIVACY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mb-6">
            Pick your threat model. Pay for the protection that fits.
          </h2>
          <p className="text-slate-400 max-w-2xl mb-10 font-sans">
            Most OSINT tools encrypt with vendor-held keys and call it a
            day. Fine for routine research. Not enough when your sources,
            queries, and notes are sensitive enough that a subpoena to
            us is a real risk. Sentinel OC ships three Vault tiers —
            pick per investigation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VaultTier
              name="Vault Lite"
              status="Today, included"
              accent="border-emerald-500/30"
              badge="bg-emerald-400/10 text-emerald-300 border-emerald-400/30"
              desc="Per-user encryption, vendor-held keys, separated KMS. Recoverable. Subpoena-readable. Best for routine investigations."
            />
            <VaultTier
              name="Vault Standard"
              status="Q4 2026"
              accent="border-amber-500/30"
              badge="bg-amber-400/10 text-amber-300 border-amber-400/30"
              desc="Encrypted in your browser before reaching us. We cannot decrypt your investigations. Subpoena gets ciphertext."
            />
            <VaultTier
              name="Vault Pro"
              status="Q1 2027"
              accent="border-red-500/30"
              badge="bg-red-400/10 text-red-300 border-red-400/30"
              desc="Hardware-key authentication. Optional team threshold sharing. No single member can be compelled to disclose."
            />
          </div>
          <p className="mt-8 text-xs text-slate-500 font-sans">
            We do not claim &ldquo;military-grade.&rdquo; We do not claim &ldquo;unhackable.&rdquo;
            We tell you what each tier actually defeats. Honesty is the
            differentiator.
          </p>
        </div>
      </section>

      {/* Founder-fit — show, don't claim. Specific decisions a non-
          journalist wouldn't make: PDF export quality, source-citation
          discipline, workflow over dashboard. */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            BUILT BY ONE OF YOU
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mb-6">
            Every product decision answers to a journalist&apos;s Tuesday afternoon.
          </h2>
          <p className="text-slate-400 max-w-3xl leading-relaxed font-sans">
            The PDF export passes the editor-email test on the first
            try. Source citations format the way a fact-checker reads
            them. Investigations are durable records, not browser
            sessions. Pricing fits the OOP-versus-outlet-expense
            ranges your reimbursement cycle actually runs on.{" "}
            <Link href="/about/" className="text-cyan-400 hover:underline">
              More on the founder &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop being the integration layer.
          </h2>
          <p className="text-slate-400 mb-10 font-sans">
            Sentinel OC ships in beta this summer. Investigator pricing
            locked at $79/mo for the first 12 months for early access.
          </p>
          <a
            href="https://db.sentineloc.io/signup?plan=investigator"
            className="inline-block px-8 py-4 text-sm tracking-widest font-bold rounded bg-cyan-400 text-[#06090f] hover:bg-cyan-300 transition-colors"
          >
            START — $79/MO
          </a>
        </div>
      </section>
    </>
  );
}

function PainCard({ n, pain, answer }: { n: string; pain: string; answer: string }) {
  return (
    <div className="border border-white/[0.06] rounded p-6 bg-white/[0.015]">
      <div className="text-xs tracking-[0.3em] text-cyan-400/70 font-bold mb-2">
        PAIN {n}
      </div>
      <div className="text-lg font-bold text-white mb-3">{pain}</div>
      <div className="text-sm text-slate-400 leading-relaxed font-sans">{answer}</div>
    </div>
  );
}

function VaultTier({
  name,
  status,
  desc,
  accent,
  badge,
}: {
  name: string;
  status: string;
  desc: string;
  accent: string;
  badge: string;
}) {
  return (
    <div className={`border rounded p-6 bg-white/[0.015] ${accent}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold text-white text-base tracking-wide">{name}</div>
        <span className={`px-2 py-1 text-[9px] tracking-widest font-bold rounded border ${badge}`}>
          {status}
        </span>
      </div>
      <div className="text-sm text-slate-400 leading-relaxed font-sans">{desc}</div>
    </div>
  );
}
