import { ArrowUp, Download, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-[#060a10] dark:bg-[#060a10] light:bg-slate-100 py-12 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 text-xs font-bold text-[#2dd4bf]">
            DA
          </div>
          <div>
            <p className="font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Dilawar Ali
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
              Multi-Platform Software Engineer &bull; Windows &bull; Web &bull; iOS &bull; macOS &bull; visionOS &bull; Android &bull; WP
            </p>
          </div>
        </div>

        {/* Quick format downloads & navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <a
              href="/Dilawar_Ali_CV.pdf"
              download="Dilawar_Ali_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-[11px] font-semibold text-red-400 hover:bg-red-500/20 transition-colors"
            >
              <FileText className="h-3 w-3" />
              <span>CV (.PDF)</span>
            </a>
            <a
              href="/Dilawar_Ali_CV.docx"
              download="Dilawar_Ali_CV.docx"
              className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-blue-400 hover:bg-blue-500/20 transition-colors"
            >
              <FileText className="h-3 w-3" />
              <span>CV (.DOCX)</span>
            </a>
          </div>

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
            className="flex items-center gap-1 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900 dark:bg-slate-900 light:bg-white px-3 py-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] transition-all"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 px-4 sm:px-6 lg:px-8 pt-6 text-center text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 sm:flex sm:justify-between sm:text-left">
        <p>&copy; {new Date().getFullYear()} Dilawar Ali. Production Software &amp; AI Engineering.</p>
        <p className="mt-2 sm:mt-0 font-mono text-[#2dd4bf]/80">
          Foldable &bull; Responsive &bull; Dark &amp; Light Adaptive
        </p>
      </div>
    </footer>
  );
}
