import Image from "next/image";
import { ArrowRight, Download, Mail, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Freelancing", subtext: "Production Solutions" },
  { value: "8+", label: "Featured Projects", subtext: "ML, NLP & APIs" },
  { value: "6", label: "Certifications", subtext: "IBM, DeepLearning.AI" },
  { value: "2", label: "Internships", subtext: "National Labs & Industry" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background Graphic & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-[#2dd4bf]/10 blur-[130px] animate-pulse-slow pointer-events-none" />
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          {/* Left Column: Headlines and Intro */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-4 py-1.5 text-xs font-medium tracking-wider text-[#2dd4bf] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2dd4bf] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2dd4bf]"></span>
              </span>
              Available for Freelance & AI Automation Projects
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Data Science, <br />
              <span className="text-gradient-mint">Machine Learning</span> <br />
              & AI Automation.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I&apos;m <span className="font-semibold text-slate-200">Dilawar Ali</span> — a Computer Science graduate from Multan, Pakistan, building intelligent machine learning models, production FastAPI backends, and automated agent workflows that eliminate manual friction for businesses.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#2dd4bf] px-7 py-3 text-sm font-semibold text-[#090e17] transition-all hover:bg-[#5eead4] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf] hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Tech Highlights */}
            <div className="mt-10 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500">Core Stack:</span>
              {["Python", "FastAPI", "PyTorch", "n8n", "PostgreSQL", "Transformers"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Tech Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl border border-[#2dd4bf]/20 bg-gradient-to-b from-[#131d27] to-[#0a1017] p-6 shadow-2xl shadow-black/80 backdrop-blur-xl">
              {/* Header bar simulating a terminal / profile */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/70" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="h-3.5 w-3.5 text-[#2dd4bf]" />
                  <span>dilawar@agent-node:~$</span>
                </div>
                <span className="rounded bg-[#2dd4bf]/15 px-2 py-0.5 text-[10px] font-mono text-[#2dd4bf]">
                  v2.4 active
                </span>
              </div>

              {/* Central Visual / Profile Details */}
              <div className="py-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#2dd4bf]/40 bg-gradient-to-br from-[#2dd4bf]/20 to-[#38bdf8]/10 text-2xl font-bold font-display text-[#2dd4bf] shadow-inner">
                    DA
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#090e17]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2dd4bf]" />
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Dilawar Ali</h2>
                    <p className="text-xs text-slate-400">Data Scientist & AI Automation Architect</p>
                    <p className="text-[11px] text-[#2dd4bf] mt-0.5 font-mono">Multan, Pakistan • PIEAS Graduate</p>
                  </div>
                </div>

                {/* Live Capabilities Feed */}
                <div className="mt-6 space-y-2.5 rounded-xl border border-slate-800/80 bg-[#090e17]/60 p-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-slate-500">Pipeline status:</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Ready for production
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-slate-500">Specialization:</span>
                    <span className="text-[#38bdf8]">LLMs, NLP & n8n Workflows</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-slate-500">Backend API:</span>
                    <span className="text-indigo-400">FastAPI + Async SQLAlchemy</span>
                  </div>
                </div>

                {/* Workflow Simulation Pill */}
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#2dd4bf]/20 bg-[#2dd4bf]/5 px-3 py-2 text-xs text-[#2dd4bf]">
                  <Sparkles className="h-4 w-4 shrink-0 text-[#2dd4bf]" />
                  <span className="truncate">Automating 100+ business hours every week with AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800 bg-[#0f1722]/80 p-4 sm:grid-cols-4 md:p-6 backdrop-blur-md">
          {stats.map((s, idx) => (
            <div key={idx} className="p-3 text-center sm:text-left sm:border-r border-slate-800/80 last:border-none">
              <div className="font-display text-3xl font-extrabold text-[#2dd4bf] md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                {s.label}
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500">
                {s.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
