/* Shared components and data for SentinelOC marketing variations */

const SentinelMark = ({ size = 36, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Stylized shield/visor — original mark, not a copyrighted helmet */}
    <path d="M32 4 L56 14 L56 30 C56 44 46 54 32 60 C18 54 8 44 8 30 L8 14 Z"
          stroke="currentColor" strokeWidth="1.5" fill="rgba(92,188,255,0.04)"/>
    <path d="M16 22 L32 14 L48 22 L48 30 L32 38 L16 30 Z"
          stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none"/>
    <rect x="18" y="26" width="9" height="3" fill="currentColor" opacity="0.8"/>
    <rect x="37" y="26" width="9" height="3" fill="currentColor" opacity="0.8"/>
    <path d="M32 14 L32 38" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
    <circle cx="32" cy="46" r="1.5" fill="currentColor" opacity="0.6"/>
  </svg>
);

const Brand = ({ size = "md" }) => {
  const dims = size === "lg" ? { mark: 44, n: 16, s: 11 } : { mark: 36, n: 13, s: 10 };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{
        width: dims.mark, height: dims.mark,
        border: "1px solid var(--line-2)", background: "var(--bg-2)",
        display: "grid", placeItems: "center", color: "var(--fg-0)"
      }}>
        <SentinelMark size={dims.mark - 12}/>
      </div>
      <div>
        <div style={{
          fontFamily: "var(--mono)", fontSize: dims.n,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--fg-0)", lineHeight: 1.1, fontWeight: 500
        }}>SENTINEL</div>
        <div style={{
          fontSize: dims.s, color: "var(--fg-3)", letterSpacing: "0.18em",
          textTransform: "uppercase", marginTop: 2
        }}>OPERATIONS CENTER</div>
      </div>
    </div>
  );
};

/* Pricing tiers from product */
const PRICING_TIERS = [
  {
    name: "trial", display: "Trial", price: null, per: null, trial: "14d",
    tagline: "Touch every surface with no commitment.",
    features: [
      "Full feature access for 14 days",
      "1 operator seat",
      "Up to 3 investigations",
      "Vault Lite (server-side AES-256)",
      "Community wiki & OSINT toolbox"
    ],
    cta: "Start trial", primary: false, noCheckout: true
  },
  {
    name: "starter", display: "Mercury", price: "$49", per: "/mo", trial: null,
    tagline: "Solo investigators and journalists.",
    features: [
      "1 operator seat",
      "Unlimited investigations",
      "10 GB Vault Lite encrypted storage",
      "All transforms + OSINT toolbox",
      "PDF / DOCX / JSON / CSV exports",
      "Email support"
    ],
    cta: "Choose Mercury", primary: false
  },
  {
    name: "standard", display: "Helios", price: "$99", per: "/mo", trial: null,
    tagline: "Researchers and small teams.",
    features: [
      "3 operator seats included",
      "50 GB Vault Lite storage",
      "Map view + geocoded entities",
      "Composer reports with share links",
      "Scheduled transform re-runs",
      "Priority support"
    ],
    cta: "Choose Helios", primary: true, recommended: true
  },
  {
    name: "pro", display: "Argus", price: "$249", per: "/mo", trial: null,
    tagline: "Investigative shops and newsrooms.",
    features: [
      "10 operator seats",
      "250 GB Vault — Lite or Standard (client-side)",
      "Chain-of-custody manifests on every export",
      "SSO, audit log, role-based access",
      "Custom transforms & private toolbox",
      "Dedicated operator contact"
    ],
    cta: "Choose Argus", primary: false
  }
];

const PIPELINE_STEPS = [
  {
    num: "01", key: "search", title: "Search",
    body: "Type a name, phone, address, handle, or hash. Sentinel routes the query across SDN, court records, breach corpora, Wikidata, and your own vault — and ranks by source confidence."
  },
  {
    num: "02", key: "graph", title: "Graph",
    body: "Everything you discover lands as a typed entity: person, org, location, event. Relationships are first-class. Transforms expand any node into its connections without losing provenance."
  },
  {
    num: "03", key: "vault", title: "Vault",
    body: "FOIA returns, screenshots, audio, court PDFs — drop them in. Files are scoped to one investigation, encrypted at rest, and surface in the graph as source material with confidence chips."
  },
  {
    num: "04", key: "compose", title: "Compose",
    body: "Draft the brief alongside the evidence. Drag any entity, edge, or source into the composer; citations attach automatically. Edit, preview, and version without leaving the canvas."
  },
  {
    num: "05", key: "export", title: "Export",
    body: "Generate a dossier in PDF, DOCX, JSON, or CSV. Every claim links back to its source. Each export carries a chain-of-custody manifest so reviewers can verify what you saw."
  }
];

