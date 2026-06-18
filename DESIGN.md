# Spark Research India — Design System

## Brand Identity

**Spark Research India** is a mentorship programme guiding Indian students (Classes 8–12) from a research idea to the IRIS National Fair and on to ISEF — the world's largest pre-college science competition.

### Brand Persona: The Brilliant Senior

That friend who's a year ahead; done the competitions, knows the pathways, and is genuinely excited to help you get there. Not an authority. A person in your corner.

**Writing voice:** Warm & straight-forward.
- "Your research starts here."
- "ISEF is closer than you think."
- "Built by students. For students."

**Target audience:** 13–18 year olds in India — Tier 1 and Tier 2 cities. Intellectually curious, competition-driven, ambitious. Looking beyond IIT-JEE and NEET for recognition.

---

## Color Palette

| Token | Hex | Role |
|---|---|---|
| Deep Indigo | `#1B2659` | Primary dark surface, headings on light, hero/section bg |
| Indigo Deep | `#141c44` | Hero bg (darkest), footer bg |
| Electric Gold | `#F5A623` | Primary CTA, key accent, pricing, active states |
| Gold Warm | `#f7b733` | Gold hover state |
| Warm Teal | `#00897B` | Secondary accent — ideation, progress, positive signal |
| Teal Light | `#00a896` | Teal hover state |
| Coral Blush | `#E8614A` | Energy accent — "what we do differently", urgency |
| Ivory | `#FBF9F6` | Light section background (replaces pure white) |
| Ivory 2 | `#f3f1ee` | Slightly darker ivory for panels |
| Charcoal | `#2C2C3A` | Body text on light backgrounds |
| Ink Soft | `#3a4570` | Secondary body text on ivory |
| Muted | `#7280a8` | Meta text, captions |
| Surface Border | `#e2ddd7` | Subtle borders on ivory surfaces |

### Section backgrounds (top to bottom)

| Section | Background |
|---|---|
| Hero | Dark indigo gradient (`#141c44 → #1B2659`) |
| TheProblem | Ivory `#FBF9F6` |
| Journey | Deep Indigo `#1B2659` |
| Mentors | Ivory `#FBF9F6` |
| Programmes | Ivory `#FBF9F6` |
| Scholarship | Deep Indigo `#1B2659` |
| WhySRI | Ivory `#FBF9F6` |
| RegisterForm | Deep Indigo `#1B2659` |
| ForSchools | `#141c44` |
| Footer | `#0e1535` |

The alternating dark/light rhythm creates visual pacing without monotony.

---

## Typography

### Font Stack

| Role | Family | Weights |
|---|---|---|
| Display / Headings | **Syne** | 400 500 600 700 800 |
| Body / UI text | **DM Sans** | 400 500 600 700 |
| Italic accent | **Fraunces** | variable (italic) |

CSS variables: `--font-display`, `--font-body`, `--font-serif`

### Type Scale

| Element | Size | Weight | Tracking |
|---|---|---|---|
| Hero h1 | `clamp(2.8rem, 5.5vw, 5rem)` | 800 | -0.025em |
| Section h2 | `clamp(2rem, 3.5vw, 3rem)` | 800 | -0.02em |
| Card h3 | `15–20px` | 700 | 0 |
| Body (large) | `17px` | 400 | 0 |
| Body (default) | `15–16px` | 400 | 0 |
| Meta / labels | `12–13px` | 600–700 | 0.06–0.2em |
| Italic accent spans | `inherit` | 500 italic | — |

Italic Fraunces is used sparingly for one expressive phrase per heading — the "key emotional turn" of each section.

---

## Motion

### Entrance animations

- `float-up` keyframe: `opacity 0 → 1, translateY(20px) → none` — used for hero elements with staggered delays
- `.stagger` class: children stagger in at 120ms intervals when `.visible` is added via IntersectionObserver
- Axis bar in Journey: `opacity + translateY` on intersection
- Diff rows in WhySRI: per-row staggered `opacity + translateY` via direct style mutation

### Ambient motion (hero)

- Canvas starfield: 100 drifting stars, mouse-parallax offset
- Teal glow orb: `teal-drift` keyframe — 14s ease-in-out infinite
- Gold glow orb: `gold-drift` keyframe — 18s ease-in-out infinite
- Radar rings: `radar-pulse` at 0s / 1.4s / 2.8s offsets

### Parallax

- `.parallax-mid` / `.parallax-near` / `.parallax-deep` driven by CSS custom props `--px` / `--py` via mouse lerp

### Reduced motion

All entrance and parallax animations are cancelled via `@media (prefers-reduced-motion: reduce)`. Content is always immediately visible.

---

## Glass System

Used exclusively on dark (indigo) surfaces:

| Class | Use |
|---|---|
| `.glass` | Standard dark-surface card |
| `.glass-heavy` | Hero pricing panel, modals |
| `.glass-gold` | Scholarship / pricing callouts |
| `.glass-teal` | Teal-tinted informational panels |
| `.glass-light` | Cards on ivory surfaces |

---

## Component Patterns

### CTAs

- **Primary:** Gold `#F5A623` fill, Deep Indigo text, hover: ring expand + translateY(-2px)
- **Secondary (dark bg):** Glass border, white text, hover: border brightens
- **Text link:** White, gold bottom-border, hover: color → gold

### Cards (light surfaces)

- Ivory or white bg, `1.5px` brand-tinted border, `border-radius: 12px`
- Hover: `translateY(-3px)` + subtle shadow
- No glassmorphism on light surfaces — reserved for dark

### Cards (dark surfaces)

- `rgba(255,255,255,0.04–0.07)` bg, `1px solid rgba(255,255,255,0.08–0.12)` border
- Hover: bg brightens + colored glow shadow

### Section headers

Each section h2 follows the pattern:
```
Plain statement in Syne 800 + italic Fraunces accent for the emotional turn
```
Example: `"A ground-up roadmap,"` + `"idea to world stage."` (italic gold)

Accent colors rotate: Gold → Teal → Coral → back — to avoid visual monotony.

---

## Accessibility

- Body text `#3a4570` on ivory `#FBF9F6`: contrast ≈ 7.2:1 (WCAG AAA)
- Body text on dark `rgba(255,255,255,0.70)` on `#1B2659`: contrast ≈ 6.8:1
- Gold `#F5A623` on Deep Indigo `#1B2659`: contrast ≈ 6.1:1 (large text / display use)
- All interactive elements have `:hover` and `:focus`-equivalent states
- `aria-hidden` on all decorative SVG and canvas elements
- `text-wrap: balance` on h1–h3; `text-wrap: pretty` on body paragraphs

---

## Anti-References

- **Coaching-centre aesthetics** (BYJU's, Vedantu): No bright gradients, no cartoon mascots, no feature-list overload
- **Generic NGO / school brochure**: No pastel backgrounds, no soft round fonts, no diluted ambition
- No glassmorphism on light surfaces
- No side-stripe accent borders
- No gradient text (`background-clip: text`)
