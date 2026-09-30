import Reveal from "./Reveal.jsx";
import { IconDownload } from "./Icons.jsx";
import { RESUME_URL, GMAIL_COMPOSE_URL } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="shell hero__grid">
        <div className="hero__text">
          <Reveal as="p" className="eyebrow" dir="left">Bacolod City, Philippines</Reveal>
          <Reveal as="h1" className="hero__name" dir="left" delay={1}>
            Victoria<br /><em>Sumilhig</em>
            <span className="hero__badge" aria-hidden="true">Open to work</span>
          </Reveal>
          <Reveal as="p" className="hero__role" dir="left" delay={2}>Graphic Designer &middot; Layout Artist &middot; Executive Assistant</Reveal>
          <Reveal as="p" className="hero__lead" dir="left" delay={3}>
            Two years of print-ready layout work at a Bacolod advertising house — festival tarpaulins, menu boards,
            sublimated jerseys, packaging — plus the UI/UX side of things in Figma. I like work that has to survive
            contact with a printer.
          </Reveal>
          <Reveal className="hero__actions" dir="left" delay={4}>
            <a className="btn" href="#work">See the work</a>
            <a className="btn btn--ghost" href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">Get in touch</a>
            <a className="btn btn--ghost" href={RESUME_URL} download rel="noopener">
              <IconDownload className="btn__icon" /> Resume
            </a>
          </Reveal>
        </div>
        <Reveal as="figure" className="hero__photo" dir="right" delay={1}>
          <img
            src="/assets/full/portrait-hero.jpg"
            alt="Victoria Sumilhig, professional headshot"
            width="1123"
            height="1400"
          />
        </Reveal>
      </div>
      <a className="hero__cue" href="#practice" aria-label="Scroll to see more"><span></span></a>
    </section>
  );
}
