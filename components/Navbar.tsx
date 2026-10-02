"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Code, Sparkles } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI Workflows", href: "#workflows" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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
          ? "bg-[#090e17]/85 backdrop-blur-md border-b border-[#2dd4bf]/15 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-xs font-semibold text-[#2dd4bf] transition-transform group-hover:scale-105">
            DA
          </span>
          <span>
            Dilawar<span className="text-[#2dd4bf]">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-[#2dd4bf]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 px-5 py-2 text-xs font-semibold tracking-wide text-[#2dd4bf] transition-all hover:bg-[#2dd4bf] hover:text-[#090e17] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-400 hover:text-white md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#2dd4bf]/15 bg-[#090e17]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 transition-colors hover:text-[#2dd4bf]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2dd4bf] py-2.5 text-sm font-semibold text-[#090e17]"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
