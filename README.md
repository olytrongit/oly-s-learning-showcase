# Oly Balmokune — Senior Instructional Designer

A static portfolio built with React, TanStack Start, Vite, and Tailwind CSS.

## Local development

```sh
bun install
bun run dev
```

## Production build

```sh
bun run build
```

The configured pages are prerendered to static HTML. Upload the generated client output from `.output/public` to your host.

## Self-hosting

### Cloudflare Pages
- Build command: `bun run build`
- Output directory: `.output/public`
- Add a fallback rule that serves `/index.html` with status `200` for unmatched paths if your deployment does not serve prerendered nested `index.html` files automatically.

### Netlify
- Build command: `bun run build`
- Publish directory: `.output/public`
- SPA fallback rule for unmatched paths: `/* /index.html 200`

### GitHub Pages
- Build the project in GitHub Actions and publish `.output/public`.
- Configure the Pages action to preserve nested prerendered route folders.
- For unknown client-side routes, copy `index.html` to `404.html` during deployment so GitHub Pages can return the app shell.

## Editing content

Portfolio copy and structured project data live in `src/content/`. Site media lives under `public/media/`; the self-hosted Storyline packages live under `public/demos/`.

## Constraints

The site has no database, authentication, analytics, CMS, contact form, or paid service dependency. Contact is direct by email or LinkedIn.