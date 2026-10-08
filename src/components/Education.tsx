import Leaf from "@/components/icons/Leaf";
import Reveal from "@/components/Reveal";

const schools = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Bicol University — College of Science",
    place: "Legazpi City",
    period: "2023 – Present",
    note: "Expected graduation 2027",
  },
  {
    degree: "Senior High School — STEM",
    school: "Saint Agnes Academy, Inc.",
    place: "Legazpi City",
    period: "Graduated 2023",
  },
];

const coursework = [
  "Information Assurance and Security (cryptography, PKI)",
  "System Administration and Maintenance (Linux, virtualization)",
  "Networking",
  "Database Management",
];

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <Reveal className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          02 / Education
        </p>
        <div className="mt-8 flex flex-col gap-10">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            Where I&apos;m studying, and what it covers.
          </p>

          <ol className="flex flex-col gap-8 border-t border-rule pt-8">
            {schools.map((item) => (
              <li
                key={item.degree}
                className="relative flex flex-col gap-1 pl-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="absolute top-2.5 left-0 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <p className="font-display text-lg font-medium text-ink">
                    {item.degree}
                  </p>
                  <p className="text-sm text-ink-soft">
                    {item.school} · {item.place}
                  </p>
                </div>
                <div className="shrink-0 text-sm text-ink-soft sm:text-right">
                  <p>{item.period}</p>
                  {item.note && <p className="text-ink-soft/70">{item.note}</p>}
                </div>
              </li>
            ))}
          </ol>

          <div className="border-t border-rule pt-8">
            <h3 className="mb-4 text-sm font-medium text-ink-soft">
              Relevant coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-lg bg-ink/[0.04] px-3.5 py-1.5 text-sm text-ink"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
