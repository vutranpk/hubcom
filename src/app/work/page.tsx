"use client";

import { useRef } from "react";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Footer } from "@/components/sections/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const caseStudies = [
  { 
    title: "Another Me AI", 
    client: "Agentic AI",
    description: "Autonomous digital twin system that executes repetitive workforce tasks via a specialized skill marketplace.",
    tags: ["Python", "LLMs", "LangChain", "Automation"],
    img: "/projects/AnotherMe/anotheome-hero.jpeg",
    ctaUrl: "/portfolio/ai-workflows",
    year: "2024"
  },
  { 
    title: "DexSpace", 
    client: "Web3 & Blockchain",
    description: "A decentralized exchange (DEX) screener and token swap platform offering real-time market data, seamless multi-chain swaps, and promotional boost packages.",
    tags: ["Web3.js", "Solidity", "Multi-chain", "DEX Aggregator"],
    img: "/projects/Dexspace/dexspace_hero_mockup.jpg",
    ctaUrl: "/portfolio/blockchain-web3",
    year: "2023"
  },
  { 
    title: "Minhshop App", 
    client: "Retail & E-Commerce",
    description: "A lifestyle commerce platform built for fashion retail.",
    tags: ["React Native", "Next.js", "AWS", "Loyalty"],
    img: "/projects/Minhshop/avata-msapp.jpg",
    ctaUrl: "/portfolio/e-commerce-retail",
    year: "2024"
  }
];

// Individual Project Component to handle its own scroll parallax
const ShowcaseProject = ({ proj, index }: { proj: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax values
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 min-h-[80vh] w-full group`}>
      
      {/* Number Indicator - Background */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0 lg:right-auto lg:left-0' : 'left-0 lg:left-auto lg:right-0'} text-[15rem] md:text-[25rem] font-serif font-bold text-white/[0.02] pointer-events-none select-none z-0 tracking-tighter`}>
        0{index + 1}
      </div>

      {/* Image Container */}
      <div className="w-full lg:w-[60%] relative z-10 overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] lg:aspect-auto lg:h-[70vh] bg-[#0A1320] border border-white/5 group-hover:border-[#3B82F6]/30 transition-colors duration-700">
        <Link href={proj.ctaUrl} className="block w-full h-full relative overflow-hidden">
          <motion.img 
            style={{ y: yImage, scale: 1.1 }}
            src={proj.img} 
            alt={proj.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-100 opacity-80 group-hover:opacity-100"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101A] via-transparent to-transparent opacity-60"></div>
          
          {/* View Project Cursor / Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#3B82F6] rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out z-20 pointer-events-none">
            <ArrowUpRight className="w-8 h-8 text-white" />
          </div>
        </Link>
      </div>

      {/* Text Container */}
      <motion.div 
        style={{ y: yText }}
        className="w-full lg:w-[40%] flex flex-col relative z-20 px-4 lg:px-0"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-sm text-[#3B82F6] uppercase tracking-widest">{proj.client}</span>
          <span className="w-12 h-[1px] bg-white/20"></span>
          <span className="font-mono text-sm text-white/50">{proj.year}</span>
        </div>
        
        <Link href={proj.ctaUrl} className="inline-block">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 tracking-tight leading-[1.1] hover:text-[#3B82F6] transition-colors duration-300">
            {proj.title}
          </h2>
        </Link>
        
        <p className="text-lg md:text-xl text-[#A8B3C7] mb-10 leading-relaxed max-w-lg">
          {proj.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {proj.tags.map((tag: string, i: number) => (
            <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#E2E8F0] tracking-wider uppercase">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
      
    </div>
  );
};

export default function WorkPage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#07101A] pt-[20vh] pb-32 overflow-hidden">
        
        {/* Header */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-32 md:mb-48 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tighter leading-none">
              Selected <br />
              <span className="text-[#3B82F6] italic pr-4">Showcase.</span>
            </h1>
            <p className="text-xl md:text-3xl font-light text-[#A8B3C7] leading-relaxed max-w-3xl">
              An immersive dive into the digital products, enterprise platforms, and disruptive experiences we have engineered.
            </p>
          </div>
        </section>

        {/* Showcase Projects */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-32 md:gap-64 pb-32">
          {caseStudies.map((proj, idx) => (
            <ShowcaseProject key={idx} proj={proj} index={idx} />
          ))}
        </section>

      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
