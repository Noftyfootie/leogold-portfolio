import FeaturedReplay from ".././components/hackReplays/FeaturedReplay";
import ReplayRow from ".././components/hackReplays/ReplayRow";
import replays from "../data/replays";

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
          className="shrink-0 text-[10px] text-muted! transition-colors hover:text-accent!"
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
