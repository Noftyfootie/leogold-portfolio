import FindingCard from ".././components/FindingCard";
import findings from "../data/findings";

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
