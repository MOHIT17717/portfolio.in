"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  FileDown,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Work", href: "#work" },
    { label: "The Lab", href: "#experiments", highlight: true },
    { label: "Approach", href: "#approach" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#E2E1D9] shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Personal Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-8 h-8 rounded-sm bg-[#121316] flex items-center justify-center text-[#CEFF00] font-mono font-bold text-xs tracking-wider transition-transform group-hover:scale-105">
              MSK
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-wider text-sm text-[#121316]">
                MOHIT S K
              </span>
              <span className="text-[10px] text-[#6B707B] tracking-tight font-mono">
                AI SYSTEMS & SOFTWARE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 bg-[#F4F3EE]/90 border border-[#E2E1D9] rounded-full px-4 py-1.5 shadow-2xs"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-mono font-medium px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  link.highlight
                    ? "bg-[#121316] text-[#CEFF00] shadow-xs"
                    : "text-[#3D4048] hover:text-[#121316] hover:bg-[#ECEAE2]"
                }`}
              >
                {link.highlight && <Sparkles className="w-3 h-3 text-[#CEFF00]" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-sm border border-[#E2E1D9] bg-[#FFFFFF] text-[11px] font-mono text-[#6B707B]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-live-pip" />
              <span>AVAILABLE FOR ROLES</span>
            </div>

            <a
              href={PORTFOLIO_DATA.candidate.links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohit_S_K_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-2 rounded-sm border border-[#121316] bg-[#121316] text-[#CEFF00] hover:bg-[#2A2B30] transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.candidate.links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohit_S_K_Resume.pdf"
              className="text-xs font-mono p-2 rounded-sm border border-[#121316] bg-[#121316] text-[#CEFF00]"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm border border-[#E2E1D9] bg-[#F4F3EE] text-[#121316]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-lg bg-[#FFFFFF] border border-[#E2E1D9] shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-mono px-3 py-2 rounded-sm flex items-center justify-between ${
                    link.highlight
                      ? "bg-[#121316] text-[#CEFF00]"
                      : "text-[#3D4048] hover:bg-[#F4F3EE]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
              <div className="pt-2 border-t border-[#E2E1D9] flex flex-col gap-2">
                <a
                  href={PORTFOLIO_DATA.candidate.links.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohit_S_K_Resume.pdf"
                  className="w-full text-center text-xs font-mono font-semibold py-2.5 rounded-sm bg-[#121316] text-[#CEFF00]"
                >
                  Download Verified Resume (PDF)
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
