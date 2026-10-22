"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  Activity,
  Sliders,
  CheckCircle2,
  FileDown,
} from "lucide-react";

export function HeroSection() {
  const [activePipelineIndex, setActivePipelineIndex] = useState(2);
  const [inferenceMode, setInferenceMode] = useState<"edge" | "cloud">("edge");

  const heroPipelineNodes = [
    {
      id: "brief",
      name: "01 · Brief Intake",
      shortLabel: "Brief",
      sub: "Multimodal Parsing",
      latencyEdge: "12ms",
      latencyCloud: "120ms",
      model: "Local Llama 3.3 (Q4)",
      task: "Extracts physical hardpoint limits & packaging boundaries from unstructured text/sketches.",
    },
    {
      id: "embedding",
      name: "02 · CMF Clustering",
      shortLabel: "Research",
      sub: "ViT Semantic Grouping",
      latencyEdge: "28ms",
      latencyCloud: "240ms",
      model: "Vision Transformer (ViT)",
      task: "Groups reference moodboards by surface tension, gloss level, and aerodynamic character lines.",
    },
    {
      id: "ideation",
      name: "03 · Latent Exploration",
      shortLabel: "Ideation",
      sub: "Hardpoint-Locked Diffusion",
      latencyEdge: "185ms",
      latencyCloud: "850ms",
      model: "ControlNet SDXL",
      task: "Generates styling silhouette variations strictly conditioned on wheelbase & rake clearances.",
    },
    {
      id: "evaluation",
      name: "04 · Consequence Audit",
      shortLabel: "Review",
      sub: "Multi-Agent Resolver",
      latencyEdge: "45ms",
      latencyCloud: "320ms",
      model: "Autonomous DAG Engine",
      task: "Predicts downstream tooling and aerodynamic trade-offs across competing styling proposals.",
    },
    {
      id: "handoff",
      name: "05 · Spec Drafting",
      shortLabel: "Handoff",
      sub: "Automated Callouts",
      latencyEdge: "15ms",
      latencyCloud: "90ms",
      model: "Structured Spec Generator",
      task: "Drafts engineering-ready CMF callouts, mold draft compliance sheets, and BOM mappings.",
    },
  ];

  const activeNode = heroPipelineNodes[activePipelineIndex];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden tech-grid">
      {/* Decorative Blueprint Corner Crosshairs */}
      <div className="absolute top-24 left-8 text-[11px] font-mono text-[#9EA3AF] select-none pointer-events-none hidden lg:block">
        + SYS_COORD: 12.9716° N, 80.2707° E [CHENNAI / TECH_LAB]
      </div>
      <div className="absolute top-24 right-8 text-[11px] font-mono text-[#9EA3AF] select-none pointer-events-none hidden lg:block">
        + SPEC: MSK-SYS-V2.6 // PROD
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E1D9] shadow-2xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#CEFF00] border border-[#121316] animate-pulse" />
          <span className="text-xs font-mono font-semibold text-[#121316] uppercase tracking-wider">
            AI Systems · Edge Computing · Intelligent Automation
          </span>
          <span className="text-[#9EA3AF] text-xs">/</span>
          <span className="text-xs font-mono text-[#6B707B]">Full-Stack Engineering</span>
        </div>

        {/* Hero Headline & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#121316] tracking-tight leading-[1.08]">
              Building intelligent systems for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#121316]">real-world</span>
                <span className="absolute left-0 bottom-1.5 w-full h-3 bg-[#CEFF00]/40 -z-0 transform -rotate-1" />
              </span>{" "}
              problems.
            </h1>

            <p className="text-base sm:text-lg text-[#3D4048] leading-relaxed max-w-2xl font-normal">
              I am <strong className="font-semibold text-[#121316]">Mohit S K</strong>. I explore the intersection of AI, software engineering, and practical product experiences — turning complex technical challenges into useful, deployable solutions.
            </p>

            {/* Micro-callout about engineering philosophy */}
            <div className="p-4 rounded-sm bg-[#FFFFFF] border-l-4 border-[#121316] border-y border-r border-[#E2E1D9] shadow-2xs">
              <div className="text-xs font-mono font-bold text-[#121316] mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#CEFF00] rounded-full" />
                <span>PRACTICAL ENGINEERING FIRST</span>
              </div>
              <p className="text-xs text-[#545860] leading-relaxed">
                Whether deploying edge computer vision on CPU-constrained Raspberry Pi boards, orchestrating autonomous multi-agent task reallocation in Next.js, or building frictionless AI tools for creative workflows, I focus on low latency, clear feedback loops, and human-in-the-loop explainability.
              </p>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#121316] text-[#CEFF00] font-mono text-xs font-bold hover:bg-[#2A2B30] transition-all shadow-xs"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#experiments"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#FFFFFF] border border-[#E2E1D9] text-[#121316] font-mono text-xs font-semibold hover:border-[#121316] hover:bg-[#F7F6F1] transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#121316]" />
                <span>INTERACTIVE LAB</span>
                <ChevronRight className="w-4 h-4 text-[#6B707B]" />
              </a>

              <a
                href={PORTFOLIO_DATA.candidate.links.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                download="Mohit_S_K_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono font-medium text-[#6B707B] hover:text-[#121316] transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Interactive Hero AI Workflow Visualization */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-lg bg-[#18191E] border border-[#2F323A] shadow-xl overflow-hidden text-white">
              {/* Terminal / System Header */}
              <div className="px-4 py-3 bg-[#121316] border-b border-[#2A2B31] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="text-[11px] font-mono text-[#8C909A] ml-2">
                    AI PIPELINE TELEMETRY
                  </span>
                </div>

                {/* Mode toggle */}
                <div className="flex items-center gap-1 bg-[#1F2127] p-1 rounded-sm border border-[#3A3D46]">
                  <button
                    onClick={() => setInferenceMode("edge")}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-xs transition-colors ${
                      inferenceMode === "edge"
                        ? "bg-[#CEFF00] text-[#121316] font-bold"
                        : "text-[#8C909A] hover:text-white"
                    }`}
                  >
                    EDGE (CPU)
                  </button>
                  <button
                    onClick={() => setInferenceMode("cloud")}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-xs transition-colors ${
                      inferenceMode === "cloud"
                        ? "bg-[#CEFF00] text-[#121316] font-bold"
                        : "text-[#8C909A] hover:text-white"
                    }`}
                  >
                    CLOUD CLUSTER
                  </button>
                </div>
              </div>

              {/* Pipeline Stepper Nodes */}
              <div className="p-4 bg-[#141519] border-b border-[#2A2B31]">
                <div className="text-[10px] font-mono text-[#6B707B] mb-2 flex items-center justify-between">
                  <span>INTERACTIVE STAGES (CLICK TO INSPECT)</span>
                  <span className="text-[#CEFF00]">
                    {inferenceMode === "edge" ? "LATENCY OPTIMIZED" : "DEEP PARAMETERS"}
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-1.5">
                  {heroPipelineNodes.map((node, index) => {
                    const isSelected = activePipelineIndex === index;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActivePipelineIndex(index)}
                        className={`p-2 rounded-xs text-left transition-all relative ${
                          isSelected
                            ? "bg-[#252830] border border-[#CEFF00] shadow-2xs"
                            : "bg-[#1B1D23] border border-[#2B2E37] hover:border-[#4B505E]"
                        }`}
                      >
                        <div className="text-[9px] font-mono text-[#8C909A] truncate">
                          {node.shortLabel}
                        </div>
                        <div
                          className={`text-[11px] font-mono font-bold truncate ${
                            isSelected ? "text-[#CEFF00]" : "text-white"
                          }`}
                        >
                          {inferenceMode === "edge" ? node.latencyEdge : node.latencyCloud}
                        </div>
                        {isSelected && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#CEFF00] rotate-45" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Node Detail Inspector Card */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-[#2A2B31] pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
                    <span className="font-mono text-sm font-bold text-white">
                      {activeNode.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#242731] text-[#A6E200] border border-[#3A3E4D]">
                    {activeNode.model}
                  </span>
                </div>

                <p className="text-xs text-[#B5BAC6] leading-relaxed">
                  {activeNode.task}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono bg-[#141519] p-3 rounded-sm border border-[#282B34]">
                  <div>
                    <span className="text-[#6B707B] block text-[9px]">EXECUTION LATENCY</span>
                    <span className="text-[#CEFF00] font-bold">
                      {inferenceMode === "edge" ? activeNode.latencyEdge : activeNode.latencyCloud}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#6B707B] block text-[9px]">INFRASTRUCTURE</span>
                    <span className="text-white">
                      {inferenceMode === "edge" ? "Local Arm CPU / Zero Leak" : "Distributed Serverless"}
                    </span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[#8C909A] flex items-center justify-between pt-1">
                  <span>SIMULATED PIPELINE TELEMETRY</span>
                  <span className="text-[#10B981] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>DETERMINISTIC VERIFIED</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
