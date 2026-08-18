"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Partners } from "@/components/sections/partners";
import { Impact } from "@/components/sections/impact";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function StackingSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Force ScrollTrigger to refresh after everything is mounted and painted
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".stack-panel") as HTMLElement[];
    
    // We only pin up to the second-to-last panel. The last one just scrolls up normally.
    panels.forEach((panel, i) => {
      if (i === panels.length - 1) return;

      // Pin the panel when it hits the top
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false, // Don't add spacing below it, so the next panel slides OVER it
        scrub: true,
      });

      // 3D Stacking Effect: Shrink and darken the pinned panel as the NEXT panel slides over it
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panels[i + 1],
          start: "top bottom", // Starts when the NEXT panel enters the viewport from the bottom
          end: "top top",      // Ends when the NEXT panel reaches the top
          scrub: true,
        },
        opacity: 0.3,
        scale: 0.95,
        filter: "blur(10px)",
        ease: "none"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative z-10 w-full overflow-hidden bg-black">
      {/* Panel 1: Partners */}
      <div className="stack-panel relative z-10 w-full min-h-screen bg-[#07101A] origin-top shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-b-[40px]">
        <Partners />
      </div>
      
      {/* Panel 2: Impact */}
      <div className="stack-panel relative z-20 w-full min-h-screen bg-[#0A0A0A] origin-top shadow-[0_0_50px_rgba(0,0,0,0.8)] border-t border-white/5 rounded-b-[40px]">
        <Impact />
      </div>
      
      {/* Panel 3: Contact & Footer */}
      <div className="stack-panel relative z-30 w-full min-h-screen bg-[#000000] origin-top border-t border-white/5">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
