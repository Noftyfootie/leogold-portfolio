import ExploitTimeline from "./ExploitTimeline";
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
            className="text-[10px] text-accent! transition-opacity hover:opacity-70"
          >
            read replay →
          </a>
        </div>
      </div>
    </article>
  );
}

export default FeaturedReplay;
