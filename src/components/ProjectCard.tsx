import TiltCard from "./reactbits/TiltCard";
import type { Project } from "../data/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard
      className={`reveal h-full ${project.featured ? "md:col-span-2" : ""}`}
    >
      <article className="flex h-full flex-col rounded-xl border border-edge bg-card p-7 transition-colors hover:border-dim">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-heading text-xl font-semibold">
            {project.name}
            {project.featured && (
              <span className="ml-3 rounded-full border border-mint/40 px-2.5 py-0.5 align-middle font-mono text-[0.65rem] uppercase tracking-widest text-mint">
                Live
              </span>
            )}
          </h3>
          <p className="font-mono text-xs text-dim">{project.window}</p>
        </div>

        <ul className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="font-mono text-xs text-accent">
              {t}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex-1 space-y-2.5">
          {project.bullets.map((b, i) => (
            <li key={i} className="text-[0.95rem] leading-relaxed text-muted">
              <span className="mr-2 text-dim">—</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-5 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-mint transition-colors hover:text-white"
            >
              Live site ↗
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent transition-colors hover:text-white"
            >
              Source ↗
            </a>
          )}
        </div>
      </article>
    </TiltCard>
  );
}
