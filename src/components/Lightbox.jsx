import { useEffect, useRef } from "react";

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (item) closeRef.current?.focus();
  }, [item]);

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose, onPrev, onNext]);

  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label="Photo preview"
      hidden={!item}
      onClick={(e) => {
        if (e.target === e.currentTarget || e.target.classList.contains("lb__stage")) onClose();
      }}
    >
      <button className="lb__close" type="button" aria-label="Close" ref={closeRef} onClick={onClose}>&times;</button>
      <button className="lb__nav lb__nav--prev" type="button" aria-label="Previous" onClick={onPrev}>&#8249;</button>
      <button className="lb__nav lb__nav--next" type="button" aria-label="Next" onClick={onNext}>&#8250;</button>
      <figure className="lb__stage">
        <img src={item?.full || ""} alt={item?.alt || ""} />
        <figcaption>
          <span className="lb__title">{item?.title || ""}</span>
          <span className="lb__meta">{item?.meta || ""}</span>
        </figcaption>
      </figure>
    </div>
  );
}
