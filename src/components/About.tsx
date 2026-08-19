import Leaf from "@/components/icons/Leaf";

const facts = [
  { label: "Program", value: "BS Information Technology" },
  { label: "Year Level", value: "4th Year" },
  { label: "University", value: "Bicol University" },
  { label: "Currently", value: "Building Project Bloom" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-rule px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="grid gap-12 sm:grid-cols-[1fr_2fr]">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-accent uppercase">
            <Leaf className="h-4 w-4" />
            01 / About
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-display text-3xl leading-snug text-ink sm:text-4xl">
            A little about how I got here, what I&apos;m studying, and what
            I&apos;m building toward.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            This is placeholder bio text. Replace it with a short paragraph
            about your background, how you got into IT, and what kind of
            projects or problems you enjoy working on. Keep it conversational
            and specific to you.
          </p>

          <dl className="grid grid-cols-1 gap-6 border-t border-rule pt-8 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-ink-soft">{fact.label}</dt>
                <dd className="mt-1 font-display text-lg text-ink">
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
