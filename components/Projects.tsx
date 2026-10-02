"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  no: string;
  title: string;
  category: "automation" | "ml" | "vision" | "backend" | "analytics";
  blurb: string;
  stack: string[];
  keyMetric?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    no: "01",
    title: "AI Automation & Business Workflows",
    category: "automation",
    blurb:
      "End-to-end automations that connect AI agents to real business tools — lead handling, automated reporting, and internal ops running without manual work.",
    stack: ["n8n", "Make.com", "AI Agents", "REST APIs", "Streamlit"],
    keyMetric: "90% Reduction in manual task time",
  },
  {
    no: "02",
    title: "WhatsApp Business Cloud Automation",
    category: "automation",
    blurb:
      "Automated conversational flows on the WhatsApp Business Cloud API with webhook-driven replies and intelligent intent routing built on Meta developer tooling.",
    stack: ["n8n", "WhatsApp Cloud API", "Webhooks", "Meta Dev Tools"],
    keyMetric: "< 2s response turnaround",
  },
  {
    no: "03",
    title: "Graph-Based Plagiarism Detection System",
    category: "ml",
    blurb:
      "Source-code similarity engine using Abstract Syntax Trees (AST) & Control Flow Graphs (CFG) with GraphCodeBERT embeddings, served through a high-performance FastAPI backend.",
    stack: ["Graph Neural Networks", "CodeBERT", "FastAPI", "Pycparser"],
    keyMetric: "AST + CFG Semantic Analysis",
  },
  {
    no: "04",
    title: "Multilingual Sentiment Analysis",
    category: "ml",
    blurb:
      "Fine-tuned XLM-RoBERTa deep learning model to classify complex sentiment across multiple languages, featuring end-to-end NLP preprocessing and statistical evaluation.",
    stack: ["Hugging Face", "XLM-RoBERTa", "PyTorch", "Transformers"],
    keyMetric: "Cross-lingual Zero-shot Transfer",
  },
  {
    no: "05",
    title: "Enterprise Employee Management API",
    category: "backend",
    blurb:
      "Secure production REST API for managing workforce records with role-based JWT authentication, rate limiting, and an optimized SQLAlchemy data access layer.",
    stack: ["FastAPI", "SQLAlchemy", "JWT Auth", "SQLite / PostgreSQL"],
    keyMetric: "100% Async Endpoints",
  },
  {
    no: "06",
    title: "Real-Time Pedestrian Detection",
    category: "vision",
    blurb:
      "Real-time object tracking and pedestrian detection on video streams with custom fine-tuned YOLOv8 and OpenCV, tuned for high-density crowded scenes.",
    stack: ["YOLOv8", "OpenCV", "Computer Vision", "PyTorch"],
    keyMetric: "45+ FPS High-Density Tracking",
  },
  {
    no: "07",
    title: "Unsupervised Customer Segmentation",
    category: "analytics",
    blurb:
      "Unsupervised clustering of customer behavior using K-Means and Gaussian Mixture Models (GMM), generating actionable business personas and cohort insights.",
    stack: ["Scikit-learn", "K-Means", "GMM", "Pandas", "Matplotlib"],
    keyMetric: "Multi-dimensional Cluster Profiles",
  },
  {
    no: "08",
    title: "Interactive Analytics & BI Dashboards",
    category: "analytics",
    blurb:
      "Exploratory data analysis and interactive executive dashboards turning messy raw transactional datasets into clear, data-backed decisions for clients.",
    stack: ["Pandas", "Plotly", "Power BI", "Seaborn"],
    keyMetric: "Live Interactive Visualizations",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "automation", label: "AI Automation" },
  { id: "ml", label: "Machine Learning & NLP" },
  { id: "backend", label: "Backend & APIs" },
  { id: "vision", label: "Computer Vision" },
  { id: "analytics", label: "Data Analytics" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            03 / Portfolio
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Featured <span className="text-gradient-mint">Engineering Projects</span>
              </h2>
              <p className="mt-2 text-slate-400 max-w-xl">
                Real solutions built across deep learning architectures, business automation pipelines, and robust backend microservices.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-[#0f1722]/80 p-1.5 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#2dd4bf] text-[#090e17] font-semibold shadow-md shadow-[#2dd4bf]/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((p) => (
            <article
              key={p.no}
              className="card-surface group relative flex flex-col justify-between p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-[#2dd4bf]/80">
                    Project #{p.no}
                  </span>
                  {p.keyMetric && (
                    <span className="rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-3 py-0.5 text-[11px] font-mono text-[#2dd4bf]">
                      {p.keyMetric}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-[#2dd4bf]">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {p.blurb}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[#2dd4bf]/20 bg-[#2dd4bf]/5 px-2.5 py-1 text-[11px] font-mono text-[#2dd4bf]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 transition-colors hover:text-[#2dd4bf]"
                  >
                    <span>Inquire</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
