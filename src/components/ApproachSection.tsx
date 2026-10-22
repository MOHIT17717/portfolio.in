"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Eye,
  Search,
  PenTool,
  CheckCircle2,
  Boxes,
  FileText,
  Sparkles,
} from "lucide-react";

export function ApproachSection() {
  const { title, subtitle, steps } = PORTFOLIO_DATA.approach;

  const stepIcons = [
    <Eye key="eye" className="w-5 h-5 text-[#121316]" />,
    <Search key="search" className="w-5 h-5 text-[#121316]" />,
    <PenTool key="tool" className="w-5 h-5 text-[#121316]" />,
    <CheckCircle2 key="check" className="w-5 h-5 text-[#121316]" />,
    <Boxes key="boxes" className="w-5 h-5 text-[#121316]" />,
    <FileText key="file" className="w-5 h-5 text-[#121316]" />,
  ];

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#121316] text-[#CEFF00] font-mono text-[11px] font-bold mb-3 tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#545860] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-sm bg-[#FBFBF9] border border-[#E2E1D9] hover:border-[#121316] hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-sm bg-[#ECEAE2] flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#6B707B]">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#121316] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#545860] leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#ECEAE2] text-[10px] font-mono text-[#6B707B]">
                SYSTEMATIC ENGINEERING
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
