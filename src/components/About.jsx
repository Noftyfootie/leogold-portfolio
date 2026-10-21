const specialties = [
  "Solidity & EVM internals",
  "DeFi protocol security",
  "Smart contract auditing",
  "Exploit PoCs with Foundry",
  "Web & API penetration testing",
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border px-5 py-8 sm:px-8 sm:py-10"
    >
      <h2
        id="about-heading"
        className="mb-5 text-[11px] font-normal tracking-wide text-muted"
      >
        // who
      </h2>

      <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:gap-10">
        <div>
          <h3 className="max-w-md text-lg leading-7 font-normal sm:text-xl">
            Security is not a checklist.{" "}
            <span className="text-accent">It's an adversarial mindset.</span>
          </h3>

          <p className="mt-3 text-xs leading-6 text-muted">
            Four years deep in offensive security. Now focused on web3 protocols
            and the apis around them. Every finding published, every replay
            public - no quiet wins, no methodology hidden behind nda
          </p>

          {/* <p className="mt-4 text-xs leading-6 text-muted">
            I investigate how protocols fail, trace the assumptions that make
            exploits possible, and build reproducible proof-of-concept tests. My
            focus is on helping teams understand security risks before
            deployment.
          </p>

          <p className="mt-3 text-xs leading-6 text-muted">
            My work prioritizes clear technical explanations, practical
            remediation guidance, and responsible disclosure.
          </p> */}
        </div>

        {/* <div>
          <p className="mb-3 text-[10px] text-muted">// focus areas</p>

          <ul className="space-y-2">
            {specialties.map((specialty) => (
              <li
                key={specialty}
                className="flex items-start gap-2 text-xs leading-5 text-primary-text"
              >
                <span aria-hidden="true" className="text-accent">
                  +
                </span>
                {specialty}
              </li>
            ))}
          </ul>

    
        </div> */}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-4 text-[10px]">
        <p className="text-muted">
          based · <span className="text-primary-text">lagos</span>
        </p>

        <p className="text-muted">
          currently ·{" "}
          <span className="text-primary-text">accepting audits</span>
        </p>
      </div>
    </section>
  );
}

export default About;
