# **Bastion Design Constitution** — *CureGraph Specification*

**Master Edition v3.2 — August 2025**

> **Estelion’s Charge**   Two diseases cured; ten‑thousand remain.  Bastion is the **Command Center** where every idea, dataset, simulation, and protocol becomes computable, shareable, and merge‑able—so translation moves at software speed.
> **Analogy:** GitHub gave code a home; Hugging Face gave models a commons; **Bastion unifies the entire translational stack**—from OpenFDA safety feeds to NIH genomic lakes—into one federated lattice we call **CureGraph**.

---

## 0 · Mandate

This document is the **golden record** for Bastion’s visual and interaction language.  A newcomer should be able to craft a Figma frame, React component, or Framer animation that drops into prod **pixel‑perfect** and **mission‑aligned** within 24 hours.

> **North‑Star Metric**  » *Life‑days accelerated by Bastion‑hosted work.*  Every interaction should make that ticker rise.

---

## 1 · Design Tenets

1. **Evidence > Ornament** — every pixel maps to a verifiable datum: commit SHA, twin AUC, power estimate, or cryptographic signature.
2. **Velocity = Mercy** — performance budgets are moral budgets. FCP ≤ 1 s on 4 G.
3. **Clarity → Delight** — default views favour clinicians & regulators; depth delights power users.
4. **Equity on Surface** — inclusion metrics share the same visual weight as statistical power.
5. **Abundance Aesthetic** — gradients, motion, and micro‑copy evoke possibility without chaos.
6. **Federation by Default** — Connectors to OpenFDA, EMA, NIH, and EHR nodes are first‑class citizens.

---

## 2 · Visual Foundation

### 2.1 Colour System

*All colours defined in Linear‑sRGB; exposed as CSS variables & Tailwind config.*

#### Greyscale

| Token      | Hex     | Usage            |
| ---------- | ------- | ---------------- |
| `grey/900` | #0A0C10 | Dark canvas      |
| `grey/800` | #16181D | Elevated panels  |
| `grey/700` | #20232B | Card borders     |
| `grey/600` | #2F333B | Dividers         |
| `grey/500` | #495057 | Disabled text    |
| `grey/400` | #6C757D | Placeholder text |
| `grey/300` | #A1A7B3 | Dim text (Dark)  |
| `grey/100` | #F5F8FA | Panel BG (Light) |
| `white`    | #FFFFFF | Canvas (Light)   |

#### Functional Palette

| Semantic       | Dark    | Light   | WCAG Contrast |
| -------------- | ------- | ------- | ------------- |
| `accent/pass`  | #19A7CE | #19A7CE | 4.5:1 on bg   |
| `accent/fail`  | #FF6B6B | #FF6B6B | 4.5:1         |
| `accent/warn`  | #FFB454 | #FFB454 | 4.5:1         |
| `accent/merit` | #F3C94C | #F3C94C | 4.5:1         |

### 2.2 Typography Scale

| Style       | Font          | Size (px) | Line | Weight |
| ----------- | ------------- | --------- | ---- | ------ |
| Display XL  | Inter         | 28        | 1.2  | 600    |
| Display L   | Inter         | 22        | 1.25 | 600    |
| Heading M   | Inter         | 18        | 1.35 | 600    |
| Body M      | Inter         | 15        | 1.5  | 400    |
| Body S      | Inter         | 13        | 1.5  | 400    |
| Code / Mono | IBM Plex Mono | 13        | 1.45 | 400    |

### 2.3 Spacing & Grid

4 px baseline; spacing tokens `sp/1=4` … `sp/16=64`. 12‑column grid (≥1440 px), 8‑col (1024 px), 4‑col (768 px), single‑col mobile.

### 2.4 Iconography & Imagery

Lucide 24 × 24 1.5 px stroke + custom helix, syringe, shield, rocket icons. No stock photos—use abstract “Aurora Ribbon” SVG backgrounds.

---

## 3 · Motion & Micro‑Interactions (Framer Motion)

| Element             | Trigger       | Motion                              | Purpose                       |
| ------------------- | ------------- | ----------------------------------- | ----------------------------- |
| Status Badge        | metric update | Flip Y 180°, spring `{140/24}`      | Feels like mission patch flip |
| CI Log              | incoming line | slide `x:[‑8→0]`, fade `0→1` 180 ms | Telemetry feel                |
| CureGraph Node Dive | click node    | Layout shared‑id morph              | Spatial context               |
| Aurora Ribbon       | passive       | 90 s keyframe hue shift             | Living system                 |
| Diversity Upgrade   | achieve medal | DNA confetti 80 ms burst            | Celebrate equity              |

`prefers‑reduced‑motion` & `?audit=1` disable non‑essential motion.

---

## 4 · Information Architecture

