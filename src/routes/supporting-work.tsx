import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { LazyVideo } from "@/components/LazyVideo";
import { supportingWork } from "@/content/site";

export const Route = createFileRoute("/supporting-work")({
  head: () => ({
    meta: [
      { title: "Supporting Work" },
      { name: "description", content: "Video, motion, mixed reality, and AI experiments by Olivier, each with the learning capability it demonstrates." },
      { property: "og:title", content: "Supporting Work" },
      { property: "og:description", content: "Video, motion, mixed reality, and AI experiments, each with the learning capability it demonstrates." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportingWorkPage,
});

function SupportingWorkPage() {
  return (
    <main id="main">
      <section className="index-hero">
        <div className="shell">
          <p className="eyebrow">Supporting work</p>
          <h1>Production skill, always in service of learning.</h1>
          <p>Each piece is here for one reason: the learning capability it proves. Case studies carry the full design story.</p>
        </div>
      </section>

      <section className="shell supporting-section">
        <div className="support-stack">
          {supportingWork.map((item) => (
            <article key={item.id} id={item.id} className="support-item">
              <div className="support-item__body">
                <span className="eyebrow">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.proof}</p>
              </div>
              <div className="support-item__media">
                <LazyVideo title={item.title} youtubeId={item.youtubeId} poster={item.poster} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-band__inner">
          <div><p className="eyebrow">Senior learning design, built end to end</p><h2>See the design thinking behind it.</h2></div>
          <div>
            <Link className="button-primary" to="/case-studies">Read the case studies<ArrowRight /></Link>
            <Link className="text-link" to="/contact">Contact Olivier <ArrowRight /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
