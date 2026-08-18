"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Repeat, TrendingUp, Rocket, CheckCircle2, Shield, Globe } from "lucide-react";
import Link from "next/link";
import { LightboxImage } from "@/components/ui/lightbox-image";

export function DexspacePortfolio() {
  return (
    <article className="min-h-screen bg-background text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <LightboxImage 
            src="/projects/Dexspace/dexspace_hero_mockup.jpg" 
            alt="DexSpace Hero Mockup"
            className="w-full h-full object-cover opacity-50 mix-blend-screen"
            containerClassName="w-full h-full"
          />
          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
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
              Web3 & Blockchain
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight mb-8 drop-shadow-2xl">
              DexSpace <span className="text-primary italic">DEX</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Swap Anytime, Anywhere. Multi-chain support, transparent rates, and total control of your tokens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight mb-8">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                Crypto users face fragmented ecosystems. They need one app for Solana, another for Ethereum, and separate tools to analyze charts before making a swap. DexSpace unifies this.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-widest text-primary mb-1 font-semibold">Client</span>
                  <span className="text-xl text-foreground">DexSpace Protocol</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-widest text-primary mb-1 font-semibold">Role</span>
                  <span className="text-xl text-foreground">Product Strategy, UX/UI, Web3 Integration</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-widest text-primary mb-1 font-semibold">Timeline</span>
                  <span className="text-xl text-foreground">12 Weeks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* Multi-Chain Card */}
                <div className="bg-[#0B1221] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center h-full min-h-[280px] hover:border-white/10 transition-colors">
                  <Globe className="w-10 h-10 text-[#3B82F6] mb-6" />
                  <h4 className="text-2xl font-medium text-white mb-4">Multi-Chain Ecosystem</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Aggregating token pairs across Solana, Binance Smart Chain (BSC), and Ethereum into one seamless dashboard.
                  </p>
                </div>

                {/* Simplified Swaps Card */}
                <div className="bg-[#0B1221] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center h-full min-h-[280px] hover:border-white/10 transition-colors">
                  <Repeat className="w-10 h-10 text-[#3B82F6] mb-6" />
                  <h4 className="text-2xl font-medium text-white mb-4">Simplified Swaps</h4>
                  <p className="text-muted-foreground leading-relaxed">Integrating top DEX aggregators to automatically route trades for the best price with minimal slippage.</p>
                </div>

                {/* Token Launchpad Card */}
                <div className="bg-[#0B1221] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center h-full min-h-[280px] hover:border-white/10 transition-colors">
                  <Rocket className="w-10 h-10 text-[#3B82F6] mb-6" />
                  <h4 className="text-2xl font-medium text-white mb-4">Token Launchpad</h4>
                  <p className="text-muted-foreground leading-relaxed">A built-in IDO engine allowing verified projects to raise funds and launch tokens directly to the community.</p>
                </div>

                {/* Absolute Security Card */}
                <div className="bg-[#0B1221] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center h-full min-h-[280px] hover:border-white/10 transition-colors">
                  <Shield className="w-10 h-10 text-[#3B82F6] mb-6" />
                  <h4 className="text-2xl font-medium text-white mb-4">Absolute Security</h4>
                  <p className="text-muted-foreground leading-relaxed">Non-custodial architecture with audited smart contracts and MPC (Multi-Party Computation) key management.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-center tracking-tight mb-24">
            Core Features
          </h2>

          <div className="space-y-32">
            
            {/* Feature 1: Market Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="w-full rounded-2xl overflow-hidden">
                <LightboxImage 
                  src="/projects/Dexspace/dexspace_feature_market.jpg" 
                  alt="Market Dashboard"
                  className="w-full h-auto object-cover"
                  containerClassName="w-full aspect-[4/3]"
                />
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                  Real-time prices, charts, and trends.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                  The dashboard lists aggregated token pairs displaying critical metrics like 24h volume and price change. Dive deeper with advanced TradingView charts and transaction histories.
                </p>
                <ul className="space-y-4">
                  {[
                    "Live price tracking across ETH, BSC, SOL",
                    "Advanced TradingView candlestick charts",
                    "Integrated Watchlist (Local Storage)",
                    "Real-time liquidity and transaction logs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2: Swap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                  Intelligent Swap Routing.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                  A straightforward UI powered by DEX aggregators (like 1inch and Jupiter) that automatically recommends the best price route, reducing fees and slippage impact.
                </p>
                <ul className="space-y-4">
                  {[
                    "Auto-routing for lowest gas fees",
                    "Slippage tolerance settings",
                    "Insufficient balance auto-swap suggestions",
                    "Direct Phantom & MetaMask connection"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2 w-full rounded-2xl overflow-hidden">
                <LightboxImage 
                  src="/projects/Dexspace/dexspace_feature_swap.png" 
                  alt="Token Swap Interface"
                  className="w-full h-auto object-cover"
                  containerClassName="w-full aspect-[4/3]"
                />
              </div>
            </div>
            
            {/* Feature 3: Security */}
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="w-full rounded-2xl overflow-hidden">
                <LightboxImage 
                  src="/projects/Dexspace/dexspace_feature_security.png" 
                  alt="Wallet Security Settings"
                  className="w-full h-auto object-cover"
                  containerClassName="w-full aspect-[4/3] md:aspect-video"
                />
              </div>
              <div className="w-full max-w-4xl">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                  Non-custodial, military-grade security.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                  DexSpace never stores your private keys. All transactions are signed client-side, giving you complete control over your assets. 
                </p>
                <ul className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "100% Non-custodial architecture",
                    "No server-side key storage",
                    "Secure SSL/TLS connections",
                    "Biometric authentication support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Lock className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 4: Token Launchpad */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                  Launch Token.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                  A seamless engine for creating and launching new tokens. Step 1 allows users to upload a custom token logo, define supply, and set initial configurations before deployment.
                </p>
                <ul className="space-y-4">
                  {[
                    "Custom token logo upload & branding",
                    "Automated smart-contract deployment",
                    "Initial liquidity pool configuration",
                    "Anti-bot & fair launch settings"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Rocket className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2 w-full rounded-2xl overflow-hidden">
                <LightboxImage 
                  src="/projects/Dexspace/Frame%20657.png" 
                  alt="Launch Token Feature"
                  className="w-full h-auto object-cover"
                  containerClassName="w-full aspect-[4/3]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APP GALLERY PLACEHOLDER - FOR ADDITIONAL IMAGES */}
      <section className="py-24 bg-muted/5 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-6">
              More App Screens
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
              <LightboxImage 
                src="/projects/Dexspace/mockup_1782747822941.jpg" 
                alt="App Screen 1"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
              <LightboxImage 
                src="/projects/Dexspace/mockup_1782747975203.jpg" 
                alt="App Screen 2"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
              <LightboxImage 
                src="/projects/Dexspace/mockup_1782746285141.jpg" 
                alt="App Screen 3"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND & DESIGN SYSTEM */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-6">
              Brand Identity
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              A premium, minimalist design system combining deep space blacks with vibrant brand accents to create a trusted Web3 aesthetic.
            </p>
          </div>
          
          <div className="w-full rounded-2xl overflow-hidden">
            <LightboxImage 
              src="/projects/Dexspace/dexspace_brand_kit.png" 
              alt="DexSpace Brand Kit"
              className="w-full h-auto"
              containerClassName="w-full bg-background"
            />
          </div>
        </div>
      </section>

      {/* 5. TECH STACK & NEXT STEPS */}
      <section className="py-24 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight mb-8">
              Built for Scale and Reliability
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-12">
              Targeting 99.9% uptime with scalable node architecture. Future roadmap includes portfolio tracking, price alerts, cross-chain bridges, and advanced order book analytics.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['React', 'Web3.js', 'Solidity', '1inch Aggregator', 'Jupiter API', 'TradingView', 'Node.js', 'Cloudflare'].map((tech) => (
                <span key={tech} className="px-6 py-3 rounded-full border border-primary/20 bg-primary/5 text-primary">
                  {tech}
                </span>
              ))}
            </div>

            <Link 
              href="/work" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View More Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}
