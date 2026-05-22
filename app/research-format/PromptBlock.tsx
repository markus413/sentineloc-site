"use client";

// Per-variant prompt block. Renders the prompt in a dark
// monospace code area with a Copy button. The button flips to
// "Copied ✓" for ~2s after a successful clipboard write so the
// click has visible feedback.
//
// Clipboard API is available on every modern browser served via
// HTTPS; sentineloc.io is HTTPS-only (CF Pages), so we can rely on
// navigator.clipboard.writeText without an execCommand fallback.

import { useEffect, useState } from "react";

export default function PromptBlock({
  id,
  name,
  oneLiner,
  prompt,
}: {
  id: string;
  name: string;
  oneLiner: string;
  prompt: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
    } catch {
      // Last-ditch fallback for Safari < 13.1 / private mode: a
      // hidden textarea + document.execCommand. Both APIs are
      // deprecated but still work; the modern path above will
      // succeed for >99% of visitors.
      const ta = document.createElement("textarea");
      ta.value = prompt;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch { /* give up — user can ctrl-c manually */ }
      document.body.removeChild(ta);
    }
  }

  return (
    <section
      id={id}
      className="scroll-mt-20 mt-16 first:mt-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
        {name}
      </h2>
      <p className="text-slate-400 mb-5 font-sans leading-relaxed">
        {oneLiner}
      </p>

      {/* The prompt block + copy button. Position:relative on the
          outer div anchors the absolutely-positioned button. */}
      <div className="relative">
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${name} prompt to clipboard`}
          className={[
            "absolute top-3 right-3 z-10",
            "px-3 py-1.5 rounded text-xs tracking-widest font-bold",
            "border transition-colors",
            copied
              ? "bg-emerald-400/15 border-emerald-400/60 text-emerald-300"
              : "bg-[#06090f]/80 border-sky-400/40 text-sky-300 hover:bg-sky-400/15 hover:border-sky-400/70",
          ].join(" ")}
        >
          {copied ? "COPIED ✓" : "COPY"}
        </button>
        <pre
          className={[
            "rounded-lg",
            "bg-[#070d18] border border-white/[0.06]",
            "p-5 pt-12",     // pt-12 = leave room for the Copy button
            "text-[12px] leading-[1.55] text-slate-300",
            "overflow-x-auto whitespace-pre",
            "font-mono",
          ].join(" ")}
        >
          {prompt}
        </pre>
      </div>
    </section>
  );
}
