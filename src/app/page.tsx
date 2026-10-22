"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EvidenceStrip } from "@/components/EvidenceStrip";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ApproachSection } from "@/components/ApproachSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#121316]">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Verified Resume Evidence Strip */}
        <EvidenceStrip />

        {/* All Four Featured Engineering Projects */}
        <ProjectShowcase />

        {/* Systematic Engineering Approach */}
        <ApproachSection />

        {/* Technical Capabilities Matrix */}
        <SkillsSection />

        {/* Education, Internship & Background */}
        <AboutSection />

        {/* Contact & Direct Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
