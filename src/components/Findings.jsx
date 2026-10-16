const findings = [
  {
    id: 1,
    severity: "high",
    title: "reentrancy in fee collection path",
    protocol: "zoroswap/v3",
    platform: "sherlock contest",
    date: "jan 2026",
  },
  {
    id: 2,
    severity: "high",
    title: "auth bypass via header injection",
    protocol: "protocol api",
    platform: "private engagement",
    date: "dec 2025",
  },
  {
    id: 3,
    severity: "med",
    title: "unchecked external call in vault.withdraw",
    protocol: "code4rena",
    platform: "",
    date: "nov 2025",
  },
];

function FindingCard({ finding }) {
  const severityColor =
    finding.severity === "high" ? "text-accent" : "text-muted";

  return (
    <a
      href="#contact"
      className="group grid grid-cols-[40px_minmax(0,1fr)_12px] items-center gap-3 border border-border px-4 py-3 transition-colors hover:border-accent/50 sm:grid-cols-[52px_minmax(0,1fr)_12px]"
    >
      <span className={`text-[10px] ${severityColor}`}>{finding.severity}</span>

      <span className="min-w-0">
        <span className="block wrap-break-word text-xs leading-5 text-primary-text transition-colors group-hover:text-accent sm:text-[13px]">
          {finding.title}
        </span>

        <span className="mt-0.5 block text-[10px] leading-4 text-muted">
          {[finding.protocol, finding.platform, finding.date]
            .filter(Boolean)
            .join(" · ")}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="text-xs text-muted transition-colors group-hover:text-accent"
      >
        →
      </span>
    </a>
  );
}

function Findings() {
  return (
    <section
      id="findings"
      aria-labelledby="findings-heading"
      className="border-b border-border px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2
          id="findings-heading"
          className="text-[11px] font-normal tracking-wide text-muted"
        >
          // recent findings
        </h2>

        <a
          href="#findings"
          className="shrink-0 text-[10px] text-muted! transition-colors hover:text-accent!"
        >
          view all →
        </a>
      </div>

      <div className="space-y-2">
        {findings.map((finding) => (
          <FindingCard key={finding.id} finding={finding} />
        ))}
      </div>
    </section>
  );
}

export default Findings;
