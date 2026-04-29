// /about — placeholder per user direction. Founder bio + product
// mission live here when content gets fleshed out. Keep the structure
// aligned with the persona doc's recommendation: founder visibility
// happens here on the about page, NOT on the homepage hero.

export const metadata = {
  title: "About — Sentinel OC",
};

export default function About() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-cyan-400 mb-4 font-bold">
            ABOUT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Built by an investigative journalist for the people who do this for a living.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-sans">
            Sentinel OC is an OSINT workspace that came out of one
            journalist&apos;s frustration with cobbling together six
            different tools to file a single story. The persona we
            built for and the founder are the same person.
          </p>
        </div>
      </section>

      {/* Placeholder bio block — content fleshes out over time. */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            FOUNDER
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Mark — Sentrion Labs
          </h2>
          <p className="text-slate-400 leading-relaxed font-sans">
            [Bio — fleshes out over time. Background as an
            investigative journalist, the gap that drove the build,
            why a journalist-built tool reads differently from one
            built by adjacent technologists.]
          </p>
        </div>
      </section>

      {/* Mission block. */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            MISSION
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">
            What we&apos;re trying to be.
          </h2>
          <ul className="space-y-4 text-slate-400 font-sans">
            <li>
              <strong className="text-slate-200">Speed over breadth.</strong>
              {" "}25 well-integrated sources beat 180 noisy ones.
            </li>
            <li>
              <strong className="text-slate-200">Workflow over dashboard.</strong>
              {" "}Your work is cases, not feeds.
            </li>
            <li>
              <strong className="text-slate-200">Privacy as default.</strong>
              {" "}You shouldn&apos;t have to configure your own protection.
            </li>
            <li>
              <strong className="text-slate-200">Honest claims.</strong>
              {" "}We say what each tier defeats AND what it doesn&apos;t. Overclaiming is its own breach of trust.
            </li>
            <li>
              <strong className="text-slate-200">Outputs that ship.</strong>
              {" "}When you export a PDF, it should be ready to attach to an editor email without reformatting.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
