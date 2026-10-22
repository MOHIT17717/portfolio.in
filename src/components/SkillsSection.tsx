"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Code2,
  Cpu,
  Layers,
  Server,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Terminal,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const { title, subtitle, categories } = PORTFOLIO_DATA.skills;

  const categoryIcons = [
    <Code2 key="code" className="w-4 h-4 text-[#121316]" />,
    <Layers key="lib" className="w-4 h-4 text-[#121316]" />,
    <Cpu key="ai" className="w-4 h-4 text-[#121316]" />,
    <Server key="data" className="w-4 h-4 text-[#121316]" />,
    <ShieldCheck key="sec" className="w-4 h-4 text-[#121316]" />,
    <Wrench key="hw" className="w-4 h-4 text-[#121316]" />,
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FBFBF9] border-b border-[#E2E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#121316] text-[#CEFF00] font-mono text-[11px] font-bold mb-3 tracking-wide">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#545860] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="p-6 rounded-sm bg-[#FFFFFF] border border-[#E2E1D9] shadow-2xs hover:border-[#121316] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-[#ECEAE2] mb-4">
                  <div className="p-2 rounded-xs bg-[#F4F3EE]">
                    {categoryIcons[idx]}
                  </div>
                  <h3 className="font-mono text-xs font-bold text-[#121316] uppercase tracking-wider">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-xs bg-[#F7F6F1] border border-[#E5E3DC] text-xs font-mono text-[#121316] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#ECEAE2] flex items-center justify-between text-[10px] font-mono text-[#6B707B]">
                <span>GROUNDED IN RESUME</span>
                <span className="text-[#10B981] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>VERIFIED</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
