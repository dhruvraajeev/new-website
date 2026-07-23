import type { ReactNode } from "react";

/** Shared section wrapper: eyebrow tag + heading + revealed content. */
export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-site px-6 py-24">
      <div className="reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}
