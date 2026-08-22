import Leaf from "@/components/icons/Leaf";

const socials = [
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { label: "GitHub", value: "github.com/yourusername", href: "#" },
  { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "#" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <div className="rounded-3xl border border-rule bg-paper-alt p-8 sm:p-12">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          <Leaf className="h-3.5 w-3.5" />
          06 / Contact
        </p>
        <div className="mt-8 flex flex-col gap-8">
          <p className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl">
            Let&apos;s work together, or just say hello.
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            I&apos;m open to internships, freelance work, and collaboration on
            interesting projects. Reach out through any of the channels
            below.
          </p>

          <div className="flex flex-col gap-3 border-t border-rule pt-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-ink transition-colors hover:bg-accent/5 hover:text-accent"
              >
                <span className="text-sm text-ink-soft">{social.label}</span>
                <span className="font-display text-lg font-medium">
                  {social.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
