# Sentinel & Sentrion Labs — Marketing Site Build Handoff

**Version:** v1.0 (session of 2026-04-29)
**Owner:** Mark / Sentrion Labs
**Audience:** Claude Code (build) + future strategy sessions

This document captures the state of marketing copy and page architecture for `sentineloc.io` and `sentrionlabs.io` as of the end of session 2026-04-29.

It is structured as a **build handoff**. Locked copy is presented inline, ready to lift. Unwritten copy is marked with `[XXX - COPY COMING - XXX]` and a short note about what's missing.

---

## Section 1 — Operating Rules

These rules apply across both sites and govern every copy decision.

### Voice and tone

- Direct. Conversational. Not long-form.
- Each section's first sentence carries the point.
- Treat the reader as an adult who arrived on purpose.
- American spelling. PG language. No emoji unless deliberately chosen.
- Short sentences. Occasional fragments. No filler clauses.
- No marketing-ese: avoid synergy, leverage, empower, unlock, transform, revolutionize.
- Sentinel has personality (punchy headlines). Sentrion Labs is quieter (closer to a company-page voice than a product voice).

### Audience posture

- **Sentinel** addresses two audiences via dedicated landing pages: investigative journalists (`/for-journalists`) and OSINT analysts/researchers (`/for-analysts`).
- The Sentinel home page is **audience-neutral** — workflow-led, problem-led, no founder hint, no "for journalists" framing.
- Buyer persona is "Maya Reyes" (see canonical persona doc v1.1) — the workflow archetype, not a political tribe.
- Marketing copy is **principled, not partisan.** Free speech, free press, source protection, and the right to investigate without surveillance are explicit values. Specific partisan positions are not.

### Tier naming convention

- Format: **Tier N "Codename"** with codename capitalized in quotes.
- Lineup (locked):
  - **Tier 1 "Spectre"** — solo, available at launch
  - **Tier 2 "Vanguard"** — solo-but-equipped, post-launch
  - **Tier 3 "Aegis"** — post-launch
  - **Tier 4 "Argus"** — full retail, post-launch
- **Tier names are final; tier contents are not.** Marketing copy must not commit to tier contents beyond Tier 1.
- Old names ("Investigator," "Team," "Newsroom") are deprecated. Update any reference.
- All four codenames require trademark clearance check before public use.

### Scope rules

- **Individual buyers only at launch.** No Team, Newsroom, or Agency tier framing in marketing copy. Multi-user features deferred until proven individual demand.
- **Sentrion Labs trust spine + security anchor at launch.** No blog, no essays, no careers page, no founder bio (slot reserved, content TBD).
- **Audience pages: journalists + analysts only.** No PI, security team, or consultant-specific pages at launch. These are Year-2 expansion personas.
- **Vault tiers public, dated.** Vault Lite (now), Vault Standard (Q4 2026), Vault Pro (Q1 2027). Pre-order mechanic captures demand for Standard and Pro.

### Launch date

- **Soft launch target: Saturday, July 4, 2026** — the 250th anniversary of American independence. Site goes live, no press push.
- **Hard launch target: Tuesday, July 7, 2026** — press push, social, IRE/NICAR outreach.
- **Honest fallback: mid-to-late July 2026** if Phase 1 milestones aren't met. Better to be solid than fast.
- The 250th anniversary is referenced in the Tuesday launch announcement only. Not on site copy. Site copy must read as well in 2027 as in launch week.

---

## Section 2 — Site Architecture

### `sentineloc.io`

```
/                           ← Home (locked)
/for-journalists            ← [XXX - COPY COMING - XXX] revise from existing v2 copy
/for-analysts               ← Locked
/pricing                    ← [XXX - COPY COMING - XXX] use Option B structure
/features                   ← [XXX - COPY COMING - XXX] audience-neutral inventory
/security                   ← [XXX - COPY COMING - XXX] deep-dive from vault build plan
/preview/*                  ← Existing preview pages (out of scope this session)
/terms                      ← Standard ToS (out of scope this session)
/privacy                    ← Standard privacy policy (out of scope this session)
/aup                        ← Acceptable Use Policy (out of scope this session)
```

### `sentrionlabs.io`

