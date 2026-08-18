"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Code2, Cloud, Cpu, Link as LinkIcon, HeartPulse, GraduationCap, Truck, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const softwareTechStack = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "AWS",
  "GCP",
  "Solana",
  "Python",
  "TensorFlow",
  "LangChain",
  "Docker",
];

export default function SoftwareServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean reveal for text elements
      gsap.fromTo(
        ".reveal-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // Card reveal with subtle scale
      gsap.fromTo(
        ".luxury-card",
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".capabilities-grid",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans"
    >
      {/* 1. HERO SECTION - Minimalist, Pure Typography, No Eyebrow, Capped Padding */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <h1 className="reveal-text text-5xl md:text-7xl font-serif lg:text-[5.5rem] font-medium tracking-tighter leading-[1.05] mb-8 text-foreground max-w-4xl">
          Build What Matters
        </h1>
        <p className="reveal-text text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
          From idea to production — we build custom software, SaaS platforms, AI
          products, and Web3 applications. 50+ projects delivered across 5
          industries.
        </p>
        <div className="reveal-text">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>



      {/* 3. CAPABILITIES BENTO GRID - Cold Luxury, Image-First, Asymmetric */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-center">
          By Technology
        </h2>

        <div className="capabilities-grid grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[28rem]">
          {/* Card 1: Custom Software - Image Background */}
          <Link href="/service/software/custom" className="luxury-card block group relative col-span-1 md:col-span-8 rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image
              src="/hubcom/images/service/architecture.png"
              alt="Custom Software Architecture"
              fill
              className="object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-card/80 backdrop-blur-md border border-zinc-700/50 text-blue-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-foreground group-hover:text-blue-400 transition-colors">
                  Custom Software Development
                </h3>
              </div>
              <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                Full-stack web & mobile applications tailored to your business.
                From MVP in 4 weeks to enterprise-grade systems.
              </p>
            </div>
          </Link>

          {/* Card 2: SaaS Platform - Image Background */}
          <Link href="/service/software/saas" className="luxury-card block group relative col-span-1 md:col-span-4 rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image
              src="/hubcom/images/service/cloud.png"
              alt="SaaS Cloud Infrastructure"
              fill
              className="object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-card/80 backdrop-blur-md border border-zinc-700/50 text-blue-400">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-medium tracking-tight text-foreground group-hover:text-blue-400 transition-colors">
                  SaaS Platform Development
                </h3>
              </div>
              <p className="text-zinc-400 text-base leading-relaxed">
                Multi-tenant SaaS with subscription billing, admin dashboards,
                and scalable cloud architecture.
              </p>
            </div>
          </Link>

          {/* Card 3: AI Solutions - Image Background */}
          <Link href="/service/software/ai" className="luxury-card block group relative col-span-1 md:col-span-6 rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image
              src="/hubcom/images/service/ai.png"
              alt="AI Neural Network"
              fill
              className="object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-card/80 backdrop-blur-md border border-zinc-700/50 text-blue-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-foreground group-hover:text-blue-400 transition-colors">
                  AI Solutions & Integration
                </h3>
              </div>
              <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
                Apply AI to your existing software or build AI-native products.
                LLM, RAG, computer vision, and intelligent automation.
              </p>
            </div>
          </Link>

          {/* Card 4: Web3 - Image Background */}
          <Link href="/service/software/web3" className="luxury-card block group relative col-span-1 md:col-span-6 rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image
              src="/hubcom/images/service/web3.png"
              alt="Web3 Blockchain"
              fill
              className="object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-card/80 backdrop-blur-md border border-zinc-700/50 text-foreground group-hover:text-blue-400 transition-colors">
                  <LinkIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-foreground group-hover:text-blue-400 transition-colors">
                  Web3 & Blockchain
                </h3>
              </div>
              <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
                NFT platforms, DeFi protocols, smart contracts, and tokenization
                on Solana and Ethereum.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 3.5. BY INDUSTRY - 2-Column Split */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Heading */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-4 text-foreground">
              By Industry
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Domain expertise that accelerates delivery.
            </p>
          </div>
          
          {/* Right Column: Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <Link href="/service/industry/healthcare" className="group reveal-text block cursor-pointer">
              <div className="mb-6 p-3 inline-flex rounded-full bg-card border border-zinc-800 text-blue-400">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight group-hover:text-blue-400 transition-colors">Healthcare</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                HIPAA/HL7-compliant health record systems, telemedicine platforms, and clinical workflow automation.
              </p>
              <div className="inline-flex items-center text-sm font-medium text-foreground gap-2 group-hover:text-blue-400 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            
            <Link href="/service/industry/education" className="group reveal-text block cursor-pointer">
              <div className="mb-6 p-3 inline-flex rounded-full bg-card border border-zinc-800 text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight group-hover:text-blue-400 transition-colors">Education Technology</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Learning management systems, certification platforms, and education-to-employment pipelines.
              </p>
              <div className="inline-flex items-center text-sm font-medium text-foreground gap-2 group-hover:text-blue-400 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/service/industry/logistics" className="group reveal-text block cursor-pointer">
              <div className="mb-6 p-3 inline-flex rounded-full bg-card border border-zinc-800 text-blue-400">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight group-hover:text-blue-400 transition-colors">Logistics & E-Commerce</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Multi-carrier shipping APIs, order management, warehouse systems, and marketplace platforms.
              </p>
              <div className="inline-flex items-center text-sm font-medium text-foreground gap-2 group-hover:text-blue-400 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/service/industry/fintech" className="group reveal-text block cursor-pointer">
              <div className="mb-6 p-3 inline-flex rounded-full bg-card border border-zinc-800 text-blue-400">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight group-hover:text-blue-400 transition-colors">FinTech & Real Estate</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Payment processing, asset tokenization, trading platforms, and property management systems.
              </p>
              <div className="inline-flex items-center text-sm font-medium text-foreground gap-2 group-hover:text-blue-400 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - Refined, No Gradient Blobs */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto text-center border-t border-zinc-900">
        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-8 text-foreground">
          Ready to build?
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
          Let's discuss your technical requirements and architect the right solution.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95 mb-24"
        >
          Start a Project
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* TECH STACK - Compact & Non-full-width */}
      <section className="py-16 px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-600">Our Tech Stack</span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 max-w-4xl mx-auto">
            {softwareTechStack.map((tech) => (
              <span key={tech} className="text-sm font-medium tracking-wide text-zinc-400 hover:text-zinc-200 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