const FEATURES = [
  {
    tag: "Graph",
    title: "A canvas that knows what every node is.",
    body: "Drop entities, draw edges, run transforms. Sentinel keeps the schema honest — every node is typed, every edge is labelled, every datum is sourced. Right-click any entity to fan out connections from public records or your own vault.",
    bullets: ["Person · Org · Business · Location · Event · Document", "20+ built-in transforms, custom transforms on Argus", "Force-directed, hierarchical, and map layouts"]
  },
  {
    tag: "OSINT Toolbox",
    title: "Twenty years of investigator tradecraft, indexed.",
    body: "A curated, searchable catalogue of public sources — sanctions lists, corporate registries, archived web, breach-checkers, geolocation utilities. Sentinel keeps it current so you don't have to maintain a bookmark folder.",
    bullets: ["Categorised by entity type and jurisdiction", "Source-quality ratings from the community", "Submit and review tools alongside other operators"]
  },
  {
    tag: "Transforms",
    title: "Public records, two clicks deep.",
    body: "Run OFAC, Wikidata, EDGAR, Companies House, OpenCorporates, and more directly against any selected node. Preview what'll land on the graph before committing — keep the chaff out, the signal in.",
    bullets: ["Transform preview — accept or reject each result", "Confidence scoring on every returned edge", "Re-runs on a schedule, with diff alerts"]
  },
  {
    tag: "Composer",
    title: "Write the brief without leaving the evidence.",
    body: "A focused editor pinned beneath the canvas. Markdown, headings, citations, images. Drag any entity in to embed a live reference; the citation regenerates on export. Version history is automatic.",
    bullets: ["Rich text + Markdown + raw HTML modes", "Auto-cite from any graph entity or vault file", "Public read-only share links on Helios and up"]
  },
  {
    tag: "Vault Encryption",
    title: "Source material that doesn't leak.",
    body: "Vault Lite encrypts uploads at rest using AES-256-GCM with a per-user key wrapped under a server-side master key. Vault Standard moves to client-side encryption — we hold no plaintext key, and a lawful order yields ciphertext only.",
    bullets: ["Lite: server-managed keys — defeats opportunistic disk theft", "Standard: client-side, zero-knowledge keys (Argus)", "Per-investigation scoping, never cross-tenant"]
  },
  {
    tag: "Reports & Custody",
    title: "Every export carries its receipts.",
    body: "Each dossier ships with a chain-of-custody manifest: which sources ran, when, by which operator, with what confidence. Hand a PDF to legal or an editor and they can trace every claim back to a primary record.",
    bullets: ["PDF, DOCX, JSON, CSV", "SHA-256 manifest per export", "Re-run any historical export with a single click"]
  }
];

/* Tiny iconography — geometric, never illustrative */
const Glyph = ({ kind, size = 32 }) => {
  const s = size;
  const stroke = "currentColor";
  if (kind === "search") return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <circle cx="13" cy="13" r="7" stroke={stroke} strokeWidth="1.2"/>
      <path d="M19 19 L26 26" stroke={stroke} strokeWidth="1.2"/>
    </svg>
  );
  if (kind === "graph") return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="6" r="2.5" fill={stroke}/>
      <circle cx="6" cy="22" r="2.5" stroke={stroke} strokeWidth="1.2"/>
      <circle cx="26" cy="22" r="2.5" stroke={stroke} strokeWidth="1.2"/>
      <circle cx="16" cy="26" r="2" stroke={stroke} strokeWidth="1.2"/>
      <path d="M16 8 L7 21 M16 8 L25 21 M16 8 L16 24" stroke={stroke} strokeWidth="0.8" opacity="0.6"/>
    </svg>
  );
  if (kind === "vault") return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <rect x="5" y="8" width="22" height="18" stroke={stroke} strokeWidth="1.2"/>
      <circle cx="16" cy="17" r="3.5" stroke={stroke} strokeWidth="1.2"/>
      <path d="M16 14 L16 8" stroke={stroke} strokeWidth="1.2"/>
      <circle cx="16" cy="17" r="1" fill={stroke}/>
    </svg>
  );
  if (kind === "compose") return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <rect x="5" y="5" width="22" height="22" stroke={stroke} strokeWidth="1.2"/>
      <path d="M10 12 L22 12 M10 17 L22 17 M10 22 L18 22" stroke={stroke} strokeWidth="1"/>
    </svg>
  );
  if (kind === "export") return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <path d="M16 4 L16 20 M10 14 L16 20 L22 14" stroke={stroke} strokeWidth="1.2"/>
      <path d="M5 24 L5 28 L27 28 L27 24" stroke={stroke} strokeWidth="1.2"/>
    </svg>
  );
  return null;
};

/* US flag pill matching product */
const FlagPill = () => (
  <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
    <span style={{
      display: "inline-block", width: 14, height: 10,
      background: "linear-gradient(to bottom, #c84747 0 30%, #e3e8ee 30% 50%, #c84747 50% 60%, #e3e8ee 60% 80%, #c84747 80%)",
      border: "1px solid var(--line-2)"
    }}/>
  </span>
);

/* Shared subnav anchor links */
const SUBNAV = [
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
  { href: "#changelog", label: "Changelog" }
];

Object.assign(window, {
  SentinelMark, Brand, PRICING_TIERS, PIPELINE_STEPS, FEATURES, Glyph, FlagPill, SUBNAV
});
