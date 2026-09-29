import { useCallback, useEffect, useRef, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Practice from "./components/Practice.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Lightbox from "./components/Lightbox.jsx";
import useSpotlight from "./hooks/useSpotlight.js";

const SKILLS_TICKER = [
  "Graphic Design", "Layout Artistry", "Print Production", "Advertising",
  "UI / UX", "Branding", "Sublimation", "Figma Prototyping",
];
const CONTACT_TICKER = [
  "Let's work together", "Available for freelance", "Based in Bacolod City", "Open to full-time",
];

export default function App() {
  const [current, setCurrent] = useState("");
  const [lightbox, setLightbox] = useState(null); // { items, index }
  const lastFocus = useRef(null);
  const spotlightRef = useSpotlight();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const openLightbox = useCallback((items, index) => {
    lastFocus.current = document.activeElement;
    setLightbox({ items, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    lastFocus.current?.focus?.();
  }, []);

  const step = useCallback((delta) => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const len = lb.items.length;
      return { ...lb, index: (lb.index + delta + len) % len };
    });
  }, []);

  const item = lightbox ? lightbox.items[lightbox.index] : null;

  return (
    <>
      <div className="spotlight" ref={spotlightRef} />
      <div className="grain" />

      <a className="skip" href="#work">Skip to work</a>

      <Nav current={current} />

      <main>
        <Hero />
        <Marquee items={SKILLS_TICKER} />
        <Practice />
        <Work onOpenLightbox={openLightbox} />
        <About onOpenLightbox={openLightbox} />
        <Experience />
        <Marquee items={CONTACT_TICKER} flip />
        <Toolkit />
        <Contact />
      </main>

      <Footer />

      <Lightbox
        item={item}
        onClose={closeLightbox}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </>
  );
}
