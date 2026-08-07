import { useState } from "react";
import Ferrofluid from "./components/reactbits/Ferrofluid/Ferrofluid";
import Projects from "./components/Projects";
import {
  education,
  experience,
  identity,
  nav,
  skills,
} from "./data/content";

export default function App() {
  // The inline script in index.html already set data-theme before paint.
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? "dark",
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.theme = next;
    setTheme(next);
  };

  return (
    <>
      {/* Sole animated element on the page — everything else is static. */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Ferrofluid
          key={theme}
          className="h-full w-full"
          colors={
            theme === "dark"
              ? ["#0284c7", "#6366f1", "#22d3ee"]
              : ["#7aa7c7", "#a5a8e0", "#8fd3e0"]
          }
          speed={0.4}
          glow={0.7}
          opacity={theme === "dark" ? 0.38 : 0.35}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 40%, rgb(var(--ink) / 0.35) 0%, rgb(var(--ink) / 0.85) 65%, rgb(var(--ink)) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-site px-6 pb-24 pt-12 sm:pt-20">
        <header className="flex items-baseline justify-between gap-4">
          <a href="#top" className="text-soft">
            {identity.name}
          </a>
          <nav className="flex gap-5 text-dim">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-soft"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="transition-colors hover:text-soft"
            >
              {theme === "dark" ? "☾" : "☀"}
            </button>
          </nav>
        </header>

        <section id="top" className="mt-24">
          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-soft sm:text-5xl">
            {identity.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="mt-8 space-y-3 max-w-prose text-muted">
            <p>{identity.tagline}</p>
            <p>{identity.school}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-5">
            <a href={`mailto:${identity.email}`} className="link">
              email
            </a>
            <a href={identity.links.github} target="_blank" rel="noreferrer" className="link">
              github
            </a>
            <a href={identity.links.linkedin} target="_blank" rel="noreferrer" className="link">
              linkedin
            </a>
            <a href={identity.resumeHref} download className="link">
              resume
            </a>
          </div>
        </section>

        <section className="mt-20">
          <p className="label">education</p>
          <div className="mt-8">
            <h3 className="font-serif text-xl tracking-[-0.01em] text-soft">
              {education.school}
            </h3>
            <p className="mt-1 text-dim">
              {education.degree} · {education.window}
            </p>
            <p className="mt-3 max-w-prose text-muted">
              {education.coursework.join(", ")}
            </p>
          </div>
        </section>

        <section id="experience" className="mt-20">
          <p className="label">experience</p>
          <ul className="mt-8 divide-y divide-edge/60 border-t border-edge/60">
            {experience.map((role) => (
              <li key={role.org} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-serif text-xl tracking-[-0.01em] text-soft">
                    {role.org}
                  </h3>
                  <p className="font-mono text-[0.7rem] text-dim">
                    {role.window}
                  </p>
                </div>
                <p className="mt-1 text-dim">{role.title}</p>
                {role.bullets.map((b, i) => (
                  <p key={i} className="mt-2 max-w-prose leading-relaxed text-muted">
                    {b}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <Projects />

        <section className="mt-20">
          <p className="label">toolkit</p>
          <dl className="mt-8 space-y-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <dt className="font-mono text-[0.7rem] text-dim">{group}</dt>
                <dd className="mt-1 max-w-prose text-muted">
                  {items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="mt-20">
          <p className="label">contact</p>
          <p className="mt-8 max-w-prose text-muted">{identity.availability}</p>
          <div className="mt-4 flex flex-wrap gap-5">
            <a href={`mailto:${identity.email}`} className="link">
              {identity.email}
            </a>
            <a
              href={identity.links.github}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              github
            </a>
            <a
              href={identity.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              linkedin
            </a>
            <a href={identity.resumeHref} download className="link">
              resume ↓
            </a>
          </div>
        </section>

        <footer className="mt-20 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-edge/60 pt-8 text-dim">
          <p>© 2026 {identity.name}</p>
          <a href="#top" className="transition-colors hover:text-soft">
            back to top ↑
          </a>
        </footer>
      </div>
    </>
  );
}
