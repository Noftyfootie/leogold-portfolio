const footerGroups = [
  {
    title: "// leogold",
    links: [
      { label: "/findings", href: "#findings", active: true },
      { label: "/research", href: "#research" },
      { label: "/0day", href: "#zero-day" },
      { label: "/about", href: "#about" },
    ],
  },
  {
    title: "// elsewhere",
    links: [
      { label: "twitter", href: "https://x.com/" },
      { label: "github", href: "https://github.com/" },
      { label: "code4rena", href: "https://code4rena.com/" },
      { label: "solodit", href: "https://solodit.cyfrin.io/" },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t border-border px-5 pt-6 pb-5 sm:px-8">
      {/* Three-column footer navigation */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-3 text-[10px] tracking-wide text-muted">
              {group.title}
            </h2>

            <ul className="space-y-1">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("https://")
                        ? "noreferrer"
                        : undefined
                    }
                    className={`text-[11px] transition-colors hover:text-accent! ${
                      link.active ? "text-accent!" : "text-muted!"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h2 className="mb-3 text-[10px] tracking-wide text-muted">
            // contact
          </h2>

          <ul className="space-y-1 text-[11px] text-muted">
            <li>
              <a
                href="mailto:audits@leogold.xyz"
                className="transition-colors hover:text-accent!"
              >
                audits@leogold.xyz
              </a>
            </li>
            <li>signal · on request</li>
          </ul>
        </div>
      </div>

      {/* Bottom divider and copyright row */}
      <div className="mt-6 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] text-muted">
          leogold/findings · {new Date().getFullYear()}
        </p>

        <a
          href="#home"
          className="text-[10px] text-muted! transition-colors hover:text-accent!"
        >
          view source ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;

function Danm() {
  const fail = 23;
  const pass = 77;
}

function today() {
  const sarturday = 8;
  const response = 0;
}

function Name1() {
  const first = Nofisat;
}
