import { projects, workSection } from "../data/portfolio";

export function WorkSection() {
  return (
    <section
      id="work"
      className="bg-[#171714] px-5 py-24 text-[#f4f0e8] md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1312px]">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-white/20 pb-8 md:flex-row md:items-end">
          <div>
            <p className="kicker text-[#8fa2ff]">{workSection.kicker}</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              {workSection.heading}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-white/55">
            {workSection.description}
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.title} className={`project-panel ${project.accent}`}>
              <div className="flex items-start justify-between">
                <span className="project-number">{project.number}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] opacity-60">
                  {project.eyebrow}
                </span>
              </div>
              <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <h3 className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                    {project.title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-xl leading-relaxed tracking-tight opacity-80">
                    {project.description}
                  </p>
                </div>
                <div className="lg:border-l lg:border-current/20 lg:pl-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest opacity-50">
                    {workSection.contributionLabel}
                  </p>
                  <p className="leading-relaxed opacity-80">{project.contribution}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span className="tech-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {project.image && (
                <div className="mt-12 overflow-hidden rounded-2xl border border-[#171714]/15 bg-[#171714]/10 shadow-[0_20px_50px_-15px_rgba(23,23,20,0.28)]">
                  <img
                    className="aspect-[16/7.8] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.015]"
                    src={project.image}
                    alt={project.imageAlt}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
