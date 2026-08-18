"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Activity, Video, UserCircle, Workflow, LineChart, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Electronic Health Records (EHR/EMR)",
    desc: "Centralized patient records with HL7/FHIR interoperability, role-based access, and audit trails for regulatory compliance.",
    icon: Activity
  },
  {
    title: "Telemedicine Platforms",
    desc: "Video consultation, appointment scheduling, e-prescriptions, and remote patient monitoring with real-time data sync.",
    icon: Video
  },
  {
    title: "Patient Portals",
    desc: "Self-service portals for appointment booking, lab results, medical history, and secure messaging with healthcare providers.",
    icon: UserCircle
  },
  {
    title: "Clinical Workflow Automation",
    desc: "Automate repetitive clinical and administrative tasks: intake forms, referral management, billing, and reporting.",
    icon: Workflow
  },
  {
    title: "Health Data Analytics",
    desc: "Population health dashboards, predictive risk scoring, treatment outcome analysis, and operational KPI tracking.",
    icon: LineChart
  },
  {
    title: "Medical Device Integration",
    desc: "Connect IoT medical devices, wearables, and lab equipment to centralized platforms via HL7, FHIR, and DICOM standards.",
    icon: Cpu
  }
];

const caseStudies = [
  {
    industry: "Health Informatics",
    title: "Galen: Centralized Person Profile",
    desc: "Unified personal health record platform consolidating medical data under U.S. healthcare standards. Built with HL7/FHIR compliance, multi-provider data aggregation, and secure patient access."
  }
];

const compliance = [
  "HL7/FHIR", "HIPAA-aware", "Vietnam PDPD", "DICOM", "ICD-10", 
  "Audit Logging", "Data Encryption", "Role-Based Access"
];

export default function HealthcarePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      
      gsap.fromTo(
        ".solution-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".solutions-section", start: "top 80%" }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans">
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto">
        <Link href="/service/software" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-foreground transition-colors mb-12">
          &larr; Back to Software Services
        </Link>
        <div className="max-w-4xl">
          <h2 className="reveal-text text-sm font-mono uppercase tracking-widest text-blue-400 mb-6">Healthcare</h2>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Healthcare Software
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            We build compliant healthcare systems — from patient records to telemedicine platforms. HL7/FHIR interoperability, HIPAA-aware architecture, built for clinical workflows.
          </p>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              Discuss Your Healthcare Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="solutions-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => (
            <div key={idx} className="solution-card p-8 rounded-[2rem] bg-card border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6 p-3 inline-flex rounded-full bg-zinc-800 text-blue-400">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">Case Study</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="p-10 md:p-12 rounded-[2rem] bg-card border border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-6 block">
                {study.industry}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4 tracking-tight">
                {study.title}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
                {study.desc}
              </p>
              <div className="inline-flex items-center text-sm font-medium text-foreground gap-2 hover:text-blue-400 transition-colors cursor-pointer">
                View case study <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900 text-center">
        <div className="mb-10 inline-flex items-center gap-2 text-blue-400">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Compliance & Standards</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-4xl mx-auto">
          {compliance.map((tech) => (
            <span key={tech} className="text-lg md:text-xl font-medium tracking-tight text-zinc-300 hover:text-foreground transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
