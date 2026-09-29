import Reveal from "./Reveal.jsx";
import Watermark from "./Watermark.jsx";
import { ROLES } from "../data/content.js";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Watermark>04</Watermark>
      <div className="shell">
        <Reveal className="section__head">
          <span className="section__num">04</span>
          <h2 className="section__title">Experience</h2>
        </Reveal>

        <ol className="roles">
          {ROLES.map((role) => (
            <Reveal as="li" className="role" key={role.title + role.when}>
              <div className="role__when">{role.when}</div>
              <div className="role__what">
                <h3>
                  {role.title}
                  {role.tag && <span className="role__tag">{role.tag}</span>}
                </h3>
                <p className="role__org">{role.org}</p>
                <ul>
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
