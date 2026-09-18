import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/content/case-studies";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Instructional Design Case Studies — Oly Balmokune" },
      { name: "description", content: "Five senior instructional design case studies spanning micro-learning, immersive safety, AI-assisted video, curriculum, and Storyline." },
      { property: "og:title", content: "Instructional Design Case Studies — Oly Balmokune" },
      { property: "og:description", content: "Compare five learning problems, design decisions, builds, and outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return <main><section className="index-hero"><div className="shell"><p className="eyebrow">The work</p><h1>Five learning problems.<br />Five deliberate responses.</h1><p>Scan by learner, challenge, format, and outcome. The tools matter only when they solve the right problem.</p></div></section><section className="shell index-list">{caseStudies.map((study, i) => <CaseStudyCard key={study.slug} study={study} featured={i === 0} />)}</section></main>;
}