---
name: EndoSystems Clinical
colors:
  surface: '#f9f9fd'
  surface-dim: '#d9dadd'
  surface-bright: '#f9f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f7'
  surface-container: '#edeef1'
  surface-container-high: '#e7e8eb'
  surface-container-highest: '#e2e2e6'
  on-surface: '#191c1e'
  on-surface-variant: '#424751'
  inverse-surface: '#2e3133'
  inverse-on-surface: '#f0f0f4'
  outline: '#737782'
  outline-variant: '#c2c6d2'
  surface-tint: '#295ea5'
  primary: '#003164'
  on-primary: '#ffffff'
  primary-container: '#00478d'
  on-primary-container: '#8db8ff'
  inverse-primary: '#a9c7ff'
  secondary: '#4a5f83'
  on-secondary: '#ffffff'
  secondary-container: '#c0d5ff'
  on-secondary-container: '#475c80'
  tertiary: '#572100'
  on-tertiary: '#ffffff'
  tertiary-container: '#7a3201'
  on-tertiary-container: '#ff9f6c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468b'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b2c7f0'
  on-secondary-fixed: '#011b3c'
  on-secondary-fixed-variant: '#32476a'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793100'
  background: '#f9f9fd'
  on-background: '#191c1e'
  surface-variant: '#e2e2e6'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 1.875rem
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-section:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '700'
    lineHeight: '1.5'
  body-main:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  nav-item:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.25'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-padding: 2rem
  stack-gap: 1.5rem
  inline-gap: 1rem
  sidebar-width: 16rem
  header-height: 4rem
---

## Brand & Style
The brand personality is **authoritative, clinical, and reassuring**. As a high-stakes medical interface, the design prioritizes clarity and efficiency while maintaining a modern, sophisticated feel. 

The aesthetic is **Corporate Modern with a subtle Glassmorphic influence**. It utilizes a systematic approach to information density, employing clean whitespace and a professional blue-centric palette. Soft backdrop blurs on navigation elements and subtle gradients on primary actions inject a sense of "premium reliability" without distracting from critical patient data.

## Colors
The palette is anchored by **Deep Clinical Blue** (#00478D), used for primary branding and essential medical validation actions. 

- **Primary & Secondary:** Used for navigational accents and structural reinforcement.
- **Tertiary (Urgency):** A warm, burnt orange/amber used sparingly for "Urgent" status and alerts to ensure high visibility without the panic associated with pure red.
- **Surface Strategy:** Employs a layered neutral system. Backgrounds use cool-toned greys (#F9F9FD), while content cards sit on pure white (#FFFFFF) to provide maximum contrast for readability.
- **Semantic Feedback:** Error red is reserved strictly for high-risk alerts and "STAT" urgency levels.

## Typography
The system uses a dual-font approach to balance character with utility.

- **Manrope** is used for headlines, patient names, and brand identifiers. Its geometric yet friendly structure provides the necessary "modern medical" tone.
- **Inter** handles all functional data, labels, and body text. It is chosen for its exceptional legibility in dense forms and UI controls.
- **Visual Hierarchy:** Large, heavy-weight Manrope (800) is used for primary screen titles. Uppercase labels in Inter (Bold, 0.75rem) are used to categorize form fields, ensuring they are distinct from the user's input data.

## Layout & Spacing
The layout follows a **Hybrid Fixed-Fluid Grid** model.

- **Navigation:** A fixed 256px (16rem) sidebar provides consistent global access.
- **Content Canvas:** The main content area is centered with a `max-width` of 896px (56rem) to prevent line lengths from becoming unreadable on ultra-wide monitors.
- **Spacing Rhythm:** Based on an 8px (0.5rem) baseline. Standard section padding is 32px (2rem). Internal component spacing (like within cards) uses 24px (1.5rem) to maintain a sense of openness and "clinical calm."

## Elevation & Depth
Depth is communicated through **Tonal Layering and Soft Shadows** rather than traditional heavy gradients.

- **Level 0 (Background):** The base layer uses `#F9F9FD`.
- **Level 1 (Panels):** Main content cards use pure white with a `shadow-sm` (subtle Y-offset shadow) and a very thin 1px border in a low-contrast slate (#F1F5F9).
- **Level 2 (Interaction):** Floating elements like the sidebar and header use `backdrop-blur` (12px to 20px) and a semi-transparent background to feel "above" the content while maintaining context.
- **Level 3 (Priority):** High-priority buttons use a `shadow-xl` tinted with the primary color (#00478D) at low opacity to create a "glow" effect, signaling importance.

## Shapes
The shape language is **distinctly rounded** to soften the clinical nature of the application.

- **Standard Radius:** 8px (0.5rem) for most buttons and input fields.
- **Container Radius:** 12px (0.75rem) to 16px (1rem) for main cards and the sidebar container.
- **Pill Shapes:** Used for status chips, search bars, and urgency toggles to make them feel touch-friendly and distinct from the structural grid.

## Components
- **Buttons:** 
  - *Primary:* Gradients from `#00478D` to `#005EB8` with white text and 12px roundedness.
  - *Secondary:* Ghost style with subtle background fills on hover (#F3F3F7).
- **Input Fields:** Bottom-bordered "Material-style" inputs on a light grey background (`surface-container-low`). The bottom border thickens and changes to the primary color on focus.
- **Chips/Badges:** Pill-shaped with bold, uppercase text. Use high-contrast background/foreground pairings (e.g., light blue background with dark blue text).
- **Checkboxes:** Standard 20px squares with 4px radius, using primary blue for active states.
- **Cards:** White backgrounds, 16px padding, subtle 1px borders, and 12px corner radius.
- **Sidebar Nav:** Uses "active state" high-contrast blocks (white background + primary blue text) against a light grey sidebar background.