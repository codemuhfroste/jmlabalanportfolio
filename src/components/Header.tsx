import Leaf from "@/components/icons/Leaf";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-display text-lg tracking-tight text-ink"
        >
          Labalan
          <Leaf className="h-4 w-4 text-accent" />
        </a>
        <nav className="hidden gap-8 text-sm text-ink-soft sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-ink px-4 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent sm:inline-block"
        >
          Say hello
        </a>
      </div>
    </header>
  );
}
