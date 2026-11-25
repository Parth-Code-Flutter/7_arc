"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#industries", label: "Industries" },
  { href: "#method", label: "Process" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [clear, setClear] = useState(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      if (!hero) {
        setClear(false);
        return;
      }
      setClear(window.scrollY < hero.offsetHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-bar${clear ? " is-clear" : ""}${open ? " is-menu" : ""}`}>
      <div className="site-bar-inner">
        <a href="#top" className="site-brand" onClick={() => setOpen(false)}>
          <span>7</span>
          7ARC Labs
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="site-cta">
          Start a project
        </a>
        <button
          type="button"
          className="site-menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <nav id="mobile-menu" className="site-drawer" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="site-cta" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>
      ) : null}
    </header>
  );
}
