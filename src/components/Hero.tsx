import AnimatedText from "./reactbits/AnimatedText";
import MagneticButton from "./reactbits/MagneticButton";
import { identity } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div className="relative mx-auto w-full max-w-site px-6 pt-24">
        <p className="eyebrow mb-6">
          <AnimatedText text="CS @ Texas A&M · College Station, TX" />
        </p>
        <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          <AnimatedText text={identity.greeting} delay={100} />
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          <AnimatedText text={identity.tagline} delay={350} />
        </p>
        <p className="mt-2 max-w-2xl text-base text-dim">
          <AnimatedText text={identity.school} delay={500} />
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <MagneticButton href="#projects" primary>
            View Work ↓
          </MagneticButton>
          <MagneticButton href={identity.resumeHref} download>
            Download Resume
          </MagneticButton>
          <div className="ml-1 flex items-center gap-5 text-sm text-dim">
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
      </div>
    </section>
  );
}
