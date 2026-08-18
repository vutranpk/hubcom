"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HubcomLogo } from "@/components/icons/hubcom-logo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export function Preloader() {
  const [isRendered, setIsRendered] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Force scroll to top on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Set initial state for hero text safely
    const texts = document.querySelectorAll(".reveal-text");
    if (texts.length > 0) {
      gsap.set(texts, { y: 50, opacity: 0, rotateX: -15 });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsRendered(false);
        document.body.style.overflow = 'auto';
      }
    });

    // Progress counter animation - a bit slower
    const progress = { value: 0 };
    tl.to(progress, {
      value: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (percentRef.current) percentRef.current.innerText = Math.round(progress.value).toString() + "%";
        if (barRef.current) barRef.current.style.width = Math.round(progress.value).toString() + "%";
      }
    });

    // Logo reveal and pulse
    tl.fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.0, ease: "back.out(2)" }, 0);
    
    // Slide up out of view
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.0,
      ease: "power4.inOut"
    }, "+=0.4");
    
    // Animate hero elements immediately after preloader slides up
    if (texts.length > 0) {
      tl.to(texts, { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: "power3.out" }, "-=0.6");
    }

  }, []); // Add empty dependency array to run only once

  if (!isRendered) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#001133_0%,_#05070B_100%)] opacity-50 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm px-8">
        <div ref={logoRef} className="mb-12 opacity-0">
          <HubcomLogo className="w-16 h-16 fill-foreground" />
        </div>
        
        <div className="w-full flex justify-between items-end mb-4 font-mono uppercase tracking-[0.3em] text-[10px] text-muted-foreground">
          <span>Initializing Sequence</span>
          <span ref={percentRef} className="text-foreground font-bold text-sm">0%</span>
        </div>
        
        <div className="w-full h-[1px] bg-white/10 overflow-hidden">
          <div ref={barRef} className="h-full bg-white w-0 shadow-[0_0_10px_#fff]"></div>
        </div>
      </div>
    </div>
  );
}
