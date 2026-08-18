"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CreditCard, Gem, BarChart3, Building, PiggyBank, PieChart } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Payment Processing",
    desc: "Payment gateway integration (Stripe, VNPay, MoMo, ZaloPay), recurring billing, split payments, and PCI-compliant transaction handling.",
    icon: CreditCard
  },
  {
    title: "Asset Tokenization",
    desc: "Convert real-world assets into blockchain tokens — real estate, art, commodities. Fractional ownership with legal metadata binding.",
    icon: Gem
  },
  {
    title: "Trading Platforms",
    desc: "Order matching engines, real-time market data, portfolio management, and multi-asset trading interfaces.",
    icon: BarChart3
  },
  {
    title: "Property Management",
    desc: "Tenant management, lease tracking, maintenance requests, rent collection, and property portfolio analytics.",
    icon: Building
  },
  {
    title: "Investment Platforms",
    desc: "Crowdfunding, peer-to-peer lending, robo-advisory, and investor dashboards with KYC/AML compliance.",
    icon: PiggyBank
  },
  {
    title: "Financial Analytics",
    desc: "Risk assessment models, credit scoring, portfolio optimization, and regulatory reporting dashboards.",
    icon: PieChart
  }
];

const caseStudies = [
  {
    industry: "PropTech / FinTech",
    title: "Tokenize Real Estate",
    desc: "Real estate NFT platform with fractional ownership, enabling borderless investment in Vietnamese properties"
  },
  {
    industry: "DeFi / FinTech",
    title: "DexSpace DEX",
    desc: "Multi-chain decentralized exchange with customizable trading tools and liquidity management"
  }
];

export default function FintechPage() {
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
          <h2 className="reveal-text text-sm font-mono uppercase tracking-widest text-blue-400 mb-6">FinTech & Real Estate</h2>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Financial Technology
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            We build FinTech and PropTech platforms — from payment processing to asset tokenization. Secure, compliant, and ready for scale.
          </p>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              Discuss Your FinTech Project
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
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">Case Studies</h2>
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
          Build FinTech That Scales
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto reveal-text">
          Payments, tokenization, or trading — we've delivered across the FinTech stack. Let's discuss your project.
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
