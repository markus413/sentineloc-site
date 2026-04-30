// /preview/security — STUB. Per handoff: deep-dive based on the vault
// build plan and the five-layer license architecture. Voice allowed
// to be more technical — buyers reading this page have self-selected
// as security-careful.

import Link from "next/link";
import StubBanner from "../_components/StubBanner";

export const metadata = {
  title: "Security — Sentinel OC (stub)",
};

const SECTIONS = [
  {
    label: "01",
    title: "Threat model",
    body: "[XXX — COPY COMING — XXX] Who we defend against (opportunistic breach, vendor subpoena, sophisticated attacker, device compromise) and which Vault tier addresses each.",
  },
  {
    label: "02",
    title: "Vault tier architecture",
    body: "[XXX — COPY COMING — XXX] Deeper than the home page version. Key management for Lite. Client-side encryption flow for Standard. Hardware key + per-tier canary for Pro. 24-word recovery phrase semantics.",
  },
  {
    label: "03",
    title: "Hardening posture",
    body: "[XXX — COPY COMING — XXX] Decoy entry points, hidden authentication paths, mutual TLS client certificates, honeytoken intrusion detection, no source maps in production, no search engine indexing of operational surfaces.",
  },
  {
    label: "04",
    title: "License / data isolation",
    body: "[XXX — COPY COMING — XXX] Five-layer license architecture. Operational separation between auth and data infrastructure. Per-customer data isolation guarantees.",
  },
  {
    label: "05",
    title: "Audit and incident response",
    body: "[XXX — COPY COMING — XXX] Audit logging, retention, customer-visible audit trail, incident response process, customer notification.",
  },
  {
    label: "06",
    title: "Vulnerability disclosure",
    body: "[XXX — COPY COMING — XXX] How to report. PGP key for security disclosures. 72-hour acknowledgment SLA. Coordinated disclosure preferred.",
  },
];

export default function Security() {
  return (
    <>
      <StubBanner
        pageName="/security"
        source="Source: sentinel-oc-vault-build-plan.md + license architecture"
      />

      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-4 font-bold">
            SECURITY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How Sentinel is built.
          </h1>
          <p className="text-slate-300 max-w-3xl font-sans leading-relaxed">
            Detailed architecture for buyers who&apos;ve self-selected as
            security-careful. Allowed to be more technical than the rest of
            the site.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
          {SECTIONS.map((s) => (
            <article
              key={s.label}
              className="border-l-2 border-white/[0.06] pl-6 hover:border-sky-400/40 transition-colors"
            >
              <div className="text-xs tracking-[0.3em] text-sky-400 font-bold mb-2">
                {s.label}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {s.title}
              </h2>
              <p className="text-slate-300 font-sans leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.3em] text-slate-400 font-bold mb-3">
            COMPANY-LEVEL COMMITMENTS
          </div>
          <p className="text-slate-300 font-sans leading-relaxed mb-4">
            Sentrion Labs (parent company) publishes commitments, a signed
            warrant canary, and PGP contact details on the company site.
          </p>
          <a
            href="https://sentrionlabs.io/security/"
            className="inline-block px-6 py-3 text-xs tracking-widest font-bold rounded border border-sky-400/40 text-sky-300 bg-sky-400/5 hover:bg-sky-400/15 transition-colors"
          >
            sentrionlabs.io/security ↗
          </a>
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
