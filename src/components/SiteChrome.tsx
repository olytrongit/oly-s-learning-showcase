import { Link } from "@tanstack/react-router";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const nav = [
  { to: "/case-studies", label: "Case studies" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="Oly Balmokune, home">
          <span className="rocket-mark" aria-hidden="true" />
          <span>Oly<span className="text-coral">.</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "is-active" }}>{item.label}</Link>)}
          <a href={`mailto:${site.email}`}>Contact</a>
        </nav>
        <a className="header-cta" href={`mailto:${site.email}`}>Start a conversation</a>
        <Button className="menu-button" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <a href={`mailto:${site.email}`}>Contact</a>
      </nav>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div><strong>{site.name}</strong><span>{site.role} · {site.location}</span></div>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="confirm-link"><Download size={15} /> Résumé [CONFIRM]</span>
        </div>
        <p>{site.tagline}</p>
      </div>
    </footer>
  );
}