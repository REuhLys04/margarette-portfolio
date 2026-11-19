import { aboutSection, skillGroups } from "../data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="kicker text-[#2447f9]">{aboutSection.kicker}</p>
          <div className="mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#2447f9] p-8 text-[#f4f0e8]">
            <div className="flex h-full flex-col justify-between">
              <span className="font-serif text-6xl italic">{aboutSection.quoteMark}</span>
              <p className="text-2xl font-medium leading-snug tracking-tight">
                {aboutSection.quote}
              </p>
              <div className="h-px bg-white/30" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            {aboutSection.headingBefore}{" "}
            <span className="font-serif italic text-[#ff6b4a]">{aboutSection.headingAccent}</span>{" "}
            {aboutSection.headingAfter}
          </h2>
          <p className="mt-9 max-w-3xl text-lg leading-relaxed text-black/65 md:text-xl">
            {aboutSection.description}
          </p>
          <div className="mt-14 border-t border-black/20">
            {skillGroups.map(([label, value], index) => (
              <div
                className="grid gap-2 border-b border-black/15 py-5 sm:grid-cols-[180px_1fr]"
                key={label}
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <span className="text-black/35">0{index + 1}</span>
                  {label}
                </span>
                <span className="text-base text-black/65">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
