import { projects } from "../data/content";

/**
 * Every project, not just featured ones. Each row collapses to one line
 * (name + window) and opens on click, so the list stays one screen tall
 * whether there are 6 projects or 30. Native <details> — no JS, no state.
 */
export default function Projects() {
  return (
    <section id="projects" className="mt-20">
      <p className="label">projects — {projects.length}</p>
      <ul className="mt-8 divide-y divide-edge/60 border-t border-edge/60">
        {projects.map((p) => (
          <li key={p.name}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-x-4 py-3 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-baseline gap-x-4">
                  <span className="font-serif text-lg tracking-[-0.01em] text-soft">
                    {p.name}
                  </span>
                  <span className="flex shrink-0 items-baseline gap-x-3 font-mono text-[0.7rem] text-dim">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="transition-colors hover:text-accent"
                      >
                        live ↗
                      </a>
                    )}
                    {p.source && (
                      <a
                        href={p.source}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="transition-colors hover:text-accent"
                      >
                        source ↗
                      </a>
                    )}
                  </span>
                </span>
                <span className="shrink-0 font-mono text-[0.7rem] text-dim">
                  {p.window}
                </span>
              </summary>
              <div className="pb-5 pl-0">
                {p.bullets.map((b, i) => (
                  <p key={i} className="max-w-prose leading-relaxed text-muted">
                    {b}
                  </p>
                ))}
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.7rem] text-dim">
                  <span>{p.tags.join(" · ")}</span>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      live ↗
                    </a>
                  )}
                  {p.source && (
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      source ↗
                    </a>
                  )}
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
