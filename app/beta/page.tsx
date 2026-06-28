// /beta — private-beta landing page.
//
// Standalone landing (not under app/(full)/) so it doesn't pull in
// the full-site header that links to features/pricing/security pages
// the public can't reach yet. The wordmark + sign-in link at the top
// is all the chrome this page needs.
//
// Outbound links:
//   • Beta sign-up    → https://db.sentineloc.io/signup?group=group-1
//                       (auto-stamps `group-1` at email-verify time via
//                        pending_signups.cohort_id → tenants.beta_cohort_id)
//   • Sign in         → https://db.sentineloc.io/login

import type { Metadata } from "next";
import Link from "next/link";
import SeatsRemaining from "../components/SeatsRemaining";

export const metadata: Metadata = {
  title: "Sentinel OC — Private Beta",
  description:
    "Sentinel is an investigative workspace for journalists, researchers, lawyers, and anyone whose work depends on rigorous documentation of complex information. Currently in private beta.",
  robots: { index: false, follow: false },
};

const SIGNUP_URL = "https://db.sentineloc.io/signup?group=group-1";
const LOGIN_URL = "https://db.sentineloc.io/login";

export default function BetaPage() {
  return (
    <div className="min-h-full flex flex-col">
      <MinimalHeader />
      <main className="flex-1">
        <Hero />
        <ProductShot />
        <Prose />
        <SignUpCTA />
      </main>
      <MinimalFooter />
    </div>
  );
}

// ─── Header ────────────────────────────────────────────────────────
// Wordmark + sign-in. No nav — the public-facing pages aren't
// published yet and the BETA cohort doesn't need them.
function MinimalHeader() {
  return (
    <header className="border-b border-white/[0.06] bg-[#06090f]/95 sticky top-0 z-40 backdrop-blur">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/sentinel-oc-helmet.jpg" alt="Sentinel OC" className="h-12 w-auto" />
          <span className="text-sm tracking-[0.3em] font-bold text-white">
            SENTINEL<span className="text-sky-400">:</span>OC
          </span>
        </Link>
        <a
          href={LOGIN_URL}
          className="ml-auto text-xs tracking-widest text-slate-400 hover:text-white transition-colors"
        >
          SIGN IN
        </a>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────
// Big wordmark, short subhead, red "private beta" pill below — matches
// the coming-soon root's centered hero rhythm but at h1/h2 hierarchy.
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle backdrop — same hero photo the coming-soon root uses,
          dimmer and flipped horizontally so it doesn't compete with copy. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/hero-investigator.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
          transform: "scaleX(-1) translateX(-15%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-3 mb-8 justify-center">
          <span className="w-8 h-px bg-sky-400/60" />
          <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
            SENTINEL : OC
          </span>
          <span className="w-8 h-px bg-sky-400/60" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
          Sentinel
        </h1>
        {/* Issue 6: the pitch's three-beat line, promoted to the subhead —
            it tells the target reader exactly what pain dies. */}
        <p className="mt-6 text-xl md:text-2xl text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed font-sans">
          Every claim cited. Every source archived.
        </p>
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
          Investigative workspace for journalists and researchers.
        </p>
        {/* "Currently in private beta" — required H4 in red. The pill
            framing keeps it visible without competing with the H1. */}
        <h4 className="mt-10 inline-block text-sm md:text-base tracking-[0.3em] font-bold text-red-400 border border-red-400/30 bg-red-400/[0.06] rounded px-4 py-2">
          CURRENTLY IN PRIVATE BETA
        </h4>
      </div>
    </section>
  );
}

// ─── Product shot ──────────────────────────────────────────────────
// A real screenshot of the investigation workspace, framed and pulled
// up slightly under the hero so the page shows the product before it
// describes it. Plain <img> (not next/image) — the site is a static
// export, so an unoptimized tag avoids the image-loader config dance.
function ProductShot() {
  return (
    <section className="max-w-5xl mx-auto px-6 -mt-2 pb-4">
      <figure>
        <div className="rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50 bg-[#06090f]">
          <img
            src="/product-investigation.jpg"
            alt="Sentinel investigation workspace — entity graph, multi-source search, and a cited composer in one canvas"
            width={1826}
            height={909}
            className="w-full h-auto block"
          />
        </div>
        <figcaption className="mt-3 text-center text-xs text-slate-500 font-sans leading-relaxed">
          The investigation canvas — entities and relationships mapped, open
          sources searched, and every claim cited in the composer.
        </figcaption>
      </figure>
    </section>
  );
}

