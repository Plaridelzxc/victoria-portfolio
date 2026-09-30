import Reveal from "./Reveal.jsx";
import Watermark from "./Watermark.jsx";
import { CONTACT, SOCIALS, RESUME_URL } from "../data/content.js";
import { SOCIAL_ICONS, IconDownload } from "./Icons.jsx";

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <Watermark>06</Watermark>
      <div className="shell">
        <Reveal className="section__head">
          <span className="section__num">06</span>
          <h2 className="section__title">Let&rsquo;s work together</h2>
        </Reveal>
        <Reveal as="p" className="contact__lead">
          Available for layout, branding, print production and UI work — freelance or full-time.
        </Reveal>
        <dl className="contact">
          {CONTACT.map((c) => (
            <Reveal key={c.label}>
              <dt>{c.label}</dt>
              <dd>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </dd>
            </Reveal>
          ))}
        </dl>
        <Reveal className="social-links" delay={1}>
          {SOCIALS.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon];
            return (
              <a
                key={s.label}
                className="social-links__item"
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.value}
              >
                <Icon className="social-links__icon" />
                <span>{s.label}</span>
              </a>
            );
          })}
          <a className="social-links__item social-links__item--resume" href={RESUME_URL} download rel="noopener">
            <IconDownload className="social-links__icon" />
            <span>Download Resume</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
