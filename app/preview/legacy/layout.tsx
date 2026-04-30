// Layout for the legacy preview (the original full design, preserved
// for reference under /preview/legacy/). The new build lives at
// /preview/(new)/. Coming-soon root uses the bare app/layout.tsx.

import Link from "next/link";

export default function LegacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-white/[0.06] bg-[#06090f]/95 sticky top-0 z-40 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">
        <Link href="/preview/legacy/" className="flex items-center gap-3 group">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
          <span className="text-sm tracking-[0.3em] font-bold text-white">
            SENTINEL<span className="text-sky-400">:</span>OC
          </span>
          <span className="text-[9px] tracking-[0.3em] text-slate-500 ml-2">LEGACY</span>
        </Link>
        <nav className="flex items-center gap-6 text-xs tracking-widest text-slate-400">
          <Link href="/preview/legacy/features/" className="hover:text-white transition-colors">FEATURES</Link>
          <Link href="/preview/legacy/pricing/" className="hover:text-white transition-colors">PRICING</Link>
          <Link href="/preview/legacy/about/" className="hover:text-white transition-colors">ABOUT</Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/preview/"
            className="text-xs tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            ← CURRENT BUILD
          </Link>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        <div>
          <div className="tracking-[0.3em] font-bold text-white mb-3">
            SENTINEL<span className="text-sky-400">:</span>OC
          </div>
          <p className="text-slate-500 leading-relaxed">
            Legacy preview. The current build lives at{" "}
            <Link href="/preview/" className="text-sky-400 hover:underline">
              /preview/
            </Link>
            .
          </p>
        </div>
        <div>
          <div className="tracking-widest text-slate-500 mb-3">PRODUCT</div>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/preview/legacy/features/" className="hover:text-white">Features</Link></li>
            <li><Link href="/preview/legacy/pricing/" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/preview/legacy/about/" className="hover:text-white">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="tracking-widest text-slate-500 mb-3">ACCOUNT</div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="https://db.sentineloc.io/login" className="hover:text-white">Log in</a></li>
            <li><a href="https://db.sentineloc.io/signup?plan=investigator" className="hover:text-white">Sign up</a></li>
          </ul>
        </div>
        <div>
          <div className="tracking-widest text-slate-500 mb-3">PARENT</div>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="https://sentrionlabs.io/" className="hover:text-white">
                Sentrion Labs ↗
              </a>
            </li>
            <li>
              <a href="https://sentrionlabs.io/canary/" className="hover:text-white">
                Warrant canary ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-5 text-center text-[10px] tracking-[0.2em] text-slate-600">
        SENTRION LABS · SENTINEL OC · LEGACY PREVIEW
      </div>
    </footer>
  );
}
