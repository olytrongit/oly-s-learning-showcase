import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { site, skillGroups, supportingWork } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About" },
      { name: "description", content: "Olivier combines senior instructional design with 15+ years of motion, multimedia, and XR production experience." },
      { property: "og:title", content: "About" },
      { property: "og:description", content: "The instructional designer who can carry the learning through production." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <main><section className="about-hero"><div className="shell about-hero__grid"><div><p className="eyebrow">About Olivier</p><h1>The production team is the instructional designer.</h1></div><div><p>Most instructional designers write the storyboard and hand it to a production team. Olivier is the production team.</p><p>He has designed learning for elementary students, industrial trainees, corporate employees, and post-secondary students, and personally built the videos, animations, Storyline modules, and Unity / Meta Quest simulations that delivered it.</p></div></div></section>
  <section className="shell career-section"><div className="section-heading"><p className="eyebrow">Experience</p><h2>A career built across learning and making.</h2></div><div className="career-line"><article><span>Motion · 2008–2022</span><h3>Getty Images</h3><p>Video editor and multimedia producer. Motion graphics and instructional media for global audiences.</p></article><article><span>Immersive · 2022–2023</span><h3>Hitachi North America (R&D)</h3><p>XR developer and VR designer. Immersive VR/MR training prototypes for Meta Quest and HoloLens 2.</p></article><article><span>Teaching · 2023–2024</span><h3>St. Clair College</h3><p>Sessional professor. Taught immersive storytelling in AR, VR, and 360° video to roughly 40 students per term.</p></article><article><span>Education · 2023</span><h3>University of Windsor</h3><p>MFA, Film &amp; Media Arts. Taught interactive narrative design as a graduate assistant, 2020–2022.</p></article></div></section>
  <section className="skills-band"><div className="shell"><div className="section-heading"><p className="eyebrow">Capabilities</p><h2>Broad production range.<br />One learning-design centre.</h2></div><div className="skills-grid">{skillGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
  <section className="shell credentials-section"><div><p className="eyebrow">Credentials</p><h2>Certified and still learning.</h2></div><ul><li>Certified in Articulate Storyline 360</li><li>xAPI Fundamentals certification</li><li>Currently completing the University of Michigan Learning Experience Design series</li><li>Google AI Essentials (2025) · Epic Games Game Design Professional (2026)</li><li>BA Media Arts &amp; Digital Technologies, Alberta University of the Arts · IT Diploma, Southern Alberta Institute of Technology</li></ul></section>
  <section className="shell supporting-section"><div className="section-heading"><p className="eyebrow">More evidence</p><h2>Selected supporting work.</h2></div><div className="evidence-list">{supportingWork.map((item) => <Link key={item.id} to="/supporting-work" hash={item.id} className="evidence-row"><span>{item.type}</span><h3>{item.title}</h3><p>{item.proof}</p></Link>)}</div></section>
  <section className="personal-band"><div className="shell"><span className="rpg-die" aria-hidden="true">20</span><div><p className="eyebrow">Outside work</p><h2>Olivier designs tabletop RPG systems.</h2><p>It is another way to think about rules, choices, feedback, and what makes people want to keep going.</p></div></div></section>
  <section className="contact-band"><div className="shell contact-band__inner"><div><p className="eyebrow">Based in {site.location}</p><h2>Talk with Olivier about your senior ID role.</h2><p>{site.availability}</p></div><div><Link className="button-primary" to="/contact">Start a conversation<ArrowRight /></Link><a className="text-link" href={site.resume} download>Download résumé (PDF) <ArrowRight /></a><a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowRight /></a></div></div></section></main>;
}