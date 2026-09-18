# Oly Balmokune Portfolio Rebuild

## Goal
Create a fully static, hiring-focused portfolio that presents Oly unmistakably as a senior instructional designer whose production depth strengthens his learning-design work.

## Site structure
- **Home** — senior-ID positioning, working philosophy, proof snapshot, five featured case studies, compact supporting evidence, and direct contact.
- **Case studies index** — a fast comparison view organized by learner, challenge, design response, format, and outcome rather than by production medium.
- **Five case-study pages**
  1. Water Works for Kids
  2. XR Safety Simulation
  3. Wellness Micro-learning
  4. Immersive Storytelling Curriculum
  5. Storyline 360 Interactives
- **About** — career narrative, credentials, grouped capabilities, current study, location, and the tabletop-RPG personal note.
- Keep email, LinkedIn, and résumé access prominent throughout; no contact form.

## Design system
- Use the selected **Mesh gradient warmth** direction: warm paper base, coral/sky/leaf/sun accents, strong dark ink, Sora display type, and a highly readable sans-serif body.
- Refine the prototype into a cleaner editorial system with modest corner radii, strong rules, short text blocks, and varied case-study compositions rather than a repetitive card grid.
- Use Dewey as a small recurring guide and transition motif, not a mascot-led identity.
- Motion will communicate sequence and causality: staged reveals, subtle connector movement, media feedback, and restrained page transitions. Reduced-motion users receive static equivalents.

## Content and media
- Store all editable copy and structured case-study data under `src/content/`, separate from presentation code.
- Crawl every supplied Olytron page during implementation and extract confirmed images, YouTube IDs, résumé, LinkedIn URL, and project details.
- Download and serve approved source media locally with relative paths; do not hotlink Google Sites assets.
- Merge Healthcare and AI Cinematics into the single Wellness Micro-learning case study.
- Frame supporting video, XR, and AI work only as evidence of learning-relevant capability.
- Preserve every unresolved fact as a visible `[CONFIRM: …]` content marker and provide a consolidated list after the first pass.

## Case-study pattern
Each study will support quick scanning in the same order:

```text
Learner → Challenge → Design decisions → What Oly built → Outcome
```

- Open with a one-sentence result and a compact role/context summary.
- Pair confirmed media with the decision it demonstrates rather than building a generic gallery.
- Use click-to-play YouTube previews and locally hosted Storyline demos where the source files are available.
- Clearly label prototypes or demonstrations where formal outcome data is unavailable.

## Technical implementation
- Keep the current React/TanStack foundation and configure all public pages for static prerendering.
- Use only existing permissively licensed dependencies; add no accounts, keys, paid services, database, authentication, analytics, CMS, or forms.
- Build shared navigation, footer, case-study sections, media players, evidence rows, and accessible interactive controls.
- Use relative asset references and copy the four Storyline packages under `/public/demos/` when obtainable from the source.
- Add unique title, description, Open Graph, and Twitter metadata for every page; include a local static Open Graph image, `sitemap.xml`, and updated `robots.txt`.
- Replace the README with local build/export instructions plus GitHub Pages, Cloudflare Pages, and Netlify deep-link fallback rules.

## Accessibility and quality checks
- Verify at 375px, tablet, and desktop widths with no horizontal overflow or overlapping text.
- Confirm semantic landmarks, heading order, alt text, keyboard access, visible focus, AA contrast, reduced motion, reserved media dimensions, and lazy video loading.
- Validate every route, case-study link, résumé/download link, Storyline demo, and media asset.
- Check the generated static output and current preview for build, console, runtime, and network errors.

## First-pass handoff
- Deliver the complete populated site and a concise list of unresolved `[CONFIRM]` facts or missing media.
- Include a short note explaining the three most important information-architecture and visual decisions.