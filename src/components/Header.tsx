import { useState } from "react";
import { contact, navigationItems, profile, uiText } from "../data/portfolio";
import { Arrow } from "./Arrow";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-[#f4f0e8]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
        <a
          href="#top"
          className="group flex items-center gap-3 font-semibold tracking-tight"
          aria-label={uiText.home}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2447f9] text-sm text-white transition-transform group-hover:rotate-12">
            {profile.initials}
          </span>
          <span className="hidden sm:block">{profile.name}</span>
        </a>
        <nav
          className="hidden items-center gap-8 text-sm font-medium md:flex"
          aria-label={uiText.mainNavigation}
        >
          {navigationItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a className="contact-pill" href={`mailto:${contact.email}`}>
            {contact.cta} <Arrow diagonal />
          </a>
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-black/20 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={uiText.toggleMenu}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-1 h-px w-5 bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-1 left-0 h-px w-5 bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-black/15 bg-[#f4f0e8] px-5 py-6 md:hidden">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              onClick={closeMenu}
              href={item.href}
              className="block border-b border-black/10 py-4 text-3xl capitalize"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
