import Section from "./Section";
import { education } from "../data/content";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Education & focus">
      <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
        <div className="reveal rounded-xl border border-edge bg-card p-7">
          <h3 className="font-heading text-lg font-semibold">
            {education.school}
          </h3>
          <p className="mt-1 text-sm text-muted">{education.degree}</p>
          <p className="mt-1 font-mono text-xs text-dim">{education.window}</p>
        </div>
        <div className="reveal rounded-xl border border-edge bg-card p-7">
          <p className="font-mono text-xs uppercase tracking-widest text-dim">
            Relevant coursework
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <li
                key={c}
                className="rounded-full border border-edge px-3 py-1 text-sm text-muted"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
