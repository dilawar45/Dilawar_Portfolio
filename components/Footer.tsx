import { ArrowUp, Heart, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060a10] py-10 text-xs text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-xs font-bold text-[#2dd4bf]">
            DA
          </div>
          <div>
            <p className="font-semibold text-white">Dilawar Ali</p>
            <p className="text-[11px] text-slate-500">Data Scientist & AI Automation Engineer • Multan, Pakistan</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/dilawar-ali-4b8185229"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#2dd4bf] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dilawarnaeem45@gmail.com"
            className="hover:text-[#2dd4bf] transition-colors"
          >
            Email
          </a>
          <a
            href="tel:+923027707095"
            className="hover:text-[#2dd4bf] transition-colors"
          >
            Phone
          </a>
          <a
            href="#top"
            className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-300 hover:border-[#2dd4bf]/40 hover:text-white transition-all"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-900 px-6 pt-6 text-center text-[11px] text-slate-600 sm:flex sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Dilawar Ali. Built with Next.js, Node.js & Tailwind CSS.</p>
        <p className="mt-2 sm:mt-0 font-mono text-[#2dd4bf]/70">Zero AI-builder lock-in • 100% Custom Codebase</p>
      </div>
    </footer>
  );
}
