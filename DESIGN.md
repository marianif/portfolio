---
name: Brutalist Ink
description: A high-contrast, dark-mode portfolio system focusing on kinetic precision and technical mastery.
colors:
  primary: "#FFFFE3"
  neutral-bg: "#0E0E0E"
  neutral-surface: "#161616"
  neutral-text: "#F2F2F2"
  neutral-muted: "#8A8A8A"
typography:
  display:
    fontFamily: "Clash Display, sans-serif"
    fontSize: "clamp(3rem, 10vw, 8rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "2px"
  md: "4px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "12px 32px"
---

# Design System: Brutalist Ink

## 1. Overview

**Creative North Star: "Brutalist Ink"**

This system is a digital expression of the transition from static documentation to kinetic innovation. It rejects the "SaaS-cream" aesthetic in favor of a deep, material depth where content feels carved out of darkness. The philosophy is one of **Kinetic Precision**: motion is never decorative; it is the physical manifestation of engineering quality.

**Key Characteristics:**
- **Inky Depths**: Use of #0E0E0E as a base, providing more character than pure black.
- **Structural Typography**: High-impact headings that command the viewport.
- **Weighted Velocity**: Motion that feels like it has physical mass and momentum.
- **Technical Refinement**: Precise, small-radius corners and micro-interactions that signal craft.

## 2. Colors

The palette is a high-contrast dialogue between deep neutrals and a singular, historical accent.