// ─── Prose ─────────────────────────────────────────────────────────
// Body sections. Sans-serif for long-form copy (mono is exhausting
// past a sentence or two). Each H3 followed by a paragraph or list
// in the same rhythm so the page scans.
function Prose() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 font-sans text-slate-300 leading-relaxed text-base md:text-lg">
      <SectionHeading>What is Sentinel OC?</SectionHeading>
      <p>
        Sentinel OC is a workspace built to streamline the process from
        deep investigation to finalized report.
      </p>
      <p className="mt-5">
        Track entities, relationships, and evidence in a structured
        environment.
      </p>
      <p className="mt-5">
        Built with source security as a foundational principle, not an
        afterthought — because investigative work increasingly
        requires defensive infrastructure.
      </p>
      <p className="mt-5">
        For journalists, researchers, writers, lawyers, and anyone
        whose work depends on rigorous documentation of complex
        information.
      </p>

      {/* Issue 5: give-before-ask — what testers receive comes first,
          then what we're hoping they'll help us identify. */}
      <SectionHeading>What beta testers receive</SectionHeading>
      <ProseList items={[
        "Free access during the 4-week beta period",
        "Direct line to the founder for feedback and questions",
        "50% off the first year if you choose to continue after beta",
        "A say in the product before it's locked in for public launch",
      ]} />

      <SectionHeading>What we&rsquo;re hoping you&rsquo;ll help us identify</SectionHeading>
      <p>
        Sentinel is mature enough to do real work, but the public
        launch isn&rsquo;t until later this year. The beta period lets
        a small group of professionals test the product in real
        working conditions and shape it before launch.
      </p>
      <p className="mt-5">You can help us pin down:</p>
      <ProseList items={[
        "What works in real investigative workflows",
        "What's confusing or missing",
        "What features matter most to professional users",
        "Where the product needs refinement before public release",
      ]} />

      <SectionHeading>How much time does it take?</SectionHeading>
      <p>
        Whatever fits your schedule. An hour of feedback over the beta
        period is genuinely valuable. Active use during real
        investigations is even better.
      </p>
      <p className="mt-5">
        There&rsquo;s no minimum commitment. If you sign up and find
        it&rsquo;s not for you, just let me know — no hard feelings.
      </p>

      <SectionHeading>Who is Sentinel for?</SectionHeading>
      <ProseList items={[
        "Investigative journalists",
        "Academic researchers",
        "Documentary filmmakers",
        "Authors and nonfiction writers",
        "Lawyers in case preparation",
        "Policy researchers",
        "Citizen investigators",
      ]} />
      <p className="mt-6">
        Sentinel is topic-agnostic. We provide infrastructure for
        First Amendment activities — not editorial judgment about what
        should be investigated.
      </p>
      <p className="mt-5">
        Anyone doing rigorous source-based investigations is the
        right fit.
      </p>
    </section>
  );
}

// Section heading helper — keeps the H3 styling consistent across
// the page and gives every section the same vertical breathing room.
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-16 mb-5 text-2xl md:text-3xl font-bold text-white tracking-tight">
      {children}
    </h3>
  );
}

// Bulleted-list helper — sky-blue dot prefix matches the rest of the
// accent palette and reads as "system marker," not generic decoration.
function ProseList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-3 items-start">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Sign-up CTA ───────────────────────────────────────────────────
// Last section of the page. Slightly emphasized container so the CTA
// reads as the page's payoff. Two links: primary (sign up + auto-
// group-1), secondary (sign in for already-invited testers).
function SignUpCTA() {
  return (
    <section className="max-w-2xl mx-auto px-6 pb-24 font-sans">
      <SectionHeading>Beta access sign-up</SectionHeading>
      {/* Issue 4: concrete scarcity, tied to Settings. Live group + seats-
          remaining read from the SOC signup config (db.sentineloc.io);
          client-fetched (static site) with an honest fallback. */}
      <SeatsRemaining className="text-slate-300 text-base md:text-lg leading-relaxed" />
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href={SIGNUP_URL}
          className="inline-flex items-center justify-center px-6 py-3 rounded bg-sky-400 text-[#001423] text-sm font-bold tracking-widest hover:bg-sky-300 transition-colors"
        >
          REQUEST BETA ACCESS →
        </a>
        <a
          href={LOGIN_URL}
          className="inline-flex items-center justify-center px-6 py-3 rounded border border-sky-400/40 text-sky-300 text-sm font-bold tracking-widest hover:bg-sky-400/10 transition-colors"
        >
          ALREADY HAVE AN INVITATION? SIGN IN
        </a>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────
// Minimal — wordmark + back-to-home. The full marketing footer (with
// company links, security info, etc.) belongs on the public site
// after launch; this page is a single-purpose beta landing.
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
