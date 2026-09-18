import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/content/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Oly Balmokune` : "Case Study Not Found — Oly Balmokune";
    const description = loaderData?.promise ?? "Instructional design case study by Oly Balmokune.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }], links: loaderData ? [{ rel: "canonical", href: `/case-studies/${loaderData.slug}` }] : [] };
  },
  component: CaseStudyRoute,
});

function CaseStudyRoute() { return <CaseStudyPage study={Route.useLoaderData()} />; }