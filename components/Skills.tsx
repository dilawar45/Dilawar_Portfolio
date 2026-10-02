"use client";

import { useState } from "react";
import { Terminal, Database, Cpu, Workflow, BarChart3, Globe } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  highlight: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Workflow Automation",
    icon: Workflow,
    highlight: "Autonomous agents & zero-manual ops",
    items: ["n8n", "Make.com", "AI Agents", "Webhooks", "Google Workspace", "Streamlit", "LangChain Basics"],
  },
  {
    title: "Machine & Deep Learning",
    icon: Cpu,
    highlight: "PyTorch, Transformers & Vision",
    items: ["PyTorch", "TensorFlow", "Transformers", "CNN / RNN / LSTM", "GANs", "Scikit-learn", "Hugging Face"],
  },
  {
    title: "Backend Development",
    icon: Terminal,
    highlight: "High-speed async APIs",
    items: ["FastAPI", "SQLAlchemy", "RESTful APIs", "JWT Auth", "Pydantic", "Docker Basics", "SQLite"],
  },
  {
    title: "Languages & Databases",
    icon: Database,
    highlight: "Core engineering foundation",
    items: ["Python", "C / C++", "SQL", "PostgreSQL", "MySQL", "SQL Server", "Oracle"],
  },
  {
    title: "Data & Visualization",
    icon: BarChart3,
    highlight: "Insight-driven storytelling",
    items: ["Pandas", "Feature Engineering", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Excel / Sheets"],
  },
  {
    title: "Data Extraction & Pipelines",
    icon: Globe,
    highlight: "Scraping & structured pipelines",
    items: ["APIs", "Web Scraping (BeautifulSoup/Selenium)", "Data Cleaning", "Preprocessing", "ETL Pipelines"],
  },
];

export default function Skills() {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  return (
    <section id="skills" className="relative scroll-mt-24 py-20 md:py-28 bg-[#090e17]/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            02 / Toolkit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Technologies I use to <span className="text-gradient-mint">deliver impact</span>.
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            A battle-tested stack spanning raw data ingestion, state-of-the-art neural architectures, and automated cloud workflows.
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
                className={`card-surface relative flex flex-col justify-between p-6 transition-all duration-300 ${
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

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-[#2dd4bf]">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#2dd4bf] font-medium">
                    {cat.highlight}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-300 transition-colors hover:border-[#2dd4bf]/40 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
                    <span>Production Grade</span>
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
