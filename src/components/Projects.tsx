import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Leaf from "@/components/icons/Leaf";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const majorProjects = projects.filter((p) => p.category === "major");
  const minorProjects = projects.filter((p) => p.category === "minor");

  return (
    <section
      id="work"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <Reveal className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          05 / Work
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            Systems I&apos;ve delivered to real clients and organizations.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
            Built with AI-assisted development using Claude. My role: gathering
            requirements from the client, designing the features and workflows,
            testing, and deployment.
          </p>

          <div className="mt-6 flex flex-col gap-10">
            <div>
              <h3 className="mb-4 text-sm font-medium text-ink-soft">
                Systems
              </h3>
              <div className="flex flex-col gap-4">
                {majorProjects.map((project, i) => (
                  <Reveal key={project.index} delay={i * 80}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium text-ink-soft">
                Websites
              </h3>
              <div className="flex flex-col gap-4">
                {minorProjects.map((project, i) => (
                  <Reveal key={project.index} delay={i * 80}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
