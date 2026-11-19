import { useState } from "react";
import { contact, contactSection } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { GithubIcon } from "./GithubIcon";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="bg-[#2447f9] px-5 py-24 text-white md:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1312px]">
        <p className="kicker text-white/60">{contactSection.kicker}</p>
        <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <h2 className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            {contactSection.heading}
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="group grid h-32 w-32 shrink-0 place-items-center self-end rounded-full bg-[#ffdf48] text-[#171714] transition hover:scale-105 lg:h-40 lg:w-40"
          >
            <span className="flex flex-col items-center text-sm font-bold">
              {contactSection.sayHello} <Arrow diagonal />
            </span>
          </a>
        </div>
        <div className="mt-20 grid gap-5 border-t border-white/25 pt-7 md:grid-cols-3">
          <button onClick={copyEmail} className="group flex items-center justify-between text-left">
            <span>
              <span className="mb-1 block text-xs uppercase tracking-widest text-white/50">
                {contactSection.emailLabel}
              </span>
              {copied ? contactSection.copySuccess : contact.email}
            </span>
            <span className="opacity-60 transition group-hover:opacity-100">
              {contactSection.copyLabel}
            </span>
          </button>
          <a
            className="group flex items-center justify-between md:justify-center"
            href={contact.phoneHref}
          >
            <span>
              <span className="mb-1 block text-xs uppercase tracking-widest text-white/50">
                {contactSection.phoneLabel}
              </span>
              {contact.phone}
            </span>
          </a>
          <a
            className="group flex items-center justify-between md:justify-end"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <span className="mb-1 block text-xs uppercase tracking-widest text-white/50">
                {contactSection.githubLabel}
              </span>
              {contactSection.githubName}
            </span>
            <GithubIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
