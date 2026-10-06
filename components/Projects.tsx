"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Layers,
  Sparkles,
  Monitor,
  Globe,
  Smartphone,
  Laptop,
  Glasses,
  Compass,
  FileCode2,
  Cpu,
} from "lucide-react";

export interface Project {
  no: string;
  id: string;
  title: string;
  platform:
    | "windows"
    | "web"
    | "ios"
    | "macos"
    | "visionos"
    | "android"
    | "crossplatform"
    | "wordpress"
    | "ai";
  platformLabel: string;
  image: string;
  blurb: string;
  architecture: string;
  stack: string[];
  keyMetric: string;
  highlights: string[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    no: "01",
    id: "windows-telemetry",
    title: "Apex Telemetry — Enterprise Windows 11 Diagnostics Suite",
    platform: "windows",
    platformLabel: "Windows Desktop",
    image: "/projects/windows-desktop.jpg",
    blurb:
      "High-throughput Windows 11 enterprise client with Fluent Design System Mica acrylic materials, real-time hardware telemetry charts, thread scheduling profiler, and low-latency system sensor monitors.",
    architecture:
      "Decoupled MVVM pattern on .NET 8 runtime with ReactiveUI event streams, hardware abstraction layer (HAL) sensor polling, and local SQLite audit persistence.",
    stack: ["WinUI 3", "C# / .NET 8", "Fluent Design", "ReactiveUI", "SQLite"],
    keyMetric: "60 FPS Fluent UI • < 12ms Telemetry",
    highlights: ["Mica & Acrylic Translucency", "Multi-core Thread Profiling", "Hardware Sensor Feed"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "02",
    id: "quantumflow-saas",
    title: "QuantumFlow AI — Full-Stack Intelligent SaaS Web Platform",
    platform: "web",
    platformLabel: "Web Development",
    image: "/projects/saas-web.jpg",
    blurb:
      "Production SaaS web application built with Next.js 15, TypeScript, and FastAPI. Features live WebSockets data streaming, predictive AI model monitoring, multi-tenant RBAC, and responsive glassmorphism UI.",
    architecture:
      "Next.js App Router frontend with server-sent events, decoupled FastAPI backend microservices, async PostgreSQL connection pool, and Redis pub/sub cache.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "FastAPI", "WebSockets"],
    keyMetric: "99.9% Uptime • Sub-50ms Latency",
    highlights: ["Real-Time WebSockets Stream", "Predictive ML Monitoring", "Multi-Tenant RBAC"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "03",
    id: "biopulse-ios",
    title: "BioPulse Pro — Native iOS Biometrics & Activity Tracker",
    platform: "ios",
    platformLabel: "Native iOS",
    image: "/projects/ios-app.jpg",
    blurb:
      "Native iOS application crafted with SwiftUI 5 and Combine. Deeply integrated with Apple HealthKit, dynamic activity rings, Interactive Lock Screen & Home Screen WidgetKit, and offline-first encrypted persistence.",
    architecture:
      "Unidirectional data flow with SwiftUI Observation, CoreData encrypted store with CloudKit synchronization, and custom Metal shader-accelerated ring charts.",
    stack: ["Swift 6", "SwiftUI 5", "HealthKit", "WidgetKit", "CoreData"],
    keyMetric: "iOS 18 Native • HealthKit Synced",
    highlights: ["Dynamic Activity Rings", "Interactive Widgets", "Encrypted CoreData Store"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "04",
    id: "coremetric-macos",
    title: "CoreMetric — Native macOS Sequoia Performance Inspector",
    platform: "macos",
    platformLabel: "Native macOS",
    image: "/projects/macos-app.jpg",
    blurb:
      "Lightweight macOS desktop utility engineered with AppKit and SwiftUI. Offers granular CPU core threads inspection, unified memory bandwidth graphs, background daemon, and sleek macOS Sequoia translucent vibrancy.",
    architecture:
      "Hybrid AppKit/SwiftUI layout, native mach-kernel system statistics bindings, NSStatusItem Menu Bar controller, and low-footprint background telemetry engine.",
    stack: ["SwiftUI", "AppKit", "Metal", "SF Symbols", "SQLite"],
    keyMetric: "Native AppKit • < 0.5% Idle CPU",
    highlights: ["macOS Sequoia Glass Sidebar", "Thread Telemetry Engine", "Menu Bar Quick Daemon"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "05",
    id: "visionos-dataspace",
    title: "VisionOS Dataspace — 3D Spatial Computing Suite",
    platform: "visionos",
    platformLabel: "Apple visionOS",
    image: "/projects/visionos-app.jpg",
    blurb:
      "Groundbreaking spatial computing software for Apple Vision Pro. Built using RealityKit and ARKit, projecting floating volumetric data nodes, eye-tracking pinch controls, and spatial audio in augmented room environments.",
    architecture:
      "Volumetric window spaces in RealityKit, gesture recognizers bound to ARKit eye/hand tracking, custom RealityView materials, and low-latency spatial anchor persistence.",
    stack: ["visionOS 2", "RealityKit", "ARKit", "SwiftUI", "Spatial Audio"],
    keyMetric: "Spatial 4K Immersion • Gaze & Pinch Tracked",
    highlights: ["Volumetric 3D Windows", "Gaze & Pinch Navigation", "Room Spatial Anchors"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "06",
    id: "blockfolio-android",
    title: "Blockfolio — Native Android Material 3 Fintech App",
    platform: "android",
    platformLabel: "Native Android",
    image: "/projects/android-app.jpg",
    blurb:
      "Clean Architecture native Android application built with Kotlin and Jetpack Compose. Incorporates Material You dynamic theming, Kotlin Coroutines & Flow, biometric fingerprint authentication, and interactive sparkline charts.",
    architecture:
      "MVVM + Clean Architecture (Data, Domain, UI layers), Room DB with SQLCipher encryption, Hilt dependency injection, and state hoisting with Jetpack Compose.",
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "Coroutines/Flow", "Room DB"],
    keyMetric: "Clean Arch • Biometric Keystore",
    highlights: ["Material You Dynamic Color", "Biometric Authentication", "Encrypted Offline Room DB"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "07",
    id: "fleetpulse-crossplatform",
    title: "FleetPulse — On-Demand Logistics & Transit Solution",
    platform: "crossplatform",
    platformLabel: "Cross-Platform",
    image: "/projects/crossplatform-app.jpg",
    blurb:
      "High-performance cross-platform mobile client engineered with Flutter and React Native. Provides sub-second live GPS driver navigation, interactive route polylines, push notifications, and offline geofencing.",
    architecture:
      "Single multi-platform codebase with native bridging for background location daemons, Mapbox Vector tiles, WebSockets channel pooling, and Supabase real-time sync.",
    stack: ["Flutter", "Dart", "React Native", "Mapbox SDK", "Supabase"],
    keyMetric: "99.9% Shared Code • Sub-sec GPS",
    highlights: ["Live Mapbox Routing", "Sub-second GPS Webhook", "Universal iOS & Android"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "08",
    id: "aurelia-wordpress",
    title: "Aurélia Luxury — Headless WordPress & WooCommerce Portal",
    platform: "wordpress",
    platformLabel: "WordPress / WooCommerce",
    image: "/projects/wordpress-store.jpg",
    blurb:
      "Enterprise headless e-commerce and editorial portal. Integrates custom WordPress REST and GraphQL backends, WooCommerce cart synchronization, custom Gutenberg block components, and sub-second Next.js edge caching.",
    architecture:
      "Headless WordPress CMS with WPGraphQL, WooCommerce Store API endpoints, Advanced Custom Fields (ACF Pro) content models, and ISR edge hydration in Next.js.",
    stack: ["WordPress Headless", "WooCommerce", "GraphQL", "Next.js", "ACF Pro"],
    keyMetric: "100 Lighthouse Performance • Edge Cached",
    highlights: ["Headless GraphQL Catalog", "WooCommerce Cart Drawer", "ACF Pro Custom Blocks"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "09",
    id: "n8n-automation",
    title: "Enterprise Autonomous Lead Router & WhatsApp Cloud API",
    platform: "ai",
    platformLabel: "AI Automation",
    image: "/projects/saas-web.jpg",
    blurb:
      "End-to-end automations connecting AI agents to business tools — lead qualification, automated reporting, WhatsApp Cloud API webhooks, and zero-manual ops.",
    architecture:
      "Event-driven n8n webhook nodes orchestrated with Meta Graph API, LLM semantic intent router, and automated PostgreSQL transactional syncing.",
    stack: ["n8n", "Make.com", "WhatsApp Cloud API", "AI Agents", "REST APIs"],
    keyMetric: "90% Manual Time Reduction • < 2s Response",
    highlights: ["Autonomous Lead Triage", "WhatsApp Cloud API", "Zero-Manual Operations"],
    githubUrl: "https://github.com/dilawar45",
  },
  {
    no: "10",
    id: "cv-pedestrian-ml",
    title: "GraphCodeBERT & Real-Time Computer Vision Pipeline",
    platform: "ai",
    platformLabel: "Machine Learning & Vision",
    image: "/projects/windows-desktop.jpg",
    blurb:
      "Source-code similarity detection engine using AST & CFG graphs with GraphCodeBERT embeddings alongside 45+ FPS YOLOv8 crowd detection on live video feeds.",
    architecture:
      "Pycparser AST extraction pipeline combined with PyTorch Transformer embeddings, served through asynchronous FastAPI endpoints with OpenCV streaming.",
    stack: ["PyTorch", "GraphCodeBERT", "YOLOv8", "OpenCV", "FastAPI"],
    keyMetric: "45+ FPS Real-Time • AST Semantic Graph",
    highlights: ["AST + CFG Semantic Analysis", "YOLOv8 Video Pipeline", "Async FastAPI Inference"],
    githubUrl: "https://github.com/dilawar45",
  },
];

const categories = [
  { id: "all", label: "All Platforms", icon: Layers, count: 10 },
  { id: "windows", label: "Windows", icon: Monitor, count: 1 },
  { id: "web", label: "Web Dev", icon: Globe, count: 1 },
  { id: "ios", label: "iOS", icon: Smartphone, count: 1 },
  { id: "macos", label: "macOS", icon: Laptop, count: 1 },
  { id: "visionos", label: "visionOS", icon: Glasses, count: 1 },
  { id: "android", label: "Android", icon: Smartphone, count: 1 },
  { id: "crossplatform", label: "Cross-Platform", icon: Compass, count: 1 },
  { id: "wordpress", label: "WordPress", icon: FileCode2, count: 1 },
  { id: "ai", label: "AI & ML", icon: Cpu, count: 2 },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.platform === activeCategory);

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#2dd4bf] uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>03 / Multi-Platform Engineering Portfolio</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 sm:text-5xl">
                Production Solutions Across{" "}
                <span className="text-gradient-mint">Every Platform</span>
              </h2>
              <p className="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 sm:text-lg">
                Production-grade applications engineered for desktop operating systems,
                native mobile ecosystems, spatial computing, enterprise web, and headless content platforms.
              </p>
            </div>

            {/* Quick summary metric badge */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-white p-4 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 text-xl font-bold font-display text-[#2dd4bf]">
                8+
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                  Target Ecosystems
                </div>
                <div className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  Windows &bull; Web &bull; iOS &bull; macOS &bull; visionOS &bull; Android &bull; Flutter &bull; WP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs - Responsive Scrollable on small / fold devices */}
        <div className="mt-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-[#0f1722]/80 dark:border-slate-800 dark:bg-[#0f1722]/80 light:border-slate-200 light:bg-slate-100/90 p-2 backdrop-blur-md min-w-max">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#2dd4bf] text-[#090e17] font-semibold shadow-md shadow-[#2dd4bf]/25"
                      : "text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200 dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-white/80"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive
                        ? "bg-[#090e17]/20 text-[#090e17]"
                        : "bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-700"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid - Adaptable for foldable displays and ultrawides */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {filteredProjects.map((p) => (
            <article
              key={p.no}
              className="card-surface group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-[#0f1722]/90 dark:border-slate-800 dark:bg-[#0f1722]/90 light:border-slate-200 light:bg-white shadow-xl transition-all duration-300 hover:border-[#2dd4bf]/50 hover:shadow-2xl hover:shadow-[#2dd4bf]/10 hover:-translate-y-1"
            >
              {/* Project Image Header */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800 dark:border-slate-800 light:border-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={p.no === "01" || p.no === "02"}
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1722] via-transparent to-black/30 dark:from-[#0f1722] light:from-white/90 pointer-events-none" />

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="rounded-lg border border-[#2dd4bf]/40 bg-[#090e17]/80 px-2.5 py-1 text-xs font-mono font-semibold text-[#2dd4bf] backdrop-blur-md shadow-md">
                    #{p.no} &bull; {p.platformLabel}
                  </span>

                  <span className="rounded-lg border border-slate-700/60 bg-black/60 px-2.5 py-1 text-[11px] font-mono text-slate-200 backdrop-blur-md">
                    Production Grade
                  </span>
                </div>

                {/* Bottom image banner: key metric */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="rounded-md border border-[#2dd4bf]/30 bg-[#2dd4bf]/15 px-2.5 py-1 text-[11px] font-mono font-semibold text-[#2dd4bf] backdrop-blur-md">
                    {p.keyMetric}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors group-hover:text-[#2dd4bf]">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {p.blurb}
                  </p>

                  {/* Architecture & Highlights */}
                  <div className="mt-4 rounded-xl border border-slate-800/80 bg-slate-900/50 dark:border-slate-800/80 dark:bg-slate-900/50 light:border-slate-200 light:bg-slate-50 p-3.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <span className="font-semibold text-[#2dd4bf]">Architecture: </span>
                    <span>{p.architecture}</span>
                  </div>

                  {/* Highlights pills */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md bg-slate-800/70 dark:bg-slate-800/70 light:bg-slate-200/80 px-2 py-0.5 text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-700"
                      >
                        &bull; {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Stack & Actions */}
                <div className="mt-6 pt-5 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[#2dd4bf]/25 bg-[#2dd4bf]/10 px-2 py-0.5 text-[11px] font-mono text-[#2dd4bf]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/60 dark:border-slate-700 dark:bg-slate-800/60 light:border-slate-300 light:bg-white px-3 py-1.5 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 transition-all hover:border-[#2dd4bf] hover:text-[#2dd4bf]"
                    >
                      <span>Inquire / Specs</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
