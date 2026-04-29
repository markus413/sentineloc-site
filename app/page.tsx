// Coming-soon root. No header, no footer, no links. The full design
// lives at /preview/ and the rest of the site (about, features,
// pricing) is preserved at its original URLs for reference.

export default function ComingSoon() {
  return (
    <section className="relative flex-1 flex items-center justify-center overflow-hidden bg-black">
      {/* Same full-bleed hero photo from the previous home */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/hero-investigator.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-3 mb-8 justify-center">
          <span className="w-8 h-px bg-sky-400/60" />
          <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
            SENTINEL : OC
          </span>
          <span className="w-8 h-px bg-sky-400/60" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
          Coming <span className="text-sky-400">soon.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
          OSINT workspace for investigations, research, and analysis.
        </p>
        <div className="mt-12 text-[10px] tracking-[0.4em] text-slate-500 font-bold">
          BETA · SUMMER 2026
        </div>
      </div>
    </section>
  );
}
