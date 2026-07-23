import Section from "./Section";
import MagneticButton from "./reactbits/MagneticButton";
import { identity } from "../data/content";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title="Get in touch">
      <div className="reveal rounded-xl border border-edge bg-card p-10 text-center sm:p-14">
        <p className="mx-auto max-w-xl text-lg text-muted">
          Open to AI infrastructure or quantitative development opportunities.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={`mailto:${identity.email}`} primary>
            {identity.email}
          </MagneticButton>
          <MagneticButton href={identity.resumeHref} download>
            Download Resume
          </MagneticButton>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-dim">
          <a
            href={identity.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-soft"
          >
            GitHub
          </a>
          <a
            href={identity.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-soft"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
