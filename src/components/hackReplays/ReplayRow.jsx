function ReplayRow({ replay }) {
  return (
    <a
      href="#research"
      className="group grid grid-cols-[26px_minmax(0,1fr)_auto] items-start gap-2 border-b border-border py-3 last:border-b-0 sm:grid-cols-[30px_minmax(0,1fr)_auto] sm:items-center"
    >
      <span className="text-[10px] text-muted">#{replay.id}</span>

      <span className="wrap-break-word text-xs leading-5 text-primary-text transition-colors group-hover:text-accent">
        {replay.title}
      </span>

      <span className="whitespace-nowrap text-[9px] text-muted sm:text-[10px]">
        {replay.date}
      </span>
    </a>
  );
}

export default ReplayRow;
