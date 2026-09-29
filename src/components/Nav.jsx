import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content.js";

export default function Nav({ current }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 720) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="nav" id="top">
      <div className="shell nav__inner">
        <a className="nav__mark" href="#top">Victoria&nbsp;Sumilhig</a>
        <nav className="nav__links" aria-label="Sections">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={current === link.href.slice(1) ? "is-current" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="navMobile"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
        </button>
      </div>
      <nav className={`nav__mobile${open ? " is-open" : ""}`} id="navMobile" aria-label="Sections">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={current === link.href.slice(1) ? "is-current" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
