# Design System — DraftStack

## 1. Product Context & Objectives
- **Company**: DraftStack — a dedicated software development studio and product lab based in the Philippines.
- **Value Proposition**: A small, senior engineering team turning ideas and operational problems into fast, dependable, production-grade custom software — from tailored internal systems to commercial web applications and SaaS products.
- **Flagship In-House Product**: GymFlow PH (membership management software for Philippine gym owners, featuring GCash/Maya logging, automated expiry alerts, and member check-in).
- **Core Audience**: Business owners, founders, and operations managers looking for high-craft software development without agency overhead, ticket queues, or outsourced runarounds.

## 2. Brand Personality & Principles (Anti-Slop)
- **Authentic & Grounded**: Real software by real engineers. No hand-wavy AI hype ("revolutionizing intelligent predictive paradigms"). If AI is used, it should be concrete and utilitarian (e.g. OCR for receipts, automated SMS/messaging flows, smart data parsing).
- **Modern & High Craft**: Clean lines, deliberate typography, high information density, sharp contrast, purposeful subtle micro-interactions.
- **No Stock/AI Cliches**: No constellation networks, glowing particle spheres, floating 3D glass cubes, or purple/magenta generic SaaS gradients.
- **Evidence-Driven**: Feature real UI artifacts, real product metrics, transparent workflows, and direct access to builders.

## 3. Color Palette & Tokens
- **Background Main**: `#0a0a0c` (deep near-black)
- **Background Surface / Cards**: `#131418` (refined dark slate)
- **Background Subtle Contrast**: `#0e0f12`
- **Primary Accent**: `#3f6cff` (sharp electric cobalt blue)
- **Accent Hover / Highlight**: `#6d8dff`
- **Accent Subtle Wash**: `rgba(63, 108, 255, 0.12)`
- **Border Subtle**: `#232429`
- **Text Primary**: `#f4f3ef` (warm crisp white)
- **Text Secondary / Muted**: `#93959c` (slate gray)
- **Status Mint**: `#3ecf8e` (active / positive)
- **Status Amber**: `#f5b942` (pending / warning)
- **Status Crimson**: `#e5555f` (expired / alert)

## 4. Typography Hierarchy
- **Primary Body & Display**: `Plus Jakarta Sans`, sans-serif (weights: 400 regular, 500 medium, 600 semi-bold, 700 bold, 800 extra-bold)
- **Technical & Utility**: `JetBrains Mono`, monospace (weights: 400, 500, 600, 700)
- **Hero Title**: `clamp(2.5rem, 5.5vw, 4.5rem)`, letter-spacing `-0.03em`, line-height `1.05`
- **Section Headers**: `clamp(1.8rem, 3.2vw, 2.6rem)`, letter-spacing `-0.02em`
- **Kickers / Eyebrows**: `0.72rem`, uppercase, `JetBrains Mono`, letter-spacing `0.12em`
- **Body Text**: `0.95rem` – `1.05rem`, line-height `1.65`

## 5. UI Components & Layout Specs
- **Max Container Width**: `1160px` with `24px` gutter
- **Card Styling**: 1px solid `#232429`, radius `14px`, background `#131418`, hover subtle glow/lift
- **Buttons**:
  - Primary: `#3f6cff`, color `#ffffff`, font-weight 700, radius `10px`, crisp shadow
  - Secondary: 1px solid `#232429`, text `#f4f3ef`, radius `10px`, hover border `#3f6cff`
- **Interactive Elements**: Visible focus states, reduced-motion compliant transitions, responsive grid layouts
