import Image from "next/image";
import Leaf from "@/components/icons/Leaf";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-5xl gap-12 px-6 pt-16 pb-20 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-16 sm:px-10 sm:pt-24 sm:pb-28"
    >
      <div className="flex flex-col gap-10">
        <p className="animate-[fade-up_0.6s_ease-out_both] inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          Open to OJT — 2026
        </p>

        <h1 className="animate-[fade-up_0.6s_ease-out_0.1s_both] font-display text-5xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-7xl">
          Jose Manuel G.
          <br />
          Labalan
        </h1>

        <div className="animate-[fade-up_0.6s_ease-out_0.2s_both] grid gap-10 rounded-3xl border border-rule bg-paper-alt p-8 sm:grid-cols-[2fr_1fr]">
          <p className="max-w-xl text-xl leading-relaxed text-ink-soft">
            IT student building software that real businesses and organizations
            run on — a{" "}
            <span className="font-medium text-ink">point-of-sale system</span>{" "}
            for a store and bakery, a{" "}
            <span className="font-medium text-ink">dues tracker</span> for a
            Rotary club. Now looking for an OJT placement.
          </p>
          <div className="flex flex-col gap-2 text-sm text-ink-soft sm:border-l sm:border-rule sm:pl-6">
            <div className="flex justify-between pb-2 sm:justify-start sm:gap-4">
              <span className="text-ink">Status</span>
              <span>4th Year, BSIT</span>
            </div>
            <div className="flex justify-between pb-2 sm:justify-start sm:gap-4">
              <span className="text-ink">School</span>
              <span>Bicol University</span>
            </div>
            <div className="flex justify-between pb-2 sm:justify-start sm:gap-4">
              <span className="text-ink">Based in</span>
              <span>Legazpi, Albay</span>
            </div>
            <div className="flex justify-between sm:justify-start sm:gap-4">
              <span className="text-ink">Seeking</span>
              <span>OJT placement</span>
            </div>
          </div>
        </div>

        <div className="animate-[fade-up_0.6s_ease-out_0.3s_both] flex flex-wrap gap-4 pt-2">
          <a
            href="#work"
            className="rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm shadow-accent/30 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-rule bg-paper-alt px-6 py-3 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent active:scale-95"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="animate-[fade-up_0.7s_ease-out_0.15s_both] relative order-first mx-auto w-48 shrink-0 overflow-hidden rounded-3xl ring-1 ring-rule sm:order-none sm:w-64">
        <Image
          src="/profile.jpg"
          alt="Jose Manuel G. Labalan"
          width={1400}
          height={2100}
          priority
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
    </section>
  );
}
