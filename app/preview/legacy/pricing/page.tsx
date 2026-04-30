// /pricing — locked v1.0 model from Vault Build Plan + persona doc.
// Two plans (drop "Newsroom custom" from public pricing per the
// pricing-conversation outcome — newsrooms approach via /contact).
// Vault tiers as add-ons. Annual prepay 20% discount. Honest about
// what each tier protects against; no bait-and-switch language.

import Link from "next/link";

export const metadata = {
  title: "Pricing — Sentinel OC",
  description:
    "Two plans. Pick the seat count you need. Add encryption tiers as your work demands them.",
};

export default function Pricing() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            PRICING
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Two plans. Add encryption as your work demands it.
          </h1>
          <p className="text-slate-400 max-w-2xl font-sans">
            Every plan includes Vault Lite — your investigations are
            encrypted at rest, your work is recoverable. Stronger Vault
            tiers attach as add-ons.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlanCard
            name="Investigator"
            tagline="One journalist, solo cases"
            priceAnnual="$79/mo"
            priceMonthly="$99/mo monthly"
            ctaLabel="START — $79/MO"
            ctaHref="https://db.sentineloc.io/signup?plan=investigator"
            features={[
              "Unlimited investigations",
              "Story-ready PDF export with source citations",
              "Link Analysis (entity graphs)",
              "4 launch transforms (OFAC, GDELT, urlscan, FEC)",
              "Vault Lite encryption (always)",
            ]}
          />
          <PlanCard
            name="Team"
            tagline="Editor + reporters on a beat"
            priceAnnual="$299/mo"
            priceMonthly="(5 seats)"
            ctaLabel="START — $299/MO"
            ctaHref="https://db.sentineloc.io/signup?plan=team"
            features={[
              "Everything in Investigator",
              "Shared investigations",
              "Per-investigation comments + @mentions",
              "Activity feed across the team",
              "Editor / reporter / fact-checker roles",
            ]}
            featured
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <p className="text-xs text-slate-500 font-sans">
            Annual prepay: 20% discount on either plan. Larger newsrooms
            (10+ seats):{" "}
            <Link href="/preview/legacy/about/" className="text-sky-400 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Vault tiers */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-3 font-bold">
            VAULT — ENCRYPTION TIERS
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Pick your threat model. No tier loses features when a higher one ships.
          </h2>
          <p className="text-slate-400 max-w-3xl mb-12 font-sans">
            Each Vault tier is honest about what it defeats AND what it
            doesn&apos;t. We don&apos;t claim &ldquo;military-grade.&rdquo;
            We don&apos;t claim &ldquo;unhackable.&rdquo; We tell you the
            actual trade. Features in Vault Lite stay in Vault Lite forever
            — no bait-and-switch when Standard ships.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VaultCard
              name="Vault Lite"
              status="Today, included with every plan"
              accent="border-emerald-500/30"
              badge="bg-emerald-400/10 text-emerald-300 border-emerald-400/30"
              price=""
              defeats={[
                "Database file theft",
                "Backup theft",
                "Casual rogue employee access",
                "Most opportunistic data breaches",
              ]}
              doesnt={[
                "Lawful compulsion (we have the keys)",
                "Sophisticated attacker who breaches both app + KMS",
              ]}
            />
            <VaultCard
              name="Vault Standard"
              status="Q4 2026"
              accent="border-amber-500/30"
              badge="bg-amber-400/10 text-amber-300 border-amber-400/30"
              price="+$30/mo Investigator · +$80/mo Team"
              defeats={[
                "Vendor subpoena (we hand over ciphertext)",
                "Vendor breach (attacker gets ciphertext, no keys)",
                "Vendor sale or acquisition",
                "Insider attack (content unreadable to staff)",
              ]}
              doesnt={[
                "Compromise of your device",
                "Phishing (you type into a fake page)",
                "Coerced disclosure (you are forced to log in)",
              ]}
              cta="Reserve early access"
              ctaHref="https://db.sentineloc.io/signup?plan=investigator&vault=standard"
            />
            <VaultCard
              name="Vault Pro"
              status="Q1 2027"
              accent="border-red-500/30"
              badge="bg-red-400/10 text-red-300 border-red-400/30"
              price="+$80/mo Investigator · +$200/mo Team"
              defeats={[
                "Phishing (hardware key validates origin)",
                "Compelled disclosure of a single team member",
                "Single-device theft (no key on device alone)",
              ]}
              doesnt={[
                "Coerced disclosure of all key holders",
                "Total device compromise",
                "Loss of password + recovery + hardware key (by design)",
              ]}
              cta="Reserve early access"
              ctaHref="https://db.sentineloc.io/signup?plan=investigator&vault=pro"
            />
          </div>
        </div>
      </section>

      {/* Worked examples */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            WORKED EXAMPLES
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">
            What you actually pay
          </h2>
          <div className="space-y-4 font-sans">
            <Example
              label="Solo journalist, Investigator + Vault Standard"
              math="$79 + $30"
              total="$109/mo"
            />
            <Example
              label="Newsroom team (5 seats), Team + Vault Standard"
              math="$299 + $80"
              total="$379/mo · $76/seat"
            />
            <Example
              label="Hardened team (5 seats), Team + Vault Pro"
              math="$299 + $200"
              total="$499/mo · $100/seat"
            />
          </div>
          <p className="text-xs text-slate-500 mt-8 font-sans">
            Compare: Maltego Pro $1,000+/yr base. Recorded Future
            $30k+/yr enterprise. Sentinel OC fits the journalist OOP
            range AND the outlet-expense reimbursement range.
          </p>
        </div>
      </section>

      {/* What no plan does */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            WHAT NO PLAN DOES
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">
            So you don&apos;t have to wonder.
          </h2>
          <ul className="space-y-3 text-slate-400 font-sans">
            <li>
              ❌ We don&apos;t host source-anonymizing infrastructure. Use
              Signal, GlobaLeaks, ProtonMail.
            </li>
            <li>
              ❌ We don&apos;t claim &ldquo;military-grade&rdquo; anything.
            </li>
            <li>❌ We don&apos;t sell your data. Ever.</li>
            <li>
              ❌ We don&apos;t bait-and-switch. Features in Vault Lite stay
              in Vault Lite forever.
            </li>
            <li>
              ❌ We don&apos;t make Sentinel OC the centerpiece of every
              investigation. Some cases just need notes; a great PDF
              export is enough.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

function PlanCard({
  name,
  tagline,
  priceAnnual,
  priceMonthly,
  ctaLabel,
  ctaHref,
  features,
  featured,
}: {
  name: string;
  tagline: string;
  priceAnnual: string;
  priceMonthly: string;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={
        "border rounded p-8 " +
        (featured
          ? "border-sky-400/40 bg-sky-400/[0.04]"
          : "border-white/[0.08] bg-white/[0.015]")
      }
    >
      <div className="flex items-baseline gap-3 mb-2">
        <div className="text-xs tracking-[0.3em] font-bold text-sky-400">
          {name.toUpperCase()}
        </div>
        {featured && (
          <span className="text-[9px] tracking-widest text-sky-300 font-bold">
            ★ MOST COMMON
          </span>
        )}
      </div>
      <div className="text-slate-400 mb-6 font-sans">{tagline}</div>
      <div className="mb-2">
        <span className="text-4xl font-bold text-white">{priceAnnual}</span>
      </div>
      <div className="text-xs text-slate-500 mb-8">{priceMonthly}</div>
      <ul className="space-y-3 mb-8 font-sans">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-sky-400 mt-0.5">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={
          "block text-center px-6 py-3 text-sm tracking-widest font-bold rounded transition-colors " +
          (featured
            ? "bg-sky-400 text-[#06090f] hover:bg-sky-300"
            : "border border-white/15 text-slate-300 hover:bg-white/5")
        }
      >
        {ctaLabel}
      </a>
    </div>
  );
}

function VaultCard({
  name,
  status,
  accent,
  badge,
  price,
  defeats,
  doesnt,
  cta,
  ctaHref,
}: {
  name: string;
  status: string;
  accent: string;
  badge: string;
  price: string;
  defeats: string[];
  doesnt: string[];
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <div className={`border rounded p-6 bg-white/[0.015] ${accent}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="font-bold text-white text-base">{name}</div>
        <span className={`px-2 py-1 text-[9px] tracking-widest font-bold rounded border ${badge}`}>
          {status}
        </span>
      </div>
      {price && (
        <div className="text-xs text-slate-400 mb-4 font-sans">{price}</div>
      )}
      <div className="mb-4">
        <div className="text-[10px] tracking-[0.2em] text-emerald-400 font-bold mb-2">
          DEFEATS
        </div>
        <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
          {defeats.map((d) => (
            <li key={d} className="flex items-start gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <div className="text-[10px] tracking-[0.2em] text-slate-500 font-bold mb-2">
          DOESN&apos;T DEFEAT
        </div>
        <ul className="space-y-1.5 text-xs text-slate-500 font-sans">
          {doesnt.map((d) => (
            <li key={d} className="flex items-start gap-1.5">
              <span>·</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
      {cta && ctaHref && (
        <a
          href={ctaHref}
          className="block text-center mt-4 px-4 py-2 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-300 hover:bg-white/5 transition-colors"
        >
          {cta} →
        </a>
      )}
    </div>
  );
}

function Example({
  label,
  math,
  total,
}: {
  label: string;
  math: string;
  total: string;
}) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-white/[0.04] pb-3">
      <div className="flex-1 text-sm text-slate-300">{label}</div>
      <div className="text-xs text-slate-500 font-mono">{math}</div>
      <div className="text-base font-bold text-white tabular-nums">{total}</div>
    </div>
  );
}