```
🏠 Home — Hero+Ribbon+Life‑Days Ticker
├─ Discover   — Trials • Twins • Datasets • Hypotheses • Regulations
├─ Workspace  — My Repos • PRs • CI • Contribution (Life‑Days) Graph
├─ CureGraph  — Zoomable DAG, provenance, OpenFDA edges
├─ Ops Dash   — Enrolment map, dropout risk, regulatory queue
├─ Marketplace— Plug‑ins, Widgets, Stars, Trust
├─ Ecosystem  — Connector status (OpenFDA, NIH, EMA, CT.gov, EHR)
└─ Governance — Org roles, Audit exports, Reg portals
```

Breadcrumb format: `org / repo @ commit • signer‑hash‑8` (click to copy deep‑link).

---

## 5 · Component Library (`@bastion/ui`)

| Component        | Description                       | Key Props                      |
| ---------------- | --------------------------------- | ------------------------------ |
| `Badge`          | Metric pill                       | `metric`, `value`, `state`     |
| `ProtocolDiff`   | Side‑by‑side or inline YAML diff  | `old`, `new`, `mode`           |
| `EvidenceDrawer` | Slide‑over with artefact previews | `artifactUrl`                  |
| `CureGraph`      | Dagre graph                       | `dagJson`, `layout`            |
| `TwinPlot`       | WebGL scatter/violin              | `dataUrl`, `x`, `y`            |
| `DiversityRadar` | Radar chart                       | `scoresObj`                    |
| `ConnectorCard`  | Shows external feed health        | `source`, `status`, `lastSync` |
| `RegSignalBadge` | Inline regulatory alert           | `severity`, `message`          |

---

## 6 · Accessibility & Inclusivity

* WCAG AA min; AAA for primary actions.
* Dyslexia toggle (Atkinson Hyperlegible + tint).
* Screen‑reader diff narration: “Removed upper age limit 65 → 75”.
* Keyboard‑first nav; high‑contrast focus rings.

---

## 7 · Performance & Technical Budgets

| KPI                      | Target        | Tooling                          |
| ------------------------ | ------------- | -------------------------------- |
| First Contentful Paint   | ≤ 1 s (4 G)   | Next.js 15 RSC, edge caching     |
| Largest Contentful Paint | ≤ 2 s         | Image optimisation, lazy workers |
| CI log latency           | ≤ 200 ms P95  | SSE, Redis streams               |
| Bundle size per route    | ≤ 150 kB (gz) | Code‑split, tree‑shaking         |
| Mobile memory            | ≤ 300 MB      | Offload graphs to web‑worker     |
| Uptime                   | 99.9 %        | Supabase + K8s multi‑AZ          |

---

## 8 · Compliance Overlay

Rust Part 11 signer → SHA‑256 + JWS → weekly anchor in AWS QLDB. pg\_audit + streamed WAL to S3 Glacier (immutability policy). Privacy Kit flags PHI → Safe‑Harbor masks pre‑merge.

---

## 9 · Federation & Ecosystem Connectors

| Source                 | ID                  | Cadence   | UI Surface               | Example Use               |
| ---------------------- | ------------------- | --------- | ------------------------ | ------------------------- |
| **OpenFDA**            | `connector/openfda` | 1 h       | RegSignalBadge, Ops Dash | Auto‑flag adverse events  |
| **ClinicalTrials.gov** | `connector/ctgov`   | 24 h      | Discover facets          | Suggest reuse of modules  |
| **NIH dbGaP / AnVIL**  | `connector/gap`     | Snapshot  | Twin Explorer            | Genotype cohorts          |
| **EMA CTIS**           | `connector/ctis`    | 6 h       | CureGraph edges          | EU safety signals         |
| **EHR FHIR Node**      | `connector/fhir`    | Streaming | Ops Dash                 | Live recruitment velocity |

Connector Pill colours: green live, yellow degraded, red stale. Click → modal with latency sparkline & last payload checksum.

---

## 10 · Governance & Versioning

Design Council monthly (PM, Design, Clinician, Patient). RFCs in `estelion/rfcs`; two‑week review. λ‑Trial DSL SemVer; migration scripts auto‑tested in CI.

---

## 11 · Horizon — Inspirational Features

| ETA  | Feature                         | Impact                          |
| ---- | ------------------------------- | ------------------------------- |
| 2026 | Copilot‑for‑Clinicians (GPT‑4o) | Inline eligibility suggestions  |
| 2027 | Spatial Trials 3‑D twins        | Precision radiotherapy planning |
| 2028 | zk‑Data‑Dividend                | Proof‑of‑participation payouts  |
| 2029 | VR Mission Control              | Global regulators in shared VR  |

---

## 12 · Voice & Tone

**Voice:** Visionary yet evidence‑driven—“Skunkworks engineer meets clinical ethicist.”
**Tone:** Concise, data‑first, optimistic; avoid jargon unless necessary.
**Micro‑copy:** Verb‑first (“Fork”, “Simulate”, “Merge”); error messages include next‑step guidance.

---

### *“We design to collapse the distance between idea and cure—at planetary scale.”*

Merge only what advances the CureGraph.
