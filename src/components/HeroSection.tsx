import { profile } from "../data/portfolio";
import { Arrow } from "./Arrow";

export function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-center px-5 pb-16 pt-32 md:px-10 lg:min-h-screen lg:px-16">
      <div className="absolute right-[7%] top-32 hidden h-24 w-24 animate-spin-slow rounded-full border border-dashed border-black/40 lg:block" />
      <div className="mb-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] md:text-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b4a]" />
        {profile.hero.kicker}
      </div>
      <h1 className="max-w-[1240px] text-[clamp(4.2rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
        {profile.hero.heading.before}
        <span className="ml-[0.12em] inline-block font-serif font-normal italic text-[#2447f9]">
          {profile.hero.heading.accent}
        </span>
        <br />
        {profile.hero.heading.after}
      </h1>
      <div className="mt-12 grid gap-8 border-t border-black/20 pt-7 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.45fr_0.8fr_0.8fr]">
        <p className="max-w-xl text-xl leading-relaxed tracking-tight md:text-2xl">
          {profile.hero.summary}
        </p>
        <div className="text-sm leading-relaxed text-black/60">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-black">
            {profile.hero.locationLabel}
          </span>
          {profile.hero.location[0]}
          <br />
          {profile.hero.location[1]}
        </div>
        <a
          href="#work"
          className="group flex items-start justify-between gap-4 text-sm font-semibold lg:justify-end"
        >
          <span>{profile.hero.cta}</span>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#171714] text-white transition-transform group-hover:translate-y-1">
            <Arrow />
          </span>
        </a>
      </div>
    </section>
  );
}
