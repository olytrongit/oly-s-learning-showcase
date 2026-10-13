import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact" },
      { name: "description", content: "Get in touch with Olivier, senior instructional designer in Calgary, about senior instructional design roles." },
      { property: "og:title", content: "Contact" },
      { property: "og:description", content: "Get in touch about senior instructional design roles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "62da6292-9887-456f-8120-72683bc342c3",
          name,
          email,
          message,
          subject: "New message from olytron.com",
          from_name: "Olivier Portfolio",
          replyto: email,
          botcheck,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
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
              <p>Thanks for reaching out. I read every message personally and will reply to {email} as soon as I can.</p>
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
                <label htmlFor="contact-botcheck">Company</label>
                <input id="contact-botcheck" name="botcheck" type="text" tabIndex={-1} autoComplete="off" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
              </div>
              {status === "error" && (
                <p className="form-error" role="alert">
                  Your message could not be sent. Please try again, or reach me on{" "}
                  <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> instead.
                </p>
              )}
              <button type="submit" className="button-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"} <ArrowRight />
              </button>
            </form>
          )}

          <aside className="contact-aside">
            <h2>Prefer LinkedIn?</h2>
            <p>That works too. I check it daily.</p>
            <a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/olytron <ArrowRight /></a>
            <h2>What happens next</h2>
            <p>Your message lands in my private inbox. My email address is never shown on this site, so it stays out of spam lists.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
