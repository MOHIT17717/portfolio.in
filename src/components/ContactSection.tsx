"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  ArrowUpRight,
  Send,
  Copy,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const { candidate } = PORTFOLIO_DATA;

  const [subject, setSubject] = useState(
    "Opportunity Discussion · Software Engineering / AI Systems"
  );
  const [message, setMessage] = useState(
    "Hi Mohit,\n\nI reviewed your portfolio and engineering projects and would like to discuss a technical opportunity with you.\n\nBest regards,\n[Your Name / Team]"
  );
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(candidate.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoUrl = `mailto:${candidate.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FBFBF9] border-b border-[#E2E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#121316] text-[#CEFF00] font-mono text-[11px] font-bold mb-3 tracking-wide">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
            Contact & Channels
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#545860] leading-relaxed">
            Interested in discussing AI systems, full-stack software development, or potential internship and engineering opportunities. Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 rounded-sm bg-[#FFFFFF] border border-[#E2E1D9] shadow-2xs">
              <div className="text-[10px] font-mono text-[#6B707B] uppercase tracking-wider mb-2">
                DIRECT EMAIL
              </div>
              <a
                href={`mailto:${candidate.email}`}
                className="text-lg sm:text-xl font-mono font-bold text-[#121316] hover:text-[#10B981] transition-colors break-all block mb-3"
              >
                {candidate.email}
              </a>
              <div className="flex items-center gap-2 pt-2 border-t border-[#ECEAE2]">
                <a
                  href={`mailto:${candidate.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-xs bg-[#121316] text-[#CEFF00] hover:bg-[#2A2B30] transition-colors"
                >
                  <Send className="w-3 h-3" />
                  <span>Open Mail Client</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xs border border-[#E2E1D9] hover:bg-[#F4F3EE] transition-colors text-[#545860]"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedEmail ? "Copied!" : "Copy Address"}</span>
                </button>
              </div>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#FFFFFF] border border-[#E2E1D9]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#6B707B] mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>PHONE</span>
                </div>
                <a
                  href={`tel:${candidate.phone.replace(/\s+/g, "")}`}
                  className="text-xs sm:text-sm font-mono font-bold text-[#121316] hover:underline"
                >
                  {candidate.phone}
                </a>
              </div>

              <div className="p-4 rounded-sm bg-[#FFFFFF] border border-[#E2E1D9]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#6B707B] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>LOCATION</span>
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[#121316]">
                  {candidate.location}
                </div>
              </div>
            </div>

            {/* Verified External Profile Badges */}
            <div className="p-5 rounded-sm bg-[#FFFFFF] border border-[#E2E1D9] space-y-3">
              <div className="text-[10px] font-mono text-[#6B707B] uppercase tracking-wider">
                VERIFIED PROFILES & REPOSITORIES
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={candidate.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xs bg-[#FBFBF9] border border-[#E2E1D9] hover:border-[#121316] transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121316]">
                    <svg className="w-4 h-4 fill-[#0077B5]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B707B] group-hover:text-[#121316]" />
                </a>

                <a
                  href={candidate.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xs bg-[#FBFBF9] border border-[#E2E1D9] hover:border-[#121316] transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121316]">
                    <svg className="w-4 h-4 fill-[#121316]" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                    </svg>
                    <span>GitHub Profile & Repos</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B707B] group-hover:text-[#121316]" />
                </a>

                <a
                  href={candidate.links.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xs bg-[#FBFBF9] border border-[#E2E1D9] hover:border-[#121316] transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121316]">
                    <span className="font-mono text-xs text-[#10B981]">●</span>
                    <span>portfolio.in Repository</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B707B] group-hover:text-[#121316]" />
                </a>

                <a
                  href={candidate.links.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohit_S_K_Resume.pdf"
                  className="flex items-center justify-between p-2.5 rounded-xs bg-[#121316] text-[#CEFF00] hover:bg-[#2A2B30] transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold">
                    <FileDown className="w-4 h-4 text-[#CEFF00]" />
                    <span>Download Verified Resume (PDF)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#CEFF00]" />
                </a>
              </div>
            </div>
          </div>

          {/* Functional Email Composer Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-[#FFFFFF] border border-[#E2E1D9] shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E1D9] mb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#121316] uppercase block">
                  FUNCTIONAL EMAIL COMPOSER
                </span>
                <span className="text-[11px] text-[#6B707B]">
                  Prepares a message to dispatch directly to mohit17717@gmail.com
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#DCFCE7] text-[#166534] font-bold">
                DIRECT MAILTO
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-[#121316] mb-1">
                  SUBJECT LINE
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2.5 rounded-xs bg-[#FBFBF9] border border-[#E2E1D9] text-xs font-mono text-[#121316] focus:border-[#121316] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#121316] mb-1">
                  MESSAGE BODY
                </label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2.5 rounded-xs bg-[#FBFBF9] border border-[#E2E1D9] text-xs font-mono text-[#121316] focus:border-[#121316] focus:outline-hidden resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#121316] text-[#CEFF00] font-mono text-xs font-bold hover:bg-[#2A2B30] transition-all shadow-xs"
                >
                  <Send className="w-4 h-4 text-[#CEFF00]" />
                  <span>SEND VIA EMAIL CLIENT</span>
                </a>

                <span className="text-[10px] font-mono text-[#8C909A]">
                  Direct delivery to mohit17717@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
