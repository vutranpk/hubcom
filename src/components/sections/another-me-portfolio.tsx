'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LightboxImage } from '@/components/ui/lightbox-image';
import { ArrowRight, BrainCircuit, Shield, Database, Lock, MessageSquare, ExternalLink, CheckCircle2, Zap, Wallet, Terminal } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function AnotherMePortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client after mount
    if (typeof window === 'undefined') return;

    // Use a small timeout to ensure DOM is fully ready
    const timer = setTimeout(() => {
      try {
        const ctx = gsap.context(() => {
          gsap.fromTo(".fade-up", 
            { y: 50, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 1,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
              }
            }
          );
        }, containerRef);
        return () => ctx.revert();
      } catch (e) {
        console.warn("GSAP animation initialization skipped", e);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <article ref={containerRef} className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/50 selection:text-white">
      
      {/* SECTION 1: HERO COVER */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <LightboxImage 
            src="/hubcom/projects/AnotherMe/anotheome-hero.jpeg" 
            alt="Another Me Hero"
            className="w-full h-full object-cover opacity-50 mix-blend-screen"
            containerClassName="w-full h-full"
          />
          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Personal AI Agent
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] tracking-tight mb-8 drop-shadow-2xl text-foreground">
              Another Me.
              <br />
              <span className="text-primary italic">Master Your Digital Self.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-[1.65] drop-shadow-lg">
              A premium platform allowing you to create and own a personal AI agent. Equipped with dedicated memory, multi-channel connectivity, and 24/7 availability as your digital twin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CONCEPT & CONNECTIVITY */}
      <section className="py-24 md:py-40 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <div className="fade-up">
              <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight mb-6 leading-[1.1]">
                Omnipresent.<br/>Always in sync.
              </h2>
              <p className="text-lg text-muted-foreground leading-[1.65] font-light mb-10">
                Another Me connects seamlessly across the tools you already use. Whether you are on Telegram, WhatsApp, or the Web Dashboard, your digital twin is always ready to assist, remember, and execute tasks.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Database, title: "Dedicated Memory", desc: "Your agent remembers past conversations, preferences, and key business contexts." },
                  { icon: MessageSquare, title: "Multi-Channel Integration", desc: "Interact via Telegram, WhatsApp, or Web without losing context." },
                  { icon: BrainCircuit, title: "Skills Marketplace", desc: "Install custom skills tailored to your specific business workflows." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-[2rem] bg-[#0B1221] border border-white/5 shadow-sm transition-colors hover:border-white/10 group">
                    <feature.icon className="w-6 h-6 text-[#3B82F6] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground font-medium mb-1 group-hover:text-[#3B82F6] transition-colors">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fade-up order-first lg:order-last">
              <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-background border border-border/50 p-2 shadow-2xl">
                <LightboxImage 
                  src="/hubcom/projects/AnotherMe/another_me_channels.jpg" 
                  alt="Multi-channel connectivity"
                  className="w-full h-full object-cover rounded-[2rem]"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2.5: CORE FEATURES & MOCKUPS */}
      <section className="py-24 md:py-40 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-center tracking-tight mb-24 fade-up">
            Core Features
          </h2>

          <div className="space-y-32">
            
            {/* Feature 1: Agent Management & Social Integration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center fade-up">
              <div className="w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-background p-2">
                <LightboxImage 
                  src="/hubcom/projects/AnotherMe/another_me_chat.jpg" 
                  alt="Agent Management & Chat Integration"
                  className="w-full h-auto object-cover rounded-xl"
                  containerClassName="w-full aspect-[4/3] md:aspect-square"
                />
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                  Agent Creation & Social Connectivity.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                  Create a new AI agent from scratch, choose a pre-configured template, or even self-host your own agent. Once deployed, seamlessly connect its brain to your favorite social media chat networks.
                </p>
                <ul className="space-y-4">
                  {[
                    "Manage multiple AI agents in a single dashboard",
                    "Self-hosting capabilities for enterprise privacy",
                    "Direct integration with Telegram, WhatsApp, and Web",
                    "Real-time omnichannel synchronization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2: Skills Marketplace */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center fade-up">
              <div className="order-2 md:order-1">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                  Advanced Skills Market.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                  Supercharge your AI agent by installing specialized skills from the marketplace. From deep web research to professional media generation, your agent can do it all.
                </p>
                <ul className="space-y-4">
                  {[
                    "Research Skill: Deep web search, scraping, and information gathering",
                    "Document Skills: Generate and format professional PDFs, DOCX, and PPTX",
                    "Image-Gen Skill: Create logos, banners, and product photography",
                    "Video-Gen Skill: Text-to-video and image-to-video extensions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2 w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-background p-2">
                <LightboxImage 
                  src="/hubcom/projects/AnotherMe/another_me_skills.jpg" 
                  alt="Skills Marketplace Interface"
                  className="w-full h-auto object-cover rounded-xl"
                  containerClassName="w-full aspect-[4/3] md:aspect-square"
                />
              </div>
            </div>

            {/* Feature 3: Usage & Transactions */}
            <div className="fade-up max-w-4xl">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                  Usage Monitoring & Transactions.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                  Keep a close eye on your agent's performance and associated costs. A transparent dashboard tracks every request, ensuring you're always in control of your Stamina and Subscriptions.
                </p>
                <ul className="space-y-4">
                  {[
                    "Monitor Total Requests across all active agents",
                    "Track precise 'Stamina' (mSta) consumption metrics",
                    "Calculate Total Cost with detailed historical charts",
                    "Manage Stamina Orders and active subscriptions easily"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Database className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 4: Referral Program */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center fade-up">
              <div className="order-2 md:order-1">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                  Referral & Commissions.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                  Grow the ecosystem and earn rewards. Share your unique referral link or QR code to invite friends and colleagues, and track your earned commissions in real-time.
                </p>
                <ul className="space-y-4">
                  {[
                    "Generate unique, personalized referral links",
                    "Custom QR codes for easy sharing and scanning",
                    "Track Total Commissions and monthly earnings",
                    "Detailed Commission History and payout logs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Terminal className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2 w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-background p-2">
                <LightboxImage 
                  src="/hubcom/projects/AnotherMe/another_me_wallet.jpg" 
                  alt="Referral Program Interface"
                  className="w-full h-auto object-cover rounded-xl"
                  containerClassName="w-full aspect-[4/3] md:aspect-square"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: PRIVACY & SECURITY */}
      <section className="py-24 md:py-40 bg-muted/10 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="fade-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Absolute Privacy</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight mb-6 leading-[1.1]">
                Your data.<br/>Your control.
              </h2>
              <p className="text-lg text-muted-foreground leading-[1.65] font-light mb-10 max-w-3xl">
                For business leaders, data security is non-negotiable. Another Me is built on a foundation of zero-knowledge architecture, ensuring that your digital twin's memory and conversations are completely yours.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2rem] bg-[#0B1221] border border-white/5">
                  <Lock className="w-8 h-8 text-[#3B82F6] mb-4" />
                  <h4 className="text-foreground font-medium mb-2">Military-Grade Encryption</h4>
                  <p className="text-sm text-muted-foreground">All data in transit and at rest is secured using AES-256 encryption.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-[#0B1221] border border-white/5">
                  <Database className="w-8 h-8 text-[#3B82F6] mb-4" />
                  <h4 className="text-foreground font-medium mb-2">Secure Backup</h4>
                  <p className="text-sm text-muted-foreground">Automated, encrypted backups guarantee your digital self is never lost.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: ARTICLES & CTA */}
      <section className="py-24 md:py-40 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center fade-up">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground tracking-tight mb-6 leading-[1.1]">
            Ready to meet yourself?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-16 leading-[1.65]">
            Read our latest guides on how business leaders are leveraging Another Me to multiply their productivity, or jump straight in and experience it yourself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto mb-20 items-stretch">
            <Link href="/articles" className="group block relative overflow-hidden rounded-[2.5rem] bg-[#0B1221] border border-white/5 h-full min-h-[360px]">
              <LightboxImage 
                src="/hubcom/projects/AnotherMe/another_me_article_1.jpg" 
                alt="Guide: Mastering Your Digital Twin"
                className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                containerClassName="w-full h-full absolute inset-0"
              />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium mb-3">User Guide</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
                  Mastering Your Digital Twin for Business Productivity
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm group-hover:text-white transition-colors font-medium tracking-wide">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <div className="flex flex-col justify-center items-center text-center p-12 rounded-[2.5rem] bg-[#0B1221] border border-white/5 relative overflow-hidden h-full min-h-[360px]">
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BrainCircuit className="w-64 h-64 text-foreground" />
              </div>
              <BrainCircuit className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 relative z-10">
                Experience Another Me
              </h3>
              <p className="text-muted-foreground mb-10 max-w-sm relative z-10 font-light leading-[1.65]">
                Set up your agent, define its memory, and connect it to Telegram in less than 5 minutes.
              </p>
              <Link href="https://app.anotherme.ai" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:scale-[0.98] hover:bg-primary/90 transition-all group relative z-10 cursor-pointer">
                Try AI Agent Now
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
