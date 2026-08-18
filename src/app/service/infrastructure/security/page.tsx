"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Camera, XCircle, CheckCircle2, ChevronRight, BarChart3, Clock, Users, ShieldCheck, ShieldAlert, Monitor, HardDrive } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "4K", label: "Ultra HD resolution", icon: Monitor },
  { value: "90", label: "Days max storage", icon: HardDrive },
  { value: "80%", label: "Theft reduction", icon: ShieldAlert },
  { value: "1", label: "Day installation", icon: Clock }
];

const problems = [
  "Old cameras too blurry to identify faces",
  "Losing merchandise but no evidence",
  "Don't know what staff does when boss is away",
  "Reviewing footage takes all day"
];

const process = [
  { num: "01", title: "Site survey", desc: "Identify blind spots, optimal positions, storage needs" },
  { num: "02", title: "Solution consulting", desc: "AI cameras, NVR, HDD matching your budget" },
  { num: "03", title: "Clean installation", desc: "Hidden wiring, no aesthetic impact" },
  { num: "04", title: "Setup & training", desc: "Phone connection, remote viewing guide" }
];

const benefits = [
  "Crystal clear footage - see faces and license plates",
  "Watch anytime, anywhere - from phone or computer",
  "Smart alerts - get notified when strangers appear",
  "Secure storage - review footage up to 30-90 days",
  "High security - only authorized people can view"
];

const whyUs = [
  "AI cameras with face & license plate recognition",
  "Clean installation with hidden wiring",
  "Remote viewing from phone anytime, anywhere",
  "24-month manufacturer warranty"
];

const cases = [
  { target: "Retail store", before: "Constant theft, old cameras too blurry", after: "80% less theft, caught 2 thieves in first month" },
  { target: "Co-working space", before: "No access control, guards logging manually", after: "Automatic logs, saved 1 security guard" },
  { target: "Logistics warehouse", before: "Delivery disputes, no proof of handover", after: "90-day storage, resolve disputes in 5 minutes" }
];

export default function SecurityCameraPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      
      gsap.fromTo(
        ".fade-up-element",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".content-section", start: "top 80%" }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 lg:px-8 max-w-[1400px] mx-auto">
        <Link href="/service/infrastructure" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-foreground transition-colors mb-12">
          &larr; Back to Infrastructure
        </Link>
        <div className="max-w-4xl">
          <div className="reveal-text mb-6 inline-flex p-4 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Camera className="w-8 h-8" />
          </div>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Security Camera Systems
          </h1>
          <h2 className="reveal-text text-2xl md:text-3xl font-serif text-zinc-300 font-medium mb-6">
            Do you know what happens at your office when you're away?
          </h2>
          <p className="reveal-text text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            Watch cameras from your phone - peace of mind anywhere
          </p>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              FREE Installation Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 lg:px-8 max-w-[1400px] mx-auto pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-text">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-card border border-zinc-800">
              <stat.icon className="w-6 h-6 text-blue-400 mb-4" />
              <div className="text-3xl md:text-4xl font-medium text-foreground mb-2">{stat.value}</div>
              <div className="text-zinc-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS VS BENEFITS */}
      <section className="content-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="fade-up-element">
            <h3 className="text-3xl font-serif font-medium tracking-tighter mb-4 text-foreground">Common Problems</h3>
            <p className="text-zinc-400 mb-8">Does this sound familiar?</p>
            <ul className="space-y-6">
              {problems.map((prob, i) => (
                <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-red-950/20 border border-red-900/30">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="text-zinc-300 leading-relaxed">{prob}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-up-element">
            <h3 className="text-3xl font-serif font-medium tracking-tighter mb-4 text-foreground">What You Get</h3>
            <p className="text-zinc-400 mb-8">The Hubcom difference</p>
            <ul className="space-y-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-blue-950/20 border border-blue-900/30">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                  <span className="text-zinc-300 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-6 text-foreground text-center">Our Process</h2>
        <p className="text-zinc-400 text-center mb-16">Simple, transparent, and efficient</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <div key={i} className="fade-up-element p-8 rounded-[2rem] bg-card border border-zinc-800 relative overflow-hidden">
              <div className="text-6xl font-black text-zinc-800/50 absolute -top-4 -right-4">{step.num}</div>
              <h3 className="text-xl font-medium text-foreground mb-4 relative z-10">{step.title}</h3>
              <p className="text-zinc-400 relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLVED FOR */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-6 text-foreground">Solved For</h2>
        <p className="text-zinc-400 mb-16">Real results from real clients</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <div key={i} className="fade-up-element p-8 rounded-[2rem] bg-card border border-zinc-800">
              <div className="font-medium text-foreground mb-6 text-xl">{item.target}</div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-xs font-mono uppercase text-zinc-500 mb-2">Vấn đề:</div>
                  <div className="text-zinc-400">{item.before}</div>
                </div>
                <div className="h-px w-full bg-zinc-800"></div>
                <div>
                  <div className="text-xs font-mono uppercase text-blue-500 mb-2">Kết quả:</div>
                  <div className="text-blue-200 font-medium">{item.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US & CTA */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900 flex flex-col items-center text-center">
        <h2 className="text-3xl font-serif font-medium tracking-tighter mb-12 text-foreground">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-24 max-w-4xl">
          {whyUs.map((reason, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-zinc-800 bg-card/50 text-zinc-300">
              {i + 1}. {reason}
            </div>
          ))}
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-6 text-foreground">
          Need help choosing the right solution?
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
          Call now for a free consultation and quote. No commitment.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
        >
          FREE Installation Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
