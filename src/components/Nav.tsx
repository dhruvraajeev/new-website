import { useEffect, useState } from "react";
import { identity, nav } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-edge bg-ink/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-base font-bold">
          dhruv<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-soft"
            >
              {item.label}
            </a>
          ))}
          <a
            href={identity.resumeHref}
            download
            className="rounded-md border border-edge px-3 py-1.5 font-medium text-soft transition-colors hover:border-accent hover:text-white"
          >
            Resume
          </a>
        </div>
        {/* Mobile: just the resume link; sections are one scroll away anyway */}
        <a
          href={identity.resumeHref}
          download
          className="rounded-md border border-edge px-3 py-1.5 text-sm font-medium text-soft sm:hidden"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