### Primary
- **Antique Bone** (#FFFFE3): Used sparingly for high-impact calls to action and critical highlights. Its warmth contrasts sharply with the cold ink of the background.

### Neutral
- **Deep Ink** (#0E0E0E): The primary canvas. All layouts emerge from this void.
- **Soft Charcoal** (#161616): Used for tonal layering to create subtle depth without relying on shadows.
- **Ghost White** (#F2F2F2): The primary typographic color, ensuring high legibility and a premium feel.
- **Muted Ash** (#8A8A8A): For metadata, labels, and secondary information that should recede.

### Named Rules
**The Ink-to-Surface Rule.** Depth is communicated through tonal shifts from Deep Ink to Soft Charcoal. Avoid traditional box-shadows; let the material planes speak through color.

## 3. Typography

**Display Font:** Clash Display (Bold/Extrabold)
**Body Font:** Geist or Inter (Medium/Light)

**Character:** A brutalist pairing that balances the high-character geometry of Clash Display with the clinical, technical precision of Geist.

### Hierarchy
- **Display** (700, clamp(3rem, 10vw, 8rem), 0.9): For hero sections and major section headers.
- **Headline** (600, 2.5rem, 1.1): For secondary section titles.
- **Body** (400, 1rem, 1.6): For narrative content. Max line length capped at 70ch.
- **Label** (500, 0.75rem, 0.05em uppercase): For metadata and technical specs.

## 4. Elevation

Brutalist Ink is a layered system, not a lifted one. Surfaces exist as distinct material planes rather than floating objects.

**The Tonal Layering Rule.** Use #161616 (Soft Charcoal) to indicate elevated surfaces (cards, navigation bars). Shadows are prohibited except for extreme cases of interactive feedback.

## 5. Components

### Buttons
- **Shape**: Technical small radius (2px)
- **Primary**: Antique Bone (#FFFFE3) background with Deep Ink (#0E0E0E) text.
- **Interaction**: Weight-based hover effects (subtle scale-up or slight shift in Y-axis) to signal kinetic energy.

### Cards / Containers
- **Corner Style**: 4px radius for a refined, technical feel.
- **Background**: Soft Charcoal (#161616) on a Deep Ink (#0E0E0E) base.
- **Border**: 1px subtle border (#F2F2F2 at 10% opacity) to define edges in low-light environments.

## 6. Do's and Don'ts

### Do:
- **Do** use fluid typography (`clamp`) for all display elements.
- **Do** ensure all motion has a "weighted" feel using exponential easing curves.
- **Do** use Antique Bone (#FFFFE3) for primary CTAs only.

### Don't:
- **Don't** use pure #000 or #FFF; stay within the "Ink" and "Ghost" ranges.
- **Don't** use side-stripe borders or playful, bouncy animations.
- **Don't** use glassmorphism or overly-blurred shadows.
- **Don't** use standard SaaS-cream or rounded-icon templates.
---
name: Brutalist Ink
description: A high-contrast, dark-mode portfolio system focusing on kinetic precision and technical mastery.
colors:
  primary: "#FFFFE3"
  neutral-bg: "#0E0E0E"
  neutral-surface: "#161616"
  neutral-text: "#F2F2F2"
  neutral-muted: "#8A8A8A"
typography:
  display:
    fontFamily: "Clash Display, sans-serif"
    fontSize: "clamp(3rem, 10vw, 8rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "2px"
  md: "4px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "12px 32px"
---

# Design System: Brutalist Ink

## 1. Overview

**Creative North Star: "Brutalist Ink"**

This system is a digital expression of the transition from static documentation to kinetic innovation. It rejects the "SaaS-cream" aesthetic in favor of a deep, material depth where content feels carved out of darkness. The philosophy is one of **Kinetic Precision**: motion is never decorative; it is the physical manifestation of engineering quality.

**Key Characteristics:**
- **Inky Depths**: Use of #0E0E0E as a base, providing more character than pure black.
- **Structural Typography**: High-impact headings that command the viewport.
- **Weighted Velocity**: Motion that feels like it has physical mass and momentum.
- **Technical Refinement**: Precise, small-radius corners and micro-interactions that signal craft.

## 2. Colors

The palette is a high-contrast dialogue between deep neutrals and a singular, historical accent.

### Primary
- **Antique Bone** (#FFFFE3): Used sparingly for high-impact calls to action and critical highlights. Its warmth contrasts sharply with the cold ink of the background.

### Neutral
- **Deep Ink** (#0E0E0E): The primary canvas. All layouts emerge from this void.
- **Soft Charcoal** (#161616): Used for tonal layering to create subtle depth without relying on shadows.
- **Ghost White** (#F2F2F2): The primary typographic color, ensuring high legibility and a premium feel.
- **Muted Ash** (#8A8A8A): For metadata, labels, and secondary information that should recede.

### Named Rules
**The Ink-to-Surface Rule.** Depth is communicated through tonal shifts from Deep Ink to Soft Charcoal. Avoid traditional box-shadows; let the material planes speak through color.

## 3. Typography

**Display Font:** Clash Display (Bold/Extrabold)
**Body Font:** Geist or Inter (Medium/Light)

**Character:** A brutalist pairing that balances the high-character geometry of Clash Display with the clinical, technical precision of Geist.

### Hierarchy
- **Display** (700, clamp(3rem, 10vw, 8rem), 0.9): For hero sections and major section headers.
- **Headline** (600, 2.5rem, 1.1): For secondary section titles.
- **Body** (400, 1rem, 1.6): For narrative content. Max line length capped at 70ch.
- **Label** (500, 0.75rem, 0.05em uppercase): For metadata and technical specs.

## 4. Elevation

Brutalist Ink is a layered system, not a lifted one. Surfaces exist as distinct material planes rather than floating objects.

**The Tonal Layering Rule.** Use #161616 (Soft Charcoal) to indicate elevated surfaces (cards, navigation bars). Shadows are prohibited except for extreme cases of interactive feedback.

## 5. Components

### Buttons
- **Shape**: Technical small radius (2px)
- **Primary**: Antique Bone (#FFFFE3) background with Deep Ink (#0E0E0E) text.
- **Interaction**: Weight-based hover effects (subtle scale-up or slight shift in Y-axis) to signal kinetic energy.

### Cards / Containers
- **Corner Style**: 4px radius for a refined, technical feel.
- **Background**: Soft Charcoal (#161616) on a Deep Ink (#0E0E0E) base.
- **Border**: 1px subtle border (#F2F2F2 at 10% opacity) to define edges in low-light environments.

## 6. Do's and Don'ts

### Do:
- **Do** use fluid typography (`clamp`) for all display elements.
- **Do** ensure all motion has a "weighted" feel using exponential easing curves.
- **Do** use Antique Bone (#FFFFE3) for primary CTAs only.

### Don't:
- **Don't** use pure #000 or #FFF; stay within the "Ink" and "Ghost" ranges.
- **Don't** use side-stripe borders or playful, bouncy animations.
- **Don't** use glassmorphism or overly-blurred shadows.
- **Don't** use standard SaaS-cream or rounded-icon templates.
