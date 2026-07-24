import { identity } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-dim">
        <p>© 2026 {identity.name}. all rights reserved.</p>
        <a
          href={identity.resumeHref}
          download
          className="transition-colors hover:text-soft"
        >
          resume ↓
        </a>
      </div>
    </footer>
  );
}
