import Leaf from "@/components/icons/Leaf";

const links = [
  { href: "#about", label: "About" },
  { href: "#credentials", label: "Credentials" },
  { href: "#events", label: "Events" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-white">
            <Leaf className="h-4 w-4" />
          </span>
          Labalan
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-ink-soft sm:flex">
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
          className="hidden rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm shadow-accent/30 transition-transform hover:-translate-y-0.5 sm:inline-block"
        >
          Say hello
        </a>
      </div>
    </header>
  );
}
