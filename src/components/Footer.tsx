import { footer } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-4 bg-[#171714] px-5 py-8 text-sm text-white/55 md:flex-row md:px-10 lg:px-16">
      <span>
        {footer.copyrightMark} {new Date().getFullYear()} {footer.copyrightName}
      </span>
      <span>{footer.message}</span>
    </footer>
  );
}
