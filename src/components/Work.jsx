import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Watermark from "./Watermark.jsx";
import { WORK, FILTERS } from "../data/content.js";

export default function Work({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visible = activeFilter === "all" ? WORK : WORK.filter((w) => w.cat === activeFilter);

  return (
    <section className="section section--work" id="work">
      <Watermark>02</Watermark>
      <div className="shell">
        <Reveal className="section__head">
          <span className="section__num">02</span>
          <h2 className="section__title">Selected work</h2>
        </Reveal>

        <Reveal className="filters" role="group" aria-label="Filter work by discipline">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter${activeFilter === f.key ? " is-active" : ""}`}
              aria-pressed={activeFilter === f.key}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid" id="grid">
          {WORK.map((item, i) => {
            const isHidden = activeFilter !== "all" && item.cat !== activeFilter;
            const visIndex = visible.indexOf(item);
            return (
              <Reveal
                as="figure"
                key={item.id}
                className={`card${item.wide ? " is-wide" : ""}${isHidden ? " is-hidden" : ""}`}
                delay={i % 6}
                tabIndex={0}
                role="button"
                aria-label={`View ${item.title} full size`}
                onClick={() => !isHidden && onOpenLightbox(visible, visIndex)}
                onKeyDown={(e) => {
                  if (isHidden) return;
                  if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                    e.preventDefault();
                    onOpenLightbox(visible, visIndex);
                  }
                }}
              >
                <img src={item.thumb} alt={item.alt} loading="lazy" />
                <figcaption>
                  <span className="card__title">{item.title}</span>
                  <span className="card__meta">{item.meta}</span>
                </figcaption>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
