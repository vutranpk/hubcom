"use client";

import Image from "next/image";
import { LightboxImage } from "@/components/ui/lightbox-image";
import { ArrowRight, Bot, Gift, Smartphone, Store, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function MinhshopPortfolio() {
  return (
    <div className="w-full bg-background text-foreground font-sans selection:bg-primary selection:text-foreground">
      
      {/* SECTION 1: HERO COVER */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Mockup */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/projects/Minhshop/minhshop_hero_mockup.jpg"
            alt="Minhshop Hero Mockup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
            Minhshop App
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-[1.1]">
            Lifestyle Commerce <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            A mobile shopping experience built around AI, loyalty and content commerce.
          </p>
        </div>
      </section>

      {/* SECTION 2: PROBLEM / CHALLENGE */}
      <section className="w-full py-24 md:py-40 px-6 md:px-20 border-t border-border/50 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-primary uppercase tracking-widest text-xs font-bold mb-6">The Challenge</h2>
            <p className="font-serif text-3xl md:text-5xl tracking-tight text-foreground mb-8">
              More than a shopping app.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Journey Map Image */}
            <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
              <LightboxImage 
                src="/projects/Minhshop/minhshop_journey_map.jpg"
                alt="Connected Commerce Journey"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                containerClassName="w-full aspect-[16/10] md:aspect-video"
              />
              <div className="absolute inset-0 border border-border/50 rounded-2xl pointer-events-none" />
            </div>
            
            {/* Right: Copy */}
            <div className="flex flex-col gap-8">
              <p className="text-xl leading-relaxed text-muted-foreground font-light">
                <strong className="text-foreground font-normal">Minhshop was no longer selling only products.</strong> The brand was selling taste, experience and reasons for customers to return.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground font-light">
                The challenge was to turn a fashion retail business into a mobile experience that could do more than display products. The app needed to support product discovery, loyalty, personalized consultation, content-driven shopping and offline store engagement — without making the experience feel complicated.
              </p>
              <div className="pt-8 border-t border-border flex flex-col gap-6">
                <div className="text-foreground/40 uppercase tracking-widest text-xs font-bold">Key Challenges</div>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-mono mt-1 text-sm">01.</span>
                    <span className="text-lg text-foreground">Move beyond a basic ecommerce flow.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-mono mt-1 text-sm">02.</span>
                    <span className="text-lg text-foreground">Connect online shopping with in-store loyalty.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-mono mt-1 text-sm">03.</span>
                    <span className="text-lg text-foreground">Create a premium yet easy-to-use experience for fashion customers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 4: KEY SCREENS SECTION */}
      <section className="w-full py-24 md:py-40 px-6 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-primary uppercase tracking-widest text-xs font-bold mb-6">The Interface</h2>
          <p className="font-serif text-3xl md:text-5xl tracking-tight text-foreground mb-20 max-w-2xl">
            A premium yet easy-to-use experience for fashion customers.
          </p>
          
          {/* 6 Screens Full Bleed Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl group">
             <LightboxImage 
                src="/projects/Minhshop/minhshop_6_screens.jpg"
                alt="Minhshop Key Screens"
                className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                containerClassName="w-full"
             />
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURE HIGHLIGHTS */}
      <section className="w-full py-24 md:py-40 px-6 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          
          {/* Reels Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32 md:mb-48">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl group">
              <LightboxImage 
                src="/projects/Minhshop/minhshop_feature_reels.png" 
                alt="Reels Commerce Mockup"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                containerClassName="w-full aspect-[4/3]"
              />
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                Content discovery that leads directly to purchase.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                From reels to checkout in a few taps. Engaging lifestyle vertical videos with sleek product overlays instantly convert inspiration into sales.
              </p>
            </div>
          </div>

          {/* Rewards Feature (Full Width for 16:9 Image) */}
          <div className="w-full flex flex-col gap-12 mb-32 md:mb-48">
            <div className="max-w-3xl">
              <h3 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight mb-6">
                A loyalty system designed to bring customers back.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                A premium glassmorphism dashboard displaying MSP points, tier progress, and active vouchers, seamlessly merging gamification with luxury retail.
              </p>
            </div>
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl group">
              <LightboxImage 
                src="/projects/Minhshop/minhshop_feature_rewards.jpg" 
                alt="Rewards Mockup"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                containerClassName="w-full aspect-video"
              />
            </div>
          </div>

          {/* Offline OTP Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-6">
                Connecting in-store shopping with app-based loyalty.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Online and offline loyalty, connected. Customers simply show their OTP code at the physical store counter to collect points and unlock rewards instantly.
              </p>
            </div>
            <div className="order-1 md:order-2 w-full rounded-2xl overflow-hidden shadow-2xl group">
              <LightboxImage 
                src="/projects/Minhshop/minhshop_feature_otp.png" 
                alt="Offline OTP Mockup"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                containerClassName="w-full aspect-[4/3]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: BUSINESS VALUE */}
      <section className="w-full py-24 md:py-40 px-6 md:px-20 border-y border-border/50 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 flex flex-col items-center">
            <h2 className="text-primary uppercase tracking-widest text-xs font-bold mb-6">Business Impact</h2>
            <p className="font-serif text-3xl md:text-5xl tracking-tight text-foreground mb-8 max-w-3xl leading-tight">
              A mobile experience built around customer return.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground font-light max-w-4xl text-center">
              The Minhshop App was designed to help the brand create stronger customer retention, increase product discovery and connect online and offline retail experiences. Instead of relying only on promotions, the app gives customers multiple reasons to return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-10 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
              <div className="text-primary text-sm font-mono mb-8 opacity-80">01</div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Better retention</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Customers return through points, vouchers, member tiers and missions.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
              <div className="text-primary text-sm font-mono mb-8 opacity-80">02</div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Smarter discovery</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                AI and reels help customers find products in a more natural way.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
              <div className="text-primary text-sm font-mono mb-8 opacity-80">03</div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Connected retail</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Online shopping and offline purchases are linked through OTP-based point collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA (Retail Mockup) */}
      <section className="w-full relative px-6 md:px-20 py-40 md:py-64 flex flex-col items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/projects/Minhshop/minhshop_retail_mockup.jpg"
            alt="Retail Store Mockup"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="font-mono text-sm md:text-base text-primary tracking-[0.3em] uppercase font-bold mb-8 md:mb-12">
            Build the Future of Retail
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-10 tracking-tighter text-foreground leading-[1.1]">
            Ready to transform <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">your customer experience?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-16 font-light leading-relaxed">
            Partner with Hubcom to engineer digital products that dominate markets and define the future of omnichannel commerce.
          </p>
          
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-primary text-primary-foreground rounded-full font-mono text-sm uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(249,115,22,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-4 transition-colors duration-500 group-hover:text-foreground">
              START A PROJECT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
          </Link>
        </div>
      </section>

    </div>
  );
}
