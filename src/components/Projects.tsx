import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Leaf from "@/components/icons/Leaf";

export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-rule px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="grid gap-12 sm:grid-cols-[1fr_2fr]">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-accent uppercase">
            <Leaf className="h-4 w-4" />
            03 / Work
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-display text-3xl leading-snug text-ink sm:text-4xl">
            Selected projects.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink-soft">
            Placeholder entries below — swap these for real projects as you
            finish them.
          </p>

          <div className="mt-4">
            {projects.map((project) => (
              <ProjectCard key={project.index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
