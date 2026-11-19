import { credentialsSection } from "../data/portfolio";

export function CredentialsSection() {
  const { education, certification } = credentialsSection;

  return (
    <section
      id="credentials"
      className="border-y border-black/15 bg-[#e8e1d5] px-5 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1312px]">
        <p className="kicker text-[#2447f9]">{credentialsSection.kicker}</p>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="credential-card">
            <span className="credential-label">{education.label}</span>
            <div>
              <h3>{education.title}</h3>
              <p>{education.institution}</p>
              <p className="mt-5 text-sm opacity-60">{education.details}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.subjects.map((item) => (
                <span
                  className="rounded-full border border-black/20 px-3 py-1.5 text-xs"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="credential-card bg-[#ff6b4a]! text-[#171714]">
            <span className="credential-label">{certification.label}</span>
            <div>
              <h3>{certification.title}</h3>
              <p>{certification.subtitle}</p>
            </div>
            <div className="flex items-end justify-between">
              <span className="font-semibold">{certification.institution}</span>
              <span className="font-serif text-5xl italic">{certification.mark}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