```
/                  ← Locked
/security          ← Locked
/canary            ← Locked (template; placeholders for date, signature)
/commitments       ← Locked
/contact           ← Locked
/legal             ← Locked (stub directory)
```

### Cross-site link conventions

- Sentinel footer links to Sentrion Labs (parent company) and to the warrant canary directly.
- Sentinel `/security` links to `sentrionlabs.io/security` at the bottom for company-level commitments.
- Sentrion Labs home page lists Sentinel OC as a product, links to `sentineloc.io`.
- Sentrion Labs `/security` links to `sentineloc.io/security` for product-level architecture detail.
- **Don't repeat content across sites.** If a fact lives on Sentrion Labs (canary, commitments, PGP key), Sentinel links rather than duplicates. If a fact lives on Sentinel (Vault architecture, pricing), Sentrion Labs links rather than duplicates.

---

## Section 3 — sentineloc.io Pages

---

### `/` (Home page)

**Status:** Locked (v3.1)

#### Above the Fold — Four-Slide Hero

- Auto-rotates every 8–10 seconds
- Each slide links to its audience door
- Constant CTA below: Start trial + See how it works

**SLIDE 1 — Journalist / Workflow** *(links to /for-journalists)*

> # Your investigation isn't a feed. It's a case.
>
> Track entities across long-running stories. Save sources. Export reports your editor can actually use.
>
> **[ Built for investigative work → ]**

**SLIDE 2 — Journalist / Source Protection** *(links to /for-journalists)*

> # Built like the targets are watching.
>
> Hidden auth paths. Mutual TLS. Tiered encryption you choose per case. Your notes don't live on someone else's server in cleartext.
>
> **[ Built for investigative work → ]**

**SLIDE 3 — Analyst / Deliverable** *(links to /for-analysts)*

> # Reports that bill out. Sources that hold up.
>
> Every fact cited. Every connection scored. Export a professional deliverable in PDF, DOCX, or Excel — without rebuilding it from notes.
>
> **[ Built for OSINT analysts and researchers → ]**

**SLIDE 4 — Analyst / Research Depth** *(links to /for-analysts)*

> # Entity link analysis without the Maltego tax.
>
> Click an entity. Run a transform. Map the connections. Twenty-five integrated sources across sanctions, corporate filings, threat intel, and news.
>
> **[ Built for OSINT analysts and researchers → ]**

**Constant below slides:**

> **[ Start a 14-day trial ]**   **[ See how it works ]**
>
> *No credit card to start. No ads. No tracking. Ever.*

#### Section: Doors

> ## Two ways in.
>
> **[ → For investigative journalists ]**
> Long cases. Source protection. Story-ready exports. Audit trails that stand up.
>
> **[ → For OSINT analysts and researchers ]**
> Client deliverables. Threat research. Due diligence. Reports that bill.

#### Section: Setup

> ## You don't need another dashboard. You need a workspace.
>
> Your investigation already lives in eight tabs, three docs, and a Notion you forget to update. Sentinel pulls it into one place.
>
> Not a feed. Not a map. A workspace — built around the actual work of investigation.

#### Section: Contrast Table

> ## What Sentinel is. And what it isn't.

|  | **Sentinel** | **Monitoring dashboards** *(SitDeck, World Monitor)* |
|---|---|---|
| **Built for** | People running cases | People watching the world |
| **Core unit** | An investigation | A feed |
| **Saved investigations with notes** | ✓ | — |
| **Entity link analysis** | ✓ Built-in Research tab | — |
| **Source citation per fact** | ✓ Mandatory | — |
| **Confidence scoring** | ✓ High / medium / low | — |
| **Defensible exports** | ✓ PDF, DOCX, Excel, JSON | — |
| **Geographic depth (US, Canada, Mexico)** | ✓ City-level | Global generalist |
| **Tiered encryption (you pick per case)** | ✓ Three tiers, dated roadmap | — |
| **Source-tier separation (verified vs. experimental)** | ✓ | — |
| **Price** | $79/mo | Free |

> **Honest read:** if you want a global firehose to scroll through with your morning coffee, the free dashboards are great. *Use them.* Sentinel is for when you have a case to run, sources to track, and a report to file.

