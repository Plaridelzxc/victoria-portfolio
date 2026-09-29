import Reveal from "./Reveal.jsx";
import Watermark from "./Watermark.jsx";
import { TOOLKIT } from "../data/content.js";

export default function Toolkit() {
  return (
    <section className="section section--tint" id="toolkit">
      <Watermark>05</Watermark>
      <div className="shell">
        <Reveal className="section__head">
          <span className="section__num">05</span>
          <h2 className="section__title">Toolkit</h2>
        </Reveal>
        <div className="kit">
          {TOOLKIT.map((group, i) => (
            <Reveal
              className={`kit__group${group.wide ? " kit__group--wide" : ""}`}
              key={group.title}
              delay={i}
            >
              <h3>{group.title}</h3>
              <p>{group.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
