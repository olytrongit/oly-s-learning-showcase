import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { submitContact } from "@/lib/contact.functions";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oly Balmokune" },
      { name: "description", content: "Get in touch with Oly Balmokune, senior instructional designer in Calgary, about senior instructional design roles." },
      { property: "og:title", content: "Contact — Oly Balmokune" },
      { property: "og:description", content: "Get in touch about senior instructional design roles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const send = useServerFn(submitContact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorText("");
    try {
      await send({ data: { name, email, message, company } });
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorText(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main id="main">
      <section className="index-hero">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1>Start a conversation.</h1>
          <p>{site.availability} The fastest way to reach me is this form or LinkedIn.</p>
        </div>
      </section>

      <section className="shell contact-section">
        <div className="contact-layout">
          {status === "sent" ? (
            <div className="contact-success" role="status">
              <CheckCircle2 aria-hidden="true" />
              <h2>Message sent.</h2>
              <p>Thanks for reaching out — I read every message personally and will reply to {email} as soon as I can.</p>
              <a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowRight /></a>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
              <div className="field">
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={255} value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows={6} required maxLength={2000} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              {/* Honeypot: hidden from humans, attractive to bots. */}
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              {status === "error" && <p className="form-error" role="alert">{errorText}</p>}
              <button type="submit" className="button-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"} <ArrowRight />
              </button>
            </form>
          )}

          <aside className="contact-aside">
            <h2>Prefer LinkedIn?</h2>
            <p>That works too — I check it daily.</p>
            <a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/olytron <ArrowRight /></a>
            <h2>What happens next</h2>
            <p>Your message lands in my private inbox — my email address is never shown on this site, so it stays out of spam lists.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
