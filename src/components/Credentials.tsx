import Leaf from "@/components/icons/Leaf";

const major = [
  { role: "Finance Officer", org: "BU CircUITS", period: "2024–2025" },
  { role: "Business Manager", org: "BU CircUITS", period: "2025–2026" },
  {
    role: "4th Year Representative",
    org: "BU CircUITS",
    period: "2026–2027",
  },
];

const minor = [
  { role: "Vice President", org: "BSIT 1C", year: "1st Year" },
  { role: "Vice President", org: "BSIT 2C", year: "2nd Year" },
  { role: "PIO", org: "BSIT 3C", year: "3rd Year" },
  { role: "President", org: "BSIT 4C", year: "4th Year" },
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <div className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          02 / Credentials
        </p>
        <div className="mt-8 flex flex-col gap-10">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            Leadership roles I&apos;ve held, from the classroom to the org.
          </p>

          <div className="grid grid-cols-1 gap-12 border-t border-rule pt-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-6 text-sm font-medium text-ink-soft">
                Major — BU CircUITS
              </h3>
              <ol className="flex flex-col gap-6 border-l border-rule pl-6">
                {major.map((item) => (
                  <li key={item.role} className="relative">
                    <span className="absolute -left-[1.65rem] top-1.5 h-2 w-2 rounded-full bg-accent" />
                    <p className="font-display text-lg font-medium text-ink">
                      {item.role}
                    </p>
                    <p className="text-sm text-ink-soft">
                      {item.org} · {item.period}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-medium text-ink-soft">
                Minor — Class Officer
              </h3>
              <ol className="flex flex-col gap-6 border-l border-rule pl-6">
                {minor.map((item) => (
                  <li key={item.org} className="relative">
                    <span className="absolute -left-[1.65rem] top-1.5 h-2 w-2 rounded-full bg-bloom" />
                    <p className="font-display text-lg font-medium text-ink">
                      {item.role}
                    </p>
                    <p className="text-sm text-ink-soft">
                      {item.org} · {item.year}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
