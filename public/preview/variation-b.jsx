/* Variation B — Editorial Dossier
   No sidebar. Centered, generous, Newsreader serif dominant.
   Reads like an investigative long-read article. */

function VariationB() {
  return (
    <div className="vb-root">
      <style>{vbStyles}</style>

      <header className="vb-topnav">
        <div className="vb-topnav-inner">
          <a href="#" className="vb-brand-link"><Brand size="md"/></a>
          <nav className="vb-nav-links">
            {SUBNAV.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="vb-nav-right">
            <a href="#" className="vb-link-quiet">Sign in</a>
            <a href="#trial" className="btn btn-primary">Start trial →</a>
          </div>
        </div>
      </header>

      <VbHero/>
      <VbDeck/>
      <VbPipeline/>
      <VbFeatures/>
      <VbSecurity/>
      <VbPricing/>
      <VbChangelog/>
      <VbCta/>
      <VbFooter/>
    </div>
  );
}

/* ============================== HERO ============================== */

function VbHero() {
  return (
    <section className="vb-hero" id="hero">
      <div className="vb-hero-inner">
        <div className="vb-eyebrow">
          <span className="vb-issue">ISSUE 0.9.2</span>
          <span className="vb-issue-sep">·</span>
          <span>SENTINEL OPERATIONS CENTER</span>
          <span className="vb-issue-sep">·</span>
          <span>MAY 2026 · BETA</span>
        </div>

        <h1 className="vb-h1">
          An OSINT workspace<br/>
          for <em>investigations</em>, research,<br/>
          and analysis.
        </h1>

        <p className="vb-deck">
          Sentinel is a single canvas for the messy middle of investigative work — the part
          between the first lead and the published brief. Search public records, build a
          typed entity graph, vault your evidence, draft the dossier, export with chain of
          custody. Built for independent operators who need real tooling without enterprise procurement.
        </p>

        <div className="vb-byline">
          <span>By the Sentinel team</span>
          <span className="vb-byline-sep">·</span>
          <span>St. Louis, MO</span>
          <span className="vb-byline-sep">·</span>
          <span>11 min read</span>
        </div>

        <div className="vb-ctas">
          <a href="#trial" className="btn btn-primary"><span>Begin 14-day trial</span><span>→</span></a>
          <a href="#deck" className="btn">Read the brief</a>
        </div>
      </div>

      <figure className="vb-figure">
        <div className="vb-figure-chrome">
          <span className="vb-figure-tag">FIG. 01</span>
          <span className="vb-figure-meta">Investigation canvas, sample case: Joaquín "El Chapo" Guzmán Loera</span>
        </div>
        <div className="vb-shot">
          <img src="product-shots/investigation.png" alt="Sentinel investigation canvas with graph and composer"/>
          <div className="vb-cal" style={{ top: "8%", left: "3%" }}>
            <span className="vb-cal-num">A</span>
            <span className="vb-cal-line"/>
            <span className="vb-cal-text">Typed entities — every node carries a schema, every edge a label.</span>
          </div>
          <div className="vb-cal" style={{ top: "32%", right: "3%" }}>
            <span className="vb-cal-num">B</span>
            <span className="vb-cal-line right"/>
            <span className="vb-cal-text">Narrative panel — context lives beside the graph, not buried in tabs.</span>
          </div>
          <div className="vb-cal" style={{ bottom: "30%", left: "3%" }}>
            <span className="vb-cal-num">C</span>
            <span className="vb-cal-line"/>
            <span className="vb-cal-text">Source attribution tooltips on every edge — confidence as a first-class column.</span>
          </div>
          <div className="vb-cal" style={{ bottom: "3%", right: "3%" }}>
            <span className="vb-cal-num">D</span>
            <span className="vb-cal-line right"/>
            <span className="vb-cal-text">Composer — draft the published brief alongside the evidence itself.</span>
          </div>
        </div>
        <figcaption className="vb-figcap">
          The canvas at work, mid-investigation. Drag any node into the composer to cite it; the citation regenerates automatically on export.
        </figcaption>
      </figure>
    </section>
  );
}

/* ============================== DECK ============================== */

function VbDeck() {
  return (
    <section className="vb-section vb-section-deck" id="deck">
      <div className="vb-inner-narrow">
        <div className="vb-section-mark">§ 01 — THE TOOLS YOU ALREADY USE, ON ONE SURFACE</div>
        <p className="vb-pull">
          OSINT investigators stitch together <em>fifteen tabs</em>: a corporate registry,
          a sanctions database, an archived web crawler, a graph tool that imports from
          CSV, a notes doc, a download folder, a citation manager. Each one knows nothing
          about the next.
        </p>
        <p className="vb-paragraph">
          Sentinel collapses the stack. Public records flow into a typed entity graph.
          Source files attach to the investigation that needs them, encrypted at rest.
          The composer drafts the brief beside the canvas, with citations that auto-update
          when you re-run a transform. Exports carry chain-of-custody manifests so editors
          and legal can trace every claim back to a primary record.
        </p>
        <p className="vb-paragraph">
          It is, in short, the Maltego &times; Hunchly &times; a competent notes app — except
          built from the ground up by people who file the same FOIAs you do.
        </p>
      </div>
    </section>
  );
}

/* ============================== PIPELINE ============================== */

function VbPipeline() {
  return (
    <section className="vb-section" id="how">
      <div className="vb-inner">
        <div className="vb-section-head">
          <div className="vb-section-mark">§ 02 — HOW IT WORKS</div>
          <h2 className="vb-h2">Five surfaces. One investigation arc.</h2>
        </div>

        <ol className="vb-pipeline">
          {PIPELINE_STEPS.map((step, i) => (
            <li key={step.key} className="vb-pipeline-row">
              <div className="vb-pipeline-num">
                <span className="vb-pipeline-roman">{["I","II","III","IV","V"][i]}</span>
                <span className="vb-pipeline-glyph"><Glyph kind={step.key} size={28}/></span>
              </div>
              <div className="vb-pipeline-body">
                <h3 className="vb-pipeline-title">{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <div className="vb-pipeline-rule"/>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================== FEATURES ============================== */

function VbFeatures() {
  return (
    <section className="vb-section vb-features-wrap" id="product">
      <div className="vb-inner">
        <div className="vb-section-head">
          <div className="vb-section-mark">§ 03 — PRODUCT</div>
          <h2 className="vb-h2">Six things Sentinel does that nothing else does together.</h2>
        </div>

        <div className="vb-features">
          {FEATURES.map((f, i) => (
            <article key={f.tag} className="vb-feature">
              <div className="vb-feature-num">FIG. {String(i+1).padStart(2,"0")}</div>
              <h3 className="vb-feature-title">
                <span className="vb-feature-tag">{f.tag}</span>
                {f.title}
              </h3>
              <p className="vb-feature-body">{f.body}</p>
              <ul className="vb-feature-list">
                {f.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== SECURITY ============================== */

function VbSecurity() {
  return (
    <section className="vb-section vb-section-security" id="security">
      <div className="vb-inner">
        <div className="vb-section-head">
          <div className="vb-section-mark">§ 04 — SECURITY</div>
          <h2 className="vb-h2">Two encryption postures. Choose your threat model honestly.</h2>
          <p className="vb-section-lede">
            We refuse to lie about cryptography. Vault Lite defeats casual disk theft.
            Vault Standard defeats a court order. Pick the one that matches the work
            you're actually doing.
          </p>
        </div>

        <div className="vb-security">
          <article className="vb-sec-cell">
            <div className="vb-sec-tag vb-tag-emerald">Vault Lite — default</div>
            <h3 className="vb-sec-title">Server-managed keys, AES-256-GCM.</h3>
            <p>
              Per-user encryption keys wrapped under a server-side master key.
              Files are unreadable on disk. We can still produce plaintext if compelled
              by lawful process — and we'll tell you when we do, where the law allows.
            </p>
            <dl className="vb-sec-specs">
              <div><dt>Cipher</dt><dd>AES-256-GCM</dd></div>
              <div><dt>Key wrap</dt><dd>per-user → master KMS</dd></div>
              <div><dt>Scope</dt><dd>per investigation, never cross-tenant</dd></div>
              <div><dt>Tiers</dt><dd>Trial / Mercury / Helios / Argus</dd></div>
            </dl>
          </article>

          <article className="vb-sec-cell">
            <div className="vb-sec-tag vb-tag-cyan">Vault Standard — Argus</div>
            <h3 className="vb-sec-title">Client-side, zero-knowledge.</h3>
            <p>
              Encryption runs in your browser via WebCrypto. Keys derive from your
              passphrase using Argon2id and never leave your device. Sentinel stores
              ciphertext only. A lawful order yields opaque bytes — and a lost passphrase
              yields the same.
            </p>
            <dl className="vb-sec-specs">
              <div><dt>Cipher</dt><dd>AES-256-GCM in WebCrypto</dd></div>
              <div><dt>KDF</dt><dd>Argon2id (m=64MB, t=3)</dd></div>
              <div><dt>Recovery</dt><dd>M-of-N operator shards</dd></div>
              <div><dt>Tiers</dt><dd>Argus only</dd></div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ============================== PRICING ============================== */

function VbPricing() {
  return (
    <section className="vb-section vb-section-pricing" id="pricing">
      <div className="vb-inner">
        <div className="vb-section-head">
          <div className="vb-section-mark">§ 05 — PRICING</div>
          <h2 className="vb-h2">Four tiers, named for watchers.</h2>
          <p className="vb-section-lede">
            Every tier ships the full investigation pipeline — what scales is capacity,
            seats, and key custody. No hidden upsells, no annual contracts required.
          </p>
        </div>

        <div className="vb-pricing">
          {PRICING_TIERS.map(tier => (
            <article key={tier.name} className={"vb-tier" + (tier.recommended ? " vb-tier-rec" : "")}>
              {tier.recommended && <div className="vb-tier-flag">MOST PICKED</div>}
              <div className="vb-tier-head">
                <div className="vb-tier-name">
                  <span className="vb-tier-key">{tier.name}</span>
                  {tier.noCheckout && <span className="vb-tier-nc">no checkout</span>}
                </div>
                <div className="vb-tier-display">{tier.display}</div>
                <div className="vb-tier-tagline">{tier.tagline}</div>
              </div>
              <div className="vb-tier-price">
                {tier.price ? (
                  <>
                    <span className="vb-price-fig">{tier.price}</span>
                    <span className="vb-price-per">{tier.per}</span>
                  </>
                ) : (
                  <>
                    <span className="vb-price-fig">Free</span>
                    <span className="vb-price-per">/ {tier.trial}</span>
                  </>
                )}
              </div>
              <ul className="vb-tier-list">
                {tier.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#trial" className={"btn " + (tier.recommended ? "btn-primary" : "")}>{tier.cta} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== CHANGELOG ============================== */

function VbChangelog() {
  const entries = [
    { date: "May 04, 2026", tag: "feature", title: "Map view, source attribution chips, geocoded locations" },
    { date: "May 03, 2026", tag: "feature", title: "Transform preview — pick what lands on the graph" },
    { date: "Apr 28, 2026", tag: "feature", title: "Composer share links for read-only collaborators" },
    { date: "Apr 22, 2026", tag: "fix", title: "Layout stability on dense graphs (>200 nodes)" },
    { date: "Apr 15, 2026", tag: "feature", title: "Chain-of-custody manifests on every export" }
  ];
  return (
    <section className="vb-section" id="changelog">
      <div className="vb-inner">
        <div className="vb-section-head">
          <div className="vb-section-mark">§ 06 — CHANGELOG</div>
          <h2 className="vb-h2">A weekly cadence through beta.</h2>
        </div>
        <ul className="vb-changelog">
          {entries.map(e => (
            <li key={e.date} className="vb-cl-row">
              <span className="vb-cl-date">{e.date}</span>
              <span className={"vb-cl-tag vb-cl-" + e.tag}>{e.tag}</span>
              <span className="vb-cl-title">{e.title}</span>
            </li>
          ))}
        </ul>
        <a href="#" className="vb-cl-all">Read every entry since v0.1 →</a>
      </div>
    </section>
  );
}

/* ============================== CTA ============================== */

function VbCta() {
  return (
    <section className="vb-cta" id="trial">
      <div className="vb-inner-narrow">
        <div className="vb-section-mark vb-cta-mark">§ ENROLL</div>
        <h2 className="vb-cta-h">
          Bring a case you've been stuck on.
        </h2>
        <p className="vb-cta-p">
          Open a 14-day trial. Full feature access, no credit card. We seed your workspace
          with a sample El Chapo investigation so you can see the shape of the tool before
          you commit your own material.
        </p>
        <form className="vb-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="operator@your-domain.io" required/>
          <button type="submit" className="btn btn-primary">Request trial →</button>
        </form>
        <div className="vb-cta-meta">
          or write us — <a href="mailto:feedback@sentineloc.io">feedback@sentineloc.io</a> · reply within 24h
        </div>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */

function VbFooter() {
  return (
    <footer className="vb-footer">
      <div className="vb-footer-inner">
        <div className="vb-foot-brand">
          <Brand size="md"/>
          <p className="vb-foot-desc">
            An OSINT workspace for investigations, research, and analysis. Built independently in St. Louis, MO.
          </p>
          <div className="vb-foot-status"><span className="vb-glow-dot"/> SYSTEMS ONLINE · v0.9.2-beta</div>
        </div>
        <div className="vb-foot-cols">
          <div>
            <h5>Product</h5>
            <ul>
              <li><a href="#how">Pipeline</a></li>
              <li><a href="#product">Features</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#changelog">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h5>Operators</h5>
            <ul>
              <li><a href="#">Sign in</a></li>
              <li><a href="#trial">Start trial</a></li>
              <li><a href="#">Wiki</a></li>
              <li><a href="#">OSINT Toolbox</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">Press kit</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Acceptable use</a></li>
              <li><a href="#">DPA</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="vb-foot-legal">
        <span>© 2026 SENTINEL OPERATIONS CENTER</span>
        <span>BUILT FOR INVESTIGATORS · NOT A SUBSTITUTE FOR LEGAL ADVICE</span>
      </div>
    </footer>
  );
}

/* ============================== STYLES ============================== */

const vbStyles = `
.vb-root {
  background:
    radial-gradient(1200px 600px at 80% -10%, rgba(92,188,255,0.05), transparent 60%),
    var(--bg-0);
  color: var(--fg-0);
  font-family: var(--mono);
  min-height: 100%;
}

.vb-topnav {
  position: sticky; top: 0; z-index: 30;
  background: rgba(4,6,10,0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}
.vb-topnav-inner {
  max-width: 1280px; margin: 0 auto;
  display: flex; align-items: center; gap: 40px;
  padding: 16px 48px;
}
.vb-brand-link { text-decoration: none; color: inherit; }
.vb-nav-links {
  display: flex; gap: 28px; margin-left: 20px;
  font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
}
.vb-nav-links a { color: var(--fg-2); }
.vb-nav-links a:hover { color: var(--fg-0); text-decoration: none; }
.vb-nav-right { margin-left: auto; display: flex; gap: 12px; align-items: center; }
.vb-link-quiet {
  font-size: 12px; letter-spacing: 0.08em; color: var(--fg-2);
  padding: 8px 12px;
}

/* HERO */
.vb-hero {
  max-width: 1280px; margin: 0 auto;
  padding: 80px 48px 64px;
  text-align: center;
}
.vb-hero-inner { max-width: 880px; margin: 0 auto 56px; }
.vb-eyebrow {
  font-size: 11px; letter-spacing: 0.22em; color: var(--fg-3);
  text-transform: uppercase; margin-bottom: 36px;
  display: inline-flex; gap: 12px; align-items: center;
  padding: 6px 16px;
  border-top: 1px solid var(--line-2);
  border-bottom: 1px solid var(--line-2);
}
.vb-issue { color: var(--cyan); }
.vb-issue-sep { color: var(--fg-4); }

.vb-h1 {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(42px, 5.8vw, 92px);
  line-height: 1.02;
  letter-spacing: -0.03em;
  margin: 0 0 32px;
  color: var(--fg-0);
  text-wrap: pretty;
}
.vb-h1 em { font-style: italic; color: var(--cyan); }
body[data-mono="all"] .vb-h1 {
  font-family: var(--mono); font-size: clamp(32px, 4.2vw, 60px);
  letter-spacing: -0.02em; font-weight: 500;
}
body[data-mono="all"] .vb-h1 em { font-style: normal; }

.vb-deck {
  font-family: var(--serif);
  font-size: clamp(17px, 1.5vw, 21px);
  line-height: 1.55;
  color: var(--fg-1);
  max-width: 60ch;
  margin: 0 auto 28px;
  letter-spacing: -0.005em;
}
body[data-mono="all"] .vb-deck { font-family: var(--mono); font-size: 14px; line-height: 1.7; }

.vb-byline {
  font-size: 11px; color: var(--fg-3); letter-spacing: 0.18em;
  text-transform: uppercase;
  display: inline-flex; gap: 10px; margin-bottom: 32px;
}
.vb-byline-sep { color: var(--fg-4); }

.vb-ctas { display: inline-flex; gap: 12px; justify-content: center; }

/* HERO FIGURE */
.vb-figure { max-width: 1180px; margin: 64px auto 0; }
.vb-figure-chrome {
  display: flex; align-items: center; gap: 12px;
  font-size: 11px; color: var(--fg-3); letter-spacing: 0.12em;
  padding-bottom: 10px;
}
.vb-figure-tag {
  padding: 3px 10px;
  border: 1px solid var(--amber-border); background: var(--amber-bg);
  color: var(--amber); font-size: 10px; letter-spacing: 0.18em;
}
.vb-figure-meta { color: var(--fg-2); }
.vb-shot {
  position: relative;
  border: 1px solid var(--line-2);
  background: var(--bg-1);
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.vb-shot img { width: 100%; height: 100%; object-fit: cover; object-position: left top; display: block; }
.vb-shot::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(4,6,10,0) 50%, rgba(4,6,10,0.4));
  pointer-events: none;
}
.vb-cal {
  position: absolute; z-index: 2;
  display: flex; align-items: center; gap: 10px;
  font-size: 11px; color: var(--fg-0);
  text-align: left;
  pointer-events: none;
}
.vb-cal-num {
  width: 24px; height: 24px; display: grid; place-items: center;
  border: 1px solid var(--cyan); color: var(--cyan);
  background: rgba(4,6,10,0.88);
  font-family: var(--mono); font-size: 11px; letter-spacing: 0;
}
.vb-cal-line { height: 1px; width: 50px; background: var(--cyan); box-shadow: 0 0 8px rgba(92,188,255,0.5); }
.vb-cal-text {
  padding: 6px 10px;
  background: rgba(4,6,10,0.88);
  border: 1px solid var(--amber-border);
  color: var(--fg-0);
  max-width: 220px; line-height: 1.4;
}
.vb-cal:has(.vb-cal-line.right) { flex-direction: row-reverse; text-align: right; }
.vb-figcap {
  text-align: center;
  font-family: var(--serif); font-style: italic;
  color: var(--fg-2); font-size: 13.5px;
  margin-top: 18px;
  max-width: 60ch;
  margin-left: auto; margin-right: auto;
}

/* SECTIONS */
.vb-section { padding: 96px 48px; border-top: 1px solid var(--line); }
.vb-inner { max-width: 1180px; margin: 0 auto; }
.vb-inner-narrow { max-width: 740px; margin: 0 auto; }
.vb-section-head { text-align: center; margin-bottom: 56px; }
.vb-section-mark {
  font-size: 11px; letter-spacing: 0.2em; color: var(--fg-3);
  text-transform: uppercase;
  margin-bottom: 18px;
}
.vb-h2 {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(32px, 3.8vw, 56px);
  line-height: 1.06; letter-spacing: -0.025em;
  margin: 0 0 16px; color: var(--fg-0);
  text-wrap: pretty;
  max-width: 24ch;
  margin-left: auto; margin-right: auto;
}
body[data-mono="all"] .vb-h2 {
  font-family: var(--mono); font-size: clamp(26px, 3vw, 42px); font-weight: 500;
}
.vb-section-lede {
  font-size: 14.5px; color: var(--fg-2); line-height: 1.7;
  max-width: 60ch; margin: 0 auto;
}

/* DECK */
.vb-section-deck { padding: 96px 48px; }
.vb-pull {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(22px, 2.4vw, 32px); line-height: 1.35;
  color: var(--fg-0); letter-spacing: -0.015em;
  border-left: 2px solid var(--cyan);
  padding-left: 24px;
  margin: 0 0 32px;
}
.vb-pull em { font-style: italic; color: var(--cyan); }
body[data-mono="all"] .vb-pull { font-family: var(--mono); font-size: 18px; }
.vb-paragraph {
  font-family: var(--serif); font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.7; color: var(--fg-1); margin: 0 0 18px;
  letter-spacing: -0.005em;
}
body[data-mono="all"] .vb-paragraph { font-family: var(--mono); font-size: 14px; line-height: 1.7; }

/* PIPELINE */
.vb-pipeline { list-style: none; padding: 0; margin: 0; }
.vb-pipeline-row {
  display: grid; grid-template-columns: 120px 1fr;
  gap: 32px;
  padding: 36px 0;
  border-top: 1px solid var(--line);
  position: relative;
}
.vb-pipeline-row:last-child { border-bottom: 1px solid var(--line); }
.vb-pipeline-num {
  display: flex; flex-direction: column; align-items: flex-start; gap: 18px;
}
.vb-pipeline-roman {
  font-family: var(--serif); font-style: italic;
  font-size: 48px; color: var(--cyan);
  line-height: 1; letter-spacing: -0.02em;
}
body[data-mono="all"] .vb-pipeline-roman { font-family: var(--mono); font-style: normal; font-size: 36px; }
.vb-pipeline-glyph { color: var(--fg-2); }
.vb-pipeline-title {
  font-family: var(--serif); font-weight: 400;
  font-size: 30px; line-height: 1.15; letter-spacing: -0.02em;
  margin: 0 0 12px; color: var(--fg-0);
}
body[data-mono="all"] .vb-pipeline-title { font-family: var(--mono); font-size: 24px; font-weight: 500; }
.vb-pipeline-body p {
  font-size: 14px; line-height: 1.7; color: var(--fg-2); margin: 0; max-width: 64ch;
}

/* FEATURES */
.vb-features-wrap { background: var(--bg-1); }
.vb-features {
  columns: 2; column-gap: 48px;
}
@media (max-width: 880px) { .vb-features { columns: 1; } }
.vb-feature {
  break-inside: avoid;
  border-top: 1px solid var(--line-2);
  padding: 28px 0 36px;
  display: flex; flex-direction: column; gap: 14px;
}
.vb-feature-num {
  font-size: 10px; letter-spacing: 0.2em; color: var(--cyan);
}
.vb-feature-title {
  font-family: var(--serif); font-weight: 400;
  font-size: 24px; line-height: 1.2; letter-spacing: -0.015em;
  margin: 0; color: var(--fg-0);
  text-wrap: pretty;
}
body[data-mono="all"] .vb-feature-title { font-family: var(--mono); font-size: 18px; font-weight: 500; }
.vb-feature-tag {
  display: inline-block;
  font-family: var(--mono);
  font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--cyan);
  margin-right: 10px;
  padding: 2px 8px;
  border: 1px solid var(--cyan-border); background: var(--cyan-bg);
  vertical-align: middle;
}
.vb-feature-body {
  font-family: var(--serif); font-size: 15px; line-height: 1.65;
  color: var(--fg-1); margin: 0;
}
body[data-mono="all"] .vb-feature-body { font-family: var(--mono); font-size: 13px; line-height: 1.7; }
.vb-feature-list {
  list-style: none; padding: 0; margin: 6px 0 0;
  display: flex; flex-direction: column; gap: 6px;
}
.vb-feature-list li {
  font-size: 12px; color: var(--fg-2); padding-left: 16px; position: relative;
  letter-spacing: 0.01em;
}
.vb-feature-list li::before {
  content: "—"; position: absolute; left: 0; color: var(--cyan);
}

/* SECURITY */
.vb-section-security { background: var(--bg-0); }
.vb-security {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
}
@media (max-width: 900px) { .vb-security { grid-template-columns: 1fr; } }
.vb-sec-cell {
  background: var(--bg-1); border: 1px solid var(--line);
  padding: 36px 32px;
}
.vb-sec-tag {
  display: inline-block; padding: 4px 12px;
  font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
  margin-bottom: 22px;
}
.vb-tag-emerald { color: var(--emerald); border: 1px solid var(--emerald-border); background: var(--emerald-bg); }
.vb-tag-cyan { color: var(--cyan); border: 1px solid var(--cyan-border); background: var(--cyan-bg); }
.vb-sec-title {
  font-family: var(--serif); font-weight: 400;
  font-size: 26px; line-height: 1.15; letter-spacing: -0.02em;
  margin: 0 0 18px; color: var(--fg-0);
}
body[data-mono="all"] .vb-sec-title { font-family: var(--mono); font-size: 22px; font-weight: 500; }
.vb-sec-cell p {
  font-family: var(--serif); font-size: 15px; line-height: 1.7; color: var(--fg-1); margin: 0;
}
body[data-mono="all"] .vb-sec-cell p { font-family: var(--mono); font-size: 13px; }
.vb-sec-specs { margin: 24px 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 14px 22px; }
.vb-sec-specs > div { display: flex; flex-direction: column; gap: 2px; }
.vb-sec-specs dt { font-size: 10px; letter-spacing: 0.16em; color: var(--fg-3); text-transform: uppercase; }
.vb-sec-specs dd { margin: 0; font-size: 12.5px; color: var(--fg-0); font-family: var(--mono); }

/* PRICING */
body[data-pricing="off"] .vb-section-pricing { display: none; }
.vb-pricing { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 1000px) { .vb-pricing { grid-template-columns: 1fr 1fr; } }
@media (max-width: 580px) { .vb-pricing { grid-template-columns: 1fr; } }
.vb-tier {
  position: relative;
  background: var(--bg-1); border: 1px solid var(--line);
  padding: 28px 24px 24px;
  display: flex; flex-direction: column; gap: 18px;
}
.vb-tier-rec {
  border-color: var(--cyan-border);
  background: linear-gradient(to bottom, rgba(92,188,255,0.06), var(--bg-1) 40%);
}
.vb-tier-flag {
  position: absolute; top: -1px; left: -1px; right: -1px;
  padding: 5px 0; text-align: center;
  font-size: 9px; letter-spacing: 0.2em;
  color: var(--cyan); background: rgba(92,188,255,0.10);
  border-bottom: 1px solid var(--cyan-border);
}
.vb-tier-rec .vb-tier-head { padding-top: 18px; }
.vb-tier-name { display: flex; align-items: baseline; gap: 8px; margin-bottom: 6px; }
.vb-tier-key { font-family: var(--mono); color: var(--cyan); font-size: 13px; letter-spacing: 0.02em; }
.vb-tier-nc { font-size: 10px; color: var(--amber); letter-spacing: 0.1em; text-transform: uppercase; }
.vb-tier-display {
  font-family: var(--serif); font-size: 30px; color: var(--fg-0);
  letter-spacing: -0.02em; line-height: 1.05; margin-bottom: 6px;
}
body[data-mono="all"] .vb-tier-display { font-family: var(--mono); font-size: 24px; font-weight: 500; }
.vb-tier-tagline { font-size: 12px; color: var(--fg-2); line-height: 1.5; min-height: 40px; }
.vb-tier-price {
  display: flex; align-items: baseline; gap: 4px;
  padding: 16px 0; border-top: 1px solid var(--line);
}
.vb-price-fig { font-family: var(--mono); font-size: 28px; color: var(--fg-0); letter-spacing: -0.01em; }
.vb-price-per { color: var(--fg-3); font-size: 12px; }
.vb-tier-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.vb-tier-list li {
  font-size: 12px; color: var(--fg-1); line-height: 1.5;
  padding-left: 14px; position: relative;
}
.vb-tier-list li::before { content: "+"; position: absolute; left: 0; color: var(--cyan); }
.vb-tier .btn { width: 100%; justify-content: center; padding: 11px 14px; margin-top: 8px; }

/* CHANGELOG */
.vb-changelog { list-style: none; padding: 0; margin: 0; }
.vb-cl-row {
  display: grid; grid-template-columns: 160px 90px 1fr;
  gap: 24px; align-items: center;
  padding: 18px 0;
  border-top: 1px solid var(--line);
}
.vb-cl-row:last-child { border-bottom: 1px solid var(--line); }
.vb-cl-date { font-family: var(--mono); font-size: 11px; color: var(--fg-3); letter-spacing: 0.12em; text-transform: uppercase; }
.vb-cl-tag {
  font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
  padding: 3px 8px; border: 1px solid var(--line-2); width: max-content;
}
.vb-cl-feature { color: var(--cyan); border-color: var(--cyan-border); background: var(--cyan-bg); }
.vb-cl-fix { color: var(--amber); border-color: var(--amber-border); background: var(--amber-bg); }
.vb-cl-title {
  font-family: var(--serif); font-size: 17px; color: var(--fg-0);
  letter-spacing: -0.01em;
}
body[data-mono="all"] .vb-cl-title { font-family: var(--mono); font-size: 14px; }
.vb-cl-all { display: inline-block; margin-top: 24px; font-size: 12.5px; }

/* CTA */
.vb-cta {
  padding: 120px 48px;
  border-top: 1px solid var(--line);
  background:
    radial-gradient(900px 400px at 50% 0%, rgba(92,188,255,0.10), transparent 70%),
    var(--bg-0);
  text-align: center;
}
.vb-cta-mark { margin-bottom: 24px; }
.vb-cta-h {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(36px, 4.6vw, 64px); line-height: 1.05; letter-spacing: -0.025em;
  margin: 0 0 20px; color: var(--fg-0); text-wrap: pretty;
}
body[data-mono="all"] .vb-cta-h { font-family: var(--mono); font-size: clamp(28px, 3.4vw, 48px); font-weight: 500; }
.vb-cta-p {
  font-family: var(--serif); font-size: clamp(16px, 1.3vw, 19px);
  line-height: 1.6; color: var(--fg-1); max-width: 60ch; margin: 0 auto 32px;
}
body[data-mono="all"] .vb-cta-p { font-family: var(--mono); font-size: 14px; }
.vb-form { display: flex; gap: 8px; justify-content: center; max-width: 520px; margin: 0 auto; flex-wrap: wrap; }
.vb-form input {
  flex: 1; min-width: 240px;
  background: var(--bg-1); border: 1px solid var(--line-2);
  color: var(--fg-0); font-family: var(--mono); font-size: 13px;
  padding: 12px 14px; outline: none; border-radius: 2px;
}
.vb-form input:focus { border-color: var(--cyan-border); }
.vb-form input::placeholder { color: var(--fg-3); }
.vb-cta-meta {
  margin-top: 20px;
  font-size: 11px; color: var(--fg-3); letter-spacing: 0.1em; text-transform: uppercase;
}

/* FOOTER */
.vb-footer { padding: 56px 48px 28px; border-top: 1px solid var(--line); background: var(--bg-0); }
.vb-footer-inner {
  max-width: 1180px; margin: 0 auto;
  display: grid; grid-template-columns: 1.4fr 2.4fr; gap: 48px;
}
@media (max-width: 900px) { .vb-footer-inner { grid-template-columns: 1fr; } }
.vb-foot-desc { color: var(--fg-2); font-size: 12.5px; line-height: 1.6; max-width: 38ch; margin: 14px 0; }
.vb-foot-status { font-size: 11px; color: var(--fg-2); letter-spacing: 0.14em; text-transform: uppercase; }
.vb-glow-dot {
  display: inline-block; width: 7px; height: 7px; border-radius: 50%;
  background: var(--emerald); box-shadow: 0 0 6px rgba(92,211,150,0.6);
  vertical-align: middle; margin-right: 4px;
}
.vb-foot-cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
@media (max-width: 700px) { .vb-foot-cols { grid-template-columns: 1fr 1fr; } }
.vb-footer h5 { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--fg-3); margin: 0 0 14px; }
.vb-footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
.vb-footer ul a { color: var(--fg-1); font-size: 12.5px; }
.vb-footer ul a:hover { color: var(--cyan); text-decoration: none; }
.vb-foot-legal {
  max-width: 1180px; margin: 40px auto 0;
  padding-top: 20px; border-top: 1px solid var(--line);
  display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
  font-size: 10.5px; color: var(--fg-3); letter-spacing: 0.14em; text-transform: uppercase;
}

body[data-density="compact"] .vb-section { padding: 64px 48px; }
body[data-density="compact"] .vb-hero { padding: 56px 48px 40px; }
`;

window.VariationB = VariationB;
