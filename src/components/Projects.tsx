import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Section from "./Section";
import CircularGallery from "./reactbits/CircularGallery/CircularGallery";
import ElectricBorder from "./reactbits/ElectricBorder/ElectricBorder";
import { projects, type Project } from "../data/content";

const EDGE_FADE =
  "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)";

/** Phones only — iPad portrait (768px) and up keep the circular gallery. */
const GALLERY_MQ = "(min-width: 768px)";

/** Renders a project as a dark card image so the gallery has something to show. */
function cardImage(project: Project): string {
  // 700x900 matches the gallery plane's aspect, so nothing gets cropped.
  const canvas = document.createElement("canvas");
  canvas.width = 700;
  canvas.height = 900;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#18181b";
  ctx.fillRect(0, 0, 700, 900);
  ctx.strokeStyle = "#27272a";
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, 698, 898);

  ctx.fillStyle = "#0284c7";
  ctx.font = "500 22px 'JetBrains Mono', monospace";
  ctx.fillText(project.window, 56, 96);

  // Wrap text to the card width, returning the y after the last line drawn.
  const wrap = (text: string, y: number, lineHeight: number) => {
    let line = "";
    for (const word of text.split(" ")) {
      const next = line ? `${line} ${word}` : word;
      if (ctx.measureText(next).width > 588 && line) {
        ctx.fillText(line, 56, y);
        y += lineHeight;
        line = word;
      } else {
        line = next;
      }
    }
    ctx.fillText(line, 56, y);
    return y + lineHeight;
  };

  ctx.fillStyle = "#f4f4f5";
  ctx.font = "700 54px 'DM Sans', sans-serif";
  let y = wrap(project.name, 300, 66);

  ctx.fillStyle = "#9ca3af";
  ctx.font = "400 26px 'DM Sans', sans-serif";
  y = wrap(project.bullets[0], y + 40, 36);

  ctx.fillStyle = "#71717a";
  ctx.font = "400 22px 'JetBrains Mono', monospace";
  wrap(project.tags.join(" · "), 812, 30);

  return canvas.toDataURL();
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-mint transition-colors hover:text-white"
        >
          live ↗
        </a>
      )}
      {project.source && (
        <a
          href={project.source}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-accent transition-colors hover:text-white"
        >
          source ↗
        </a>
      )}
    </>
  );
}

function MobileProjectCards() {
  return (
    <div className="grid gap-6">
      {projects.map((project) => (
        <ElectricBorder
          key={project.name}
          color="rgba(125, 211, 252, 0.3)"
          speed={1}
          chaos={0.05}
          borderRadius={12}
          className="reveal"
        >
          <div className="rounded-xl bg-card p-6">
            <p className="font-mono text-xs text-dim">{project.window}</p>
            <h3 className="mt-2 font-heading text-lg font-semibold">
              {project.name}
            </h3>
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">
              {project.bullets[0]}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-edge px-3 py-1 font-mono text-xs text-dim"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {(project.live || project.source) && (
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <ProjectLinks project={project} />
              </div>
            )}
          </div>
        </ElectricBorder>
      ))}
    </div>
  );
}

export default function Projects() {
  const [preview, setPreview] = useState<number | null>(null);
  // Sync on first paint so desktop mounts the gallery before App's scroll-reveal
  // observer runs — starting at false left .reveal nodes invisible forever.
  const [showGallery, setShowGallery] = useState(
    () => typeof window !== "undefined" && window.matchMedia(GALLERY_MQ).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(GALLERY_MQ);
    const sync = () => setShowGallery(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const items = useMemo(
    () =>
      showGallery
        ? projects.map((project) => ({
            image: cardImage(project),
            text: "",
          }))
        : [],
    [showGallery],
  );

  useEffect(() => {
    if (preview === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  return (
    <Section id="projects" eyebrow="03 — projects" title="my work">
      {showGallery ? (
        <>
          {/* Mask fades cards out at the left/right edges instead of clipping them. */}
          <div
            className="reveal h-[600px]"
            style={{
              maskImage: EDGE_FADE,
              WebkitMaskImage: EDGE_FADE,
            }}
          >
            <CircularGallery
              items={items}
              bend={1}
              borderRadius={0.05}
              textColor="#f4f4f5"
              font='bold 30px "DM Sans"'
              scrollEase={0.1}
              onItemClick={setPreview}
            />
          </div>
          <ul className="reveal mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            {projects.map((project) => (
              <li key={project.name} className="flex items-baseline gap-3">
                <span className="text-muted">{project.name}</span>
                <ProjectLinks project={project} />
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {preview !== null && items[preview] && (
              <motion.div
                key="preview"
                className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
                onClick={() => setPreview(null)}
                role="dialog"
                aria-modal="true"
                aria-label={projects[preview]?.name ?? "Project preview"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.img
                  src={items[preview].image}
                  alt={projects[preview]?.name ?? "Project"}
                  className="max-h-[85vh] w-auto max-w-[min(420px,92vw)] rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.82, y: 28 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.88, y: 16 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 26,
                    mass: 0.85,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <MobileProjectCards />
      )}
    </Section>
  );
}
