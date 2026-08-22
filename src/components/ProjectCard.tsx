import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      className="group grid grid-cols-[auto_1fr] gap-6 rounded-2xl border border-rule bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 sm:grid-cols-[3rem_1fr_auto] sm:items-start"
    >
      <span className="font-mono text-sm text-ink-soft">
        {project.index}
      </span>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex aspect-[4/3] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-rule bg-black/30 sm:w-40">
          <span className="font-display text-4xl font-semibold text-ink-soft/20">
            {project.index}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-accent sm:text-3xl">
              {project.title}
            </h3>
            {project.featured && (
              <span className="rounded-full bg-bloom/15 px-2.5 py-0.5 text-xs font-medium tracking-wide text-bloom uppercase">
                Featured
              </span>
            )}
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-ink/[0.04] px-3 py-1 text-xs text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-2 flex items-center justify-between text-sm text-ink-soft sm:col-span-1 sm:flex-col sm:items-end sm:justify-start sm:gap-2">
        <span>{project.year}</span>
        <span className="inline-flex items-center gap-1 text-ink transition-colors group-hover:text-accent">
          View
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </a>
  );
}
