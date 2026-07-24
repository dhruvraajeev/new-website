import Section from "./Section";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 — projects" title="my work">
      <ol className="relative space-y-10 border-l border-edge pl-8">
        {projects.map((project) => (
          <li key={project.name} className="reveal relative">
            <span
              aria-hidden
              className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full border border-accent bg-ink"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-heading text-xl font-semibold">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-dim">{project.window}</p>
            </div>
            <p className="mt-0.5 text-sm text-accent">
              {project.tags.join(" · ")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {project.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-[0.95rem] leading-relaxed text-muted"
                >
                  <span className="mr-2 text-dim">—</span>
                  {b}
                </li>
              ))}
            </ul>
            {(project.live || project.source) && (
              <div className="mt-4 flex gap-5 text-sm">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-mint transition-colors hover:text-white"
                  >
                    live site ↗
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent transition-colors hover:text-white"
                  >
                    source ↗
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
