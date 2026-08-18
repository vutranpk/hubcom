"use client";

import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const partnerLogos = [
  "/hubcom/logo-partner/partner-logo.png",
  "/hubcom/logo-partner/partner-logo-1.png",
  "/hubcom/logo-partner/partner-logo-2.png",
  "/hubcom/logo-partner/partner-logo-3.png",
  "/hubcom/logo-partner/partner-logo-4.png",
  "/hubcom/logo-partner/partner-logo-5.png",
  "/hubcom/logo-partner/partner-logo-6.png",
  "/hubcom/logo-partner/partner-logo-7.png",
  "/hubcom/logo-partner/partner-logo-8.png",
  "/hubcom/logo-partner/partner-logo-9.png",
  "/hubcom/logo-partner/partner-logo-10.png",
  "/hubcom/logo-partner/partner-logo-11.png",
];

export function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((elem) => {
      gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-card py-16 md:py-32">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="fade-up heading-2 mb-6">
            From concept to <span className="text-muted-foreground">launch ready product.</span>
          </h2>
          <p className="fade-up text-body-large max-w-2xl mx-auto text-center">
            We help ambitious teams shape, design, and build digital products ready for real users and real business growth.
          </p>
        </div>

        <div className="fade-up relative mt-16 w-full max-w-5xl mx-auto overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
          <InfiniteSlider 
            className='flex h-16 w-full items-center' 
            duration={40}
            gap={64}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((src, index) => (
              <div 
                key={`logo-${index}`} 
                className={`opacity-60 hover:opacity-100 transition-opacity duration-300 w-32 md:w-40 shrink-0 flex items-center justify-center`}
              >
                <Image src={src} alt="Partner Logo" width={160} height={60} className="w-full h-auto object-contain max-h-16" unoptimized />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
  );
}
