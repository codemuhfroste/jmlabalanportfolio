import Leaf from "@/components/icons/Leaf";
import Reveal from "@/components/Reveal";

const facts = [
  { label: "Program", value: "BS Information Technology" },
  { label: "Year Level", value: "4th Year" },
  { label: "University", value: "Bicol University" },
  { label: "Currently", value: "Seeking an OJT placement" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <Reveal className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          01 / About
        </p>
        <div className="mt-8 flex flex-col gap-10">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            I turn the problems real clients describe into working, deployed
            software.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            I&apos;m a fourth-year BS Information Technology student at Bicol
            University, looking for an OJT placement in software and web
            development. Most of what I&apos;ve built started as someone
            else&apos;s problem — a store owner tracking credit in a notebook, a
            club treasurer maintaining a spreadsheet nobody else could read. I
            sit down with them, work out what the system actually has to do, then
            build, test, and deploy it with AI-assisted development. What I want
            next is to sharpen the hands-on coding side of that under
            experienced developers.
          </p>

          <dl className="grid grid-cols-1 gap-6 border-t border-rule pt-8 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-ink-soft">{fact.label}</dt>
                <dd className="mt-1 font-display text-lg font-medium text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
