"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Code2, Layers, Smartphone, Database, ArrowLeftRight, Cloud } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "React", "Next.js", "React Native", "Node.js", "NestJS", "TypeScript", 
  "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "GCP", "GraphQL", "Prisma"
];

const whatWeBuild = [
  {
    title: "MVP Development",
    timeline: "4-12 weeks",
    desc: "Go from idea to working product in 4-12 weeks. Validate fast, iterate faster.",
    icon: Code2
  },
  {
    title: "Web Applications",
    timeline: "8-20 weeks",
    desc: "Production-grade web apps with React, Next.js, and modern frontend frameworks.",
    icon: Layers
  },
  {
    title: "Mobile Applications",
    timeline: "10-16 weeks",
    desc: "Cross-platform mobile apps with React Native. One codebase, iOS + Android.",
    icon: Smartphone
  },
  {
    title: "API Development",
    timeline: "4-8 weeks",
    desc: "RESTful and GraphQL APIs with NestJS, Express, or Fastify. Scalable microservices architecture.",
    icon: Database
  },
  {
    title: "Legacy Modernization",
    timeline: "12-24 weeks",
    desc: "Migrate legacy systems to modern tech stack without business disruption.",
    icon: ArrowLeftRight
  },
  {
    title: "DevOps & Cloud",
    timeline: "2-4 weeks",
    desc: "CI/CD pipelines, Docker, Kubernetes, AWS/GCP deployment and monitoring.",
    icon: Cloud
  }
];

const process = [
  { num: "01", title: "Discovery", desc: "We analyze your requirements, define scope, and create a technical roadmap." },
  { num: "02", title: "Design & Architecture", desc: "UI/UX design, system architecture, database modeling, and API specifications." },
  { num: "03", title: "Agile Development", desc: "2-week sprints with weekly demos. You see progress every week, not just at the end." },
  { num: "04", title: "Testing & QA", desc: "Automated testing, code review, security audit, and performance optimization." },
  { num: "05", title: "Launch & Support", desc: "Deployment, monitoring setup, and 30-90 day warranty with ongoing support options." }
];

export default function CustomSoftwareDevelopmentPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      
      gsap.fromTo(
        ".process-item",
        { x: -40, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".process-section", start: "top 80%" }
        }
      );
      
      gsap.fromTo(
        ".service-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".services-section", start: "top 80%" }
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
          <h2 className="reveal-text text-sm font-mono uppercase tracking-widest text-blue-400 mb-6">Custom Development</h2>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Your Idea, Built Right
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            Full-stack custom software development from MVP to enterprise scale. We use React, Next.js, Node.js, and NestJS to build applications that grow with your business.
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

      {/* WHAT WE BUILD */}
      <section className="services-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeBuild.map((service, idx) => (
            <div key={idx} className="service-card p-8 rounded-[2rem] bg-card border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-full bg-zinc-800 text-blue-400">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full">{service.timeline}</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="process-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-6 text-foreground sticky top-32">
              Our Process
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 lg:mb-0 max-w-md">
              A transparent, agile workflow designed to deliver working software quickly while adapting to changing business needs.
            </p>
          </div>
          <div className="space-y-12">
            {process.map((step, idx) => (
              <div key={idx} className="process-item flex gap-6 md:gap-8">
                <div className="text-2xl md:text-3xl font-mono text-zinc-700 font-bold shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-10 block">Tech Stack</span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <span key={tech} className="text-lg md:text-xl font-medium tracking-tight text-zinc-300 hover:text-foreground transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
