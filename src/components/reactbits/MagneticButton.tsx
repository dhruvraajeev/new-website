import { useRef } from "react";
import type { ReactNode } from "react";

/**
 * ReactBits-style magnetic button: the element leans toward the cursor
 * within its bounds and springs back on leave.
 */
export default function MagneticButton({
  children,
  href,
  download,
  primary = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  download?: boolean;
  primary?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200 [transition:transform_0.25s_ease,background-color_0.2s,border-color_0.2s]";
  const look = primary
    ? "bg-accent text-white hover:bg-accent/85"
    : "border border-edge bg-card text-soft hover:border-dim";

  return (
    <a
      ref={ref}
      href={href}
      {...(download ? { download: "" } : {})}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${look} ${className}`}
    >
      {children}
    </a>
  );
}
