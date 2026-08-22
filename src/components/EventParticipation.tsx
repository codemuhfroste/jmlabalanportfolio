import Leaf from "@/components/icons/Leaf";

// Placeholder entries — swap these for the actual events you've joined.
const events = [
  { role: "Participant", org: "Event Name", year: "2025" },
  { role: "Delegate", org: "Event Name", year: "2025" },
  { role: "Volunteer", org: "Event Name", year: "2024" },
];

export default function EventParticipation() {
  return (
    <section
      id="events"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <div className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          03 / Event Participation
        </p>
        <div className="mt-8 flex flex-col gap-10">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            Conferences, competitions, and org events I&apos;ve taken part in.
          </p>

          <ol className="grid grid-cols-1 gap-8 border-t border-rule pt-8 sm:grid-cols-3">
            {events.map((item, i) => (
              <li key={`${item.org}-${i}`} className="relative pl-6">
                <span className="absolute top-1.5 left-0 h-2 w-2 rounded-full bg-accent" />
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
    </section>
  );
}
