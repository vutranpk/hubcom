"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Database, CreditCard, LayoutDashboard, Code, ShieldCheck, Cloud, Box } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const platformFeatures = [
  {
    title: "Multi-Tenant Architecture",
    desc: "Data isolation per tenant with shared infrastructure. Scale from 10 to 10,000 customers without re-architecture.",
    icon: Database
  },
  {
    title: "Subscription & Billing",
    desc: "Flexible pricing tiers, usage-based billing, payment gateway integration (Stripe, VNPay, MoMo).",
    icon: CreditCard
  },
  {
    title: "Admin Dashboard",
    desc: "Tenant management, analytics, user management, and configuration panels for your operations team.",
    icon: LayoutDashboard
  },
  {
    title: "API-First Design",
    desc: "RESTful APIs with versioning, rate limiting, and comprehensive documentation for third-party integrations.",
    icon: Code
  },
  {
    title: "Role-Based Access",
    desc: "Granular permission system with organization-level roles, team management, and SSO support.",
    icon: ShieldCheck
  },
  {
    title: "Cloud-Native Deployment",
    desc: "Docker containers, CI/CD pipelines, auto-scaling, and 99.9% uptime SLA on AWS or GCP.",
    icon: Cloud
  }
];

const caseStudies = [
  {
    industry: "Retail & Fashion",
    title: "ECommerce SaaS Platform",
    desc: "Multi-vendor marketplace with customizable storefronts"
  },
  {
    industry: "Logistics",
    title: "OpenShip",
    desc: "Multi-carrier shipping API platform serving Vietnamese merchants"
  }
];

export default function SaasDevelopmentPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      
      gsap.fromTo(
        ".feature-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".features-section", start: "top 80%" }
        }
      );

      gsap.fromTo(
        ".case-study-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".case-studies-section", start: "top 80%" }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto">
        <Link href="/service/software" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-foreground transition-colors mb-12">
          &larr; Back to Software Services
        </Link>
        <div className="max-w-4xl">
          <h2 className="reveal-text text-sm font-mono uppercase tracking-widest text-blue-400 mb-6">SaaS Development</h2>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Build Your SaaS
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            We build production-ready SaaS platforms with multi-tenant architecture, subscription billing, and cloud-native deployment. Your platform, ready to onboard customers from day one.
          </p>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="features-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, idx) => (
            <div key={idx} className="feature-card p-8 rounded-[2rem] bg-card border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6 p-3 inline-flex rounded-full bg-zinc-800 text-blue-400">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="case-studies-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="case-study-card group relative p-10 md:p-12 rounded-[2rem] bg-card border border-zinc-800 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Box className="w-48 h-48 text-foreground" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-6 block relative z-10">
                {study.industry}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4 tracking-tight relative z-10">
                {study.title}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed relative z-10 max-w-sm">
                {study.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto text-center border-t border-zinc-900">
        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-8 text-foreground reveal-text">
          Launch Your SaaS
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto reveal-text">
          We've built SaaS platforms across e-commerce, logistics, and more. Let's build yours.
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
