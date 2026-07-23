import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="What I work with">
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="reveal rounded-xl border border-edge bg-card p-7"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-dim">
              {group}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-edge px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-soft"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
