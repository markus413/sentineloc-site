// Four-slide auto-rotating hero per build-handoff doc Section 3 / `/`.
// Auto-rotates every 9s; clickable dot nav; each slide links to its
// audience door. Client component — needs setInterval + state.

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  headline: React.ReactNode;
  body: string;
  cta: string;
  href: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "JOURNALIST · WORKFLOW",
    headline: (
      <>
        Your investigation isn&apos;t a feed. It&apos;s a{" "}
        <span className="text-sky-400">case.</span>
      </>
    ),
    body:
      "Track entities across long-running stories. Save sources. Export reports your editor can actually use.",
    cta: "Built for investigative work →",
    href: "/for-journalists/",
  },
  {
    eyebrow: "JOURNALIST · SOURCE PROTECTION",
    headline: (
      <>
        Built like the targets are{" "}
        <span className="text-sky-400">watching.</span>
      </>
    ),
    body:
      "Hidden auth paths. Mutual TLS. Tiered encryption you choose per case. Your notes don't live on someone else's server in cleartext.",
    cta: "Built for investigative work →",
    href: "/for-journalists/",
  },
  {
    eyebrow: "ANALYST · DELIVERABLE",
    headline: (
      <>
        Reports that bill out. Sources that{" "}
        <span className="text-sky-400">hold up.</span>
      </>
    ),
    body:
      "Every fact cited. Every connection scored. Export a professional deliverable in PDF, DOCX, or Excel — without rebuilding it from notes.",
    cta: "Built for OSINT analysts and researchers →",
    href: "/for-analysts/",
  },
  {
    eyebrow: "ANALYST · RESEARCH DEPTH",
    headline: (
      <>
        Entity link analysis without the{" "}
        <span className="text-sky-400">Maltego tax.</span>
      </>
    ),
    body:
      "Click an entity. Run a transform. Map the connections. Twenty-five integrated sources across sanctions, corporate filings, threat intel, and news.",
    cta: "Built for OSINT analysts and researchers →",
    href: "/for-analysts/",
  },
];

const ROTATE_MS = 9000;

export default function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setI((prev) => (prev + 1) % SLIDES.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative border-b border-white/[0.06] overflow-hidden bg-black">
      {/* Same hero photo from coming-soon, kept for visual continuity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/hero-investigator.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
          transform: "scaleX(-1) translateX(-15%)",
        }}
        aria-hidden="true"
      />

      {/* Falling data streams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="stream" style={{ left: "62%", animationDuration: "5s", animationDelay: "0s" }} />
        <span className="stream" style={{ left: "70%", animationDuration: "7s", animationDelay: "1.4s" }} />
        <span className="stream" style={{ left: "82%", animationDuration: "6s", animationDelay: "2.6s" }} />
        <span className="stream" style={{ left: "92%", animationDuration: "8s", animationDelay: "0.8s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 md:pt-40 pb-16">
        {/* Slide stack — only the active one is visible. We render all
            four so the layout reserves the tallest slide's height. */}
        <div className="relative min-h-[340px] md:min-h-[300px]">
          {SLIDES.map((s, idx) => (
            <div
              key={idx}
              className={`transition-opacity duration-700 ${
                idx === i ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
              }`}
              aria-hidden={idx !== i}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-sky-400/60" />
                <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
                  {s.eyebrow}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-3xl tracking-tight">
                {s.headline}
              </h1>
              <p className="mt-7 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans">
                {s.body}
              </p>
              <Link
                href={s.href}
                className="mt-8 inline-block text-sm tracking-widest font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                [ {s.cta} ]
              </Link>
            </div>
          ))}
        </div>

        {/* Dot nav */}
        <div className="mt-10 flex items-center gap-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i
                  ? "w-8 bg-sky-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Constant CTA below slides */}
        <div className="mt-12 flex flex-wrap gap-4 items-center">
          <a
            href="https://db.sentineloc.io/signup?plan=spectre"
            className="px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors shadow-[0_0_40px_-10px_rgba(14,165,233,0.7)]"
          >
            START A 14-DAY TRIAL
          </a>
          <Link
            href="/features/"
            className="px-7 py-3.5 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
          >
            SEE HOW IT WORKS
          </Link>
        </div>
        <p className="mt-5 text-xs text-slate-500 font-sans">
          No credit card to start. No ads. No tracking. Ever.
        </p>
      </div>
    </section>
  );
}
