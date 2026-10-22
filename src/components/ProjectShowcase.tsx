"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import {
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
  Award,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Sparkles,
  Sliders,
  Eye,
  BarChart3,
  Network,
} from "lucide-react";

export function ProjectShowcase() {
  const { projects } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "aura-vision":
        return <Cpu className="w-5 h-5 text-[#CEFF00]" />;
      case "manage-plus":
        return <Layers className="w-5 h-5 text-[#CEFF00]" />;
      case "aero-scan":
        return <ShieldCheck className="w-5 h-5 text-[#CEFF00]" />;
      case "edfa-vision":
        return <Activity className="w-5 h-5 text-[#CEFF00]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#CEFF00]" />;
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#121316] text-[#CEFF00] font-mono text-[11px] font-bold mb-3 tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121316] tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#545860] leading-relaxed">
              Four verified engineering projects spanning edge computer vision, autonomous workflow systems, network security diagnostics, and computational physical modeling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              { id: "all", label: "All Projects" },
              { id: "ai", label: "AI & Vision" },
              { id: "web", label: "Full-Stack" },
              { id: "cybersecurity", label: "Security" },
              { id: "computational", label: "Modeling" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xs transition-colors font-semibold ${
                  activeTab === tab.id
                    ? "bg-[#121316] text-[#CEFF00]"
                    : "bg-[#F4F3EE] text-[#545860] hover:text-[#121316] border border-[#E2E1D9]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="p-6 sm:p-8 lg:p-10 rounded-lg bg-[#FBFBF9] border border-[#E2E1D9] shadow-2xs hover:border-[#121316] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#6B707B]">
                      PROJECT {project.number}
                    </span>
                    <span className="text-[#9EA3AF] text-xs">/</span>
                    <span className="text-xs font-mono text-[#121316] font-semibold">
                      {project.category}
                    </span>
                    {project.award && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] font-bold">
                        <Award className="w-3 h-3 text-[#D97706]" />
                        <span>{project.award}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121316] tracking-tight">
                    {project.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#3D4048]">
                    {project.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#545860] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-mono font-bold text-[#121316] uppercase tracking-wide">
                      Key Technical Contributions
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#3D4048]">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#121316] rounded-full shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Pills */}
                  <div className="pt-3">
                    <div className="text-[10px] font-mono text-[#6B707B] uppercase mb-1.5">
                      TECHNOLOGY STACK
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-xs bg-[#FFFFFF] border border-[#E2E1D9] text-xs font-mono text-[#121316] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-[#121316] text-[#CEFF00] font-mono text-xs font-bold hover:bg-[#2A2B30] transition-colors"
                      >
                        <span>GitHub Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-[#FFFFFF] border border-[#E2E1D9] text-[#121316] font-mono text-xs font-semibold hover:border-[#121316] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Deployment</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual / Telemetry Card Column */}
                <div className="lg:col-span-5 w-full">
                  <div className="p-5 rounded-md bg-[#18191E] text-white border border-[#2F323A] shadow-md space-y-4">
                    <div className="flex items-center justify-between border-b border-[#2A2B31] pb-3">
                      <div className="flex items-center gap-2">
                        {getProjectIcon(project.id)}
                        <span className="font-mono text-xs font-bold text-white tracking-wider">
                          SYSTEM TELEMETRY & SPECS
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#10B981] bg-[#064E3B] px-2 py-0.5 rounded-xs">
                        VERIFIED CODE
                      </span>
                    </div>

                    {/* Resume Metrics (for MANAGE+) */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-2">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 rounded-xs bg-[#121316] border border-[#2B2E37]"
                          >
                            <span className="text-[9px] font-mono text-[#8C909A] uppercase block">
                              {m.label}
                            </span>
                            <span className="text-xl font-extrabold text-[#CEFF00] font-mono">
                              {m.value}
                            </span>
                            <span className="text-[9px] text-[#A0A5B2] block mt-0.5 line-clamp-2">
                              {m.note}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Architecture Specs */}
                    {project.specs && (
                      <div className="space-y-2 text-xs font-mono">
                        {Object.entries(project.specs).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-1.5 border-b border-[#252831] last:border-b-0"
                          >
                            <span className="text-[#8C909A] uppercase text-[10px]">
                              {key}:
                            </span>
                            <span className="text-white font-semibold text-right max-w-[65%]">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Aura Vision Pipeline Snapshot */}
                    {project.id === "aura-vision" && (
                      <div className="p-3 rounded-xs bg-[#121316] border border-[#2B2E37] text-[11px] font-mono text-[#A6E200] leading-snug">
                        <strong className="text-white block mb-1">
                          CPU Execution Pipeline:
                        </strong>
                        Camera (640x480) → Dual YOLOv8 → Temporal Gate → BLIP Captioner → Local Llama → Audio Feedback
                      </div>
                    )}

                    {/* EDFA Vision Formula Snapshot */}
                    {project.id === "edfa-vision" && (
                      <div className="p-3 rounded-xs bg-[#121316] border border-[#2B2E37] text-[11px] font-mono text-[#A6E200] leading-snug">
                        <strong className="text-white block mb-1">
                          Computational Simulation Core:
                        </strong>
                        Solves Giles–Desurvire differential rate equations across 1530–1565 nm with Three.js 3D ion rendering and 6 live Chart.js graphs.
                      </div>
                    )}

                    <div className="text-[10px] font-mono text-[#6B707B] flex items-center justify-between pt-1">
                      <span>PROJECT ARCHIVE ENTRY</span>
                      <span className="text-[#CEFF00]">MOHIT S K</span>
                    </div>
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
