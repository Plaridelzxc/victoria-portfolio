export default function Watermark({ children }) {
  return (
    <span className="section__watermark" aria-hidden="true">{children}</span>
  );
}
