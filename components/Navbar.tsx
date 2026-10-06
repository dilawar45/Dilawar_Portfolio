"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import CVDownloadButton from "./CVDownloadButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI Workflows", href: "#workflows" },
  { label: "Experience", href: "#experience" },
  { label: "Send Message", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090e17]/90 dark:bg-[#090e17]/90 light:bg-white/90 backdrop-blur-md border-b border-[#2dd4bf]/20 py-3 shadow-lg shadow-black/20 light:shadow-slate-200/50"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 text-xs font-semibold text-[#2dd4bf] transition-transform group-hover:scale-105">
            DA
          </span>
          <span className="truncate">
            Dilawar<span className="text-[#2dd4bf]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs lg:text-sm font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 transition-colors hover:text-[#2dd4bf]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: CV Download + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <CVDownloadButton variant="nav" />
          <ThemeToggle />
        </div>

        {/* Mobile / Foldable Right Actions */}
        <div className="flex md:hidden items-center gap-2">
          <CVDownloadButton variant="nav" />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-300 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 dark:border-slate-800 light:border-slate-200 bg-[#090e17]/95 dark:bg-[#090e17]/95 light:bg-white/95 px-6 py-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-800 transition-colors hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100 hover:text-[#2dd4bf]"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400">Theme &amp; Actions</span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
