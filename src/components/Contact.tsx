import Section from "./Section";
import MagneticButton from "./reactbits/MagneticButton";
import ElectricBorder from "./reactbits/ElectricBorder/ElectricBorder";
import { identity } from "../data/content";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="05 — contact" title="get in touch">
      <ElectricBorder
        color="rgba(125, 211, 252, 0.3)"
        speed={1}
        chaos={0.05}
        borderRadius={12}
        className="reveal"
      >
        <div className="rounded-xl bg-card p-10 text-center sm:p-14">
          <p className="mx-auto max-w-xl text-lg text-muted">
            open to ai infrastructure or quantitative development opportunities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href={`mailto:${identity.email}`} primary>
              {identity.email}
            </MagneticButton>
            <MagneticButton href={identity.resumeHref} download>
              download resume
            </MagneticButton>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-dim">
            <a
              href={identity.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-soft"
            >
              github
            </a>
            <a
              href={identity.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-soft"
            >
              linkedin
            </a>
          </div>
        </div>
      </ElectricBorder>
    </Section>
  );
}
