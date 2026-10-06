"use client";

import { useState } from "react";
import {
  Sparkles,
  Bot,
  ArrowRight,
  Database,
  MessageSquare,
  Zap,
  CheckCircle,
  Play,
  RotateCcw,
  Workflow,
} from "lucide-react";

interface WorkflowStep {
  id: string;
  name: string;
  type: string;
  icon: any;
  status: "idle" | "running" | "completed";
  detail: string;
}

const initialSteps: WorkflowStep[] = [
  {
    id: "trigger",
    name: "Customer Webhook",
    type: "Input Event",
    icon: Zap,
    status: "idle",
    detail: "Captures inbound lead message from WhatsApp Cloud or Contact Form payload.",
  },
  {
    id: "llm",
    name: "AI Agent (Intent Classifier)",
    type: "LLM Inference",
    icon: Bot,
    status: "idle",
    detail: "Analyzes requirements across platforms (Windows/Web/Mobile) and determines priority.",
  },
  {
    id: "db",
    name: "PostgreSQL & Vector Store",
    type: "RAG & Storage",
    icon: Database,
    status: "idle",
    detail: "Queries project archives and persists lead profile with embeddings.",
  },
  {
    id: "action",
    name: "Multi-Channel Dispatch",
    type: "Automated Action",
    icon: MessageSquare,
    status: "idle",
    detail: "Sends instantaneous WhatsApp confirmation and alerts the engineering inbox.",
  },
];

export default function WorkflowDemo() {
  const [steps, setSteps] = useState<WorkflowStep[]>(initialSteps);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [executionLogs, setExecutionLogs] = useState<string[]>([
    "[System] Interactive multi-platform workflow simulation ready.",
  ]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);
    setExecutionLogs(["[Start] Inbound project inquiry payload dispatched."]);

    const stepTimings = [
      { delay: 700, log: "[Step 1] Webhook validated payload from Meta Cloud API." },
      { delay: 1600, log: "[Step 2] AI Agent analyzed text: Classified as 'Full-Stack & Mobile Solution' (Confidence: 99.1%)." },
      { delay: 2600, log: "[Step 3] Vector store matched production architecture blueprints; recorded in PostgreSQL." },
      { delay: 3500, log: "[Step 4] Dispatched instant confirmation & alert transmitted to engineer inbox." },
    ];

    stepTimings.forEach((item, index) => {
      setTimeout(() => {
        setCurrentStepIndex(index);
        setExecutionLogs((prev) => [...prev, item.log]);

        if (index === stepTimings.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            setExecutionLogs((prev) => [
              ...prev,
              "[Success] Workflow execution completed cleanly in 3.5s with zero manual friction.",
            ]);
          }, 800);
        }
      }, item.delay);
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setExecutionLogs(["[Reset] Simulation reset to initial standby state."]);
  };

  return (
    <section id="workflows" className="relative scroll-mt-24 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
              Interactive Architecture Demo
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 md:text-5xl">
              Live AI Automation <span className="text-gradient-mint">Pipeline</span>
            </h2>
            <p className="mt-3 max-w-xl text-slate-400 dark:text-slate-400 light:text-slate-600">
              Experience an interactive breakdown of the production n8n, FastAPI &amp; Python pipelines I engineer for enterprise operations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                isRunning
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-[#2dd4bf] text-[#090e17] hover:bg-[#5eead4] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
              }`}
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>{isRunning ? "Simulating..." : "Test Run Pipeline"}</span>
            </button>

            <button
              onClick={resetSimulation}
              disabled={isRunning}
              className="rounded-full border border-slate-800 dark:border-slate-800 light:border-slate-300 p-2.5 text-slate-400 hover:border-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
              title="Reset Simulation"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Visual Pipeline Nodes */}
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {initialSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = currentStepIndex === idx;
            const isFinished = currentStepIndex > idx || (!isRunning && currentStepIndex === 3);

            return (
              <div
                key={step.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 ${
                  isActive
                    ? "border-[#2dd4bf] bg-[#162433] shadow-[0_0_25px_rgba(45,212,191,0.25)] scale-[1.02]"
                    : isFinished
                    ? "border-emerald-500/40 bg-[#0f1722] dark:bg-[#0f1722] light:bg-white"
                    : "border-slate-800 dark:border-slate-800 light:border-slate-200 bg-[#0f1722]/80 dark:bg-[#0f1722]/80 light:bg-white opacity-80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Step 0{idx + 1}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono ${
                        isActive
                          ? "bg-[#2dd4bf]/20 text-[#2dd4bf] animate-pulse"
                          : isFinished
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      {isActive ? "Processing" : isFinished ? "Verified" : "Standby"}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                        isActive
                          ? "border-[#2dd4bf] bg-[#2dd4bf]/20 text-[#2dd4bf]"
                          : isFinished
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-slate-700 bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {step.name}
                      </h4>
                      <p className="text-[11px] text-[#2dd4bf]">{step.type}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {step.detail}
                  </p>
                </div>

                {/* Node Connector indicator */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-[#090e17] text-slate-400">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Execution Console */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-[#070b12] font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d141f] px-4 py-2.5 text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2dd4bf] animate-ping" />
              <span className="text-[11px] font-semibold text-slate-300">Live Execution Terminal</span>
            </div>
            <span className="text-[10px] text-slate-500">n8n / FastAPI Worker</span>
          </div>

          <div className="p-4 space-y-1.5 max-h-48 overflow-y-auto">
            {executionLogs.map((log, index) => (
              <div key={index} className="flex items-start gap-2 text-slate-300">
                <span className="text-[#2dd4bf] shrink-0">{">"}</span>
                <span className={log.includes("[Success]") ? "text-emerald-400 font-semibold" : ""}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
