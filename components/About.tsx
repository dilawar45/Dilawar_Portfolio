import { Monitor, Smartphone, Globe, Workflow, Cpu, Download } from "lucide-react";
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

        <div className="mt-8 grid gap-8 text-base leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600 md:grid-cols-2 md:text-lg">
          <p>
            With years of freelance delivery for international clients, I build across the entire lifecycle of software: from native desktop tools on Windows and macOS to spatial interfaces on visionOS, high-performance mobile apps on iOS and Android, modern Next.js SaaS platforms, and headless WordPress architectures.
          </p>
          <p>
            My engineering philosophy centers on real-world resilience — applications that perform smoothly on 60Hz/120Hz displays, scale across unusual form factors like folding screens, and integrate seamlessly with intelligent AI automation pipelines and secure asynchronous backends.
          </p>
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
