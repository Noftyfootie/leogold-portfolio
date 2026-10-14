function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="border-b border-border px-5 py-12 sm:px-8 sm:py-16"
    >
      <p className="mb-6 text-[11px] tracking-wide text-muted">// position</p>

      <h1
        id="hero-heading"
        className="max-w-2xl text-[27px] leading-[1.4] font-normal tracking-tight sm:text-3xl md:text-4xl"
      >
        I find what breaks <span className="text-accent">before</span> the
        protocol ships.
      </h1>

      <p className="mt-5 max-w-xl text-xs leading-[1.9] text-muted sm:text-[13px]">
        Smart contract audits, API and web pentests, and public write-ups of how
        billion-dollar exploits actually happened. Four years in offensive
        security. Every finding on record.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#findings"
          className="inline-flex min-h-9 items-center justify-center border border-accent px-4 py-2 text-[11px] text-accent transition-colors hover:bg-accent hover:text-background"
        >
          [ view findings ↗ ]
        </a>

        <a
          href="mailto:audits@leogold.xyz"
          className="inline-flex min-h-9 items-center justify-center border border-border px-4 py-2 text-[11px] text-primary-text transition-colors hover:border-accent hover:text-accent"
        >
          request audit
        </a>
      </div>
    </section>
  );
}

export default Hero;
