import { Briefcase, Award, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    period: "2023 — Present",
    role: "Freelance Multi-Platform & Automation Engineer",
    org: "Self-Employed / Global Enterprise Clients",
    type: "Commercial",
    detail:
      "Engineered production applications across Windows (WinUI 3), iOS (SwiftUI), Android (Jetpack Compose), Full-Stack Next.js 15, and headless WordPress/WooCommerce, accompanied by automated n8n workflows and FastAPI microservices.",
    tags: ["WinUI 3", "SwiftUI", "Jetpack Compose", "Next.js", "FastAPI", "n8n"],
  },
  {
    period: "Internship",
    role: "AI Research Intern",
    org: "Data Science Lab, AITeC — National Center of Physics (NCP)",
    type: "Research",
    detail:
      "Conducted deep learning experiments and applied computer vision research (YOLOv8 tracking, graph embeddings) in a premier national research facility.",
    tags: ["Deep Learning", "PyTorch", "Computer Vision", "Applied Research"],
  },
  {
    period: "Internship",
    role: "Data Science Intern",
    org: "Bytewise Limited",
    type: "Industry",
    detail:
      "Completed hands-on data science modules, statistical feature engineering, predictive ML modeling, and production dashboarding.",
    tags: ["Pandas", "Scikit-Learn", "EDA", "Statistical Models"],
  },
  {
    period: "Sep 2021 — Jul 2025",
    role: "BS Computer & Information Sciences",
    org: "PIEAS University, Islamabad (CGPA: 3.09 / 4.0)",
    type: "Education",
    detail:
      "Rigorous CS foundation specializing in systems architecture, desktop & mobile engineering, machine learning algorithms, and distributed databases.",
    tags: ["Algorithms", "Systems Architecture", "Machine Learning", "Databases"],
  },
];

const certifications = [
  {
    title: "IBM Data Analyst",
    issuer: "Coursera / IBM",
    focus: "Data wrangling, SQL & visualization dashboards",
  },
  {
    title: "IBM Machine Learning Professional Certificate",
    issuer: "Coursera / IBM",
    focus: "Supervised & unsupervised ML, deep learning foundations",
  },
  {
    title: "Data Scientist Associate",
    issuer: "DataCamp",
    focus: "Applied data science, Python modeling & metrics",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "Coursera / IBM",
    focus: "Relational queries, database normalization & Python drivers",
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "Coursera / DeepLearning.AI",
    focus: "Gradient descent, loss functions & neural models (Andrew Ng)",
  },
  {
    title: "NLP with Classification and Vector Spaces",
    issuer: "Coursera / DeepLearning.AI",
    focus: "Word embeddings, cosine similarity, sentiment classifiers",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 md:py-28 bg-[#090e17]/40 dark:bg-[#090e17]/40 light:bg-slate-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            04 / Track Record &amp; Pedigree
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 md:text-5xl">
            Experience &amp; <span className="text-gradient-mint">Education</span>
          </h2>
          <p className="mt-2 text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl">
            A proven journey of academic rigor, research lab experience, and direct commercial freelancing across global clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 relative border-l border-slate-800 dark:border-slate-800 light:border-slate-300 ml-3 sm:ml-6 pl-8 sm:pl-10 space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet Node */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#2dd4bf] bg-[#090e17] dark:bg-[#090e17] light:bg-white transition-transform group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(45,212,191,0.8)]">
                <div className="h-2 w-2 rounded-full bg-[#2dd4bf]" />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-3 py-0.5 text-xs font-mono font-medium text-[#2dd4bf]">
                  {item.period}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500">
                  {item.type}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-[#2dd4bf] transition-colors">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">{item.org}</p>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                {item.detail}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-[#0f1722] dark:bg-[#0f1722] light:bg-slate-100 px-2.5 py-1 text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications */}
        <div className="mt-20">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-[#2dd4bf]" />
            <h3 className="font-display text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Professional Certifications
            </h3>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-white p-5 transition-all duration-300 hover:border-[#2dd4bf]/40 hover:bg-[#131d27] dark:hover:bg-[#131d27] light:hover:bg-slate-50"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#2dd4bf]">Verified</span>
                    <span className="text-[11px] font-mono text-slate-500">{cert.issuer}</span>
                  </div>

                  <h4 className="mt-3 text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-[#2dd4bf] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {cert.focus}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Credential Earned</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
