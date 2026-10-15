import Image from "next/image";
import { Monitor, Smartphone, Globe, Workflow, Cpu, Download, CheckCircle2, ShieldCheck } from "lucide-react";
import CVDownloadButton from "./CVDownloadButton";

const pillars = [
  {
    icon: Monitor,
    title: "Desktop Systems",
    description: "Native Windows 11 clients (WinUI 3 / WPF / C#) and macOS utilities with fluid animations and hardware telemetry.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Spatial",
    description: "Native iOS (SwiftUI), Android (Jetpack Compose), Apple visionOS spatial apps, and unified Flutter cross-platform codebases.",
  },
  {
    icon: Globe,
    title: "Web & Headless CMS",
    description: "Production Next.js 15 SaaS applications and enterprise Headless WordPress & WooCommerce portals with sub-second hydration.",
  },
  {
    icon: Workflow,
    title: "AI & Backend APIs",
    description: "FastAPI async microservices, PyTorch neural models, and self-healing n8n/Make.com enterprise agent automations.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            01 / Background &amp; Engineering Philosophy
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 md:text-5xl">
              Architecting resilient systems <br />
              across <span className="text-gradient-mint">every digital surface</span>.
            </h2>
            <div className="shrink-0">
              <CVDownloadButton variant="secondary" />
            </div>
          </div>
        </div>

        {/* Profile Spotlight & Engineering Narrative */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          {/* Left: Portrait Spotlight Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="group relative overflow-hidden rounded-3xl border border-[#2dd4bf]/25 bg-gradient-to-b from-[#131d27] to-[#0a1017] dark:from-[#131d27] dark:to-[#0a1017] light:from-white light:to-slate-100 p-5 sm:p-6 shadow-2xl shadow-black/40 light:shadow-slate-300/60 backdrop-blur-xl transition-all duration-300 hover:border-[#2dd4bf]/40">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/50">
                <Image
                  src="/dilawar.jpg"
                  alt="Dilawar Ali - Multi-Platform Software Engineer"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e17]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-[#090e17]/85 px-3 py-2 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-200">Available for Contract &amp; Full-Time</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 font-display">
                    Dilawar Ali
                  </h3>
                  <span className="rounded-md border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-2.5 py-0.5 text-xs font-mono font-medium text-[#2dd4bf]">
                    PIEAS Alum
                  </span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  BS Computer &amp; Information Sciences &bull; Multi-Platform &amp; AI Engineer
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="rounded-md bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 px-2 py-1 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Windows &bull; macOS
                  </span>
                  <span className="rounded-md bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 px-2 py-1 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    iOS &bull; visionOS &bull; Android
                  </span>
                  <span className="rounded-md bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 px-2 py-1 text-[#2dd4bf]">
                    FastAPI &amp; AI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Story & Engineering Highlights */}
          <div className="space-y-6">
            <div className="space-y-4 text-base leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700 md:text-lg">
              <p>
                With years of freelance delivery for international clients, I build across the entire software spectrum: from native desktop tools on Windows and macOS to spatial interfaces on visionOS, high-performance mobile apps on iOS and Android, modern Next.js SaaS platforms, and headless WordPress architectures.
              </p>
              <p>
                My engineering philosophy centers on <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900">real-world resilience</strong> — applications that perform smoothly on 60Hz/120Hz displays, scale gracefully across unusual form factors like folding screens, and integrate seamlessly with intelligent AI automation pipelines and secure asynchronous backends.
              </p>
            </div>

            {/* Quick value props / engineering standards */}
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0f1722]/60 dark:border-slate-800 dark:bg-[#0f1722]/60 light:border-slate-200 light:bg-white p-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2dd4bf]/10 text-[#2dd4bf]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">
                    Production Systems Verified
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                    Rigorous testing across physical devices and diverse OS kernels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0f1722]/60 dark:border-slate-800 dark:bg-[#0f1722]/60 light:border-slate-200 light:bg-white p-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">
                    High-Throughput Backends
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                    FastAPI microservices &amp; sub-second hydration Next.js 15 apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-white p-6 transition-all duration-300 hover:border-[#2dd4bf]/40 hover:bg-[#131d27] dark:hover:bg-[#131d27] light:hover:bg-slate-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2dd4bf]/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf] transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors group-hover:text-[#2dd4bf]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
