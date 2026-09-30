import { useEffect, useRef, useState } from "react";
import { skills } from "../data/content";

/**
 * Skills in orbit: each group rides its own tilted ring around a small
 * wireframe core. A tilted circle projects to an ellipse, so rings are plain
 * SVG ellipses and labels are projected the same way, fading and shrinking
 * as they swing to the back. Drag to spin; chips spotlight one group.
 * Desktop only — phones and screen readers get the plain list.
 */
const W = 800;
const H = 360;
const TILT = 1.0; // ring tilt away from face-on, radians (~57°)

const RINGS = Object.entries(skills).map(([name, items], i) => ({
  name,
  items,
  r: 100 + i * 66,
  rot: [-12, 8, -18, 4][i % 4],
  speed: (i % 2 ? -1 : 1) * (0.16 / (1 + i * 0.5)),
}));

const LABELS = RINGS.flatMap((ring, i) =>
  ring.items.map((name, j) => ({ name, ring: i, phase: (j / ring.items.length) * 2 * Math.PI })),
);

export default function Toolkit() {
  const [active, setActive] = useState<string | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;
  const labels = useRef<(HTMLSpanElement | null)[]>([]);
  const offset = useRef(0);
  const dragX = useRef<number | null>(null);

  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;
    let last = performance.now();
    const frame = (now: number) => {
      if (!still && dragX.current === null) t += (now - last) / 1000;
      last = now;
      LABELS.forEach((l, k) => {
        const el = labels.current[k];
        if (!el) return;
        const ring = RINGS[l.ring];
        const th = ring.speed * t + offset.current + l.phase;
        const x0 = ring.r * Math.cos(th);
        const y0 = ring.r * Math.sin(th) * Math.cos(TILT);
        const a = (ring.rot * Math.PI) / 180;
        const x = W / 2 + x0 * Math.cos(a) - y0 * Math.sin(a);
        const y = H / 2 + x0 * Math.sin(a) + y0 * Math.cos(a);
        const front = (Math.sin(th) + 1) / 2; // 0 = far side, 1 = nearest
        const dim = activeRef.current && activeRef.current !== ring.name ? 0.12 : 1;
        el.style.left = `${(x / W) * 100}%`;
        el.style.top = `${(y / H) * 100}%`;
        el.style.transform = `translate(-50%, -50%) scale(${0.85 + 0.2 * front})`;
        el.style.opacity = String((0.3 + 0.7 * front) * dim);
        el.style.zIndex = String(Math.round(front * 100));
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const chip = (label: string, value: string | null) => (
    <button
      key={label}
      onClick={() => setActive(value)}
      className={`transition-colors ${active === value ? "text-soft" : "text-dim hover:text-soft"}`}
    >
      {label}
    </button>
  );

  return (
    <section className="mt-20">
      <div className="flex items-baseline justify-between gap-4">
        <p className="label">toolkit</p>
        <div className="hidden gap-4 font-mono text-[0.7rem] md:flex">
          {chip("all", null)}
          {RINGS.map((r) => chip(r.name, r.name))}
        </div>
      </div>

      <div
        aria-hidden
        className="relative mt-8 hidden aspect-[800/360] cursor-grab touch-pan-y select-none active:cursor-grabbing md:block"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          dragX.current = e.clientX;
        }}
        onPointerMove={(e) => {
          if (dragX.current === null) return;
          offset.current += (e.clientX - dragX.current) * 0.006;
          dragX.current = e.clientX;
        }}
        onPointerUp={() => (dragX.current = null)}
        onPointerCancel={() => (dragX.current = null)}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" fill="none">
          <g stroke="rgb(var(--edge))">
            <circle cx={W / 2} cy={H / 2} r={30} />
            <ellipse cx={W / 2} cy={H / 2} rx={30} ry={10} />
            <ellipse cx={W / 2} cy={H / 2} rx={10} ry={30} />
          </g>
          <circle cx={W / 2} cy={H / 2} r={2.5} fill="rgb(var(--accent))" />
          {RINGS.map((ring) => (
            <ellipse
              key={ring.name}
              cx={W / 2}
              cy={H / 2}
              rx={ring.r}
              ry={ring.r * Math.cos(TILT)}
              transform={`rotate(${ring.rot} ${W / 2} ${H / 2})`}
              className="transition-[stroke] duration-300"
              stroke={active === ring.name ? "rgb(var(--accent) / 0.6)" : "rgb(var(--edge) / 0.8)"}
            />
          ))}
        </svg>
        {LABELS.map((l, k) => (
          <span
            key={l.name}
            ref={(el) => (labels.current[k] = el)}
            className="absolute whitespace-nowrap rounded bg-ink/70 px-1.5 py-0.5 font-mono text-[0.7rem] text-soft"
          >
            {l.name}
          </span>
        ))}
      </div>
      <p aria-hidden className="mt-4 hidden text-center font-mono text-[0.65rem] tracking-[0.2em] text-dim md:block">
        drag to spin
      </p>

      <dl className="mt-8 space-y-4 md:sr-only">
        {RINGS.map((ring) => (
          <div key={ring.name}>
            <dt className="font-mono text-[0.7rem] text-dim">{ring.name}</dt>
            <dd className="mt-1 max-w-prose text-muted">{ring.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
