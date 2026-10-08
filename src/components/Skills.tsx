import Leaf from "@/components/icons/Leaf";
import Reveal from "@/components/Reveal";

const groups = [
  {
    label: "Solution Design",
    items: [
      "Requirements gathering",
      "Feature scoping",
      "Workflow planning",
      "User roles & access",
      "Testing with real users",
    ],
  },
  {
    label: "Development",
    items: [
      "AI-assisted full-stack (Claude)",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    label: "Data",
    items: [
      "Relational databases",
      "SQL",
      "PostgreSQL (Supabase)",
      "SQLite / libSQL (Turso)",
      "Migrations",
    ],
  },
  {
    label: "Tools & Deployment",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Linux"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <Reveal className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          04 / Skills
        </p>
        <div className="mt-8 flex flex-col gap-10">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            How I work, and what I work with.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-4 text-sm font-medium text-ink-soft">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-ink/[0.04] px-3.5 py-1.5 text-sm text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="max-w-2xl border-t border-rule pt-8 text-base leading-relaxed text-ink-soft">
            I direct builds with Claude, review what comes back, and own the
            testing and deployment. The architecture decisions — how the data is
            shaped, who can see what, what happens when the power goes out — are
            mine to make and defend.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
