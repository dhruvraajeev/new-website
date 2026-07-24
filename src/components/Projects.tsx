import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 — projects" title="selected work">
      {/* Bento: featured project spans both columns, rest fill the grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}
