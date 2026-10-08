import Leaf from "@/components/icons/Leaf";
import Reveal from "@/components/Reveal";

const EMAIL = "jmgl2023-2701-73027@bicol-u.edu.ph";

const socials: { label: string; value: string; href?: string }[] = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Phone", value: "0992 304 8708", href: "tel:+639923048708" },
  {
    label: "GitHub",
    value: "github.com/codemuhfroste",
    href: "https://github.com/codemuhfroste",
  },
  { label: "Based in", value: "Legazpi City, Albay" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <Reveal className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          06 / Contact
        </p>
        <div className="mt-8 flex flex-col gap-8">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            Looking for an OJT placement — let&apos;s talk.
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            I&apos;m open to OJT placements in software and web development, and
            to building systems for businesses and organizations that need one.
            Reach out through any of the channels below.
          </p>

          <div className="flex flex-col gap-3 border-t border-rule pt-8">
            {socials.map((social) =>
              social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex flex-col gap-1 rounded-xl px-3 py-3 text-ink transition-colors hover:bg-accent/5 hover:text-accent sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <span className="text-sm text-ink-soft">{social.label}</span>
                  <span className="font-display text-lg font-medium break-all sm:text-right">
                    {social.value}
                  </span>
                </a>
              ) : (
                <div
                  key={social.label}
                  className="flex flex-col gap-1 px-3 py-3 text-ink sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <span className="text-sm text-ink-soft">{social.label}</span>
                  <span className="font-display text-lg font-medium sm:text-right">
                    {social.value}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
