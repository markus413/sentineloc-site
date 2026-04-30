"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  headline: React.ReactNode;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "JOURNALIST · WORKFLOW",
    headline: (
      <>
        Your investigation isn&apos;t a feed.
        <br />
        It&apos;s a <span className="text-sky-400">case</span>.
      </>
    ),
    body:
      "Track entities across long-running stories. Save sources. Export reports your editor can actually use.",
    ctaLabel: "Built for investigative work →",
    ctaHref: "/preview/for-journalists/",
  },
  {
    eyebrow: "JOURNALIST · SOURCE PROTECTION",
    headline: (
      <>
        Built like the targets are <span className="text-sky-400">watching</span>.
      </>
    ),
    body:
      "Hidden auth paths. Mutual TLS. Tiered encryption you choose per case. Your notes don't live on someone else's server in cleartext.",
    ctaLabel: "Built for investigative work →",
    ctaHref: "/preview/for-journalists/",
  },
  {
    eyebrow: "ANALYST · DELIVERABLE",
    headline: (
      <>
        Reports that <span className="text-sky-400">bill out</span>.
        <br />
        Sources that hold up.
      </>
    ),
    body:
      "Every fact cited. Every connection scored. Export a professional deliverable in PDF, DOCX, or Excel — without rebuilding it from notes.",
    ctaLabel: "Built for OSINT analysts and researchers →",
    ctaHref: "/preview/for-analysts/",
  },
  {
    eyebrow: "ANALYST · RESEARCH DEPTH",
    headline: (
      <>
        Entity link analysis without the{" "}
        <span className="text-sky-400">Maltego tax</span>.
      </>
    ),
    body:
      "Click an entity. Run a transform. Map the connections. Twenty-five integrated sources across sanctions, corporate filings, threat intel, and news.",
    ctaLabel: "Built for OSINT analysts and researchers →",
    ctaHref: "/preview/for-analysts/",
  },
];

const ROTATE_MS = 9000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const slide = SLIDES[index];

  return (
    <section
      className="relative border-b border-white/[0.06] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-bleed photo, same as coming-soon for visual continuity */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="inline-flex items-center gap-3 mb-8 transition-opacity">
          <span className="w-8 h-px bg-sky-400/60" />
          <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
            {slide.eyebrow}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-3xl tracking-tight min-h-[12rem] md:min-h-[16rem]">
          {slide.headline}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans">
          {slide.body}
        </p>
        <div className="mt-8">
          <Link
            href={slide.ctaHref}
            className="inline-block px-6 py-3 text-xs tracking-widest font-bold rounded border border-sky-400/40 text-sky-300 bg-sky-400/5 hover:bg-sky-400/15 transition-colors"
          >
            {slide.ctaLabel}
          </Link>
        </div>

        {/* Slide dots */}
        <div className="mt-12 flex items-center gap-3" role="tablist" aria-label="Hero slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.eyebrow}
              role="tab"
              aria-selected={i === index}
              aria-label={s.eyebrow}
              onClick={() => setIndex(i)}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === index
                  ? "w-10 bg-sky-400"
                  : "w-5 bg-white/20 hover:bg-white/40")
              }
            />
          ))}
        </div>
      </div>

      {/* Constant CTA below slides */}
      <div className="relative z-10 border-t border-white/[0.06] bg-[#04070d]/70 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center gap-5">
          <a
            href="https://db.sentineloc.io/signup?plan=spectre"
            className="px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#04070d] hover:bg-sky-300 transition-colors shadow-[0_0_40px_-10px_rgba(14,165,233,0.7)]"
          >
            START A 14-DAY TRIAL
          </a>
          <Link
            href="/preview/features/"
            className="px-7 py-3.5 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
          >
            SEE HOW IT WORKS
          </Link>
          <p className="text-xs text-slate-500 font-sans md:ml-auto">
            No credit card to start. No ads. No tracking. Ever.
          </p>
        </div>
      </div>
    </section>
  );
}
