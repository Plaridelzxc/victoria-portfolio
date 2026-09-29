import Reveal from "./Reveal.jsx";
import Watermark from "./Watermark.jsx";
import { PRACTICE } from "../data/content.js";

export default function Practice() {
  return (
    <section className="section" id="practice">
      <Watermark>01</Watermark>
      <div className="shell">
        <Reveal className="section__head">
          <span className="section__num">01</span>
          <h2 className="section__title">What I do</h2>
        </Reveal>
        <div className="practice">
          {PRACTICE.map((item, i) => (
            <Reveal as="article" className="practice__item" key={item.title} delay={i}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p className="practice__tools">{item.tools}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
