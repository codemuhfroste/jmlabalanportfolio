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
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-rule px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="grid gap-12 sm:grid-cols-[1fr_2fr]">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-accent uppercase">
            <Leaf className="h-4 w-4" />
            04 / Contact
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-display text-3xl leading-snug text-ink sm:text-4xl">
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
                className="group flex items-center justify-between border-b border-rule py-3 text-ink transition-colors hover:text-accent"
              >
                <span className="text-sm text-ink-soft">{social.label}</span>
                <span className="font-display text-lg">
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
