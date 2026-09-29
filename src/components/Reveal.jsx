import useInView from "../hooks/useInView.js";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, dir = "up", children, ...rest }) {
  const [ref, isIn] = useInView();
  const dirClass = dir === "left" ? "reveal--left" : dir === "right" ? "reveal--right" : "";
  const cls = ["reveal", dirClass, isIn && "is-in", className].filter(Boolean).join(" ");
  const style = delay ? { transitionDelay: `${Math.min(delay, 6) * 90}ms` } : undefined;

  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  );
}
