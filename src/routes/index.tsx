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
          <p className="hero-lede">I design the learning, then build the experience myself using video, Storyline modules, Unity simulations and more.<br />One person, end to end.</p>
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
            <svg className="shuttle-svg" viewBox="80 200 900 620" focusable="false">
              <defs>
                <linearGradient id="shipHull" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" className="sg-hull-hi" /><stop offset="1" className="sg-hull-lo" /></linearGradient>
                <linearGradient id="shipPod" x1="0" y1="0" x2="0" y2="1"><stop offset="0" className="sg-hull-hi" /><stop offset="0.6" className="sg-hull-mid" /><stop offset="1" className="sg-hull-lo" /></linearGradient>
                <linearGradient id="shipGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" className="sg-glass" /><stop offset="0.55" className="sg-glass" /><stop offset="0.68" className="sg-glass-hi" /><stop offset="0.8" className="sg-glass" /></linearGradient>
              </defs>
              <g className="ship-line">
                <path className="ship-wing" d="M265 430 L405 368 L450 372 L300 492 L270 470 Z" />
                <g transform="translate(572 300) rotate(-22)">
                  <path className="ship-flame" d="M120 -26 Q160 -44 168 -30 Q182 -48 205 -38 Q185 -20 210 -6 Q180 4 196 22 Q160 26 120 26 Z" />
                  <rect x="-120" y="-50" width="240" height="100" rx="46" fill="url(#shipPod)" />
                  <ellipse className="ship-dark" cx="-112" cy="4" rx="16" ry="38" />
                </g>
                <path className="ship-bevel" d="M108 688 L270 770 L560 660 L865 500 L866 524 L560 684 L270 794 Q180 790 112 714 Z" />
                <path fill="url(#shipHull)" d="M108 688 L250 540 L370 440 L620 308 L725 330 L860 430 L865 500 L560 660 L270 770 Q190 760 108 688 Z" />
                <path className="ship-shade" d="M250 600 L560 640 L865 480 L865 500 L560 660 L270 770 Q190 760 108 688 Z" />
                <path className="ship-roof" d="M365 432 L620 308 L722 334 L578 452 L480 486 Q382 474 365 432 Z" />
                <path fill="url(#shipGlass)" d="M246 546 L362 438 Q384 480 482 490 L578 456 L566 520 Q522 592 420 616 L292 588 Z" />
                <path className="ship-wing" d="M536 640 L790 490 L862 552 L700 680 L540 662 Z" />
                <path className="ship-wing-edge" d="M540 662 L700 680 L862 552 L862 566 L705 694 L538 676 Z" />
                <g transform="translate(860 445) rotate(-22)">
                  <path className="ship-flame ship-flame--b" d="M20 -22 Q60 -40 68 -26 Q82 -44 100 -34 Q86 -16 106 -4 Q78 6 92 22 Q56 24 20 22 Z" />
                  <ellipse className="ship-dark" cx="14" cy="0" rx="12" ry="28" />
                </g>
                <g transform="translate(758 392) rotate(-22)">
                  <path className="ship-flame ship-flame--c" d="M120 -26 Q160 -44 168 -30 Q182 -48 205 -38 Q185 -20 210 -6 Q180 4 196 22 Q160 26 120 26 Z" />
                  <rect x="-120" y="-55" width="240" height="110" rx="50" fill="url(#shipPod)" />
                  <ellipse className="ship-dark" cx="-110" cy="4" rx="20" ry="42" />
                  <ellipse className="ship-dark" cx="120" cy="0" rx="8" ry="32" />
                </g>
              </g>
            </svg>
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
