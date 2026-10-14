<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Hosting: this site is published to GitHub Pages at olytron.com

The live site is a static build deployed by `.github/workflows/deploy-pages.yml`, not by
Lovable hosting. Lovable's asset storage (`/__l5e/...`) does not exist on the live site.

- Images: store every image in `public/images/` and reference it as `/images/<file>`.
  Never import `*.asset.json` files or use `/__l5e/` URLs; the deploy fails if you do.
  To replace a thumbnail, keep its filename or update the `{ url: "/images/..." }`
  reference in `src/content/case-studies.ts` or `src/content/site.ts`.
- New pages: add the route's path to `pages` in `vite.config.ts`, or it will not be built.
- Do not remove or change: `prerender` settings (`crawlLinks: false`) in `vite.config.ts`,
  `.github/workflows/`, `public/CNAME`, `public/.nojekyll`, `public/favicon.svg`, the icon
  links in `src/routes/__root.tsx`, or `reloadOnceForStaleChunk` in `src/routes/__root.tsx`.
- No server code: no server functions, API routes or backend calls. The contact form posts
  directly to Web3Forms from the browser.

## Design

- Keep case-study visual assets referenced centrally in the case-study content model so cards and detail pages use the same approved imagery.
- Build the decorative home spaceship from layered CSS shapes using global semantic tokens, with reduced-motion support, so it stays lightweight and independently adjustable.
