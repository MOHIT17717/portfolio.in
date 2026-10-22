"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121316] text-white py-12 border-t border-[#2A2B31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#252830]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 rounded-xs bg-[#CEFF00] flex items-center justify-center text-[#121316] font-mono font-bold text-xs">
                MSK
              </div>
              <span className="font-mono font-bold tracking-wider text-sm text-white">
                MOHIT S K
              </span>
              <span className="text-xs font-mono text-[#8C909A]">
                · AI & SOFTWARE ENGINEERING
              </span>
            </div>
            <p className="text-xs text-[#8C909A] max-w-md font-mono">
              Building intelligent systems. Engineering practical solutions. Personal developer portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href="#hero"
              className="text-[#A0A5B2] hover:text-[#CEFF00] transition-colors"
            >
              Home
            </a>
            <a
              href="#work"
              className="text-[#A0A5B2] hover:text-[#CEFF00] transition-colors"
            >
              Projects
            </a>
            <a
              href="#approach"
              className="text-[#A0A5B2] hover:text-[#CEFF00] transition-colors"
            >
              Approach
            </a>
            <a
              href="#skills"
              className="text-[#A0A5B2] hover:text-[#CEFF00] transition-colors"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-[#A0A5B2] hover:text-[#CEFF00] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#A0A5B2] hover:text-[#CEFF00] transition-colors"
            >
              Contact
            </a>
            <a
              href={PORTFOLIO_DATA.candidate.links.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CEFF00] hover:underline transition-colors"
            >
              GitHub: portfolio.in
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-[#6B707B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-live-pip" />
            <span>MOHIT S K · ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 MOHIT S K</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#A0A5B2] hover:text-[#CEFF00] transition-colors"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
