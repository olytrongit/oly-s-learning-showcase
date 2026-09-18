import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  return (
    <article className={`case-card accent-${study.accent} ${featured ? "case-card--featured" : ""}`}>
      <div className="case-card__visual" aria-hidden="true">
        <img src={study.image} alt="" loading="lazy" />
        <span className="case-card__number">{study.number}</span>
        <div className="case-card__signal"><i /><i /><i /></div>
      </div>
      <div className="case-card__body">
        <p className="eyebrow">{study.kicker}</p>
        <h3>{study.title}</h3>
        <p>{study.promise}</p>
        <div className="tag-row">{study.tools.slice(0, 3).map((tool) => <span key={tool}>{tool}</span>)}</div>
        <Link to="/case-studies/$slug" params={{ slug: study.slug }} className="text-link">
          Read case study <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}