"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Cpu, Award, LayoutDashboard, GraduationCap, CheckCircle2 } from "lucide-react";

export function EvidenceStrip() {
  const icons = [
    <Cpu key="cpu" className="w-4 h-4 text-[#CEFF00]" />,
    <Award key="award" className="w-4 h-4 text-[#CEFF00]" />,
    <LayoutDashboard key="dashboard" className="w-4 h-4 text-[#CEFF00]" />,
    <GraduationCap key="grad" className="w-4 h-4 text-[#CEFF00]" />,
  ];

  return (
    <div className="w-full border-y border-[#E2E1D9] bg-[#F4F3EE]/80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#6B707B] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>VERIFIED RESUME EVIDENCE BASE</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PORTFOLIO_DATA.evidenceStrip.map((item, idx) => (
              <div
                key={item.label}
                className="flex items-start gap-2.5 p-2.5 rounded-sm bg-[#FFFFFF] border border-[#E2E1D9] shadow-2xs hover:border-[#121316] transition-colors"
              >
                <div className="p-1.5 rounded-xs bg-[#121316] text-[#CEFF00] shrink-0 mt-0.5">
                  {icons[idx]}
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="text-xs font-mono font-bold text-[#121316] truncate">
                    {item.metric}
                  </div>
                  <div className="text-[11px] font-medium text-[#3D4048]">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-[#6B707B] line-clamp-1">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
