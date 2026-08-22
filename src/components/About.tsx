import Leaf from "@/components/icons/Leaf";

const facts = [
  { label: "Program", value: "BS Information Technology" },
  { label: "Year Level", value: "4th Year" },
  { label: "University", value: "Bicol University" },
  { label: "Currently", value: "Building minor systems and websites" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <div className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          01 / About
        </p>
        <div className="mt-8 flex flex-col gap-10">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            A little about how I got here, what I&apos;m studying, and what
            I&apos;m building toward.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            This is placeholder bio text. Replace it with a short paragraph
            about your background, how you got into IT, and what kind of
            projects or problems you enjoy working on. Keep it conversational
            and specific to you.
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
      </div>
    </section>
  );
}
