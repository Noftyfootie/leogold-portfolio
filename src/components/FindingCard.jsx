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

export default FindingCard;
