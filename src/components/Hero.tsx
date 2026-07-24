import { Suspense } from "react";
import AnimatedText from "./reactbits/AnimatedText";
import MagneticButton from "./reactbits/MagneticButton";
import Lanyard from "./reactbits/Lanyard/Lanyard";
import { identity } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center">
      {/* Lives in normal page flow (not fixed) — scrolls away with the hero.
          Wide box + overflow visible so the swinging card isn't clipped. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 mx-auto hidden h-[36rem] max-w-site px-6 md:block">
        <div className="pointer-events-auto absolute -right-2 top-0 h-full w-80 overflow-visible lg:right-4 lg:w-96">
          <Suspense fallback={null}>
            <Lanyard />
          </Suspense>
        </div>
      </div>

      <div className="relative z-0 mx-auto w-full max-w-site px-6 pt-24">
        <p className="eyebrow mb-6">
          <AnimatedText text="cs @ texas a&m · college station, tx" />
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
            view work ↓
          </MagneticButton>
          <MagneticButton href={identity.resumeHref} download>
            download resume
          </MagneticButton>
          <div className="ml-1 flex items-center gap-5 text-sm text-dim">
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
      </div>
    </section>
  );
}
