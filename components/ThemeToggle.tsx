"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/40 text-slate-400 transition-colors ${className}`}
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]/50 ${
        isDark
          ? "border-slate-800 bg-[#0f1722]/80 text-amber-300 hover:border-amber-400/40 hover:bg-slate-800 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
          : "border-slate-300 bg-white text-indigo-600 shadow-sm hover:border-indigo-400/50 hover:bg-slate-50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
      } ${className}`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
