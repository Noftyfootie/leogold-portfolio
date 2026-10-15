const replays = [
  {
    id: "04",
    title: "euler finance: how $197m vanished in a flash",
    description:
      "A Foundry-based replay of the donation attack, with the exploit primitive isolated and exercised against a minimal mock.",
    date: "feb 2026",
    readTime: "14 min read",
    featured: true,
  },
  {
    id: "03",
    title: "ronin bridge: validator compromise replayed",
    date: "jan 2026",
  },
  {
    id: "02",
    title: "nomad: the empty-bytes32 trust assumption",
    date: "dec 2025",
  },
  {
    id: "01",
    title: "beanstalk: governance flash-loan takeover",
    date: "nov 2025",
  },
];

function ExploitTimeline() {
  const steps = [
    { label: "flash loan", position: "35%" },
    { label: "donate()", position: "65%" },
  ];

  return (
    <div
      aria-label="Exploit sequence: attacker, flash loan, donate, drain"
      className="relative flex h-[118px] items-center border-b border-border px-6 sm:px-10"
    >
      <div className="absolute right-10 left-10 top-1/2 h-px bg-border sm:right-16 sm:left-16" />

      <div className="absolute left-10 top-1/2 size-2 -translate-y-1/2 rounded-full border border-muted bg-surface sm:left-16" />

      {steps.map((step) => (
        <div
          key={step.label}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ left: step.position }}
        >
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-accent sm:text-[10px]">
            {step.label}
          </span>

          <span className="block size-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(245,196,0,0.2)]" />
        </div>
      ))}

      <div className="absolute right-10 top-1/2 size-2 -translate-y-1/2 rounded-full border border-muted bg-surface sm:right-16" />

      <span className="absolute bottom-7 left-10 text-[9px] text-muted sm:left-16">
        attacker
      </span>

      <span className="absolute right-10 bottom-7 text-[9px] text-muted sm:right-16">
        drain
      </span>
    </div>
  );
}

function FeaturedReplay({ replay }) {
  return (
    <article className="border border-border">
      <ExploitTimeline />

      <div className="p-4 sm:p-5">
        <h3 className="text-sm leading-6 font-medium text-primary-text sm:text-base">
          {replay.title}
        </h3>

        <p className="mt-1 text-[11px] leading-5 text-muted">
          {replay.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[10px] text-muted">
            replay #{replay.id} · {replay.date} · {replay.readTime}
          </p>

          <a
            href="#research"
            className="text-[10px] text-accent transition-opacity hover:opacity-70"
          >
            read replay →
          </a>
        </div>
      </div>
    </article>
  );
}

function ReplayRow({ replay }) {
  return (
    <a
      href="#research"
      className="group grid grid-cols-[26px_minmax(0,1fr)_auto] items-start gap-2 border-b border-border py-3 last:border-b-0 sm:grid-cols-[30px_minmax(0,1fr)_auto] sm:items-center"
    >
      <span className="text-[10px] text-muted">#{replay.id}</span>

      <span className="break-words text-xs leading-5 text-primary-text transition-colors group-hover:text-accent">
        {replay.title}
      </span>

      <span className="whitespace-nowrap text-[9px] text-muted sm:text-[10px]">
        {replay.date}
      </span>
    </a>
  );
}

function HackReplays() {
  const featuredReplay = replays.find((replay) => replay.featured);
  const otherReplays = replays.filter((replay) => !replay.featured);

  return (
    <section
      id="research"
      aria-labelledby="replays-heading"
      className="border-b border-border px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2
          id="replays-heading"
          className="text-[11px] font-normal tracking-wide text-muted"
        >
          // hack replays
        </h2>

        <a
          href="#research"
          className="shrink-0 text-[10px] text-muted transition-colors hover:text-accent"
        >
          view all →
        </a>
      </div>

      {featuredReplay && <FeaturedReplay replay={featuredReplay} />}

      <div className="mt-4">
        {otherReplays.map((replay) => (
          <ReplayRow key={replay.id} replay={replay} />
        ))}
      </div>
    </section>
  );
}

export default HackReplays;
