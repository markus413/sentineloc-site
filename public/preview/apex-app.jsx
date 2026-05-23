/* Apex site — renders VariationB (Editorial Dossier) full-bleed.
   Tweaks panel exposes accent, density, mono mode, hero animation, pricing toggle. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#5cbcff",
  "density": "spacious",
  "showPricing": true,
  "monoMode": false,
  "heroAnim": true
}/*EDITMODE-END*/;

const ACCENT_BY_HEX = {
  "#5cbcff": "cyan",
  "#e9a85a": "amber",
  "#5cd396": "emerald",
  "#a78bfa": "violet"
};

/* Accent recolors --cyan (used throughout VariationB) at the root level */
const ACCENT_VARS = {
  "#5cbcff": { hex: "#5cbcff", bg: "rgba(92,188,255,0.08)", border: "rgba(92,188,255,0.32)", glow: "rgba(92,188,255,0.5)" },
  "#e9a85a": { hex: "#e9a85a", bg: "rgba(233,168,90,0.08)", border: "rgba(233,168,90,0.32)", glow: "rgba(233,168,90,0.55)" },
  "#5cd396": { hex: "#5cd396", bg: "rgba(92,211,150,0.08)", border: "rgba(92,211,150,0.30)", glow: "rgba(92,211,150,0.55)" },
  "#a78bfa": { hex: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.32)", glow: "rgba(167,139,250,0.55)" }
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.dataset.heroAnim = tweaks.heroAnim ? "on" : "off";
    document.body.dataset.density = tweaks.density;
    document.body.dataset.pricing = tweaks.showPricing ? "on" : "off";
    document.body.dataset.mono = tweaks.monoMode ? "all" : "mixed";
    document.body.dataset.accent = ACCENT_BY_HEX[tweaks.accent] || "cyan";

    /* Override --cyan token so VariationB picks up the accent everywhere */
    const v = ACCENT_VARS[tweaks.accent] || ACCENT_VARS["#5cbcff"];
    const root = document.documentElement;
    root.style.setProperty("--cyan", v.hex);
    root.style.setProperty("--cyan-bg", v.bg);
    root.style.setProperty("--cyan-border", v.border);
    root.style.setProperty("--accent", v.hex);
    root.style.setProperty("--accent-bg", v.bg);
    root.style.setProperty("--accent-border", v.border);
  }, [tweaks]);

  return (
    <>
      <VariationB/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor
            label="Accent"
            value={tweaks.accent}
            options={Object.keys(ACCENT_BY_HEX)}
            onChange={v => setTweak("accent", v)}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakRadio
            label="Density"
            options={[
              { value: "spacious", label: "Spacious" },
              { value: "compact", label: "Compact" }
            ]}
            value={tweaks.density}
            onChange={v => setTweak("density", v)}
          />
          <TweakToggle
            label="Show pricing"
            hint="Hide the pricing section entirely"
            value={tweaks.showPricing}
            onChange={v => setTweak("showPricing", v)}
          />
        </TweakSection>
        <TweakSection title="Type">
          <TweakToggle
            label="Mono everywhere"
            hint="Swap Newsreader serif for JetBrains Mono"
            value={tweaks.monoMode}
            onChange={v => setTweak("monoMode", v)}
          />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakToggle
            label="Animated callouts"
            hint="Cursor blink, pulse, callout draw-in"
            value={tweaks.heroAnim}
            onChange={v => setTweak("heroAnim", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
