import Section from "./Section";
import ElectricBorder from "./reactbits/ElectricBorder/ElectricBorder";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="What I work with">
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <ElectricBorder
            key={group}
            color="rgba(125, 211, 252, 0.3)"
            speed={1}
            chaos={0.05}
            borderRadius={12}
            className="reveal"
          >
            <div className="rounded-xl bg-card p-7">
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
          </ElectricBorder>
        ))}
      </div>
    </Section>
  );
}
