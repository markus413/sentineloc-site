// /research-format — public methodology asset.
//
// Standalone page (not under app/(full)/) so it bypasses the full-
// site nav. Hosts the four Sentinel Research Format prompts as
// copy-paste-ready code blocks. Soft Sentinel pitch at the bottom.
//
// robots: noindex until the prompts are validated against multiple
// AIs and the page has been tested in real distribution. Flip to
// indexable when stable.

import type { Metadata } from "next";
import Link from "next/link";
import PromptBlock from "./PromptBlock";
import { VARIANTS } from "./prompts";

export const metadata: Metadata = {
  title: "Sentinel Research Format — Structure AI investigation output",
  description:
    "Free prompts that make any AI (Claude, ChatGPT, Gemini) structure its research output for clean import into Sentinel. Use with any tool, customer or not.",
  robots: { index: false, follow: false },
};

export default function ResearchFormatPage() {
  return (
    <div className="min-h-full flex flex-col">
      <MinimalHeader />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Prompts />
        <VerificationNote />
        <SentinelPitch />
      </main>
      <MinimalFooter />
    </div>
  );
}

// ─── Header ────────────────────────────────────────────────────────
function MinimalHeader() {
  return (
    <header className="border-b border-white/[0.06] bg-[#06090f]/95 sticky top-0 z-40 backdrop-blur">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
          <span className="text-sm tracking-[0.3em] font-bold text-white">
            SENTINEL<span className="text-sky-400">:</span>OC
          </span>
        </Link>
        <Link
          href="/beta/"
          className="ml-auto text-xs tracking-widest text-slate-400 hover:text-white transition-colors"
        >
          BETA
        </Link>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-8 justify-center">
          <span className="w-8 h-px bg-sky-400/60" />
          <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
            RESEARCH FORMAT · v1
          </span>
          <span className="w-8 h-px bg-sky-400/60" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
          Structure AI&nbsp;research<br />
          <span className="text-sky-400">for serious investigation.</span>
        </h1>
        <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Four prompts that make any AI organize its research into
          entities, relationships, timelines, and explicit
          verification flags — so the output is useful instead of
          just confident.
        </p>
      </div>
    </section>
  );
}

// ─── Intro (the methodology framing) ──────────────────────────────
function Intro() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-8 font-sans text-slate-300 leading-relaxed text-base md:text-lg">
      <p>
        Paste one of these prompts into your AI of choice. Add your
        research topic at the bottom. Get back structured findings
        with consistent entity notation, explicit confidence levels,
        and a list of claims the AI thinks deserve verification.
      </p>
      <p className="mt-5">
        The format is free to use with any AI &mdash; Claude,
        ChatGPT, Gemini, local models. No account, no signup. It
        imports cleanly into{" "}
        <Link href="/beta/" className="text-sky-400 underline underline-offset-4 hover:text-sky-300">
          Sentinel
        </Link>{" "}
        when you&rsquo;re ready, but it&rsquo;s useful with any
        workflow.
      </p>
      <p className="mt-5">
        Each prompt asks the AI to be{" "}
        <em className="text-white font-medium">generous</em> about
        flagging claims for independent verification. That
        discipline is the methodology. AI-stated confidence is not
        reliability &mdash; AIs are confidently wrong constantly.
        The format treats AI output as a structured starting point,
        not a finding.
      </p>

      {/* Variant index for quick scanning. */}
      <div className="mt-10 border-t border-white/[0.06] pt-6">
        <div className="text-xs tracking-[0.3em] text-slate-500 font-bold mb-3">
          THE FOUR VARIANTS
        </div>
        <ul className="space-y-2">
          {VARIANTS.map((v) => (
            <li key={v.id} className="text-sm">
              <a href={`#${v.id}`} className="text-sky-400 hover:text-sky-300 font-medium">
                {v.name}
              </a>
              <span className="text-slate-500"> &mdash; {v.oneLiner}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Prompts ───────────────────────────────────────────────────────
function Prompts() {
  return (
    <section className="max-w-2xl mx-auto px-6 pb-8">
      {VARIANTS.map((v) => (
        <PromptBlock
          key={v.id}
          id={v.id}
          name={v.name}
          oneLiner={v.oneLiner}
          prompt={v.prompt}
        />
      ))}
    </section>
  );
}

// ─── Verification note (the honest framing, restated) ─────────────
function VerificationNote() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <div className="border border-amber-400/30 bg-amber-400/[0.05] rounded-lg p-6">
        <div className="text-xs tracking-[0.3em] text-amber-300 font-bold mb-3">
          A NOTE ON CONFIDENCE
        </div>
        <p className="text-slate-300 leading-relaxed font-sans">
          These prompts ask the AI to mark its own output with a
          confidence level &mdash; <em>stated</em>, <em>inferred</em>,
          or <em>uncertain</em> &mdash; and to flag claims it thinks
          should be independently verified.
        </p>
        <p className="text-slate-300 leading-relaxed font-sans mt-4">
          That marking is the AI&rsquo;s self-assessment, not a
          measurement of accuracy. An AI can be confident and wrong.
          The format is a discipline that surfaces claims for
          verification; it does not perform the verification. That
          part is still your job.
        </p>
      </div>
    </section>
  );
}

// ─── Soft Sentinel pitch ──────────────────────────────────────────
function SentinelPitch() {
  return (
    <section className="max-w-2xl mx-auto px-6 pb-24 font-sans">
      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
        Working with structured research?
      </h3>
      <p className="text-slate-300 leading-relaxed text-base md:text-lg">
        Sentinel is the workspace these prompts are designed to
        feed. Entities, relationships, timelines, and
        verification-flagged claims import cleanly into an
        investigation graph. You can use Sentinel with the format,
        without it, or just keep using the format with whatever
        workflow you already have.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/beta/"
          className="inline-flex items-center justify-center px-6 py-3 rounded bg-sky-400 text-[#001423] text-sm font-bold tracking-widest hover:bg-sky-300 transition-colors"
        >
          REQUEST BETA ACCESS →
        </Link>
        <a
          href="https://github.com/markus413"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded border border-slate-500/40 text-slate-300 text-sm font-bold tracking-widest hover:border-slate-300 hover:text-white transition-colors"
        >
          FORMAT ON GITHUB ↗
        </a>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────
function MinimalFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 tracking-widest">
        <div>
          <span className="font-bold text-slate-400">
            SENTINEL<span className="text-sky-400">:</span>OC
          </span>
          {" · "}
          <span>Sentrion Labs</span>
        </div>
        <Link href="/" className="hover:text-white transition-colors">
          ← BACK TO HOME
        </Link>
      </div>
    </footer>
  );
}
