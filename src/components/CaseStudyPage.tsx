import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { caseStudies } from "@/content/case-studies";
import { LazyVideo } from "@/components/LazyVideo";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  if (!next) return null;

  return (
    <main>
      <section className={`case-hero accent-${study.accent}`}>
        <div className="shell">
          <Link to="/case-studies" className="back-link"><ArrowLeft aria-hidden="true" /> All case studies</Link>
          <div className="case-hero__grid">
            <div>
              <p className="eyebrow">Case study {study.number} · {study.kicker}</p>
              <h1>{study.title}</h1>
              <p className="case-promise">{study.promise}</p>
            </div>
            <div className="case-hero__visual"><img src={study.image} alt={study.imageAlt} className={study.imagePosition === "right" ? "object-right" : undefined} /><span aria-hidden="true">{study.number}</span><div className="orbit orbit-a" /><div className="orbit orbit-b" /></div>
          </div>
        </div>
      </section>

      <section className="case-spine shell" aria-label="Case study overview">
        <article><span>01</span><h2>Learner</h2><p>{study.learner}</p></article>
        <article><span>02</span><h2>Challenge</h2><p>{study.challenge}</p></article>
      </section>

      <section className="decision-band">
        <div className="shell decision-grid">
          <div><p className="eyebrow">The design response</p><h2>Decisions before deliverables.</h2><p>Format followed the learning need—not the other way around.</p></div>
          <ol>{study.decisions.map((decision, i) => <li key={decision}><span>{String(i + 1).padStart(2, "0")}</span>{decision}</li>)}</ol>
        </div>
      </section>

      <section className="shell build-section">
        <div className="section-heading"><p className="eyebrow">What Oly built</p><h2>Design carried through production.</h2></div>
        <div className="build-list">{study.built.map((item) => <div key={item}><span aria-hidden="true" />{item}</div>)}</div>
        <div className="media-stage"><div className="media-stage__art"><img src={study.image} alt={study.imageAlt} loading="lazy" /></div></div>
        {study.videos ? <div className="video-grid">{study.videos.map((video) => <LazyVideo key={video.youtubeId} {...video} />)}</div> : null}
        {study.demos ? <div className="demo-grid" aria-label="Interactive demonstrations">{study.demos.map((demo) => <a key={demo.title} href={demo.href} target="_blank" rel="noreferrer"><span>{demo.purpose}</span><strong>{demo.title}</strong><ArrowRight aria-hidden="true" /></a>)}</div> : null}
      </section>

      <section className="outcome-band">
        <div className="shell outcome-grid"><p className="eyebrow">Outcome</p><blockquote>{study.outcome}</blockquote></div>
      </section>

      <section className="shell next-study">
        <p>Next case study</p>
        <Link to="/case-studies/$slug" params={{ slug: next.slug }}>{next.title}<ArrowRight aria-hidden="true" /></Link>
      </section>
    </main>
  );
}