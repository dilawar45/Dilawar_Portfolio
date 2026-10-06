"use client";

import { useState, useRef, useEffect } from "react";
import { Download, FileText, CheckCircle2, ChevronDown } from "lucide-react";

interface CVDownloadButtonProps {
  variant?: "primary" | "secondary" | "nav";
  className?: string;
}

export default function CVDownloadButton({
  variant = "primary",
  className = "",
}: CVDownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownload = (format: "pdf" | "docx") => {
    setDownloadedFormat(format);
    setTimeout(() => {
      setDownloadedFormat(null);
      setIsOpen(false);
    }, 2000);
  };

  const buttonStyles = {
    primary:
      "inline-flex items-center gap-2 rounded-full border border-[#2dd4bf] bg-[#2dd4bf] px-6 py-3 text-sm font-semibold text-[#090e17] transition-all duration-200 hover:bg-[#5eead4] hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] hover:-translate-y-0.5",
    secondary:
      "inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-200 hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf] hover:-translate-y-0.5",
    nav: "inline-flex items-center gap-1.5 rounded-lg border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 px-3 py-1.5 text-xs font-semibold text-[#2dd4bf] transition-all hover:bg-[#2dd4bf]/20 hover:border-[#2dd4bf]",
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={buttonStyles[variant]}
      >
        <Download className={variant === "nav" ? "h-3.5 w-3.5" : "h-4 w-4"} />
        <span>Download CV</span>
        <ChevronDown
          className={`transition-transform duration-200 ${
            variant === "nav" ? "h-3 w-3" : "h-4 w-4"
          } ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 sm:left-0 sm:right-auto z-50 mt-2 w-64 rounded-2xl border border-slate-700/80 bg-[#0f1722]/95 p-2 shadow-2xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-[#0f1722]/95 light:border-slate-200 light:bg-white light:shadow-xl transition-all animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#2dd4bf]">
              Choose Format
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
              Dilawar Ali — Updated Resume
            </p>
          </div>

          <div className="mt-1 space-y-1">
            {/* PDF Option */}
            <a
              href="/Dilawar_Ali_CV.pdf"
              download="Dilawar_Ali_CV.pdf"
              onClick={() => handleDownload("pdf")}
              className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-colors hover:bg-slate-800/80 dark:hover:bg-slate-800/80 light:hover:bg-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 group-hover:bg-red-500/20">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-[#2dd4bf]">
                    PDF Document
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                    .pdf &bull; Ready to print / ATS
                  </div>
                </div>
              </div>
              {downloadedFormat === "pdf" ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              ) : (
                <Download className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#2dd4bf]" />
              )}
            </a>

            {/* DOCX Option */}
            <a
              href="/Dilawar_Ali_CV.docx"
              download="Dilawar_Ali_CV.docx"
              onClick={() => handleDownload("docx")}
              className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-colors hover:bg-slate-800/80 dark:hover:bg-slate-800/80 light:hover:bg-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-[#2dd4bf]">
                    Word Document
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                    .docx &bull; Editable Microsoft Word
                  </div>
                </div>
              </div>
              {downloadedFormat === "docx" ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              ) : (
                <Download className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#2dd4bf]" />
              )}
            </a>
          </div>

          <div className="mt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 px-3 py-1.5 text-center text-[10px] text-slate-500">
            Instant download &bull; Verified multi-platform CV
          </div>
        </div>
      )}
    </div>
  );
}
