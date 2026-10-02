"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        msg: "Your message has been sent successfully! I will reply to your email soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus({
        type: "error",
        msg: err.message || "Something went wrong. Please email directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-32 overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            05 / Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something <span className="text-gradient-mint">data-driven</span>.
          </h2>
          <p className="mt-4 text-slate-400">
            Open to freelance automation projects, custom machine learning pipelines, and full-time roles in data science and AI engineering.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          {/* Direct Contact Methods */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-white">Direct Channels</h3>
            <p className="text-sm text-slate-400">
              Reach out directly via email, phone, or LinkedIn. I typically reply within 24 hours.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:dilawarnaeem45@gmail.com"
                className="card-surface group flex items-center gap-4 p-4 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf] group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email Address</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#2dd4bf] transition-colors">
                    dilawarnaeem45@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+923027707095"
                className="card-surface group flex items-center gap-4 p-4 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf] group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#2dd4bf] transition-colors">
                    +92 302 7707095
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dilawar-ali-4b8185229"
                target="_blank"
                rel="noreferrer"
                className="card-surface group flex items-center gap-4 p-4 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf] group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#2dd4bf] transition-colors">
                    dilawar-ali-4b8185229
                  </div>
                </div>
              </a>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#0f1722]/60 p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2dd4bf]">
                <span className="h-2 w-2 rounded-full bg-[#2dd4bf] animate-ping" />
                <span>Current Location: Multan, Pakistan (UTC+5)</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Comfortable working asynchronously across US, European, and Asian time zones.
              </p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-[#0f1722]/90 p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="font-display text-xl font-bold text-white">Send a Direct Message</h3>
            <p className="mt-1 text-xs text-slate-400">
              Fill in your details below and this message will be processed immediately.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full rounded-xl border border-slate-800 bg-[#090e17] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#2dd4bf] focus:outline-none focus:ring-1 focus:ring-[#2dd4bf] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-slate-800 bg-[#090e17] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#2dd4bf] focus:outline-none focus:ring-1 focus:ring-[#2dd4bf] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-400 mb-1">
                  Subject / Project Scope
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Automation Pipeline / Freelance Opportunity"
                  className="w-full rounded-xl border border-slate-800 bg-[#090e17] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#2dd4bf] focus:outline-none focus:ring-1 focus:ring-[#2dd4bf] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe what you'd like to build, timeline, or inquiries..."
                  className="w-full rounded-xl border border-slate-800 bg-[#090e17] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#2dd4bf] focus:outline-none focus:ring-1 focus:ring-[#2dd4bf] transition-colors"
                />
              </div>

              {status.type === "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>{status.msg}</span>
                </div>
              )}

              {status.type === "error" && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{status.msg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2dd4bf] px-6 py-3 text-sm font-semibold text-[#090e17] transition-all hover:bg-[#5eead4] hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
