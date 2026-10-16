import { useState } from "react";

const navLinks = [
  { label: "/findings", href: "#findings" },
  { label: "/research", href: "#research" },
  { label: "/0day", href: "#zero-day" },
  { label: "/about", href: "#about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-border">
      <nav
        aria-label="Main navigation"
        className="flex min-h-14 items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a href="#home" className="shrink-0 text-sm font-medium tracking-tight">
          <span className="mr-3 text-accent">[/]</span>
          <span>leogold</span>
          <span className="text-accent">/findings</span>
        </a>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-9 items-center justify-center border border-border text-lg text-primary-text sm:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div className="hidden items-center gap-5 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[15px] transition-colors hover:text-accent! ${
                link.label === "/findings" ? "text-accent!" : "text-muted!"
              }`}
            >
              {link.label}
            </a>
          ))}

          <span className="flex items-center gap-1.5 text-[15px] text-muted">
            <span className="size-1.5 rounded-full bg-green-500" />
            available
          </span>
        </div>
      </nav>

      {/* color and gradient */}

      {menuOpen && (
        <div className="absolute inset-x-0 top-full z-20 border-b border-border bg-background px-4 py-3 shadow-xl sm:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-border py-3 text-xs transition-colors hover:text-accent! ${
                  link.label === "/findings" ? "text-accent!" : "text-muted!"
                }`}
              >
                {link.label}
              </a>
            ))}

            <span className="flex items-center gap-2 py-3 text-xs text-muted">
              <span className="size-1.5 rounded-full bg-green-500" />
              available
            </span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
