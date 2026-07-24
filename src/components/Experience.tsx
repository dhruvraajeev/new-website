import Section from "./Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 — experience" title="where i've worked">
      <ol className="relative space-y-10 border-l border-edge pl-8">
        {experience.map((role) => (
          <li key={role.org} className="reveal relative">
            <span
              aria-hidden
              className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full border border-accent bg-ink"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-heading text-xl font-semibold">
                {role.org}
              </h3>
              <p className="font-mono text-xs text-dim">{role.window}</p>
            </div>
            <p className="mt-0.5 text-sm text-accent">{role.title}</p>
            <ul className="mt-4 space-y-2.5">
              {role.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-[0.95rem] leading-relaxed text-muted"
                >
                  <span className="mr-2 text-dim">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