#### Section: Four Pillars

> ## Why people switch.
>
> ### 1. Built for cases, not feeds.
> Saved investigations. Entity bookmarks. Notes that survive deadlines. Export an Incident Report that stands on its own — graph, sources, timeline, citations included.
>
> Your work is cases. Your tool should know that.
>
> ### 2. North American depth, not global breadth.
> Crime tracking by city. Threat assessment for the US, Canada, and Mexico. Sanctions, corporate filings, campaign finance, vulnerability intel.
>
> Not 180 feeds. The right 25, integrated correctly.
>
> ### 3. Built like the targets are watching.
> Decoy entry points. Hidden authentication paths. Mutual TLS client certificates. Honeytoken intrusion detection. No source maps. No search engine indexing of operational surfaces.
>
> Other tools treat your privacy as a setting. Sentinel treats it as the product.
>
> ### 4. Vault: the security tier you choose.
> Pick the protection that fits the case. Vault Lite (today) gives every investigation per-user encryption with separated keys. Vault Standard (Q4 2026) adds client-side encryption — your data is unreadable to us. Vault Pro (Q1 2027) adds hardware keys.
>
> One platform. Three tiers. Honest about what each protects against.

#### Section: Vault (Dedicated)

> ## A note on Vault.
>
> Most "secure" SaaS products have one tier of encryption: theirs. They hold your keys. They can read your data. Subpoenas get content.
>
> Vault is different. You pick the protection per investigation, based on what's actually at stake.
>
> ### Vault Lite — included, today
> - Per-user encryption keys, vendor-held in a separated KMS
> - Operational separation between auth and data infrastructure
> - Standard backups, fast password recovery
> - **Protects against:** opportunistic data breach, casual rogue access
> - **Doesn't protect against:** lawful compulsion of Sentrion Labs
> - **Best for:** routine investigations, background research, day-to-day work
>
> ### Vault Standard — Q4 2026
> - Client-side encryption — content encrypted in your browser before it leaves
> - 24-word recovery phrase (you save it offline)
> - We literally cannot decrypt your investigation contents
> - **Protects against:** vendor breach, vendor subpoena, vendor sale or acquisition
> - **Doesn't protect against:** compromise of your own device, phishing, coerced disclosure
> - **Best for:** sensitive investigations, source-protection-critical work
>
> ### Vault Pro — Q1 2027
> - Everything in Standard, plus hardware key (FIDO2 / YubiKey) required for login
> - Per-tier warrant canary
> - **Protects against:** everything Standard defeats, plus phishing
> - **Doesn't protect against:** total device compromise, coerced disclosure of all your factors
> - **Best for:** investigations that absolutely cannot afford to leak
>
> ### What we won't claim
> No system protects against everything. Vault doesn't make your data unreadable to anyone in the universe forever. We tell you exactly what each tier protects against and where it stops, so you can make a real decision about a real threat model.
>
> **[ Read the Vault architecture documentation ]**

#### Section: Pricing

> ## Pricing
>
> ### Tier 1 "Spectre" — $79/mo
>
> All sources. All features. Full export. Vault Lite included.
>
> *$99/mo month-to-month. $79/mo billed annually. 14-day free trial. No credit card to start. Cancel anytime.*
>
> **[ Start trial ]**
>
> ---
>
> ### Vault Add-ons (pre-order)
>
> | **Vault Standard** | **Vault Pro** |
> |---|---|
> | +$30/mo | +$80/mo |
> | Available Q4 2026 | Available Q1 2027 |
> | **[ Reserve early access ]** | **[ Reserve early access ]** |
>
> *Reserve a Vault tier add-on today and lock in launch pricing. We'll email you when it ships. Cancel anytime.*

#### Section: What It's Not

