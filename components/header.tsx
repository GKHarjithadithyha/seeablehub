"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Brand } from "@/components/brand";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<"services" | null>(null);
  const root = useRef<HTMLElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileServices(false);
    setMobileIndustries(false);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        setDesktopMenu(null);
        if (mobileOpen) mobileToggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [closeMobileMenu, mobileOpen]);
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);
  useEffect(() => {
    const closeOutside = (event: MouseEvent) => {
      if (root.current && !root.current.contains(event.target as Node)) setDesktopMenu(null);
    };
    document.addEventListener("mousedown", closeOutside);
    return () => document.removeEventListener("mousedown", closeOutside);
  }, []);

  const active = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(path));
  return (
    <header className="site-header" ref={root}>
      <div className="header-inner wrap">
        <Brand priority />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className={active("/") ? "nav-active" : ""} href="/">
            Home
          </Link>
          <Link className={active("/about") ? "nav-active" : ""} href="/about">
            About
          </Link>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDesktopMenu("services")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <button
              aria-expanded={desktopMenu === "services"}
              onClick={() => setDesktopMenu(desktopMenu === "services" ? null : "services")}
            >
              Services <ChevronDown size={14} />
            </button>
            {desktopMenu === "services" && (
              <div className="mega-menu">
                <div className="mega-intro">
                  <span className="eyebrow">EXPLORE OUR SERVICES</span>
                  <p>Technology solutions designed around your business.</p>
                  <Link href="/services">
                    All capabilities <ArrowUpRight size={15} />
                  </Link>
                </div>
                <div>
                  <span className="mega-label">DIGITAL EXPERIENCES</span>
                  {[services[0], services[4], services[6], services[5]].map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}`}>
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div>
                  <span className="mega-label">INTELLIGENT TECHNOLOGY</span>
                  {[services[1], services[2], services[3], services[7]].map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}`}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link className={active("/solutions") ? "nav-active" : ""} href="/solutions">
            Solutions
          </Link>
          <Link className={active("/industries") ? "nav-active" : ""} href="/industries">
            Industries
          </Link>
          <Link className={active("/work") ? "nav-active" : ""} href="/work">
            Our Work
          </Link>
          <Link className={active("/resources") ? "nav-active" : ""} href="/resources">
            Resources
          </Link>
        </nav>
        <Link className="button button-primary header-cta" href="/contact">
          Get a Quote <ArrowUpRight size={16} />
        </Link>
        <button
          ref={mobileToggle}
          className="mobile-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        data-state={mobileOpen ? "open" : "closed"}
        inert={!mobileOpen}
      >
        <div className="mobile-nav-links">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <button
            className="mobile-expand"
            aria-expanded={mobileServices}
            aria-controls="mobile-services-links"
            onClick={() => setMobileServices(!mobileServices)}
          >
            Services <ChevronDown size={16} />
          </button>
          {mobileServices && (
            <div
              className="mobile-subnav"
              id="mobile-services-links"
              role="group"
              aria-label="Service links"
            >
              <Link
                href="/services"
                aria-current={pathname === "/services" ? "page" : undefined}
                onClick={closeMobileMenu}
              >
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  aria-current={pathname === `/services/${service.slug}` ? "page" : undefined}
                  onClick={closeMobileMenu}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/solutions"
            aria-current={pathname === "/solutions" ? "page" : undefined}
            onClick={closeMobileMenu}
          >
            Solutions
          </Link>
          <button
            className="mobile-expand"
            aria-expanded={mobileIndustries}
            aria-controls="mobile-industries-links"
            onClick={() => setMobileIndustries(!mobileIndustries)}
          >
            Industries <ChevronDown size={16} />
          </button>
          {mobileIndustries && (
            <div
              className="mobile-subnav"
              id="mobile-industries-links"
              role="group"
              aria-label="Industry links"
            >
              <Link href="/industries" onClick={closeMobileMenu}>
                All Industries
              </Link>
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries#${industry.slug}`}
                  onClick={closeMobileMenu}
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/work"
            aria-current={pathname === "/work" ? "page" : undefined}
            onClick={closeMobileMenu}
          >
            Our Work
          </Link>
          <Link
            href="/resources"
            aria-current={pathname === "/resources" ? "page" : undefined}
            onClick={closeMobileMenu}
          >
            Resources
          </Link>
          <Link
            href="/faq"
            aria-current={pathname === "/faq" ? "page" : undefined}
            onClick={closeMobileMenu}
          >
            FAQ
          </Link>
        </div>
        <Link
          className="button button-primary mobile-cta"
          href="/contact"
          onClick={closeMobileMenu}
        >
          Start a Project <ArrowUpRight size={16} />
        </Link>
      </nav>
    </header>
  );
}
