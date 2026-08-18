"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Box, Repeat, FileCode2, LandPlot, Wallet, Coins } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

const whatWeBuild = [
  {
    title: "NFT Platforms",
    desc: "Custom NFT marketplaces, minting engines, and fractionalized ownership platforms on Solana and Ethereum.",
    icon: Box
  },
  {
    title: "DeFi Protocols",
    desc: "Decentralized exchanges, lending platforms, yield farming, and liquidity pool management systems.",
    icon: Repeat
  },
  {
    title: "Smart Contracts",
    desc: "Audited Solidity and Rust smart contracts for token launches, governance, staking, and escrow.",
    icon: FileCode2
  },
  {
    title: "Asset Tokenization",
    desc: "Convert real-world assets (real estate, art, commodities) into tradeable blockchain tokens with legal metadata binding.",
    icon: LandPlot
  },
  {
    title: "Wallet Integration",
    desc: "Multi-chain wallet connections (Phantom, MetaMask, WalletConnect) with transaction signing and portfolio tracking.",
    icon: Wallet
  },
  {
    title: "Token Development",
    desc: "SPL and ERC-20 token creation, tokenomics design, vesting schedules, and airdrop mechanisms.",
    icon: Coins
  }
];

const caseStudies = [
  {
    industry: "PropTech / Web3",
    title: "Tokenize Real Estate",
    desc: "Real estate NFT platform with fractional ownership on Solana + Metaplex"
  },
  {
    industry: "DeFi",
    title: "DexSpace",
    desc: "Multi-chain decentralized exchange with customizable trading tools"
  }
];

const blockchainStack = [
  "Solana", "Ethereum", "Rust", "Solidity", "Anchor", "Metaplex", 
  "Hardhat", "Web3.js", "Ethers.js", "IPFS", "The Graph", "React", "Next.js"
];

export default function Web3BlockchainPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      
      gsap.fromTo(
        ".build-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".build-section", start: "top 80%" }
        }
      );

      gsap.fromTo(
        ".case-study-card",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".case-studies-section", start: "top 80%" }
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
          <h2 className="reveal-text text-sm font-mono uppercase tracking-widest text-blue-400 mb-6">Web3 & Blockchain</h2>
          <h1 className="reveal-text text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[1.05] mb-8 text-foreground">
            Decentralized Future
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10">
            We build NFT platforms, DeFi protocols, and tokenization systems on Solana and Ethereum. From smart contract to full-stack dApp — battle-tested and audit-ready.
          </p>
          <div className="reveal-text">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
            >
              Discuss Your Web3 Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="build-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeBuild.map((item, idx) => (
            <div key={idx} className="build-card p-8 rounded-[2rem] bg-card border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6 p-3 inline-flex rounded-full bg-zinc-800 text-blue-400">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="case-studies-section py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-16 text-foreground">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="case-study-card group relative p-10 md:p-12 rounded-[2rem] bg-card border border-zinc-800 overflow-hidden">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-6 block relative z-10">
                {study.industry}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4 tracking-tight relative z-10">
                {study.title}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed relative z-10 max-w-sm">
                {study.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCKCHAIN STACK */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-zinc-900 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-10 block">Blockchain Stack</span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-4xl mx-auto">
          {blockchainStack.map((tech) => (
            <span key={tech} className="text-lg md:text-xl font-medium tracking-tight text-zinc-300 hover:text-foreground transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 lg:px-8 max-w-[1400px] mx-auto text-center border-t border-zinc-900">
        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-8 text-foreground reveal-text">
          Build on Blockchain
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto reveal-text">
          NFT, DeFi, or tokenization — we've shipped it. Let's talk about your Web3 project.
        </p>
        <div className="reveal-text">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-sm tracking-wide rounded-full overflow-hidden transition-transform hover:scale-[0.98] active:scale-95"
          >
            Start Your Web3 Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
