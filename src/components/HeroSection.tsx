import { profile } from "../data/portfolio";
import { Arrow } from "./Arrow";

export function HeroSection() {
  const { hero } = profile;

  return (
    <section className="relative mx-auto flex min-h-[780px] max-w-[1360px] items-center px-5 pb-20 pt-32 md:px-10 lg:min-h-screen lg:px-16">
      {/* Subtle ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2447f9]/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-[#ff6b4a]/10 blur-3xl"
      />

      <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
        {/* Left Column: Intro, Bio, Actions, Status Box */}
        <div>
          <h1 className="font-serif text-[clamp(3.3rem,5.8vw,5.75rem)] font-normal leading-[0.95] tracking-[-0.025em] text-[#171714]">
            <span className="block">{hero.heading.firstLine}</span>
            <span className="mt-1 block italic text-[#2447f9]">{hero.heading.secondLine}</span>
          </h1>

          <p className="mt-7 max-w-[600px] text-base leading-[1.7] text-[#171714]/70 sm:text-lg">
            {hero.summary.lead}
            <strong className="font-semibold text-[#171714]">{hero.summary.techStack}</strong>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href={hero.actions.primary.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#2447f9] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(36,71,249,0.55)] transition hover:-translate-y-0.5 hover:bg-[#171714]"
            >
              <span>{hero.actions.primary.label}</span>
              <span className="transition-transform group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </a>

            <a
              href={hero.actions.resume.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#171714]/15 bg-[#fbf9f5] px-6 py-3.5 text-sm font-semibold text-[#171714] shadow-2xs transition hover:-translate-y-0.5 hover:border-[#171714]/35 hover:bg-white"
            >
              <span>{hero.actions.resume.label}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-[#171714]/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            <a
              href={hero.actions.secondary.href}
              className="inline-flex items-center rounded-full border border-[#171714]/15 bg-[#fbf9f5] px-6 py-3.5 text-sm font-semibold text-[#171714] shadow-2xs transition hover:-translate-y-0.5 hover:border-[#171714]/35 hover:bg-white"
            >
              <span>{hero.actions.secondary.label}</span>
            </a>
          </div>

          <div className="mt-11 max-w-[600px] rounded-2xl border border-[#171714]/12 bg-[#fbf9f5]/85 p-5 shadow-2xs backdrop-blur-xs sm:px-6 sm:py-5">
            <div className="grid gap-5 sm:grid-cols-[1.35fr_1fr] sm:gap-6">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#171714]/50">
                  {hero.availabilityLabel}
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#228b54] ring-4 ring-[#228b54]/15" />
                  <p className="text-sm font-semibold leading-snug text-[#171714]">
                    {hero.availability}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#171714]/10 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#171714]/50">
                  {hero.locationLabel}
                </span>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#171714]">
                  {hero.location[0]}
                  <br />
                  {hero.location[1]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tilted Field Note Portrait Card */}
        <div className="mx-auto w-full max-w-[420px] lg:mr-0">
          <div className="group relative">
            {/* Offset backing card */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -rotate-2 rounded-[1.85rem] border border-[#171714]/10 bg-[#e6dfd2] transition-transform duration-500 group-hover:-rotate-3"
            />

            {/* Foreground card */}
            <div className="relative rotate-2 rounded-[1.85rem] border border-[#171714]/10 bg-[#fbf9f5] p-5 shadow-[0_24px_60px_-15px_rgba(23,23,20,0.14)] transition-transform duration-500 group-hover:rotate-1 sm:p-6">
              <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#171714]/55">
                <span>{hero.card.noteLabel}</span>
                <span className="h-px flex-1 bg-[#171714]/12" />
                <span>{hero.card.year}</span>
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#171714]/10 bg-[#efece4] shadow-inner">
                {hero.card.portraitUrl ? (
                  <img
                    src={hero.card.portraitUrl}
                    alt={hero.card.portraitAlt}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-end p-6 text-center">
                    {/* Studio portrait silhouette & monogram placeholder */}
                    <div className="mb-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/10 font-serif text-4xl italic text-[#f4f0e8] shadow-inner backdrop-blur-xs">
                      {profile.initials}
                    </div>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 240 180"
                      className="w-56 text-[#141518] opacity-90"
                      fill="currentColor"
                    >
                      <path d="M120 18c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44zm0 104c48.6 0 88 26.9 88 60H32c0-33.1 39.4-60 88-60z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-serif text-2xl leading-none tracking-tight text-[#2447f9]">
                    {hero.card.name}
                  </p>
                  <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#171714]/55">
                    {hero.card.role}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#2447f9]/10 px-3.5 py-1.5 font-serif text-sm italic text-[#2447f9]">
                  {hero.card.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
