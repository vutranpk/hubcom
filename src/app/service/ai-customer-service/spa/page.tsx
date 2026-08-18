"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, XCircle, CheckCircle2, TrendingUp, Clock, PhoneOff, Sparkles } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50%", label: "Reduction in missed calls", icon: PhoneOff },
  { value: "0", label: "Booking conflicts", icon: CheckCircle2 },
  { value: "+30%", label: "Increase in package sales", icon: TrendingUp },
  { value: "24/7", label: "Booking available", icon: Clock }
];

const problems = [
  {
    title: "Missed Calls During Treatments",
    desc: "When your staff is busy with clients, phone calls go unanswered. Each missed call is a potential booking lost."
  },
  {
    title: "Complex Scheduling",
    desc: "Matching specific therapists with specific time slots, room availability, and treatment duration — manual scheduling is error-prone."
  },
  {
    title: "Underperforming Upsell",
    desc: "Package deals and memberships drive revenue, but staff forget to mention them or feel uncomfortable pushing sales."
  }
];

const process = [
  { num: "01", title: "Smart Booking Management", desc: "Hubi checks therapist schedules, room availability, and treatment duration — then books the perfect slot automatically." },
  { num: "02", title: "Personalized Recommendations", desc: "Based on past visits and preferences, Hubi suggests treatments, therapists, and time slots the customer will love." },
  { num: "03", title: "Package & Membership Promotion", desc: "Hubi naturally introduces relevant packages and membership deals during booking — increasing average ticket value." },
  { num: "04", title: "Post-Visit Follow-Up", desc: "Automatic follow-up messages after visits — ask for feedback, offer rebooking discount, and maintain the relationship." }
];

const benefits = [
  "50% reduction in missed booking calls",
  "Zero booking conflicts with real-time schedule sync",
  "30% increase in package and membership sales",
  "24/7 booking availability — clients book at their convenience"
];

export default function SpaHubiPage() {
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
        <Link href="/service/ai-customer-service" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-foreground transition-colors mb-12">
          &larr; Back to AI Customer Service
        </Link>
        <div className="max-w-4xl">
          <div className="reveal-text mb-6 inline-flex p-4 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Hubi for Spa & Massage
          </h1>
          <h2 className="reveal-text text-xl md:text-2xl font-serif text-zinc-400 leading-relaxed max-w-3xl mb-10">
            Your therapists should focus on treatments, not answering phones. Hubi manages bookings, recommends services based on preferences, promotes packages, and follows up after visits — so your team focuses on what they do best.
          </h2>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              Get a Free Demo
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
            <h3 className="text-3xl font-serif font-medium tracking-tighter mb-4 text-foreground">The Problem</h3>
            <p className="text-zinc-400 mb-8">Does this sound familiar?</p>
            <ul className="space-y-6">
              {problems.map((prob, i) => (
                <li key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-red-950/20 border border-red-900/30">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <h4 className="font-medium text-red-200 mb-2">{prob.title}</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">{prob.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-up-element">
            <h3 className="text-3xl font-serif font-medium tracking-tighter mb-4 text-foreground">Expected Results</h3>
            <p className="text-zinc-400 mb-8">The Hubi impact</p>
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

      {/* WORKFLOW */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-6 text-foreground text-center">How Hubi Solves It</h2>
        <p className="text-zinc-400 text-center mb-16">Workflow for Spa & Massage</p>
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

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-6 text-foreground">
          Ready to Try Hubi?
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
          Get a free demo tailored to your industry. See Hubi handle real conversations with your products and FAQs.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
        >
          Request Demo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
