import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/content/case-studies";
import { site, supportingWork } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oly Balmokune — Senior Instructional Designer" },
      { name: "description", content: "Senior instructional designer who turns complex information into clear learning experiences—and builds the videos, interactives, and simulations himself." },
      { property: "og:title", content: "Oly Balmokune — Senior Instructional Designer" },
      { property: "og:description", content: "Learning design, built end to end: video, Storyline, curriculum, and XR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://www.olytron.com/og-image.jpg" },
      { name: "twitter:image", content: "https://www.olytron.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featuredStudy = caseStudies[0];
  if (!featuredStudy) return null;

  return (
    <main>
      <section className="home-hero">
        <div className="shell home-hero__inner">
          <p className="status-pill"><span /> Senior Instructional Designer · Calgary</p>
          <h1>Keep your knowledge.<br />Refresh your <em>delivery.</em></h1>
          <p className="hero-lede">I design the learning, then build the experience myself—video, Storyline modules, Unity simulations. One person, end to end.</p>
          <div className="hero-actions">
            <Link to="/case-studies" className="button-primary">See the work <ArrowRight /></Link>
            <Link to="/contact" className="button-secondary"><Mail /> Contact Oly</Link>
          </div>
          <div className="proof-strip" aria-label="Portfolio highlights">
            <div><strong>15+</strong><span>years in multimedia and XR</span></div>
            <div><strong>5</strong><span>flagship learning case studies</span></div>
            <div><strong>4</strong><span>learner contexts</span></div>
            <div><strong>1</strong><span>designer, end to end</span></div>
          </div>
          <div className="hero-starship" aria-hidden="true">
            <span className="starship-orbit" />
            <span className="shuttle">
              <span className="shuttle-wing shuttle-wing--far" />
              <span className="shuttle-engine shuttle-engine--far"><i className="shuttle-intake" /><i className="shuttle-flame" /></span>
              <span className="shuttle-hull-edge" />
              <span className="shuttle-body" />
              <span className="shuttle-windows" />
              <span className="shuttle-roof" />
              <span className="shuttle-wing shuttle-wing--near" />
              <span className="shuttle-engine shuttle-engine--near"><i className="shuttle-intake" /><i className="shuttle-flame" /></span>
            </span>
          </div>
        </div>
      </section>

      <section className="approach-section shell">
        <div className="section-heading"><p className="eyebrow">The approach</p><h2>Start with the problem.<br />Choose the format second.</h2></div>
        <blockquote>{site.philosophy}</blockquote>
        <div className="approach-steps">
          <article><span>01</span><h3>Understand</h3><p>The learner, their context, and what needs to change.</p></article>
          <article><span>02</span><h3>Design</h3><p>The right practice, sequence, feedback, and format.</p></article>
          <article><span>03</span><h3>Build</h3><p>The experience itself, with no handoff gap.</p></article>
        </div>
      </section>

      <section className="work-section">
        <div className="shell">
          <div className="section-heading section-heading--row"><div><p className="eyebrow">Selected case studies</p><h2>Learning problems, solved.</h2></div><Link to="/case-studies" className="text-link">Compare all five <ArrowRight /></Link></div>
          <div className="case-grid"><CaseStudyCard study={featuredStudy} featured />{caseStudies.slice(1).map((study) => <CaseStudyCard key={study.slug} study={study} />)}</div>
        </div>
      </section>

      <section className="evidence-section shell">
        <div className="section-heading section-heading--row"><div><p className="eyebrow">Supporting evidence</p><h2>Production skill, always in service of learning.</h2><p>Selected work that proves a useful capability—not a second career.</p></div><Link to="/supporting-work" className="text-link">Watch the work <ArrowRight /></Link></div>
        <div className="evidence-list">{supportingWork.slice(0, 6).map((item) => <Link key={item.id} to="/supporting-work" hash={item.id} className="evidence-row"><span>{item.type}</span><h3>{item.title}</h3><p>{item.proof}</p></Link>)}</div>
      </section>

      <section className="contact-band">
        <div className="shell contact-band__inner"><div><p className="eyebrow">Senior learning design, built end to end</p><h2>Let’s make the next program land.</h2></div><div><Link className="button-primary" to="/contact">Start a conversation<ArrowRight /></Link><a href={site.linkedin} target="_blank" rel="noreferrer" className="text-link">LinkedIn <ArrowRight /></a></div></div>
      </section>
    </main>
  );
}
