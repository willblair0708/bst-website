# Bastion - Command Center for Translational Medicine

> *"Two diseases cured; ten‑thousand remain. Translation must move at software speed."* — Estelion's Charge

Bastion is the federated command center that unifies the entire translational medicine stack—from OpenFDA safety feeds to NIH genomic lakes—into one computable, shareable lattice called **CureGraph**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

## 🎨 Design System

This implementation follows the **Bastion Design Constitution v3.2** specification:

### Color Palette
- **Greyscale**: From `grey/900` (#0A0C10) to `grey/100` (#F5F8FA)
- **Functional**: `accent/pass` (#19A7CE), `accent/fail` (#FF6B6B), `accent/warn` (#FFB454), `accent/merit` (#F3C94C)

### Typography
- **Display XL**: 28px, Inter 600
- **Display L**: 22px, Inter 600  
- **Heading M**: 18px, Inter 600
- **Body M/S**: 15px/13px, Inter 400
- **Code**: 13px, IBM Plex Mono 400

### Performance Targets
- First Contentful Paint: ≤ 1s (4G)
- Largest Contentful Paint: ≤ 2s
- Bundle size: ≤ 150kB (gzipped) per route

## 🏗️ Architecture

### Components (`/components`)
- `Badge` - Metric pills with flip animation
- `AuroraBackground` - Animated gradient ribbons
- `LifeDaysTicker` - North-star metric counter
- `ConnectorStatus` - Federation health monitoring
- `Navigation` - Primary site navigation
- `HeroSection` - Landing page hero
- `CTASection` - Primary action flows

### Features
- ✅ **Aurora Ribbons**: 90s keyframe hue rotation
- ✅ **Motion Respect**: `prefers-reduced-motion` support
- ✅ **Accessibility**: WCAG AA compliance, focus rings
- ✅ **Performance**: Code splitting, lazy loading
- ✅ **Responsive**: 12/8/4/1 column grid system

## 🔬 Federation Connectors

Bastion integrates with the global translational medicine ecosystem:

| Source | Cadence | Purpose |
|--------|---------|---------|
| **OpenFDA** | 1h | Auto-flag adverse events |
| **ClinicalTrials.gov** | 24h | Suggest protocol reuse |
| **NIH dbGaP** | Snapshot | Genotype cohorts |
| **EMA CTIS** | 6h | EU safety signals |
| **EHR FHIR** | Streaming | Live recruitment velocity |

## 🎯 Mission

*"We design to collapse the distance between idea and cure—at planetary scale."*

**Merge only what advances the CureGraph.**

## 📋 Development

Built with:
- **Next.js 15** - React framework with RSC
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon system
- **TypeScript** - Type safety

## 🔒 Compliance

- Part 11 cryptographic signatures
- pg_audit + WAL streaming to S3 Glacier
- Privacy Kit PHI masking
- WCAG AA accessibility compliance

---

*Bastion is part of the Estelion ecosystem advancing computational medicine.*