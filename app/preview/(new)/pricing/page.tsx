// /preview/pricing — STUB. Per handoff: Option B structure. Tier 1
// "Spectre" with full feature list. Tiers 2-4 acknowledged but
// unspecified. "Notify me" capture for higher tiers. Vault add-ons.

import Link from "next/link";
import StubBanner from "../_components/StubBanner";

export const metadata = {
  title: "Pricing — Sentinel OC (stub)",
};

export default function Pricing() {
  return (
    <>
      <StubBanner
        pageName="/pricing"
        source="Structure: Option B — Spectre full, higher tiers acknowledged"
      />

      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            PRICING
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            One tier today. Three more on the way.
          </h1>
          <p className="text-slate-300 max-w-2xl font-sans leading-relaxed">
            [XXX — COPY COMING — XXX] Tier 1 &ldquo;Spectre&rdquo; presented
            in full. Tiers 2-4 listed by name only — no prices, no dates, no
            features committed. &ldquo;Notify me&rdquo; capture (not
            pre-orders) for the higher tiers. Vault add-on pre-order section
            stays.
          </p>
        </div>
      </section>

      {/* Spectre — full presentation */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="border border-sky-400/30 rounded p-8 bg-sky-400/[0.04] max-w-2xl">
            <div className="text-xs tracking-[0.3em] text-sky-400 font-bold mb-2">
              TIER 1 &ldquo;SPECTRE&rdquo; — AT LAUNCH
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
              className="inline-block px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors"
            >
              START TRIAL
            </a>
          </div>
        </div>
      </section>

      {/* Tiers 2-4 — names only */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-slate-400 mb-3 font-bold">
            COMING POST-LAUNCH
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Higher tiers, on the way.
          </h2>
          <p className="text-slate-400 font-sans mb-10 max-w-2xl">
            Names locked. Contents not. We&apos;ll publish details when we
            commit, not before. Drop your email and we&apos;ll tell you when
            each one ships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UpcomingTier n="2" name='"Janus"' tagline="Solo, equipped" />
            <UpcomingTier n="3" name='"Helios"' tagline="Coming post-launch" />
            <UpcomingTier n="4" name='"Argus"' tagline="Full retail" />
          </div>
        </div>
      </section>

      {/* Vault add-ons */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-3 font-bold">
            VAULT ADD-ONS · PRE-ORDER
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Stronger encryption, attached when you need it.
          </h2>
          <p className="text-slate-400 font-sans mb-10 max-w-2xl">
            Reserve a Vault tier add-on today and lock in launch pricing.
            We&apos;ll email you when it ships. Cancel anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <AddonCard
              name="Vault Standard"
              price="+$30/mo"
              when="Q4 2026"
              cta="Reserve early access"
              ctaHref="https://db.sentineloc.io/signup?plan=spectre&vault=standard"
            />
            <AddonCard
              name="Vault Pro"
              price="+$80/mo"
              when="Q1 2027"
              cta="Reserve early access"
              ctaHref="https://db.sentineloc.io/signup?plan=spectre&vault=pro"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-16 text-sm text-slate-400 font-sans">
          <strong className="text-slate-200">Open question:</strong> whether
          Vault Standard / Pro remain add-ons available on all tiers, or
          whether higher tiers bundle them by default. Resolved before
          launch. Tracked as Need-to-Know item 8.
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

function UpcomingTier({
  n,
  name,
  tagline,
}: {
  n: string;
  name: string;
  tagline: string;
}) {
  return (
    <div className="border border-white/[0.08] rounded p-6 bg-white/[0.02]">
      <div className="text-xs tracking-[0.3em] text-slate-400 font-bold mb-2">
        TIER {n}
      </div>
      <div className="text-xl font-bold text-white mb-2">{name}</div>
      <div className="text-xs text-slate-500 font-sans mb-5">{tagline}</div>
      <button
        type="button"
        disabled
        className="block w-full text-center px-4 py-2.5 text-xs tracking-widest font-bold rounded border border-white/10 text-slate-500 cursor-not-allowed"
      >
        NOTIFY ME — FORM TBD
      </button>
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
      <div className="text-xs text-slate-500 mb-5 font-sans">
        Available {when}
      </div>
      <a
        href={ctaHref}
        className="block text-center px-4 py-2.5 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
      >
        {cta.toUpperCase()} →
      </a>
    </div>
  );
}
