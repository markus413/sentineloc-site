// The four Sentinel Research Format prompts.
//
// Source of truth: 01Docs/sentinel-research-format-prompts-v1.md
// When that doc changes after user testing, sync the strings below
// — same content, different surface. Keep the two in lockstep.
//
// Why a `.ts` data file (not MDX, not pulled from the doc at build
// time): the page is statically exported via Cloudflare Pages; a
// build-time markdown fetch adds a dependency for no real win.
// Template-literal strings keep the prompts inspectable in the
// repo, diffable in PRs, and copyable by a single client-side
// `navigator.clipboard.writeText(promptText)` call.

export type Variant = {
  id: string;             // URL-safe slug + className anchor
  name: string;           // Display name in the section heading
  oneLiner: string;       // Single-sentence "use this when…"
  prompt: string;         // The full copy-paste block
};

export const VARIANTS: Variant[] = [
  {
    id: "general",
    name: "General Investigation",
    oneLiner:
      "The catch-all. Use this when the research spans multiple investigation types or doesn't fit a more specific variant.",
    prompt: `I need you to act as a research assistant structuring investigative
findings using the Sentinel Research Format. Your output will be
imported into an investigation workspace; structure is essential.

OUTPUT RULES (do not deviate):
- Start your reply with the title heading. No preamble, no
  "Here's what I found," no closing summary outside the structure.
- Use the exact section headers shown below, in the order shown.
- Use the exact entity notation: **Person:** Name (with the colon
  and bold). Same for Organization, Location, Asset, Document.
- Use → between related entities (or -> if your output strips
  unicode). The pattern is: Entity A → Entity B : relationship type.
- For every entity, include a Confidence line with exactly one of:
  stated, inferred, or uncertain. No other words.
  - stated     = presenting this as established fact
  - inferred   = deduced from context, not directly stated
  - uncertain  = unsure, flag for careful verification
- For every claim that could be independently verified, put a
  bullet in CLAIMS REQUIRING VERIFICATION. Be generous — most
  factual assertions benefit from a verification step.
- If something doesn't fit the structure, put it in NOTES.

OUTPUT STRUCTURE:

# [Investigation Title]

## SUMMARY
One paragraph. What this research covers and why it matters.

## ENTITIES

**Person:** [Name]
- Role/Title:
- Affiliation:
- Key facts:
- Confidence: [stated / inferred / uncertain]
- Source: [URL or citation if available]

**Organization:** [Name]
- Type:
- Industry/Sector:
- Key facts:
- Confidence: [stated / inferred / uncertain]
- Source:

**Location:** [Name]
- Type:
- Details:
- Confidence: [stated / inferred / uncertain]
- Source:

(Repeat for every distinct person, organization, location, asset,
or document you identify. Use **Asset:** and **Document:** as needed.)

## RELATIONSHIPS
- [Entity A] → [Entity B] : [relationship type — short]
- [Entity A] → [Entity B] : [relationship type — short]

## TIMELINE
- [YYYY-MM-DD or as much date as you have]: [Event in one sentence]
- [Date]: [Event]

## CLAIMS REQUIRING VERIFICATION
- [Specific factual claim] — [why it matters and what would verify it]
- [Specific factual claim] — [why it matters and what would verify it]

## OPEN QUESTIONS
- [Unresolved question this research surfaced]
- [Unresolved question]

## NOTES
Anything else that doesn't fit above. Brief.

---

Here's the topic to research: [YOUR TOPIC HERE]`,
  },

  {
    id: "person",
    name: "Person Investigation",
    oneLiner:
      "Use when investigating a specific individual — identity, associations, employment, public record, and timeline.",
    prompt: `I need you to act as a research assistant structuring investigative
findings about a specific person using the Sentinel Research Format.
Your output will be imported into an investigation workspace;
structure is essential.

OUTPUT RULES (do not deviate):
- Start your reply with the title heading. No preamble.
- Use the exact section headers shown below, in the order shown.
- Use the exact entity notation: **Person:** Name (with colon and
  bold). Same for Organization, Location, Document.
- Use → between related entities (or -> if unicode strips).
- For every entity, include Confidence: stated / inferred / uncertain.
- For every claim that could be independently verified, put a
  bullet in CLAIMS REQUIRING VERIFICATION. Be generous — most
  assertions about a person benefit from verification.
- If something doesn't fit, put it in NOTES.

EMPHASIS FOR THIS INVESTIGATION TYPE:
The subject is a person. Focus on identity, associations, history,
and footprint. Look hard for:
- Full legal name, known aliases, prior names
- Date and place of birth (verify against multiple sources)
- Public-record identifiers (corporate filings, court records,
  property records, professional licenses)
- Employment / affiliation history with dates
- Family and close associates (each as its own **Person:** entity)
- Organizations they own, run, are officers of, or are sanctioned by
- Financial connections (companies they're tied to, transactions
  on public record)
- Online footprint (verified accounts on professional platforms;
  do not include unverified social media as fact)
- Legal history (suits filed, suits against, settlements, criminal
  records — all flagged for verification)

Surface the subject's PRIMARY entity at the top of the ENTITIES
section. Associates and organizations follow.

OUTPUT STRUCTURE:

# [Subject's Name] — Investigation

## SUMMARY
Who this person is, why they're being investigated, and what
this research covers. One paragraph.

## ENTITIES

**Person:** [Subject's full legal name]
- Aliases:
- Date of birth:
- Place of birth:
- Nationality:
- Current location:
- Role/Title:
- Affiliation:
- Public identifiers: [SSN/EIN/license numbers — DO NOT include
  PII like full SSN; only public record identifiers]
- Online presence: [verified accounts only]
- Confidence: [stated / inferred / uncertain]
- Source:

**Person:** [Associate's name]
- Relationship to subject:
- Role/Title:
- Affiliation:
- Confidence:
- Source:

**Organization:** [Org tied to subject]
- Subject's role in this org:
- Type:
- Confidence:
- Source:

(Repeat for every distinct associate, organization, location,
or document.)

## RELATIONSHIPS
- [Subject] → [Person] : [family / employer / business partner / etc.]
- [Subject] → [Organization] : [employee / officer / owner / etc.]
- [Subject] → [Location] : [residence / business address / etc.]

## TIMELINE
- [Date]: [Birth / event in subject's life]
- [Date]: [Education, employment, organization founding, etc.]
- [Date]: [Legal events, news mentions]

## CLAIMS REQUIRING VERIFICATION
- [Any biographical claim — DOB, birthplace, education, family ties]
- [Any role/title/affiliation claim with specific dates]
- [Any financial or legal claim]
- [Any claim about associations that aren't directly documented]

## OPEN QUESTIONS
- [What's unclear about this person's history?]
- [What records would you check next?]

## NOTES
Brief. Anything else.

---

Here's the person to investigate: [YOUR SUBJECT HERE]`,
  },

  {
    id: "corporate",
    name: "Corporate Investigation",
    oneLiner:
      "Use when investigating an organization — ownership, officers, filings, contracts, litigation, and material relationships.",
    prompt: `I need you to act as a research assistant structuring investigative
findings about a specific organization using the Sentinel Research
Format. Your output will be imported into an investigation
workspace; structure is essential.

OUTPUT RULES (do not deviate):
- Start your reply with the title heading. No preamble.
- Use the exact section headers shown below, in the order shown.
- Use the exact entity notation: **Organization:** Name (with colon
  and bold). Same for Person, Location, Document.
- Use → between related entities (or -> if unicode strips).
- For every entity, include Confidence: stated / inferred / uncertain.
- For every claim that could be independently verified, put a
  bullet in CLAIMS REQUIRING VERIFICATION. Be generous — corporate
  claims have official records that almost always warrant a check.
- If something doesn't fit, put it in NOTES.

EMPHASIS FOR THIS INVESTIGATION TYPE:
The subject is an organization. Focus on structure, control, and
official record. Look hard for:
- Legal name, DBAs, prior names, state of incorporation
- Entity type (LLC, C-corp, nonprofit, foreign entity, etc.)
- Registration details (state filings, EIN, registered agent)
- Ownership chain (parent companies, subsidiaries, beneficial owners)
- Officers and directors (each as its own **Person:** entity)
- Regulatory filings (SEC EDGAR for public cos, state Secretary
  of State for private, IRS Form 990 for nonprofits)
- Government contracts (USA Spending, federal/state procurement)
- Litigation history (PACER, state court records)
- Sanctions / regulatory actions (OFAC, FINRA, SEC enforcement)
- Material related entities (subsidiaries, JV partners, vendors
  with substantial contracts)

Surface the subject organization at the top of the ENTITIES
section. Officers and related entities follow.

OUTPUT STRUCTURE:

# [Organization Name] — Investigation

## SUMMARY
What this organization does, why it's being investigated, and what
this research covers.

## ENTITIES

**Organization:** [Legal name]
- DBAs / prior names:
- Entity type:
- State of incorporation:
- Registration date:
- Registered agent:
- EIN: [if public]
- Headquarters address:
- Industry / NAICS:
- Public/private:
- Parent company: [if any]
- Confidence: [stated / inferred / uncertain]
- Source: [SEC filing URL, state SoS URL, etc.]

**Person:** [Officer/director name]
- Role in subject org:
- Tenure:
- Other affiliations:
- Confidence:
- Source:

**Organization:** [Subsidiary / related entity]
- Relationship to subject:
- Confidence:
- Source:

(Repeat for every distinct officer, director, subsidiary, parent,
beneficial owner, or material related entity.)

## RELATIONSHIPS
- [Subject Org] ← [Parent Org] : owns
- [Subject Org] → [Subsidiary] : owns
- [Officer] → [Subject Org] : [CEO / director / etc., dates]
- [Subject Org] → [Other Org] : [JV / vendor / customer / etc.]
- [Subject Org] → [Regulator] : [filing / enforcement action]

## TIMELINE
- [Date]: Incorporation
- [Date]: Material filing / acquisition / IPO / etc.
- [Date]: Regulatory action / litigation
- [Date]: Officer changes

## CLAIMS REQUIRING VERIFICATION
- [Ownership claim — check state SoS, SEC, OpenCorporates]
- [Officer/director claim with specific dates]
- [Any government contract claim — check USASpending.gov]
- [Any litigation or regulatory-action claim — check PACER, SEC,
  state court records]
- [Financial claim — check 10-K, 10-Q, audited statements]

## OPEN QUESTIONS
- [What's unclear about the ownership structure?]
- [What filings would you check next?]
- [What beneficial-ownership questions remain?]

## NOTES
Brief.

---

Here's the organization to investigate: [YOUR SUBJECT HERE]`,
  },

  {
    id: "financial",
    name: "Financial Flow Investigation",
    oneLiner:
      "Use when following money — accounts, transactions, shell structures, beneficial ownership, jurisdictions, and pattern flags.",
    prompt: `I need you to act as a research assistant structuring investigative
findings about money movement using the Sentinel Research Format.
Your output will be imported into an investigation workspace;
structure is essential.

OUTPUT RULES (do not deviate):
- Start your reply with the title heading. No preamble.
- Use the exact section headers shown below, in the order shown.
- Use the exact entity notation: **Account:** Name, **Transaction:**
  ID, **Organization:** Name, **Person:** Name (with colon and bold).
- Use → between related entities for fund flow (or -> if unicode
  strips). Pattern for money movement:
  [Source] → [Destination] : [amount] [currency] [date]
- For every entity, include Confidence: stated / inferred / uncertain.
- For every claim that could be independently verified, put a
  bullet in CLAIMS REQUIRING VERIFICATION. Be aggressive here —
  financial claims should rarely be taken at face value.
- If something doesn't fit, put it in NOTES.

EMPHASIS FOR THIS INVESTIGATION TYPE:
The subject is a flow of money. Focus on parties, amounts, and
paths. Look hard for:
- The accounts involved (institution, account holder, jurisdiction)
- Each transaction (amount, currency, date, sending and receiving
  parties)
- Shell company structures (multiple-layer ownership obscuring
  the beneficial party)
- Jurisdictions traversed (each as a **Location:**, especially
  flag financial-secrecy jurisdictions)
- Beneficial owners (the real party in interest behind shell
  structures, each as a **Person:** entity)
- Patterns (round-tripping, layering, structuring, integration —
  flag any visible)
- Source-of-funds claims (is the origin documented? legitimate?)
- Regulatory filings (SAR/CTR mentions in public record, OFAC
  designations, FinCEN actions)

Surface the primary subject (the suspect transaction, the
suspect actor, or both) at the top of ENTITIES.

OUTPUT STRUCTURE:

# [Flow / Subject Description] — Investigation

## SUMMARY
What this money flow involves, who the parties are, why it's
being investigated.

## ENTITIES

**Person:** [Beneficial owner / principal — if known]
- Role in flow:
- Known accounts / control points:
- Jurisdiction:
- Confidence:
- Source:

**Organization:** [Entity in the chain — shell, operating, financial]
- Entity type:
- Jurisdiction:
- Role in flow:
- Beneficial owner: [if identified]
- Confidence:
- Source:

**Account:** [Account identifier — bank/account/wallet]
- Institution:
- Account holder:
- Jurisdiction:
- Date opened: [if known]
- Confidence:
- Source:

**Transaction:** [Reference / date / wire ID]
- From:
- To:
- Amount:
- Currency:
- Date:
- Purpose claimed:
- Confidence:
- Source:

**Location:** [Jurisdiction]
- Why relevant:
- Regulatory posture: [e.g., financial-secrecy jurisdiction,
  sanctioned country]
- Confidence:
- Source:

## RELATIONSHIPS
- [Person] → [Organization] : [beneficial owner / officer / signer]
- [Organization] → [Account] : [holds / controls]
- [Source Account] → [Destination Account] : [amount] [date]
- [Org] → [Location] : [registered in / operates from]
- [Transaction] → [Pattern] : [structuring / layering / etc.]

## TIMELINE
- [Date]: [Transaction or material event]
- [Date]: [Account opened / entity formed]
- [Date]: [Regulatory action / news mention]

## CLAIMS REQUIRING VERIFICATION
- [Every transaction amount / date / counterparty]
- [Every claim about beneficial ownership — these are almost
  always the crux and almost always contested]
- [Every claim about source of funds]
- [Every jurisdiction claim — verify registration, regulatory
  status, sanctions posture]
- [Every pattern claim — structuring/layering are conclusions, not
  observations; flag the underlying data for verification]

## OPEN QUESTIONS
- [Who's the beneficial party behind shell structures?]
- [What's the documented source of funds?]
- [What jurisdictions remain unaccounted for in the chain?]

## NOTES
Brief.

---

Here's the flow / subject to investigate: [YOUR TOPIC HERE]`,
  },
];
