"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  Briefcase,
  Award,
  Globe,
  Compass,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const { candidate } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#121316] text-[#CEFF00] font-mono text-[11px] font-bold mb-3 tracking-wide">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
            Education & Professional Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#545860] leading-relaxed">
            Computer science undergraduate with practical expertise in edge computer vision, full-stack application development, and cybersecurity diagnostics.
          </p>
        </div>

        {/* Education & Experience Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Education Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-[#FBFBF9] border border-[#E2E1D9] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#121316] uppercase pb-4 border-b border-[#E2E1D9] mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>FORMAL EDUCATION</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#6B707B] mb-1">
                    <span>{candidate.education.timeline}</span>
                    <span className="font-bold text-[#10B981] bg-[#DCFCE7] px-2 py-0.5 rounded-xs">
                      CGPA {candidate.education.cgpa}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#121316]">
                    {candidate.education.institution}
                  </h3>
                  <div className="text-xs text-[#545860]">
                    {candidate.education.degree} ({candidate.education.semester})
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ECEAE2] space-y-2">
                  <div className="text-[11px] font-mono font-bold text-[#6B707B] uppercase">
                    PRIOR SCHOOLING
                  </div>
                  {candidate.education.priorEducation.map((edu) => (
                    <div
                      key={edu.institution}
                      className="flex items-center justify-between text-xs text-[#545860]"
                    >
                      <span>
                        {edu.institution} ({edu.level})
                      </span>
                      <span className="font-mono text-[#121316] font-semibold">
                        {edu.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#ECEAE2] text-[10px] font-mono text-[#6B707B]">
              CHENNAI, INDIA
            </div>
          </div>

          {/* Internship Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-[#FBFBF9] border border-[#E2E1D9] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#121316] uppercase pb-4 border-b border-[#E2E1D9] mb-6">
                <Briefcase className="w-4 h-4" />
                <span>INDUSTRY INTERNSHIP</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#6B707B]">
                  <span>{candidate.internship.timeline}</span>
                  <span className="font-bold text-[#121316]">{candidate.internship.location}</span>
                </div>
                <h3 className="text-lg font-bold text-[#121316]">
                  {candidate.internship.role} · {candidate.internship.company}
                </h3>
                <p className="text-xs sm:text-sm text-[#545860] leading-relaxed">
                  {candidate.internship.description}
                </p>
              </div>

              {/* Achievement Badge */}
              <div className="mt-6 p-4 rounded-xs bg-[#FFFDF5] border border-[#FDE68A]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B45309] mb-1">
                  <Award className="w-4 h-4 text-[#D97706]" />
                  <span>2ND PLACE · SARAM PROJECT DAY 2026</span>
                </div>
                <p className="text-xs text-[#78350F] leading-relaxed">
                  Secured 2nd place in the Edge Computing & Embedded AI track for Aura Vision, demonstrating efficient multimodal inference on CPU-only edge hardware.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#ECEAE2] text-[10px] font-mono text-[#6B707B]">
              VERIFIED PRACTICAL TRACK RECORD
            </div>
          </div>
        </div>

        {/* Languages & Interests Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="p-5 rounded-sm bg-[#F4F3EE] border border-[#E2E1D9]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121316] uppercase mb-3">
              <Globe className="w-4 h-4" />
              <span>LANGUAGES</span>
            </div>
            <div className="space-y-2">
              {candidate.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between text-xs bg-[#FFFFFF] p-2.5 rounded-xs border border-[#E2E1D9]"
                >
                  <span className="font-bold text-[#121316]">{lang.name}</span>
                  <span className="font-mono text-[#6B707B]">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="p-5 rounded-sm bg-[#F4F3EE] border border-[#E2E1D9]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121316] uppercase mb-3">
              <Compass className="w-4 h-4" />
              <span>PERSONAL PURSUITS</span>
            </div>
            <div className="space-y-2">
              {candidate.interests.map((interest) => (
                <div
                  key={interest.name}
                  className="text-xs bg-[#FFFFFF] p-2.5 rounded-xs border border-[#E2E1D9]"
                >
                  <span className="font-bold text-[#121316] block">{interest.name}</span>
                  <span className="text-[#545860] text-[11px]">{interest.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
