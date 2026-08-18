"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, XCircle, CheckCircle2, TrendingUp, Clock, Zap, Stethoscope } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "-40%", label: "Reduction in no-shows", icon: TrendingUp },
  { value: "60%", label: "Receptionist time saved", icon: Clock },
  { value: "24/7", label: "Appointment booking available", icon: Zap },
  { value: "95%", label: "Patient satisfaction", icon: CheckCircle2 }
];

const problems = [
  {
    title: "Phone-Heavy Front Desk",
    desc: "Receptionists spend most of their day answering calls about pricing, insurance acceptance, and available time slots."
  },
  {
    title: "Repetitive Questions",
    desc: "'How much is a cleaning?' 'Do you accept my insurance?' 'What are your hours?' — same questions, hundreds of times."
  },
  {
    title: "High No-Show Rate",
    desc: "Patients forget appointments. Without automatic reminders, empty chair time costs your clinic real revenue."
  }
];

const process = [
  { num: "01", title: "Smart Appointment Booking", desc: "Patients book appointments through chat — Hubi shows available slots, handles rescheduling, and confirms bookings." },
  { num: "02", title: "Automated Reminders", desc: "Hubi sends appointment reminders 24h and 2h before — via Zalo, SMS, or chat. Patients confirm or reschedule in one tap." },
  { num: "03", title: "Treatment & Pricing Info", desc: "Hubi answers questions about procedures, pricing, insurance compatibility, and pre-visit preparation." },
  { num: "04", title: "Pre-Visit Data Collection", desc: "Collects patient info, medical history, and symptoms before the visit — so the dentist is prepared from minute one." }
];

const benefits = [
  "40% reduction in no-show appointments",
  "60% of receptionist time freed for in-clinic patients",
  "24/7 appointment booking — patients book when convenient",
  "95% patient satisfaction with instant, accurate responses"
];

export default function DentalHubiPage() {
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
            <Stethoscope className="w-8 h-8" />
          </div>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Hubi for Dental Clinics
          </h1>
          <h2 className="reveal-text text-xl md:text-2xl font-serif text-zinc-400 leading-relaxed max-w-3xl mb-10">
            Patients shouldn't wait on hold just to ask about pricing or book a cleaning. Hubi handles appointment booking, sends reminders, answers treatment questions, and collects patient info — reducing no-shows and freeing your receptionist.
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
        <p className="text-zinc-400 text-center mb-16">Workflow for Dental Clinics</p>
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
