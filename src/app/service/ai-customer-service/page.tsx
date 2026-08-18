"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, XCircle, MessageSquare, BrainCircuit, Zap, UserPlus, Globe2, LineChart, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

const aiTechStack = [
  "OpenAI GPT",
  "Anthropic Claude",
  "Google Gemini",
  "RAG Pipeline",
  "Vector Search",
  "Webhook Integrations",
  "REST APIs",
];

gsap.registerPlugin(ScrollTrigger);

export default function AIServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Text
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

      // Card reveals
      gsap.utils.toArray(".luxury-card").forEach((card: any) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans"
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <div className="reveal-text inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-blue-400 text-xs font-mono uppercase tracking-widest font-bold">Hubi</span>
        </div>
        <h1 className="reveal-text text-5xl md:text-7xl font-serif lg:text-[6rem] font-medium tracking-tighter leading-[1.05] mb-8 text-foreground max-w-5xl">
          Meet Hubi — Your AI <br className="hidden md:block"/> Support Agent
        </h1>
        <p className="reveal-text text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-16">
          Deploy Hubi — an AI-powered customer service agent that understands your products, speaks your customers' language natively, and handles support across every channel. Not just another FAQ bot. Hubi takes action — looks up orders, checks availability, creates tickets, and hands off to your team when it needs to.
        </p>

        {/* Hero Stats */}
        <div className="reveal-text grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl border-t border-zinc-900 pt-12">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-medium text-foreground tracking-tighter mb-2">70%</div>
            <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest text-center">Support Cost Reduction</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-medium text-foreground tracking-tighter mb-2">24/7</div>
            <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest text-center">Always Available</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-medium text-foreground tracking-tighter mb-2">&lt;5s</div>
            <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest text-center">Response Time</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-medium text-blue-500 tracking-tighter mb-2">85%+</div>
            <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest text-center">Resolution Rate</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="reveal-text mt-20 w-full max-w-6xl relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border border-zinc-800 bg-card shadow-2xl shadow-blue-900/10">
          <Image 
            src="/images/service/hubi_hero.jpg" 
            alt="Hubi AI Agent Core" 
            fill 
            className="object-cover opacity-80 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/20" />
        </div>
      </section>

      {/* 2. WHAT HUBI CAN DO - Pure Typography Cards */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900/50">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-6 text-foreground">
            What Hubi Can Do
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Everything a great support agent does — at the speed and scale of AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="luxury-card p-8 md:p-10 rounded-3xl bg-card/50 border border-zinc-800 flex flex-col hover:border-zinc-700 transition-colors">
            <div className="text-blue-500 mb-6"><MessageSquare className="w-8 h-8" /></div>
            <h3 className="text-xl font-medium text-foreground mb-4">Multi-Channel Support</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              One Hubi, every channel. Website chat widget, Facebook Messenger, Zalo OA, email — Hubi meets customers where they are.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Website chat widget — embed in minutes</li>
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Facebook Messenger integration</li>
            </ul>
          </div>
          
          {/* Card 2 */}
          <div className="luxury-card p-8 md:p-10 rounded-3xl bg-card/50 border border-zinc-800 flex flex-col hover:border-zinc-700 transition-colors">
            <div className="text-blue-500 mb-6"><BrainCircuit className="w-8 h-8" /></div>
            <h3 className="text-xl font-medium text-foreground mb-4">Understands Your Business</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              Train Hubi on your product catalog, FAQs, policies, and SOPs. It answers like your best support agent — accurate, on-brand, always consistent.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Import from website, documents, spreadsheets</li>
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Product catalog with semantic search</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="luxury-card p-8 md:p-10 rounded-3xl bg-card/50 border border-zinc-800 flex flex-col hover:border-zinc-700 transition-colors">
            <div className="text-blue-500 mb-6"><Zap className="w-8 h-8" /></div>
            <h3 className="text-xl font-medium text-foreground mb-4">Beyond Q&A — Takes Action</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              Not just a FAQ bot. Hubi can look up orders, check inventory, create support tickets, and process requests — connected to your real systems.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Order tracking & status lookup</li>
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Inventory availability check</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="luxury-card p-8 md:p-10 rounded-3xl bg-card/50 border border-zinc-800 flex flex-col hover:border-zinc-700 transition-colors">
            <div className="text-blue-500 mb-6"><UserPlus className="w-8 h-8" /></div>
            <h3 className="text-xl font-medium text-foreground mb-4">Smart Handoff to Humans</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              When Hubi can't resolve an issue, it gathers context, summarizes the conversation, and hands off to your team — so they can jump in without asking the customer to repeat.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Automatic escalation rules</li>
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Conversation summary for agents</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="luxury-card p-8 md:p-10 rounded-3xl bg-card/50 border border-zinc-800 flex flex-col hover:border-zinc-700 transition-colors">
            <div className="text-blue-500 mb-6"><Globe2 className="w-8 h-8" /></div>
            <h3 className="text-xl font-medium text-foreground mb-4">Vietnamese-First, Multilingual</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              Built for the Vietnamese market. Hubi speaks Vietnamese natively and can switch to English or other languages when needed.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Native Vietnamese language support</li>
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Auto-detect customer language</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="luxury-card p-8 md:p-10 rounded-3xl bg-card/50 border border-zinc-800 flex flex-col hover:border-zinc-700 transition-colors">
            <div className="text-blue-500 mb-6"><LineChart className="w-8 h-8" /></div>
            <h3 className="text-xl font-medium text-foreground mb-4">Analytics & Optimization</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              Track resolution rates, customer satisfaction, common questions, and Hubi's performance. Identify knowledge gaps and continuously improve.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Conversation analytics dashboard</li>
              <li className="flex items-start gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5" /> Resolution rate tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. BUILT FOR YOUR INDUSTRY - Bento Grid */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900/50">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-6 text-foreground">
            Built For Your Industry
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Real results from businesses like yours — with dedicated solution pages for each industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* IT Company (6 cols) */}
          <div className="luxury-card group relative col-span-1 md:col-span-6 min-h-[480px] rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image src="/images/service/hubi_it.png" alt="IT Company" fill className="object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-50 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col">
              <div className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">Featured</div>
              <h3 className="text-3xl font-serif font-medium tracking-tight text-foreground mb-6">IT Company</h3>
              <div className="flex-grow space-y-4">
                <div className="p-4 rounded-2xl bg-background/60 border border-zinc-800/50">
                  <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">Common Problems</div>
                  <div className="text-sm text-zinc-300 space-y-2">
                    <p className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-900/80 mt-0.5 shrink-0"/> Clients ask about services repeatedly</p>
                    <p className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-900/80 mt-0.5 shrink-0"/> After-hours inquiries get no response</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-900/30">
                  <div className="text-xs font-mono text-blue-500/70 mb-2 uppercase">AI Solution</div>
                  <p className="text-sm text-blue-100/80 leading-relaxed">Hubi qualifies leads, answers service questions, collects project requirements, and schedules consultations.</p>
                </div>
              </div>
              <Link href="/service/ai-customer-service/it-company" className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-blue-400 transition-colors mt-6">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Retail (6 cols) */}
          <div className="luxury-card group relative col-span-1 md:col-span-6 min-h-[480px] rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image src="/images/service/hubi_retail.png" alt="Retail" fill className="object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-50 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col">
              <div className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-2">02</div>
              <h3 className="text-3xl font-serif font-medium tracking-tight text-foreground mb-6">Retail & Fashion</h3>
              <div className="flex-grow space-y-4">
                <div className="p-4 rounded-2xl bg-background/60 border border-zinc-800/50">
                  <div className="text-sm text-zinc-300 space-y-2">
                    <p className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-900/80 mt-0.5 shrink-0"/> Hundreds of messages asking about sizes, stock</p>
                    <p className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-900/80 mt-0.5 shrink-0"/> Customers leave when they don't get instant replies</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-900/30">
                  <p className="text-sm text-blue-100/80 leading-relaxed">Hubi searches the entire product catalog, recommends matching items, checks real-time stock, and creates orders.</p>
                </div>
              </div>
              <Link href="/service/ai-customer-service/retail" className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-blue-400 transition-colors mt-6">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Tickets (4 cols) */}
          <div className="luxury-card group relative col-span-1 md:col-span-4 min-h-[360px] rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image src="/images/service/hubi_tickets.png" alt="Tickets" fill className="object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-50 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col">
              <div className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-2">03</div>
              <h3 className="text-2xl font-serif font-medium tracking-tight text-foreground mb-4">Ticket & Events</h3>
              <div className="flex-grow space-y-3 text-sm">
                <p className="text-zinc-400">Manual booking process causes errors and double-sells.</p>
                <div className="h-px w-full bg-zinc-800 my-2"></div>
                <p className="text-blue-100/80">Shows available seats, handles ticket purchases, sends e-tickets instantly — even at 2 AM.</p>
              </div>
              <Link href="/service/ai-customer-service/tickets" className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-blue-400 transition-colors mt-4">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Dental (4 cols) */}
          <div className="luxury-card group relative col-span-1 md:col-span-4 min-h-[360px] rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image src="/images/service/hubi_dental.png" alt="Dental" fill className="object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-50 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col">
              <div className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-2">04</div>
              <h3 className="text-2xl font-serif font-medium tracking-tight text-foreground mb-4">Dental Clinic</h3>
              <div className="flex-grow space-y-3 text-sm">
                <p className="text-zinc-400">Receptionists spend 60% of time answering the same questions.</p>
                <div className="h-px w-full bg-zinc-800 my-2"></div>
                <p className="text-blue-100/80">Books appointments, sends reminders, answers treatment questions — reducing no-shows by 40%.</p>
              </div>
              <Link href="/service/ai-customer-service/dental" className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-blue-400 transition-colors mt-4">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spa (4 cols) */}
          <div className="luxury-card group relative col-span-1 md:col-span-4 min-h-[360px] rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image src="/images/service/hubi_spa.png" alt="Spa" fill className="object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-50 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col">
              <div className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-2">05</div>
              <h3 className="text-2xl font-serif font-medium tracking-tight text-foreground mb-4">Spa & Massage</h3>
              <div className="flex-grow space-y-3 text-sm">
                <p className="text-zinc-400">Phone bookings during treatments get missed or delayed.</p>
                <div className="h-px w-full bg-zinc-800 my-2"></div>
                <p className="text-blue-100/80">Manages bookings, recommends treatments, promotes packages — so therapists focus on service.</p>
              </div>
              <Link href="/service/ai-customer-service/spa" className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-blue-400 transition-colors mt-4">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Education (12 cols) */}
          <div className="luxury-card group relative col-span-1 md:col-span-12 min-h-[400px] rounded-3xl overflow-hidden bg-card border border-zinc-800 transition-colors hover:border-zinc-700">
            <Image src="/images/service/hubi_education.png" alt="Education" fill className="object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-50 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-2">06</div>
              <h3 className="text-3xl font-serif font-medium tracking-tight text-foreground mb-4">Education</h3>
              <p className="text-zinc-400 max-w-2xl text-lg mb-6">Enrollment period equals support chaos. Hubi handles admissions inquiries, course recommendations, and enrollment steps — in Vietnamese and English simultaneously.</p>
              <div>
                <Link href="/service/ai-customer-service/education" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-blue-400 transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW - Live in 2 weeks */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900/50">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-4 text-foreground">
            Live in 2 Weeks
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            From first meeting to live AI agent — no months-long enterprise rollout.
          </p>
        </div>

        {/* Dashboard Image */}
        <div className="luxury-card w-full max-w-5xl mx-auto mb-20 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-zinc-800 bg-card shadow-2xl shadow-blue-900/5">
          <Image 
            src="/images/service/hubi_dashboard.jpg" 
            alt="Hubi AI Agent Dashboard" 
            fill 
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="luxury-card border-l border-zinc-800 pl-6 hover:border-blue-500/50 transition-colors">
            <div className="text-3xl font-mono text-zinc-700 mb-2">01</div>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-4">3-5 days</div>
            <h3 className="text-xl font-medium text-foreground mb-3">Discovery & Setup</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">We analyze your support workflow, import your knowledge base, and configure the AI agent with your brand voice.</p>
          </div>
          <div className="luxury-card border-l border-zinc-800 pl-6 hover:border-blue-500/50 transition-colors">
            <div className="text-3xl font-mono text-zinc-700 mb-2">02</div>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-4">3-5 days</div>
            <h3 className="text-xl font-medium text-foreground mb-3">Training & Testing</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Train the bot on your products and processes. Run simulations to test edge cases before going live.</p>
          </div>
          <div className="luxury-card border-l border-zinc-800 pl-6 hover:border-blue-500/50 transition-colors">
            <div className="text-3xl font-mono text-zinc-700 mb-2">03</div>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-4">2-3 days</div>
            <h3 className="text-xl font-medium text-foreground mb-3">Channel Integration</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Deploy across your channels — website widget, Facebook, Zalo, email. Connect to your CRM or helpdesk.</p>
          </div>
          <div className="luxury-card border-l border-zinc-800 pl-6 hover:border-blue-500/50 transition-colors">
            <div className="text-3xl font-mono text-zinc-700 mb-2">04</div>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-4">Ongoing</div>
            <h3 className="text-xl font-medium text-foreground mb-3">Launch & Optimize</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Go live with monitoring. We analyze conversations, fill knowledge gaps, and continuously improve resolution rates.</p>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-4 text-foreground">
            Why HubCom vs Enterprise Solutions
          </h2>
        </div>

        <div className="luxury-card max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-zinc-800 bg-background">
          <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800/50 bg-card/20">
            <h3 className="text-2xl font-serif font-medium text-zinc-300 mb-8">Enterprise Platforms</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4"><XCircle className="w-5 h-5 text-red-900 shrink-0" /><span className="text-zinc-500">$50,000–500,000/year licensing</span></li>
              <li className="flex items-start gap-4"><XCircle className="w-5 h-5 text-red-900 shrink-0" /><span className="text-zinc-500">6–12 weeks to deploy</span></li>
              <li className="flex items-start gap-4"><XCircle className="w-5 h-5 text-red-900 shrink-0" /><span className="text-zinc-500">Requires dedicated team to manage</span></li>
              <li className="flex items-start gap-4"><XCircle className="w-5 h-5 text-red-900 shrink-0" /><span className="text-zinc-500">Built for US/EU markets</span></li>
              <li className="flex items-start gap-4"><XCircle className="w-5 h-5 text-red-900 shrink-0" /><span className="text-zinc-500">Complex integrations & contracts</span></li>
            </ul>
          </div>
          <div className="p-10 md:p-12 bg-blue-950/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            <h3 className="text-2xl font-serif font-medium text-foreground mb-8 flex items-center gap-3">
              Hubi by HubCom
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-400 uppercase tracking-wider">Your choice</span>
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /><span className="text-zinc-200">Affordable monthly plans for SMBs</span></li>
              <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /><span className="text-zinc-200">Live in 2 weeks or less</span></li>
              <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /><span className="text-zinc-200">Fully managed — we handle everything</span></li>
              <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /><span className="text-zinc-200">Built for Vietnamese market</span></li>
              <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /><span className="text-zinc-200">Simple setup, transparent pricing</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECH STACK - Compact & Non-full-width */}
      <section className="py-16 px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-600">Powered By</span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 max-w-4xl mx-auto">
            {aiTechStack.map((tech) => (
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
