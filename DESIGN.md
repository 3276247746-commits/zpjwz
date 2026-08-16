---
name: Obsidian Kinetic
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b4b4'
  tertiary: '#cac6c3'
  on-tertiary: '#32302f'
  tertiary-container: '#0b0a09'
  on-tertiary-container: '#7c7977'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 100px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 48px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

This design system is built for a multidisciplinary creative at the intersection of AI and motion. The brand personality is **sophisticated, technical, and avant-garde**. It moves away from standard portfolio templates by embracing a high-end "Director's Cut" aesthetic—restrained but powerful.

The style is a hybrid of **Minimalism** and **Glassmorphism**, leaning heavily into a "Cinematic Tech" vibe. High-contrast typography creates an authoritative voice, while translucent layers and subtle glow effects suggest the luminosity of a high-end workstation or a screening room. The interface should feel like an extension of the designer's digital tools: precise, responsive, and premium.

## Colors

The palette is anchored in **Midnight Blacks** and **Deep Charcoals** to allow portfolio imagery and AI-generated visuals to remain the focal point. 

- **Primary ($0A0A0A):** The foundational background color. Pure, deep black to maximize OLED contrast.
- **Secondary ($161616):** Used for elevated surfaces and cards to create depth without breaking the dark theme.
- **Accent ($007AFF):** An electric, high-vibrancy blue used sparingly for interaction cues, focus states, and micro-animations.
- **Metallic Silver ($A1A1AA):** Used for secondary text and borders to provide a sophisticated, non-white alternative for legibility.

## Typography

The typography strategy relies on extreme contrast between display sizes and body text. 

**Sora** provides a geometric, tech-forward feel for headings. At large sizes (Display XL), it should be set with tight tracking to feel dense and impactful. 

**Hanken Grotesk** serves as the primary body face, chosen for its contemporary clarity and professional tone. 

**JetBrains Mono** is introduced for labels, metadata, and technical specs, grounding the aesthetic in the world of code and AI development. Use this for project categories and dates to reinforce the "tech-forward" narrative.

## Layout & Spacing

The layout utilizes a wide **1700px maximum container** to feel expansive and cinematic on large displays. 

- **Asymmetry:** Elements should not always align to a strict 12-column center. Use "offset" positioning for images and text blocks—for example, a project description spanning columns 2-5 while the image spans 6-12.
- **Spaciousness:** Large vertical gaps (160px+) between sections prevent the UI from feeling cluttered, allowing the high-contrast typography room to breathe.
- **Mobile Adaption:** On mobile, revert to a single-column layout with 24px side margins. Scale typography using the defined mobile roles to ensure the ultra-bold headings remain legible.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Luminous Depth**. 

- **Glassmorphism:** Navigation bars and floating panels use a `backdrop-filter: blur(20px)` with a semi-transparent background (`rgba(22, 22, 22, 0.7)`).
- **Subtle Glow Borders:** Instead of shadows, use a 1px solid border with low opacity (`rgba(255, 255, 255, 0.1)`). On hover, this border transitions to a subtle electric blue glow using `box-shadow: 0 0 15px rgba(0, 122, 255, 0.3)`.
- **Tonal Layering:** Background is the darkest point. Each interactive layer becomes slightly lighter in hex value ($161616 -> $222222) to indicate hierarchy.

## Shapes

The shape language is **Soft (0.25rem - 0.75rem)**. 

While the aesthetic is technical, slightly rounded corners prevent it from feeling overly aggressive or "Brutalist." Large cards and containers should use the `rounded-xl` (0.75rem) value to feel like modern hardware (e.g., a high-end smartphone or monitor). Small elements like buttons or input fields use `rounded-sm` (0.25rem) to maintain a sharp, precise feel.

## Components

- **Project Cards:** Large-scale components featuring high-quality video or image covers. On hover, the image should subtly scale (1.05x), and a hidden "View Project" label in `label-sm` (JetBrains Mono) should slide into view.
- **Buttons:** 
  - *Primary:* Solid accent blue with white text, minimal rounding.
  - *Secondary:* Ghost style with a silver 1px border. On hover, fills with a very faint blue glow.
- **Input Fields:** Dark backgrounds ($161616) with bottom-only borders for a more "editorial" look. Labels stay in `label-sm` above the field.
- **Chips/Tags:** Used for project categories (e.g., "AI Strategy", "3D Motion"). Use `label-sm` typography inside a pill-shaped container with a subtle silver border and no fill.
- **Custom Cursor:** A small electric blue dot that expands into a larger ring when hovering over interactive "Project Cards," indicating a specialized interaction mode.
- **Smooth Transitions:** All hover states and page transitions must use a consistent cubic-bezier curve (`0.4, 0, 0.2, 1`) with a duration of 400ms to mimic the fluidity of professional animation software.