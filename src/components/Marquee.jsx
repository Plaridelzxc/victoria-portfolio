export default function Marquee({ items, flip = false }) {
  const track = [...items, ...items];

  return (
    <div className={`marquee${flip ? " marquee--flip" : ""}`} aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span className="marquee__item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
