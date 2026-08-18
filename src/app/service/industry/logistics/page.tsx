"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Truck, Package, Box, Store, Navigation, Calculator } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Multi-Carrier Shipping APIs",
    desc: "Unified API connecting multiple shipping providers (GHN, GHTK, Viettel Post, J&T). Create shipments, calculate fees, track orders — one integration for all carriers.",
    icon: Truck
  },
  {
    title: "Order Management Systems",
    desc: "Centralized order processing with real-time status tracking, automated fulfillment workflows, and multi-channel sync (Shopee, Lazada, Tiki, website).",
    icon: Package
  },
  {
    title: "Warehouse Management",
    desc: "Inventory tracking, pick-pack-ship workflows, barcode scanning, stock alerts, and multi-location warehouse support.",
    icon: Box
  },
  {
    title: "Marketplace Platforms",
    desc: "Multi-vendor e-commerce marketplaces with seller onboarding, product management, commission systems, and buyer-seller messaging.",
    icon: Store
  },
  {
    title: "Last-Mile Delivery",
    desc: "Route optimization, driver tracking, proof of delivery, and real-time ETAs for local delivery operations.",
    icon: Navigation
  },
  {
    title: "Reconciliation & Analytics",
    desc: "Automated COD reconciliation, shipping cost analysis, delivery performance dashboards, and financial reporting.",
    icon: Calculator
  }
];

const caseStudies = [
  {
    industry: "Logistics / SaaS",
    title: "OpenShip — Unified Logistics API Platform",
    desc: "Multi-carrier shipping platform connecting GHN, GHTK, Viettel Post for Vietnamese merchants. Multi-tenant architecture, real-time tracking, automated reconciliation, and Telegram bot integration."
  }
];

export default function LogisticsPage() {
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
          <h2 className="reveal-text text-sm font-mono uppercase tracking-widest text-blue-400 mb-6">Logistics & E-Commerce</h2>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Ship Smarter
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            We build logistics platforms that connect carriers, automate fulfillment, and give merchants real-time visibility. From multi-carrier APIs to full marketplace systems.
          </p>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              Discuss Your Logistics Project
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
          Optimize Your Logistics
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto reveal-text">
          We built OpenShip from scratch. Whether you need a shipping API, OMS, or full marketplace — let's talk.
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
