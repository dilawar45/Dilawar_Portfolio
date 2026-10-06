import { ArrowRight, Mail, Sparkles, Terminal, CheckCircle2, ShieldCheck, Download } from "lucide-react";
import CVDownloadButton from "./CVDownloadButton";

const stats = [
  { value: "8+", label: "Target Ecosystems", subtext: "Win, Web, Apple, Android, WP" },
  { value: "10+", label: "Production Apps", subtext: "Desktop, Spatial, Mobile, Web" },
  { value: "2+", label: "Years Freelancing", subtext: "Global Enterprise Clients" },
  { value: "6", label: "Certifications", subtext: "IBM, DeepLearning.AI, DataCamp" },
];

const ecosystemTags = [
  "Windows (WinUI 3)",
  "Full-Stack Web (Next.js)",
  "iOS (SwiftUI)",
  "macOS Native",
  "visionOS Spatial",
  "Android (Compose)",
  "Cross-Platform (Flutter)",
  "WordPress & WooCommerce",
  "FastAPI & AI",
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background Graphic & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[600px] max-w-full rounded-full bg-[#2dd4bf]/10 blur-[130px] animate-pulse-slow pointer-events-none" />
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* Left Column: Headlines and Intro */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-4 py-1.5 text-xs font-medium tracking-wider text-[#2dd4bf] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2dd4bf] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2dd4bf]"></span>
              </span>
              Available for Full-Stack, Mobile &amp; Desktop Engineering
            </div>

            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              Multi-Platform <br />
              <span className="text-gradient-mint">Software Engineering</span> <br />
              &amp; Spatial AI Systems.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600 sm:text-lg">
              I&apos;m <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">Dilawar Ali</span> — architecting production-grade applications across{" "}
              <strong className="text-slate-300 dark:text-slate-300 light:text-slate-800">Windows, Web, iOS, macOS, visionOS, Android, Cross-Platform (Flutter), and WordPress</strong>, coupled with high-speed FastAPI backends and automated AI pipelines.
            </p>

            {/* Action buttons: Projects, Contact, and Dual CV Download */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#2dd4bf] px-6 py-3 text-sm font-semibold text-[#090e17] transition-all hover:bg-[#5eead4] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:-translate-y-0.5"
              >
                <span>View All Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* CV Download Button with Dual .pdf and .docx options */}
              <CVDownloadButton variant="secondary" />

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 dark:border-slate-700 dark:bg-slate-900/60 light:border-slate-300 light:bg-white px-5 py-2.5 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 backdrop-blur-sm transition-all hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf] hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                <span>Send a Message</span>
              </a>
            </div>

            {/* Platform & Ecosystem Badges */}
            <div className="mt-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 light:text-slate-600">
                Core Ecosystems &amp; Stacks:
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {ecosystemTags.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-slate-100 px-2.5 py-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech Architecture Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl border border-[#2dd4bf]/25 bg-gradient-to-b from-[#131d27] to-[#0a1017] dark:from-[#131d27] dark:to-[#0a1017] light:from-white light:to-slate-100 p-6 shadow-2xl shadow-black/60 light:shadow-slate-300/60 backdrop-blur-xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/70" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
                  <Terminal className="h-3.5 w-3.5 text-[#2dd4bf]" />
                  <span>dilawar@multi-arch:~$</span>
                </div>
                <span className="rounded bg-[#2dd4bf]/15 px-2 py-0.5 text-[10px] font-mono text-[#2dd4bf]">
                  v3.0 live
                </span>
              </div>

              {/* Central Profile & Systems Details */}
              <div className="py-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#2dd4bf]/40 bg-gradient-to-br from-[#2dd4bf]/20 to-[#38bdf8]/10 text-2xl font-bold font-display text-[#2dd4bf] shadow-inner">
                    DA
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#090e17]">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      Dilawar Ali
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                      BS Computer Sciences &bull; PIEAS University
                    </p>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-[#2dd4bf]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Production Solutions Verified</span>
                    </div>
                  </div>
                </div>

                {/* System Specs List */}
                <div className="mt-6 space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-white p-2.5 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <span className="text-slate-400">Desktop Target:</span>
                    <span className="text-[#2dd4bf]">Windows WinUI 3 + macOS</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-white p-2.5 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <span className="text-slate-400">Mobile &amp; Spatial:</span>
                    <span className="text-sky-400">iOS, visionOS &amp; Android</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-white p-2.5 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <span className="text-slate-400">Web &amp; CMS:</span>
                    <span className="text-indigo-400">Next.js 15 &amp; Headless WP</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-white p-2.5 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <span className="text-slate-400">CV Formats:</span>
                    <span className="text-emerald-400">PDF &amp; DOCX Available</span>
                  </div>
                </div>
              </div>

              {/* Bottom quick stats */}
              <div className="border-t border-slate-800 dark:border-slate-800 light:border-slate-200 pt-4 text-center">
                <span className="text-[11px] text-slate-400">
                  Adaptive UI &bull; Foldable &amp; Universal Screen Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Key Quantitative Metrics */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-white p-5 shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <div className="font-display text-3xl font-bold text-[#2dd4bf]">{s.value}</div>
              <div className="mt-1 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">
                {s.label}
              </div>
              <div className="mt-0.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                {s.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
