import { useEffect, useRef, useState } from "react";
import { projects, workSection } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { GithubIcon } from "./GithubIcon";

type Project = (typeof projects)[number];

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
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
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 opacity-70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function WorkSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const drawerScrollRef = useRef<HTMLDivElement | null>(null);

  const activeProject: Project | null =
    activeIndex !== null && projects[activeIndex] ? projects[activeIndex] : null;
  const isBlueAccent = activeProject?.accent === "blue";

  const openCaseStudy = (index: number) => {
    setActiveIndex(index);
    const project = projects[index];
    if (project && typeof window !== "undefined") {
      window.history.replaceState(null, "", `#case-study-${project.slug}`);
    }
  };

  const closeCaseStudy = () => {
    setActiveIndex(null);
    if (typeof window !== "undefined" && window.location.hash.startsWith("#case-study-")) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#work`,
      );
    }
  };

  // Open automatically if loaded with #case-study-<slug>
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#case-study-")) {
        const slug = hash.replace("#case-study-", "");
        const idx = projects.findIndex((p) => p.slug === slug);
        if (idx !== -1) {
          setActiveIndex(idx);
        }
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // Lock body scroll & listen for Escape when modal is open
  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCaseStudy();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const handleShareLink = async (project: Project) => {
    const url = `${window.location.origin}${window.location.pathname}#case-study-${project.slug}`;
    await navigator.clipboard.writeText(url);
    setCopiedSlug(project.slug);
    window.setTimeout(() => setCopiedSlug(null), 1800);
  };

  const totalProjects = String(projects.length).padStart(2, "0");
  const prevIndex =
    activeIndex !== null ? (activeIndex - 1 + projects.length) % projects.length : 0;
  const nextIndex = activeIndex !== null ? (activeIndex + 1) % projects.length : 0;

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
          {projects.map((project, index) => (
            <article key={project.title} className={`project-panel ${project.accent}`}>
              <div className="flex items-start justify-between">
                <span className="project-number">{project.number}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] opacity-60">
                  {project.eyebrow}
                </span>
              </div>

              <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <h3>
                    <button
                      type="button"
                      onClick={() => openCaseStudy(index)}
                      className="cursor-pointer text-left text-5xl font-semibold tracking-[-0.06em] transition hover:opacity-80 sm:text-7xl lg:text-8xl"
                    >
                      {project.title}
                    </button>
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

              {/* Project Footer Actions: Mini case study, Live demo, GitHub repository */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#171714]/15 pt-7">
                <button
                  type="button"
                  onClick={() => openCaseStudy(index)}
                  className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#171714] px-6 py-3.5 text-sm font-semibold text-[#f4f0e8] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#171714]/85"
                >
                  <span>{workSection.actions.caseStudy}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    <Arrow />
                  </span>
                </button>

                <div className="flex flex-wrap items-center gap-3">
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#171714]/25 bg-[#f4f0e8]/90 px-5 py-3 text-sm font-semibold text-[#171714] transition hover:-translate-y-0.5 hover:border-[#171714]/45 hover:bg-[#f4f0e8]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#228b54]" />
                      <span>{workSection.actions.liveDemo}</span>
                      <ExternalLinkIcon />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      title={project.liveDemoDisabledReason}
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-[#171714]/25 bg-[#171714]/8 px-5 py-3 text-sm font-semibold text-[#171714]/65"
                    >
                      <LockIcon />
                      <span>{workSection.actions.liveDemo}</span>
                      {project.liveDemoDisabledBadge && (
                        <span className="rounded-full bg-[#171714]/12 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#171714]/75">
                          {project.liveDemoDisabledBadge}
                        </span>
                      )}
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#171714]/25 bg-transparent px-5 py-3 text-sm font-semibold text-[#171714] transition hover:-translate-y-0.5 hover:border-[#171714]/50 hover:bg-[#171714]/10"
                    >
                      <GithubIcon />
                      <span>{workSection.actions.githubRepo}</span>
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Clickable Project Visual Preview */}
              {project.image && (
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Open mini case study for ${project.title}`}
                  onClick={() => openCaseStudy(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openCaseStudy(index);
                    }
                  }}
                  className="group mt-10 cursor-pointer overflow-hidden rounded-2xl border border-[#171714]/15 bg-[#171714] shadow-[0_22px_55px_-15px_rgba(23,23,20,0.32)]"
                >
                  <div className="flex items-center justify-between border-b border-white/10 bg-[#171714] px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wider text-white/50">
                      {project.title} — Preview
                    </span>
                    <span className="text-[11px] font-semibold text-white/70 transition group-hover:text-[#ffdf48]">
                      {workSection.actions.caseStudy} →
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      className="aspect-[16/7.8] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                      src={project.image}
                      alt={project.imageAlt}
                    />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Mini Case Study Modal Drawer (modeled after adriaansportfolio.vercel.app) */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeCaseStudy();
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171714]/65 p-3 backdrop-blur-xs sm:p-6"
        >
          <aside className="flex max-h-[92vh] w-full max-w-[880px] flex-col overflow-hidden rounded-[2rem] border border-[#171714]/12 bg-[#fbf9f5] text-[#171714] shadow-[0_32px_90px_-20px_rgba(0,0,0,0.55)]">
            {/* Sticky Top Bar */}
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#171714]/10 bg-[#fbf9f5]/95 px-5 py-4 backdrop-blur-xs sm:px-8">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] ${
                    activeProject.accent === "blue"
                      ? "bg-[#2447f9]/12 text-[#2447f9]"
                      : "bg-[#ff8065]/20 text-[#b8371b]"
                  }`}
                >
                  {activeProject.track}
                </span>
                <span className="text-xs font-semibold tracking-[0.15em] text-[#171714]/55">
                  {activeProject.number} / {totalProjects}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleShareLink(activeProject)}
                  aria-label="Copy direct link to this case study"
                  className="cursor-pointer rounded-full border border-[#171714]/15 bg-white px-4 py-2 text-xs font-semibold text-[#171714]/80 transition hover:border-[#171714]/35 hover:text-[#171714]"
                >
                  {copiedSlug === activeProject.slug
                    ? workSection.actions.copiedLink
                    : workSection.actions.shareLink}
                </button>

                <button
                  type="button"
                  onClick={closeCaseStudy}
                  aria-label="Close case study"
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    activeProject.accent === "blue"
                      ? "border-[#2447f9]/20 bg-[#2447f9]/10 text-[#2447f9] hover:bg-[#2447f9] hover:text-white"
                      : "border-[#ff8065]/30 bg-[#ff8065]/18 text-[#b8371b] hover:bg-[#b8371b] hover:text-white"
                  }`}
                >
                  <span>{workSection.actions.close}</span>
                  <span aria-hidden="true">✕</span>
                </button>
              </div>
            </header>

            {/* Scrollable Case Study Content */}
            <div ref={drawerScrollRef} className="overflow-y-auto px-5 py-8 sm:px-10 sm:py-10">
              {/* Hero Block */}
              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-[0.18em] ${
                    activeProject.accent === "blue" ? "text-[#2447f9]" : "text-[#b8371b]"
                  }`}
                >
                  {activeProject.caseStudyEyebrow}
                </p>

                <h2
                  id="case-study-title"
                  className={`mt-3 font-serif text-4xl font-normal tracking-[-0.02em] sm:text-5xl ${
                    activeProject.accent === "blue" ? "text-[#2447f9]" : "text-[#b8371b]"
                  }`}
                >
                  {activeProject.title}
                </h2>

                <p className="mt-4 font-serif text-xl leading-snug text-[#171714]/90 sm:text-2xl">
                  {activeProject.subtitle}
                </p>

                {/* 3-Column Metadata Box (ROLE / CONTEXT / FOCUS AREA) */}
                <div className="mt-7 grid gap-5 rounded-2xl border border-[#171714]/12 bg-[#f4f0e8]/70 p-5 sm:grid-cols-3 sm:gap-6 sm:p-6">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#171714]/50">
                      {workSection.caseStudyLabels.role}
                    </span>
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-[#171714]">
                      {activeProject.caseStudy.meta.role}
                    </p>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#171714]/50">
                      {workSection.caseStudyLabels.context}
                    </span>
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-[#171714]">
                      {activeProject.caseStudy.meta.context}
                    </p>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#171714]/50">
                      {workSection.caseStudyLabels.focusArea}
                    </span>
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-[#171714]">
                      {activeProject.caseStudy.meta.focusArea}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons Row */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {activeProject.liveDemoUrl ? (
                    <a
                      href={activeProject.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 ${
                        isBlueAccent
                          ? "bg-[#2447f9] hover:bg-[#171714]"
                          : "bg-[#b8371b] hover:bg-[#171714]"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
                      <span>{workSection.actions.liveDemo}</span>
                      <ExternalLinkIcon />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      title={activeProject.liveDemoDisabledReason}
                      className="inline-flex cursor-not-allowed items-center gap-2.5 rounded-full border border-dashed border-[#171714]/20 bg-[#f4f0e8] px-5 py-3 text-sm font-semibold text-[#171714]/55"
                    >
                      <LockIcon />
                      <span>{workSection.actions.liveDemo}</span>
                      {activeProject.liveDemoDisabledBadge && (
                        <span className="rounded-full bg-[#171714]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#171714]/70">
                          {activeProject.liveDemoDisabledBadge}
                        </span>
                      )}
                    </button>
                  )}

                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-full border border-[#171714]/20 bg-white px-6 py-3 text-sm font-semibold text-[#171714] transition hover:-translate-y-0.5 hover:border-[#171714]/40"
                    >
                      <GithubIcon />
                      <span>{workSection.actions.githubRepo}</span>
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              <hr className="my-8 border-[#171714]/12" />

              {/* 3-Column Case Study Highlights / Metrics Grid */}
              <div aria-label="Case study highlights" className="grid gap-4 sm:grid-cols-3">
                {activeProject.caseStudy.metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="rounded-2xl border border-[#171714]/12 bg-[#f4f0e8]/65 p-5"
                  >
                    <strong
                      className={`block font-serif text-3xl font-normal tracking-tight sm:text-4xl ${
                        activeProject.accent === "blue" ? "text-[#2447f9]" : "text-[#b8371b]"
                      }`}
                    >
                      {metric.value}
                    </strong>
                    <span className="mt-2 block text-xs leading-relaxed text-[#171714]/70 sm:text-sm">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Project Screenshot inside Modal */}
              {activeProject.image && (
                <div className="mt-8 overflow-hidden rounded-2xl border border-[#171714]/12 bg-[#171714] shadow-md">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-[11px] font-medium text-white/50">
                      {activeProject.title}
                    </span>
                  </div>
                  <img
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    className="aspect-[16/7.8] w-full object-cover object-top"
                  />
                </div>
              )}

              {/* 4 Numbered Narrative Sections */}
              <div className="mt-10 space-y-10">
                {activeProject.caseStudy.sections.map((section) => (
                  <section
                    key={section.number}
                    className="border-t border-[#171714]/10 pt-8 first:border-t-0 first:pt-0"
                  >
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.18em] ${
                        activeProject.accent === "blue" ? "text-[#2447f9]" : "text-[#b8371b]"
                      }`}
                    >
                      {section.eyebrow}
                    </p>
                    <h3 className="mt-2.5 font-serif text-2xl font-normal leading-snug text-[#171714] sm:text-3xl">
                      {section.heading}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#171714]/80">
                      {section.body}
                    </p>
                    {section.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm leading-relaxed text-[#171714]/80 sm:text-base"
                          >
                            <span
                              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                                activeProject.accent === "blue" ? "bg-[#2447f9]" : "bg-[#b8371b]"
                              }`}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Tools & Technologies Block */}
              <div className="mt-10 border-t border-[#171714]/12 pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#171714]/55">
                  {workSection.caseStudyLabels.toolsUsed}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeProject.caseStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#171714]/18 bg-[#f4f0e8] px-3.5 py-1.5 text-xs font-semibold text-[#171714]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Takeaway Callout Card */}
              <aside
                className={`mt-8 rounded-2xl border p-6 sm:p-7 ${
                  activeProject.accent === "blue"
                    ? "border-[#2447f9]/20 bg-[#2447f9]/8"
                    : "border-[#ff8065]/35 bg-[#ff8065]/15"
                }`}
              >
                <span
                  className={`block text-[11px] font-bold uppercase tracking-[0.16em] ${
                    activeProject.accent === "blue" ? "text-[#2447f9]" : "text-[#b8371b]"
                  }`}
                >
                  {workSection.caseStudyLabels.keyTakeaway}
                </span>
                <strong className="mt-2 block font-serif text-xl font-normal italic leading-relaxed text-[#171714] sm:text-2xl">
                  &ldquo;{activeProject.caseStudy.takeaway}&rdquo;
                </strong>
              </aside>

              {/* Footer Case Study Navigation */}
              {projects.length > 1 && (
                <nav
                  aria-label="Other case studies"
                  className="mt-10 grid gap-4 border-t border-[#171714]/12 pt-8 sm:grid-cols-2"
                >
                  <button
                    type="button"
                    onClick={() => openCaseStudy(prevIndex)}
                    className="cursor-pointer rounded-2xl border border-[#171714]/12 bg-[#f4f0e8]/75 p-5 text-left transition hover:border-[#171714]/30 hover:bg-[#f4f0e8]"
                  >
                    <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#171714]/50">
                      ← {workSection.actions.previousCaseStudy}
                    </span>
                    <span className="mt-1.5 block font-serif text-2xl text-[#171714]">
                      {projects[prevIndex].title}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#171714]/60">
                      {projects[prevIndex].eyebrow}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => openCaseStudy(nextIndex)}
                    className="cursor-pointer rounded-2xl border border-[#171714]/12 bg-[#f4f0e8]/75 p-5 text-left transition hover:border-[#171714]/30 hover:bg-[#f4f0e8] sm:text-right"
                  >
                    <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#171714]/50">
                      {workSection.actions.nextCaseStudy} →
                    </span>
                    <span className="mt-1.5 block font-serif text-2xl text-[#171714]">
                      {projects[nextIndex].title}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#171714]/60">
                      {projects[nextIndex].eyebrow}
                    </span>
                  </button>
                </nav>
              )}
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
