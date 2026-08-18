"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, ChevronRight, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    num: "01",
    title: "Network Infrastructure",
    subtitle: "Enterprise-grade networking solutions. We handle everything from site survey to installation and proactive monitoring for 99.9% uptime.",
    image: "/images/service/infra_network.png",
    imageLeft: true,
    href: "/service/infrastructure/network",
    benefits: [
      "Fast & stable enterprise network",
      "Full WiFi coverage for offices & warehouses",
      "Secure & isolated VLANs"
    ]
  },
  {
    num: "02",
    title: "Security Camera Systems",
    subtitle: "High-definition surveillance systems with remote access and smart alerts. Keep your business secure 24/7 with crystal clear footage.",
    image: "/images/service/infra_security.png",
    imageLeft: false,
    href: "/service/infrastructure/security",
    benefits: [
      "Crystal clear HD & 4K footage",
      "Remote access from phone or PC",
      "Smart motion & intrusion alerts"
    ]
  },
  {
    num: "03",
    title: "Office IT Equipment",
    subtitle: "Hardware procurement and provisioning. We supply, pre-configure, and deploy computers, servers, and office equipment.",
    image: "/images/service/infra_hardware.png",
    imageLeft: true,
    href: "/service/infrastructure/equipment",
    benefits: [
      "Fast procurement & deployment",
      "Pre-configured and ready to use",
      "Secure from day one"
    ]
  },
  {
    num: "04",
    title: "Monthly IT Support Package",
    subtitle: "Your outsourced IT department. Fast response times, on-site support, and 24/7 availability at a fraction of the cost of hiring internally.",
    image: "/images/service/infra_msp.png",
    imageLeft: false,
    href: "/service/infrastructure/support",
    benefits: [
      "Fast 15-minute response time",
      "On-site support & troubleshooting",
      "Proactive 24/7 system monitoring"
    ]
  }
];

export default function InfrastructureServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean reveal for text elements
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

      // Section scroll animations
      gsap.utils.toArray(".feature-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
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
      {/* 1. HERO SECTION - Minimalist, Pure Typography */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <h1 className="reveal-text text-5xl md:text-7xl font-serif lg:text-[5.5rem] font-medium tracking-tighter leading-[1.05] mb-8 text-foreground max-w-5xl">
          Enterprise Infrastructure Solutions
        </h1>
        <p className="reveal-text text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
          From networking to security - we handle everything.
        </p>
        <div className="reveal-text">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
          >
            Free Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 2. ZIG-ZAG FEATURE SECTIONS */}
      <div className="flex flex-col border-t border-zinc-900/50">
        {features.map((feature, idx) => (
          <section
            key={feature.num}
            className={`feature-section py-24 md:py-32 px-6 lg:px-8 max-w-[1400px] mx-auto w-full flex flex-col gap-12 lg:gap-24 ${
              feature.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } ${idx !== features.length - 1 ? "border-b border-zinc-900/30" : ""}`}
          >
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden bg-card border border-zinc-800">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl md:text-2xl font-mono text-zinc-500 font-medium">
                  {feature.num}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter text-foreground">
                  {feature.title}
                </h2>
              </div>
              <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-xl">
                {feature.subtitle}
              </p>

              {/* Benefits */}
              <div className="mb-10">
                <ul className="flex flex-col gap-4">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}
