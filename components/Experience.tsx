import { Briefcase, Award, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    period: "2023 — Present",
    role: "Freelance Data & Automation Engineer",
    org: "Self-Employed / Global Clients",
    type: "Work",
    detail:
      "Engineered end-to-end data analysis pipelines, custom deep learning models, and automated business workflows (n8n/Make) for commercial clients worldwide.",
    tags: ["n8n", "Python", "FastAPI", "Client Delivery"],
  },
  {
    period: "Internship",
    role: "AI Research Intern",
    org: "Data Science Lab, AITeC — National Center of Physics (NCP)",
    type: "Research",
    detail:
      "Conducted deep learning experiments and applied research to solve practical AI computer vision and predictive challenges within a premier national facility.",
    tags: ["Deep Learning", "PyTorch", "Applied Research"],
  },
  {
    period: "Internship",
    role: "Data Science Intern",
    org: "Bytewise Limited",
    type: "Industry",
    detail:
      "Completed intensive hands-on data science modules, working directly with raw datasets, statistical feature engineering, and predictive modeling.",
    tags: ["Pandas", "Scikit-Learn", "EDA"],
  },
  {
    period: "Sep 2021 — Jul 2025",
    role: "BS Computer & Information Sciences",
    org: "PIEAS University, Islamabad (CGPA: 3.09 / 4.0)",
    type: "Education",
    detail:
      "Rigorous CS foundation specializing in machine learning algorithms, database architecture, systems design, and mathematical foundations of computing.",
    tags: ["Algorithms", "Machine Learning", "Databases"],
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
    <section id="experience" className="relative scroll-mt-24 py-20 md:py-28 bg-[#090e17]/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            04 / Track Record
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Experience & <span className="text-gradient-mint">Education</span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl">
            A proven journey of academic rigor, research lab experience, and direct commercial freelancing.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 relative border-l border-slate-800 ml-3 sm:ml-6 pl-8 sm:pl-10 space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet Node */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#2dd4bf] bg-[#090e17] transition-transform group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(45,212,191,0.8)]">
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

              <h3 className="mt-2 text-xl font-bold text-white group-hover:text-[#2dd4bf] transition-colors">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-slate-300">{item.org}</p>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                {item.detail}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800 bg-[#0f1722] px-2.5 py-1 text-[11px] font-mono text-slate-400"
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
            <h3 className="font-display text-2xl font-bold text-white">
              Professional Certifications
            </h3>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0f1722]/80 p-5 transition-all duration-300 hover:border-[#2dd4bf]/40 hover:bg-[#131d27]"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#2dd4bf]">Verified</span>
                    <span className="text-[11px] font-mono text-slate-500">{cert.issuer}</span>
                  </div>

                  <h4 className="mt-3 text-base font-bold text-white group-hover:text-[#2dd4bf] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
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
