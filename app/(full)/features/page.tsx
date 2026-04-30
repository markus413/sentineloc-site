// /features — STUB per handoff doc Section 3. Audience-neutral
// feature inventory organized by product area.

import Stub from "../../components/CopyStub";

export const metadata = {
  title: "Features — Sentinel OC",
  description:
    "Audience-neutral inventory of Sentinel OC capabilities. Copy in revision.",
};

export default function Features() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            FEATURES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            Everything an investigation actually needs.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl font-sans leading-relaxed">
            Audience-neutral inventory of what ships at launch.
          </p>
        </div>
      </section>

      <Stub
        title="Feature inventory copy pending"
        notes={[
          "Required sections: Operations tab, Research tab (link analysis), Cases, Exports, Sources / Feeds, Vault, Security architecture, COMMS (post-launch).",
          "Must reflect what actually ships at launch. Phase 2-4 features can be referenced but must be clearly labeled as roadmap.",
          "Audience-neutral voice — neither journalist nor analyst-specific framing.",
        ]}
      />
    </>
  );
}
