import Reveal from "./Reveal.jsx";
import Watermark from "./Watermark.jsx";
import { EDUCATION, SNAPS } from "../data/content.js";

export default function About({ onOpenLightbox }) {
  return (
    <section className="section section--tint" id="about">
      <Watermark>03</Watermark>
      <div className="shell">
        <Reveal className="section__head">
          <span className="section__num">03</span>
          <h2 className="section__title">About</h2>
        </Reveal>
        <div className="about">
          <Reveal as="figure" className="about__photo" dir="left">
            <img src="/assets/full/portrait-grad.jpg" alt="Victoria Sumilhig in graduation regalia" width="1001" height="1500" />
            <figcaption>BS Information Technology, 2025</figcaption>
          </Reveal>
          <div className="about__body">
            <Reveal as="p" className="about__lead" dir="right">I&rsquo;m Victoria — a graphic designer and layout artist from Bacolod City.</Reveal>
            <Reveal as="p" dir="right" delay={1}>
              I finished a BS in Information Technology at STI West Negros University in 2025, and spent the two
              years around it as a senior layout artist at PrintWorx Advertising, where most of what I made ended
              up on a tarpaulin, a T-shirt, or a storefront.
            </Reveal>
            <Reveal as="p" dir="right" delay={2}>
              That&rsquo;s the part I like: design that has to physically exist. Getting the bleed right, checking
              the color before a hundred copies run, standing near the printer while it happens.
            </Reveal>
            <Reveal as="p" dir="right" delay={3}>
              Alongside the design work I&rsquo;ve handled administrative and coordination work as an executive
              assistant, taught basic English to Korean students, and listed properties as a freelance agent.
              Different rooms, same habit — keep it organised, keep the client in the loop, finish it properly.
            </Reveal>

            <Reveal className="edu">
              <h3 className="edu__head">Education &amp; certification</h3>
              <dl className="edu__list">
                {EDUCATION.map((e) => (
                  <div key={e.term}>
                    <dt>{e.term}</dt>
                    <dd>{e.detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <Reveal className="snaps-wrap">
          <p className="snaps__label">Also me</p>
          <div className="snaps">
            {SNAPS.map((snap, i) => (
              <figure
                key={snap.id}
                className="snap"
                tabIndex={0}
                role="button"
                aria-label={`View ${snap.title} full size`}
                onClick={() => onOpenLightbox(SNAPS, i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                    e.preventDefault();
                    onOpenLightbox(SNAPS, i);
                  }
                }}
              >
                <img src={snap.thumb} alt={snap.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
