import Leaf from "@/components/icons/Leaf";

const groups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "PHP"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tailwind CSS", "Laravel"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Figma", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-rule px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="grid gap-12 sm:grid-cols-[1fr_2fr]">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-accent uppercase">
            <Leaf className="h-4 w-4" />
            02 / Skills
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-display text-3xl leading-snug text-ink sm:text-4xl">
            Tools and technologies I work with.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-4 text-sm font-medium text-ink-soft">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-rule bg-paper-alt px-3.5 py-1.5 text-sm text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
