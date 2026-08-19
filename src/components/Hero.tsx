import Image from "next/image";
import Leaf from "@/components/icons/Leaf";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-16 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-16 sm:px-10 sm:pb-28 sm:pt-24"
    >
      <div className="flex flex-col gap-10">
        <p className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-accent uppercase">
          <Leaf className="h-4 w-4" />
          Portfolio — Est. 2026
        </p>

        <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          Jose Manuel G.
          <br />
          Labalan
        </h1>

        <div className="grid gap-10 border-t border-rule pt-8 sm:grid-cols-[2fr_1fr]">
          <p className="max-w-xl text-xl leading-relaxed text-ink-soft">
            I&apos;m an IT student who enjoys turning ideas into working
            software. Right now I&apos;m building{" "}
            <span className="text-ink">Project Bloom</span> with my team, a
            venture to help small businesses bloom.
          </p>
          <div className="flex flex-col gap-2 text-sm text-ink-soft">
            <div className="flex justify-between border-b border-rule pb-2 sm:justify-start sm:gap-4">
              <span className="text-ink">Status</span>
              <span>4th Year, BSIT</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-2 sm:justify-start sm:gap-4">
              <span className="text-ink">School</span>
              <span>Bicol University</span>
            </div>
            <div className="flex justify-between sm:justify-start sm:gap-4">
              <span className="text-ink">Based in</span>
              <span>Philippines</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative order-first mx-auto w-48 shrink-0 overflow-hidden rounded-2xl border border-rule sm:order-none sm:w-64">
        <Image
          src="/profile.jpg"
          alt="Jose Manuel G. Labalan"
          width={1400}
          height={2100}
          priority
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
      </div>
    </section>
  );
}
