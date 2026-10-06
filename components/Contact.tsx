"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  Clock,
  MapPin,
  Loader2,
} from "lucide-react";

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

const quickTopics = [
  "Web Development",
  "Windows Desktop App",
  "iOS / SwiftUI",
  "Android / Compose",
  "visionOS Spatial App",
  "Cross-Platform App",
  "WordPress & WooCommerce",
  "AI & Automation",
];

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
        msg: "Thank you! Your message has been sent successfully. I will respond to your email promptly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus({
        type: "error",
        msg: err.message || "Something went wrong. Please reach out via email directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectTopic = (topic: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: `Project Inquiry: ${topic}`,
    }));
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-20 md:py-32 overflow-hidden border-t border-slate-800 dark:border-slate-800 light:border-slate-200"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>06 / Communication & Contact</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 sm:text-5xl">
            Send a <span className="text-gradient-mint">Message</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 sm:text-lg">
            Have a project in mind for Windows, Web, iOS, macOS, visionOS, Android, Cross-Platform,
            or WordPress? Send a direct message below or reach out via direct channels.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-start">
          {/* Direct Channels */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Direct Channels
              </h3>
              <p className="mt-1 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
                Available for high-impact software contracts and full-time technical leadership.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:dilawarnaeem45@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-white p-4 transition-all duration-200 hover:border-[#2dd4bf]/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf] transition-transform group-hover:scale-105">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider">
                    Direct Email
                  </div>
                  <div className="truncate text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 group-hover:text-[#2dd4bf] transition-colors">
                    dilawarnaeem45@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+923027707095"
                className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-white p-4 transition-all duration-200 hover:border-[#2dd4bf]/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf] transition-transform group-hover:scale-105">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider">
                    Phone &amp; WhatsApp
                  </div>
                  <div className="truncate text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 group-hover:text-[#2dd4bf] transition-colors">
                    +92 302 7707095
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dilawar-ali-4b8185229"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-white p-4 transition-all duration-200 hover:border-[#2dd4bf]/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf] transition-transform group-hover:scale-105">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider">
                    LinkedIn Network
                  </div>
                  <div className="truncate text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 group-hover:text-[#2dd4bf] transition-colors">
                    linkedin.com/in/dilawar-ali
                  </div>
                </div>
              </a>
            </div>

            {/* Time zone & Availability Card */}
            <div className="rounded-2xl border border-slate-800 bg-[#0f1722]/60 dark:border-slate-800 dark:bg-[#0f1722]/60 light:border-slate-200 light:bg-slate-50 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2dd4bf]">
                <MapPin className="h-4 w-4" />
                <span>Multan, Pakistan (UTC+5)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                <Clock className="h-4 w-4 text-[#2dd4bf]" />
                <span>Typical response turnaround: Within 4 hours</span>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                Equipped for asynchronous team collaboration across North America, Europe, UAE, and APAC time zones.
              </p>
            </div>
          </div>

          {/* Interactive "Send a Message" Form */}
          <div className="rounded-2xl border border-slate-800 bg-[#0f1722]/90 dark:border-slate-800 dark:bg-[#0f1722]/90 light:border-slate-200 light:bg-white p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 dark:border-slate-800 light:border-slate-100 pb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                  Fill in the details below for a quick project consultation or quote.
                </p>
              </div>
              <span className="rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-3 py-1 text-[11px] font-mono text-[#2dd4bf]">
                Live Form
              </span>
            </div>

            {/* Quick Topic Chips */}
            <div className="mt-5">
              <label className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2">
                Quick Select Platform / Topic:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {quickTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => selectTopic(topic)}
                    className="rounded-lg border border-slate-700 bg-slate-800/40 dark:border-slate-700 dark:bg-slate-800/40 light:border-slate-300 light:bg-slate-100 px-2.5 py-1 text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors hover:border-[#2dd4bf] hover:text-[#2dd4bf]"
                  >
                    + {topic}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 dark:border-slate-700 dark:bg-slate-900/80 light:border-slate-300 light:bg-white px-4 py-2.5 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:border-[#2dd4bf] focus:outline-none focus:ring-1 focus:ring-[#2dd4bf]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 dark:border-slate-700 dark:bg-slate-900/80 light:border-slate-300 light:bg-white px-4 py-2.5 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:border-[#2dd4bf] focus:outline-none focus:ring-1 focus:ring-[#2dd4bf]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-1"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry or discussion topic"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 dark:border-slate-700 dark:bg-slate-900/80 light:border-slate-300 light:bg-white px-4 py-2.5 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:border-[#2dd4bf] focus:outline-none focus:ring-1 focus:ring-[#2dd4bf]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-1"
                >
                  Message Content *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your vision, timeline, platform requirements, or key deliverables..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/80 dark:border-slate-700 dark:bg-slate-900/80 light:border-slate-300 light:bg-white px-4 py-2.5 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:border-[#2dd4bf] focus:outline-none focus:ring-1 focus:ring-[#2dd4bf]"
                />
              </div>

              {/* Status Alert */}
              {status.type && (
                <div
                  className={`flex items-start gap-3 rounded-xl p-3.5 text-xs ${
                    status.type === "success"
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border border-red-500/30 bg-red-500/10 text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-400" />
                  )}
                  <span>{status.msg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2dd4bf] px-6 py-3 text-sm font-semibold text-[#090e17] transition-all hover:bg-[#5eead4] hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
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
