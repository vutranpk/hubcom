"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Award, MonitorPlay, Briefcase, FileSignature, Users } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Learning Management Systems (LMS)",
    desc: "Course creation, content delivery, progress tracking, quizzes, and certificates. Support for video, documents, and interactive content.",
    icon: BookOpen
  },
  {
    title: "Certification & Credentialing",
    desc: "Digital certificate issuance, verification systems, and blockchain-backed credentials that employers can trust.",
    icon: Award
  },
  {
    title: "E-Learning Platforms",
    desc: "Interactive learning experiences with live classes, recorded sessions, peer discussions, and gamification elements.",
    icon: MonitorPlay
  },
  {
    title: "Education-to-Employment",
    desc: "Bridge learning to careers: skill assessments, job matching, employer partnerships, and placement tracking.",
    icon: Briefcase
  },
  {
    title: "Assessment & Examination",
    desc: "Online exam systems with proctoring, question banks, auto-grading, and detailed analytics for educators.",
    icon: FileSignature
  },
  {
    title: "Student & Parent Portals",
    desc: "Self-service portals for enrollment, grade tracking, payment management, and communication with instructors.",
    icon: Users
  }
];

const caseStudies = [
  {
    industry: "EdTech / Career",
    title: "All-in-One Edu, Cert & Jobs Platform",
    desc: "End-to-end education-to-employment platform: foundational courses, certification, skill assessment, and real job placement — all in one ecosystem."
  }
];

export default function EducationPage() {
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
          <h2 className="reveal-text text-sm font-mono uppercase tracking-widest text-blue-400 mb-6">Education Technology</h2>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            EdTech Solutions
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            We build education platforms that take learners from course enrollment to certification to job placement. LMS, e-learning, assessments, and career pipelines — all in one ecosystem.
          </p>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              Discuss Your EdTech Project
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

      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto text-center border-t border-zinc-900">
        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-8 text-foreground reveal-text">
          Build Your EdTech Platform
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto reveal-text">
          LMS, certification, or full education ecosystem — we've built the pipeline from learning to employment.
        </p>
        <div className="reveal-text">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
