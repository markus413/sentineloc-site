// /security — STUB per handoff doc Section 3. Deep-dive based on
// vault build plan + five-layer license architecture.

import Stub from "../../components/CopyStub";

export const metadata = {
  title: "Security — Sentinel OC",
  description:
    "Threat model, Vault architecture, hardening posture, audit and " +
    "incident response, vulnerability disclosure. Copy in revision.",
};

export default function Security() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            SECURITY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Architecture, threat models, and what we won&apos;t claim.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl font-sans leading-relaxed">
            Buyers reading this page have already self-selected as
            security-careful. This page is allowed to be more technical
            than the rest of the site.
          </p>
        </div>
      </section>

      <Stub
        title="Security deep-dive copy pending"
        notes={[
          "Source: sentinel-oc-vault-build-plan.md and the five-layer license architecture.",
          "Required sections: Threat model, Vault tier architecture (deeper than home page), Hardening posture, License / data isolation, Audit and incident response, Vulnerability disclosure.",
          "Cross-link to sentrionlabs.io/security for company-level commitments.",
        ]}
      />
    </>
  );
}
