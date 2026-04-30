// Layout for the new build (handoff v1.0). Shared header/footer
// for /preview/, /preview/for-journalists, /preview/for-analysts,
// /preview/pricing, /preview/features, /preview/security.
//
// Coming-soon root and the legacy preview each have their own layout.

import Link from "next/link";

export default function PreviewLayout({
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
        <Link href="/preview/" className="flex items-center gap-3 group">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
          <span className="text-sm tracking-[0.3em] font-bold text-white">
            SENTINEL<span className="text-sky-400">:</span>OC
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest text-slate-400">
          <Link href="/preview/for-journalists/" className="hover:text-white transition-colors">JOURNALISTS</Link>
          <Link href="/preview/for-analysts/" className="hover:text-white transition-colors">ANALYSTS</Link>
          <Link href="/preview/features/" className="hover:text-white transition-colors">FEATURES</Link>
          <Link href="/preview/pricing/" className="hover:text-white transition-colors">PRICING</Link>
          <Link href="/preview/security/" className="hover:text-white transition-colors">SECURITY</Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <a
            href="https://db.sentineloc.io/login"
            className="hidden sm:inline text-xs tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            LOG IN
          </a>
          <a
            href="https://db.sentineloc.io/signup?plan=spectre"
            className="px-4 py-2 text-xs tracking-widest font-bold rounded bg-sky-400/10 border border-sky-400/30 text-sky-300 hover:bg-sky-400/20 transition-colors"
          >
            START — $79/MO
          </a>
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
            OSINT investigation workspace. A product of Sentrion Labs.
          </p>
        </div>
        <div>
          <div className="tracking-widest text-slate-500 mb-3">PRODUCT</div>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/preview/for-journalists/" className="hover:text-white">For journalists</Link></li>
            <li><Link href="/preview/for-analysts/" className="hover:text-white">For analysts</Link></li>
            <li><Link href="/preview/features/" className="hover:text-white">Features</Link></li>
            <li><Link href="/preview/pricing/" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/preview/security/" className="hover:text-white">Security</Link></li>
          </ul>
        </div>
        <div>
          <div className="tracking-widest text-slate-500 mb-3">ACCOUNT</div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="https://db.sentineloc.io/login" className="hover:text-white">Log in</a></li>
            <li><a href="https://db.sentineloc.io/signup?plan=spectre" className="hover:text-white">Start a 14-day trial</a></li>
            <li><a href="mailto:mark@sentrionlabs.io" className="hover:text-white">Contact</a></li>
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
            <li>
              <a href="https://sentrionlabs.io/commitments/" className="hover:text-white">
                Commitments ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-5 text-center text-[10px] tracking-[0.2em] text-slate-600">
        SENTRION LABS · SENTINEL OC · NO ADS · NO TRACKING
      </div>
    </footer>
  );
}
