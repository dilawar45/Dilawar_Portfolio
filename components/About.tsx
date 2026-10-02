import { Database, Cpu, Workflow, Server, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Web scraping, API data extraction, pandas wrangling, and structured SQL pipelines built to handle real-world noise.",
  },
  {
    icon: Cpu,
    title: "Machine & Deep Learning",
    description: "Computer vision (YOLOv8), NLP (Transformers, XLM-RoBERTa), clustering and predictive modeling with PyTorch & Scikit-learn.",
  },
  {
    icon: Workflow,
    title: "AI & Workflow Automation",
    description: "Designing self-healing workflows using n8n, Make.com, custom AI agents, webhooks and LLM tool calling.",
  },
  {
    icon: Server,
    title: "Production Backend APIs",
    description: "Deploying high-performance FastAPI backends with JWT authentication, SQLAlchemy ORM, and Dockerized endpoints.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            01 / About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Turning messy data into <span className="text-gradient-mint">working systems</span>.
          </h2>
        </div>

        <div className="mt-8 grid gap-8 text-base leading-relaxed text-slate-400 md:grid-cols-2 md:text-lg">
          <p>
            With two years of freelance experience across international clients, I work across the full lifecycle of data: extracting through custom scrapers and APIs, feature engineering, training predictive and deep learning models, and wrapping the output into usable products.
          </p>
          <p>
            My engineering philosophy focuses on resilience — solutions that don&apos;t fail silently after handover. Whether integrating Meta&apos;s WhatsApp API into an autonomous lead router or serving code similarity embeddings via FastAPI, I engineer systems built for real operations.
          </p>
        </div>

        {/* Four Core Pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0f1722]/80 p-6 transition-all duration-300 hover:border-[#2dd4bf]/40 hover:bg-[#131d27] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2dd4bf]/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf] transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white transition-colors group-hover:text-[#2dd4bf]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