> ## Sentinel isn't for everyone.
>
> **You probably don't want this if:**
> - You want a free global news dashboard. Use [World Monitor](https://www.worldmonitor.app) or [SitDeck](https://app.sitdeck.com). They're great at what they do.
> - You don't run actual investigations. This is overbuilt for casual world-watching.
> - Your work doesn't involve sensitive sources or targets who'd rather not be looked at. The hardening is overkill for general use.
>
> **You probably do want this if:**
> - You're working real cases, with real timelines, and real consequences if your notes leak.
> - You've outgrown a stack of browser tabs, Notion, and your own memory.
> - You believe the tools you use should respect that the work itself is sensitive.

#### Section: CTA Footer

> ## Ready to try it?
>
> **[ Start your 14-day trial ]**
>
> No credit card. No ads. No tracking. Cancel anytime.
>
> ---
>
> **Want a tour built for your work?**
> **[ → For investigative journalists ]**   **[ → For OSINT analysts and researchers ]**
>
> Questions? Email [mark@sentrionlabs.io](mailto:mark@sentrionlabs.io).

---

### `/for-journalists`

**Status:** [XXX - COPY COMING - XXX]

**Source:** Revise existing `sentinel-oc-landing-copy-v2.md` to fit new architecture.

**Required changes from v2:**
- Strip all Team/Newsroom tier references (individuals only)
- Replace "Investigator" with Tier 1 "Spectre" in pricing
- Tighten voice register (direct, not long-form)
- Keep the journalist-specific vocabulary and examples
- End with door back to `/for-analysts` and home

---

### `/for-analysts`

**Status:** Locked (v1.1)

#### Above the Fold

> # OSINT research, professionalized.
>
> You're not running a feed. You're running a case for a client, a stakeholder, or a team that needs the work to hold up under scrutiny.
>
> Sentinel is the workspace for that work — from initial entity research through link analysis, source citation, and the report that lands on someone's desk.
>
> **[ Start a 14-day trial ]**   **[ See how it works ]**
>
> *No credit card to start. $79/mo when you're ready.*

#### Section: Who This Is For

> ## Who this is for.
>
> **OSINT consultants and freelance researchers.** You bill time or deliverables. The cleaner your report and the faster you can produce it, the more you make. Your tools should help, not slow you down.
>
> **Corporate security and threat intel teams.** You produce assessments your team or your stakeholders act on. The work needs to be defensible if a decision goes sideways. Source attribution and confidence scoring aren't nice-to-haves — they're the floor.
>
> **In-house analysts at firms doing OSINT-adjacent work.** Fraud investigation. Pre-litigation research. Vendor risk assessment. Asset tracing. Anything where you're connecting entities across public records and reporting findings to someone who'll act on them.

#### Section: Workflow

> ## What the workflow looks like.
>
> ### Start a case.
> One investigation. One persistent graph. Notes, bookmarks, saved queries — all in one workspace. No more reconstructing yesterday's progress from scratch.
>
> ### Pivot through transforms.
> Click an entity. Run a transform — OFAC, OpenSanctions, SEC EDGAR, urlscan, AbuseIPDB, GDELT, Wikidata, FEC. Eight integrated transforms at launch. New entities and edges added to your graph automatically.
>
> ### Build the picture.
> Force-directed link analysis. Entity merge across sources. Confidence scoring per fact. Conflicting facts surfaced rather than silently reconciled. The graph reflects what you actually know, with sources you can defend.
>
> ### Export the deliverable.
> Story-ready PDF with graph, entity profiles, source bibliography, timeline, evidence appendix. DOCX for clients who want to edit. Excel for raw data. JSON for technical handoff. STIX 2.1 coming in Phase 3 for security-team workflows.

#### Section: What Makes Sentinel Different

> ## What makes Sentinel different for this work.
>
> ### 1. Source discipline by default.
>
> Every entity property and every edge has at least one source attached. Confidence scored as high, medium, or low based on source count and authority. When two sources disagree, both are stored — not silently reconciled.
>
> Your client asks "where did this come from?" The answer is in the report.
>
> ### 2. Built so subjects don't see you coming.
>
> Decoy entry points. Hidden authentication paths. Mutual TLS. Honeytoken intrusion detection. No source maps, no search engine indexing of operational surfaces.
>
> Your subject doesn't see you coming. Your client's adversary doesn't see your work.
>
> ### 3. Tiered encryption you choose per case.
>
> Routine work uses Vault Lite — encrypted at rest with separated key management. Sensitive engagements use Vault Standard (Q4 2026) — client-side encryption where we cannot decrypt your case. Critical work uses Vault Pro (Q1 2027) — hardware key required.
>
> One platform. Three tiers. You pick what fits the engagement.
>
> ### 4. Reports your client will actually read.
>
> Story-ready PDF export. Graph included as visualization, not screenshot. Source bibliography auto-generated. Timeline reconstructed from your activity log. Confidence levels visible per fact.
>
> The export is the deliverable. Not a starting point you reformat for two hours.

#### Section: What Sentinel Isn't

> ## What Sentinel isn't.
>
> **Not a Maltego replacement.** Maltego Pro has more transforms, deeper graph horsepower, and a transform marketplace. If you need every transform under the sun and you can pay enterprise pricing, Maltego is still the heavyweight.
>
> **Not a SIEM, not a TIP, not a vulnerability scanner.** If your work is monitoring infrastructure or running automated reconnaissance, you have better tools. Sentinel is for the part of the job where you're building a case, not running a scanner.
>
> **Not a reporting platform with OSINT bolted on.** You can't import a CSV of entities and have Sentinel write your report. The work happens in the workspace; the report comes out the other side.

#### Section: Pricing (callout)

> ## Pricing
>
> **Tier 1 "Spectre" — $79/mo**
>
> All sources. All features. Full export. Vault Lite included.
>
> $99/mo month-to-month. $79/mo billed annually. 14-day free trial. No credit card to start.
>
> **[ Start trial ]**
>
> Vault Standard add-on (+$30/mo) available Q4 2026 — [ reserve early access ]
> Vault Pro add-on (+$80/mo) available Q1 2027 — [ reserve early access ]

#### Section: CTA Footer

> ## Ready to try it?
>
> **[ Start your 14-day trial ]**
>
> No credit card. No ads. No tracking. Cancel anytime.
>
> ---
>
> Working a different angle?
> **[ → For investigative journalists ]**   **[ ← Back to home ]**
>
> Questions? Email [mark@sentrionlabs.io](mailto:mark@sentrionlabs.io).

---

### `/pricing`

**Status:** [XXX - COPY COMING - XXX]

**Structure:** Option B — Tier 1 "Spectre" full presentation, higher tiers acknowledged but unspecified.

**Required elements:**
- Tier 1 "Spectre" with full feature list, pricing, trial CTA
- Tier 2/3/4 acknowledgment — names visible, no prices, no dates, no features
- "Notify me" capture for higher tiers (not pre-orders — pre-orders only for dated commitments)
- Vault add-on pre-order section (existing)
- FAQ section (TBD)

**Open question for content TBD:** whether Vault Standard / Pro remain add-ons available on all tiers, or whether higher tiers bundle them by default. Affects pricing page structure. See Need-to-Know item 10.

---

### `/features`

**Status:** [XXX - COPY COMING - XXX]

**Structure:** Audience-neutral feature inventory. Organized by tab/area of the product.

**Required sections:** Operations tab, Research tab (link analysis), Cases, Exports, Sources/Feeds, Vault, Security architecture, COMMS (post-launch).

**Constraint:** Must reflect what actually ships at launch. Phase 2-4 features can be referenced but must be clearly labeled as roadmap.

---

### `/security`

**Status:** [XXX - COPY COMING - XXX]

**Source:** Deep-dive based on `sentinel-oc-vault-build-plan.md` and the five-layer license architecture.

**Required sections:** Threat model, Vault tier architecture (deeper than home page version), Hardening posture, License/data isolation, Audit and incident response, Vulnerability disclosure.

**Voice note:** This page is allowed to be more technical than the rest of the site. Buyers reading this page have already self-selected as security-careful.

---

## Section 4 — sentrionlabs.io Pages

---

### `/` (Home page)

**Status:** Locked (v1.1)

> # Sentrion Labs
>
> Sentrion Labs builds software for people who do the work free speech and a free press were written to protect.
>
> ---
>
> ## Products
>
> ### Sentinel OC
> An OSINT investigation workspace for journalists, analysts, and researchers. Track entities. Run transforms. Build cases that hold up. Export defensible reports.
>
> [ → sentineloc.io ]
>
> ---
>
> ## How we operate
>
> That work depends on tools the people doing it can actually trust. Security isn't a feature for us; it's the foundation.
>
> Specific decisions:
>
> - Tiered encryption customers choose per investigation, with honest documentation of what each tier protects against
> - A signed warrant canary, refreshed quarterly
> - Public commitments about what we will and will not do
> - Direct contact with the founder by email or PGP-encrypted message
>
> [ → Security ]   [ → Warrant canary ]   [ → Commitments ]
>
> ---
>
> ## About
>
> Sentrion Labs was founded in 2026. The company is privately held and self-funded. No outside investors. No advertising revenue. No data brokers.
>
> [XXX - COPY COMING - XXX] *(Founder bio — Mark to write)*
>
> ---
>
> ## Contact
>
> Email: [sentrionlabs@pm.me](mailto:sentrionlabs@pm.me)
> PGP: [XXX - FINGERPRINT COMING - XXX] — [XXX - KEY FILE COMING - XXX]
>
> Trademark filed 2026-04-27.

---

### `/security`

**Status:** Locked

> # Security
>
> ## Posture
>
> Sentrion Labs operates under the principle that customers' investigations are sensitive even when they're routine. Our security architecture reflects that.
>
> Specific commitments:
>
> - Customer data is encrypted at rest in all deployments
> - Customers choose per-investigation encryption tiers; documentation linked below
> - Authentication, key management, and customer data run as separated processes
> - Backup keys are stored offline, never co-located with primary infrastructure
> - We publish a signed warrant canary, refreshed quarterly
> - We will not ship a product update that materially weakens encryption without disclosing it
>
> ## Architecture
>
> Detailed security architecture for Sentinel OC is published at:
>
> [ → sentineloc.io/security ]
>
> ## Reporting a vulnerability
>
> Email security disclosures to [sentrionlabs@pm.me](mailto:sentrionlabs@pm.me) with `[SECURITY]` in the subject line, PGP-encrypted with the key linked below. Coordinated disclosure preferred. We aim to acknowledge reports within 72 hours.
>
> [ → PGP key ]
>
> ## Where we're not there yet
>
> We have not been audited by an external firm. We have not published a transparency report. Both are on our roadmap. We will not claim either before they are real.
>
> ---
>
> *Last updated: [XXX - DATE COMING - XXX]*

---

### `/canary`

**Status:** Locked (template; placeholders for date and signature)

> # Warrant Canary
>
> Statement, refreshed quarterly. Signed with the Sentrion Labs PGP key.
>
> ---
>
> ## Statement, [XXX - QUARTER YEAR COMING - XXX]
>
> As of [XXX - DATE COMING - XXX]:
>
> 1. Sentrion Labs has not received any National Security Letters.
> 2. Sentrion Labs has not received any FISA court orders.
> 3. Sentrion Labs has not received any gag orders.
> 4. Sentrion Labs has not been compelled to weaken or backdoor any product.
> 5. Sentrion Labs has not been compelled to disclose user data outside of standard, public-record legal process.
>
> If any of the above ceases to be true, this canary will not be refreshed. Customers should treat the absence of a current statement as itself information.
>
> Signed: [XXX - PGP SIGNATURE BLOCK COMING - XXX]
>
> ---
>
> ## Previous canaries
>
> *Quarterly archive will appear here as canaries are issued.*
>
> ---
>
> ## How to verify this canary
>
> 1. Download the Sentrion Labs PGP public key: [XXX - KEY FILE COMING - XXX]
> 2. Verify the key fingerprint matches: `[XXX - FINGERPRINT COMING - XXX]`
> 3. Verify the canary signature against the current statement.
>
> ## Why a canary
>
> US law allows certain government orders to come with gag provisions — the recipient cannot disclose that the order exists. A canary works around this by publishing a statement that *no such order has been received*. If that statement disappears, customers can infer something changed, even if we cannot say what.
>
> A canary is not a guarantee. It's a structural commitment that the company is willing to be silent rather than lie.

**Build note:** Do not publish this page without a real PGP signature. A warrant canary without a signature is theatre.

---

### `/commitments`

**Status:** Locked

> # Commitments
>
> Public commitments about how Sentrion Labs operates — what we will do, and what we will not.
>
> Public commitments are easy to make and hard to take back. That's the point. The commitments below hold regardless of business pressure, customer requests, or acquisition offers. If any of these change, we will say so publicly before the change takes effect.
>
> ---
>
> ## We will not sell user data.
>
> Customer investigations, notes, queries, and metadata will not be sold, licensed, or transferred to advertisers, data brokers, or third parties for marketing purposes. Ever.
>
> ## We will not run advertising.
>
> No banner ads, no sponsored placements, no paid promotion in product. The product is paid for by customers, directly. That is the only revenue model.
>
> ## We will not weaken encryption silently.
>
> If a product update materially changes the encryption model, we will document the change publicly before it ships. Customers will have time to read it before it takes effect.
>
> ## We will not hide compelled disclosure.
>
> If we are legally compelled to provide customer data, we will note this in our transparency reporting to the maximum extent the law allows. The warrant canary is the floor, not the ceiling.
>
> ## We will not pivot away from this market.
>
> Sentinel is built for people running investigations. We will not retool the product for a different market segment that displaces the one we serve. New products, when they exist, will be additive — on separate domains, not replacements.
>
> ## We will not accept acquisition that violates the above.
>
> The hardest commitment to make and the most important. If Sentrion Labs is acquired, the acquirer will be bound by these commitments as a condition of sale. If a deal cannot be structured that way, the deal will not happen.
>
> ## What we reserve the right to do.
>
> We will change pricing. We will change features. We will deprecate things that don't work. We will release new products on new domains. We will be wrong about technical decisions and revise them. None of those are violations of the above.
>
> ## How to hold us to this.
>
> If you believe Sentrion Labs has violated any of the above, write to [sentrionlabs@pm.me](mailto:sentrionlabs@pm.me) with `[ACCOUNTABILITY]` in the subject line. We will respond publicly to credible claims within 30 days.
>
> ---
>
> *Last updated: [XXX - DATE COMING - XXX]*

---

### `/contact`

**Status:** Locked

> # Contact
>
> ## Email
>
> [sentrionlabs@pm.me](mailto:sentrionlabs@pm.me)
>
> Replies typically within 2 business days.
>
> To help route your message, please add a tag to the subject line:
>
> | If your message is about... | Use subject tag |
> |---|---|
> | A general question or feedback | *(no tag needed)* |
> | A security disclosure | `[SECURITY]` — acknowledgment within 72 hours |
> | A press inquiry | `[PRESS]` |
> | A potential commitment violation | `[ACCOUNTABILITY]` — see [Commitments](/commitments) |
>
> ## PGP key
>
> Fingerprint: `[XXX - FINGERPRINT COMING - XXX]`
>
> [ → Download key (.asc) ]
>
> Encrypt sensitive disclosures with this key. Verify the fingerprint before encrypting.
>
> ## Mailing address
>
> *To be added when relevant for legal correspondence.*
>
> ---
>
> *Layout and content will expand as the company grows. For now, one inbox handles all incoming mail.*

---

### `/legal`

**Status:** Locked (stub directory)

> # Legal
>
> ## Sentinel OC
>
> - [Terms of Service](https://sentineloc.io/terms)
> - [Privacy Policy](https://sentineloc.io/privacy)
> - [Acceptable Use Policy](https://sentineloc.io/aup)
>
> ## Sentrion Labs (company)
>
> - Trademark: Sentrion Labs, filed 2026-04-27
> - Entity: Privately held, US-based — full filing details on request via [sentrionlabs@pm.me](mailto:sentrionlabs@pm.me) with `[LEGAL]` in the subject line
>
> ---
>
> *Per-product legal documents are maintained on each product's own domain. Future products will follow the same pattern.*

---

## Section 5 — Need-to-Know List

Open items requiring Mark's microscope pass before launch.

1. **STIX 2.1 export** is mentioned on `/for-analysts` as "coming in Phase 3." This is a forward-looking claim. Per the post-launch builds doc, STIX 2.1 is on the Phase 3 list. Confirm Phase 3 timing is still real before launch. If Phase 3 slips materially, this line should be softened or removed.

2. **Trademark check on Argus** — common name in security/insurance/media. Verify clean trademark space in the OSINT/security software category before launch.

3. **Trademark conflict on Overwatch** — *resolved*. Overwatch deprecated; replaced with Aegis (Tier 3).

4. **Spectre/CPU vulnerability association** — name carries minor baggage from the 2018 Spectre/Meltdown CPU vulnerability. Mostly fine, but security-aware buyers may notice. Decide whether to embrace, ignore, or replace.

5. **Trademark consultation** — when ready to lock tier names publicly, run all four through trademark counsel for clearance in software/SaaS classes (9 and 42). This is cheap insurance and standard practice before public use.

6. **Tier naming convention adopted: Tier N "Codename" with codename capitalized in quotes.** Update vault build plan, post-launch builds, and any other doc that references "Investigator," "Team," or "Newsroom" pricing. This is a session-level decision that needs to propagate to canonical docs before launch.

7. **Tier names locked, contents not.** Lineup: Tier 1 "Spectre," Tier 2 "Vanguard," Tier 3 "Aegis," Tier 4 "Argus." What features each tier includes is open and to be specified separately. Marketing copy must not commit to tier contents beyond Tier 1.

8. **Vault add-on availability across tiers** — decide whether Vault Standard / Vault Pro remain add-ons available on all tiers, or whether higher tiers bundle them by default. Affects pricing page structure and revenue model.

9. **Vault build plan needs update** — current doc targets "mid-July 2026" for Phase 1. New launch target is July 4 (soft) / July 7 (hard). Update milestones to reflect compression. Frame as: Soft launch target 2026-07-04. Hard launch target 2026-07-07. Honest fallback mid-to-late July if Phase 1 milestones aren't met.

10. **Persona doc update applied** — v1.1 ready in Project knowledge with the "What's Not About Politics" section added. Old "Investigator" pricing references in persona doc still need to be updated to Tier 1 "Spectre" in a follow-up pass.

11. **Founder bio** — slot reserved on `sentrionlabs.io/` home page. Mark to write. Per session decision, biographical context (journalism background, US Army veteran service) belongs on this bio, not in marketing copy.

12. **Maltego competitive callout** appears on home page hero (slide 4) and on `/for-analysts` (What Sentinel isn't section). Two mentions deliberate; further mentions should be avoided. Microscope pass should verify no over-saturation.

13. **Tuesday launch announcement** — separate copy task, due late June 2026. Will reference the 250th anniversary of American independence. Not on site copy. Drafting deferred until launch state is real.

14. **Press pitch email** — separate copy task, due late June 2026. For IRE, NICAR, Nieman Lab, Poynter outreach.

15. **PGP key generation** — Sentrion Labs PGP key needs to be generated and fingerprint published before site goes live. Required for `/canary`, `/security`, `/contact` pages.

---

## Section 6 — Build Sequencing Recommendation

Suggested order for Claude Code to scaffold and build:

**Phase 1 — Routes and structure**
1. Scaffold all routes for both sites with empty page components
2. Implement shared header, footer, and link conventions
3. Implement the four-slide hero component for `sentineloc.io/` (auto-rotate, dot navigation)
4. Implement audience door cards (used on home and footer)

**Phase 2 — Locked content**
5. Populate `sentineloc.io/` (home) with locked v3.1 copy
6. Populate `sentineloc.io/for-analysts` with locked v1.1 copy
7. Populate `sentrionlabs.io/` and all sub-pages with locked v1.1 copy

**Phase 3 — Stub pages**
8. Build `sentineloc.io/for-journalists`, `/pricing`, `/features`, `/security` with placeholder content and `[XXX - COPY COMING - XXX]` markers visible to internal builds, hidden in production until copy lands

**Phase 4 — Pre-launch**
9. PGP key generation, fingerprint publication
10. Warrant canary first signature
11. Date placeholders filled (`[XXX - DATE COMING - XXX]`)
12. Trademark clearance confirmations from counsel

---

## End of Handoff

This document represents the state of marketing copy and page architecture decisions as of 2026-04-29. Future sessions can extend it; the locked sections should not be silently rewritten.

For changes to locked copy, update version numbers and date a change log entry at the top of this doc.
