// /pricing — STUB per handoff doc Section 3. Option B structure:
// Tier 1 "Spectre" presented in full; Tier 2/3/4 names visible only.
// Vault add-ons available as pre-orders. Detailed FAQ + cross-tier
// content TBD.

import Link from "next/link";
import Stub from "../../components/CopyStub";

export const metadata = {
  title: "Pricing — Sentinel OC",
  description:
    "Tier 1 Spectre at $79/mo. Vault add-ons as pre-orders. Higher " +
    "tiers acknowledged. No bait-and-switch.",
};

export default function Pricing() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            PRICING
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            One tier at launch. More as we earn it.
          </h1>
          <p className="text-slate-300 max-w-3xl font-sans leading-relaxed">
            Tier 1 &ldquo;Spectre&rdquo; ships with everything. The
            higher tiers exist on the roadmap — names are locked,
            contents aren&apos;t. Vault add-ons attach to whatever
            tier you&apos;re on.
          </p>
        </div>
      </section>

      {/* TIER 1 — SPECTRE */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="border-2 border-sky-400/40 rounded p-8 md:p-12 bg-sky-400/[0.04]">
            <div className="text-xs tracking-[0.3em] font-bold text-sky-400 mb-4">
              TIER 1 · &ldquo;SPECTRE&rdquo;
            </div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-6xl font-bold text-white">$79</span>
              <span className="text-2xl text-slate-400">/mo</span>
            </div>
            <p className="text-slate-300 font-sans mb-6 leading-relaxed text-lg max-w-2xl">
              All sources. All features. Full export. Vault Lite
              included.
            </p>
            <p className="text-xs text-slate-500 font-sans mb-8">
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
        </div>
      </section>

      {/* HIGHER TIERS */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Higher tiers, on the way.
          </h2>
          <p className="text-slate-400 font-sans max-w-2xl mb-10 text-sm leading-relaxed">
            Names are locked; contents are not yet committed. We&apos;ll
            publish what each tier includes when we&apos;ve proven the
            individual experience first.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FutureTier n="2" name="Janus" />
            <FutureTier n="3" name="Helios" />
            <FutureTier n="4" name="Argus" />
          </div>
          <p className="mt-8 text-xs text-slate-500 font-sans">
            Want to know when these ship? Drop us a line at{" "}
            <a href="mailto:mark@sentrionlabs.io" className="text-sky-400 hover:underline">
              mark@sentrionlabs.io
            </a>
            .
          </p>
        </div>
      </section>

      {/* VAULT ADD-ONS */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-3 font-bold">
            VAULT ADD-ONS · PRE-ORDER
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Encryption tiers attach to whatever plan you&apos;re on.
          </h2>
          <p className="text-slate-300 max-w-3xl mb-10 font-sans leading-relaxed">
            Vault Lite is included. Vault Standard and Vault Pro are
            opt-in add-ons. Reserve today and lock in launch pricing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <Addon
              name="Vault Standard"
              price="+$30/mo"
              avail="Available Q4 2026"
              body="Client-side encryption. Content encrypted in your browser before it leaves. We can't decrypt it."
              href="https://db.sentineloc.io/reserve?vault=standard"
            />
            <Addon
              name="Vault Pro"
              price="+$80/mo"
              avail="Available Q1 2027"
              body="Everything in Standard, plus FIDO2 / YubiKey hardware key required for login."
              href="https://db.sentineloc.io/reserve?vault=pro"
            />
          </div>
        </div>
      </section>

      <Stub
        title="FAQ + cross-tier matrix coming"
        notes={[
          "Annual prepay vs month-to-month details.",
          "Trial expectations + cancellation policy.",
          "Whether Vault Standard / Pro remain add-ons across all tiers, or bundle into higher tiers (Need-to-Know item 8).",
          "Refund policy for Vault add-on pre-orders.",
        ]}
      />

      <section className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-sm text-slate-400 font-sans mb-5">
            Questions on pricing for your specific use case?
          </p>
          <Link
            href="/for-journalists/"
            className="inline-block px-6 py-3 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors mr-3"
          >
            → FOR JOURNALISTS
          </Link>
          <Link
            href="/for-analysts/"
            className="inline-block px-6 py-3 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
          >
            → FOR ANALYSTS
          </Link>
        </div>
      </section>
    </>
  );
}

function FutureTier({ n, name }: { n: string; name: string }) {
  return (
    <div className="border border-white/[0.08] rounded p-6 bg-white/[0.02]">
      <div className="text-xs tracking-[0.3em] font-bold text-slate-500 mb-2">
        TIER {n}
      </div>
      <div className="text-2xl font-bold text-white tracking-tight">
        &ldquo;{name}&rdquo;
      </div>
      <div className="mt-4 text-xs text-slate-500 tracking-widest font-bold">
        TBD
      </div>
    </div>
  );
}

function Addon({
  name,
  price,
  avail,
  body,
  href,
}: {
  name: string;
  price: string;
  avail: string;
  body: string;
  href: string;
}) {
  return (
    <a href={href} className="card-accent block border border-white/[0.10] rounded p-6 bg-white/[0.02]">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="font-bold text-white text-lg tracking-wide">{name}</div>
        <div className="text-sky-400 font-bold">{price}</div>
      </div>
      <div className="text-xs text-slate-500 font-sans mb-4">{avail}</div>
      <p className="text-sm text-slate-300 font-sans leading-relaxed mb-5">
        {body}
      </p>
      <div className="text-xs tracking-widest font-bold text-sky-400">
        [ RESERVE EARLY ACCESS → ]
      </div>
    </a>
  );
}
