import { useMemo } from "react";
import Section from "./Section";
import CircularGallery from "./reactbits/CircularGallery/CircularGallery";
import { projects, type Project } from "../data/content";

const EDGE_FADE =
  "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)";

/** Short caption for the gallery — long names overlap their neighbours. */
const shortName = (p: Project) =>
  p.name.split(" — ")[0].split(" ").slice(0, 3).join(" ");

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

export default function Projects() {
  const items = useMemo(
    () =>
      projects.map((project) => ({
        image: cardImage(project),
        text: shortName(project),
      })),
    [],
  );

  return (
    <Section id="projects" eyebrow="03 — projects" title="my work">
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
          bend={3}
          borderRadius={0.05}
          textColor="#f4f4f5"
          font='bold 30px "DM Sans"'
          scrollEase={0.02}
        />
      </div>
      <ul className="reveal mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
        {projects.map((project) => (
          <li key={project.name} className="flex items-baseline gap-3">
            <span className="text-muted">{shortName(project)}</span>
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
          </li>
        ))}
      </ul>
    </Section>
  );
}
