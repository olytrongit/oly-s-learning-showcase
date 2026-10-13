// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: [
      { path: "/" },
      { path: "/case-studies" },
      { path: "/case-studies/water-works-for-kids" },
      { path: "/case-studies/xr-safety-simulation" },
      { path: "/case-studies/wellness-micro-learning" },
      { path: "/case-studies/immersive-storytelling-curriculum" },
      { path: "/case-studies/storyline-360-interactives" },
      { path: "/supporting-work" },
      { path: "/about" },
      { path: "/contact" },
    ],
    // Pages are listed explicitly above, so don't crawl links. Crawling follows the
    // Storyline demo links (/demos/*/story.html), which the prerenderer can't fetch.
    prerender: { enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false },
  },
});
