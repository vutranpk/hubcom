"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BrainCircuit, Blocks, MessageSquareCode, Eye, LineChart, Server, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const whatWeDeliver = [
  {
    title: "AI Integration for Existing Software",
    desc: "Add AI capabilities to your current applications without rebuilding. Intelligent search, auto-categorization, content generation, and predictive analytics.",
    icon: Blocks,
    points: [
      "Smart search with semantic understanding",
      "Automated content moderation",
      "Predictive customer churn analysis",
      "Intelligent document processing"
    ]
  },
  {
    title: "Custom AI Product Development",
    desc: "Build AI-native products and startups from the ground up. We handle architecture, model selection, training pipelines, and production deployment.",
    icon: BrainCircuit,
    points: [
      "AI SaaS platforms",
      "Conversational AI agents",
      "AI-powered marketplaces",
      "Automated workflow systems"
    ]
  },
  {
    title: "LLM & RAG Systems",
    desc: "Deploy large language models with retrieval-augmented generation for domain-specific knowledge. Custom chatbots, copilots, and AI assistants grounded in your data.",
    icon: MessageSquareCode,
    points: [
      "Customer support AI agents",
      "Internal knowledge base copilots",
      "Document Q&A systems",
      "Code review assistants"
    ]
  },
  {
    title: "Computer Vision & NLP",
    desc: "Image recognition, object detection, OCR, text analysis, and sentiment detection for business applications.",
    icon: Eye,
    points: [
      "Product image classification",
      "Invoice/receipt OCR processing",
      "Quality inspection automation",
      "Social media sentiment analysis"
    ]
  },
  {
    title: "AI-Powered Analytics",
    desc: "Transform raw data into actionable insights with machine learning models for forecasting, anomaly detection, and recommendation engines.",
    icon: LineChart,
    points: [
      "Sales forecasting",
      "Fraud detection",
      "Product recommendation engines",
      "Supply chain optimization"
    ]
  },
  {
    title: "AI Infrastructure & MLOps",
    desc: "Production-grade AI deployment with monitoring, A/B testing, model versioning, and cost optimization.",
    icon: Server,
    points: [
      "Model serving infrastructure",
      "Training pipeline automation",
      "GPU cost optimization",
      "Model performance monitoring"
    ]
  }
];

const aiTechStack = [
  "Python", "LangChain", "LlamaIndex", "OpenAI API", "Anthropic API", "Gemini API",
  "TensorFlow", "PyTorch", "Hugging Face", "Pinecone", "Qdrant", "FastAPI",
  "Docker", "AWS SageMaker"
];

export default function AiSolutionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      
      gsap.fromTo(
        ".deliver-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".deliver-section", start: "top 80%" }
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
          <h2 className="reveal-text text-sm font-mono uppercase tracking-widest text-blue-400 mb-6">AI Solutions</h2>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            AI That Works
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            Apply AI to boost your existing software performance, or build entirely new AI-native products. From LLM integration to computer vision — we make AI practical and production-ready.
          </p>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              Discuss Your AI Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="deliver-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">
          What We Deliver
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatWeDeliver.map((item, idx) => (
            <div key={idx} className="deliver-card p-10 rounded-[2rem] bg-card border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-8 p-4 inline-flex rounded-full bg-zinc-800 text-blue-400">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-foreground mb-4 tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-lg">{item.desc}</p>
              
              <ul className="space-y-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-10 block">AI Tech Stack</span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-4xl mx-auto">
          {aiTechStack.map((tech) => (
            <span key={tech} className="text-lg md:text-xl font-medium tracking-tight text-zinc-300 hover:text-foreground transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto text-center border-t border-zinc-900">
        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-8 text-foreground reveal-text">
          Ready to Apply AI?
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto reveal-text">
          Whether you want to add AI to existing software or build an AI startup — we'll help you figure out what's practical and deliver it.
        </p>
        <div className="reveal-text">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
          >
            Start Your AI Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
