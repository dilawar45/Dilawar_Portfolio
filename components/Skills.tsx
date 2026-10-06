"use client";

import { useState } from "react";
import { Monitor, Smartphone, Globe, Cpu, Terminal, Workflow } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  highlight: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Desktop & Native Systems",
    icon: Monitor,
    highlight: "Windows WinUI 3 & macOS Native",
    items: ["Windows 11 WinUI 3", "C# / .NET 8", "WPF / XAML", "macOS AppKit", "SwiftUI", "Metal Shaders", "SQLite"],
  },
  {
    title: "Mobile & Spatial Computing",
    icon: Smartphone,
    highlight: "Apple visionOS, iOS & Android",
    items: ["Apple visionOS", "RealityKit", "iOS (SwiftUI 5)", "Android (Jetpack Compose)", "Flutter", "React Native", "HealthKit"],
  },
  {
    title: "Web & Headless CMS",
    icon: Globe,
    highlight: "Modern Full-Stack & Headless WP",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "WordPress Headless", "WooCommerce", "GraphQL", "WebSockets"],
  },
  {
    title: "AI & Deep Learning",
    icon: Cpu,
    highlight: "Computer Vision & Transformers",
    items: ["PyTorch", "YOLOv8", "Transformers", "GraphCodeBERT", "Hugging Face", "Scikit-Learn", "OpenCV"],
  },
  {
    title: "Production Backend & Cloud",
    icon: Terminal,
    highlight: "High-speed async APIs",
    items: ["FastAPI", "SQLAlchemy", "PostgreSQL", "JWT Authentication", "Docker", "Redis", "REST APIs"],
  },
  {
    title: "Workflow Automation & Agents",
    icon: Workflow,
    highlight: "Autonomous bots & zero-manual ops",
    items: ["n8n Workflows", "Make.com", "WhatsApp Cloud API", "AI Agents", "Webhooks", "ETL Pipelines"],
  },
];

export default function Skills() {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  return (
    <section id="skills" className="relative scroll-mt-24 py-20 md:py-28 bg-[#090e17]/50 dark:bg-[#090e17]/50 light:bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            02 / Technical Stack &amp; Tooling
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 md:text-5xl">
            Technologies I use to <span className="text-gradient-mint">deliver impact</span>.
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400 dark:text-slate-400 light:text-slate-600">
            A comprehensive, multi-platform engineering toolkit built for desktop software, spatial computing, mobile ecosystems, enterprise web platforms, and automated cloud workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isHovered = activeHover === idx;

            return (
              <div
                key={cat.title}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
                className={`card-surface relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-white p-6 transition-all duration-300 ${
                  isHovered ? "border-[#2dd4bf]/50 shadow-xl shadow-[#2dd4bf]/10" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-[#2dd4bf]">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#2dd4bf] font-medium">
                    {cat.highlight}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700/60 bg-slate-800/40 dark:border-slate-700/60 dark:bg-slate-800/40 light:border-slate-300 light:bg-slate-100 px-3 py-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
                    <span>Production Grade Tested</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
