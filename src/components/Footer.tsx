export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-ink-soft sm:flex-row">
        <p>© {new Date().getFullYear()} Jose Manuel G. Labalan.</p>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
