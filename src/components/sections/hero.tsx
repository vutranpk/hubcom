"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HubcomLogo } from "@/components/icons/hubcom-logo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(() => {
    // --- 1. CANVAS SCROLL SEQUENCE SETUP ---
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      const isMobile = window.innerWidth < 768;
      const initialHeight = isMobile ? window.innerHeight * 0.7 : window.innerHeight;
      canvas.height = initialHeight;
      
      // Freeze CSS dimensions so it never resizes/zooms when mobile URL bar hides
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${initialHeight}px`;

      // Since we now use highly optimized mobile WebP images (~80KB), we can afford a much lower step
      // Step = 2 means 113 frames (~9MB total), providing incredibly smooth 60fps-like playback
      const step = isMobile ? 2 : 2; 
      const frameCount = Math.floor(225 / step) + 1;
      const images: HTMLImageElement[] = [];
      const scrollProxy = { frame: 0 };
      
      const render = () => {
        const targetFrame = Math.round(scrollProxy.frame);
        
        // Find closest loaded image if target isn't loaded yet
        let bestFrame = targetFrame;
        while (bestFrame > 0 && !images[bestFrame]) {
            bestFrame--;
        }
        
        const img = images[bestFrame];
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        
        if (img && canvas && context) {
          // Calculate Aspect Ratio to cover the whole screen (object-cover equivalent)
          const canvasRatio = canvas.width / canvas.height;
          const imgRatio = img.width / img.height;
          
          let renderW, renderH, renderX, renderY;
          
          if (canvasRatio > imgRatio) {
            renderW = canvas.width;
            renderH = canvas.width / imgRatio;
            renderX = 0;
            renderY = 0; // Top align
          } else {
            renderW = canvas.height * imgRatio;
            renderH = canvas.height;
            renderX = 0; // Left align
            renderY = 0; // Top align
          }
          
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, renderX, renderY, renderW, renderH);
        } else if (context && canvas) {
          // Fallback dark gradient only if even the first frame isn't ready
          const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
          gradient.addColorStop(0, `rgba(2, 4, 8, 1)`);
          gradient.addColorStop(1, `rgba(10, 20, 40, 1)`);
          context.fillStyle = gradient;
          context.fillRect(0, 0, canvas.width, canvas.height);
        }
      };

      // Load first frame immediately for instant visual
      const firstImg = new window.Image();
      firstImg.decoding = "async";
      firstImg.src = isMobile ? `/images/mobile/hubcom000.webp` : `/images/hubcom000.webp`;
      firstImg.onload = () => {
        images[0] = firstImg;
        render();
        // Sequential loader: Loads ONE image at a time to prevent Network Flooding & CPU lag
        let currentIndex = 1;
        const loadNextImage = () => {
          if (currentIndex >= frameCount) return;
          const img = new window.Image();
          img.decoding = "async";
          img.fetchPriority = "low";
          const indexStr = (currentIndex * step).toString().padStart(3, '0');
          img.src = isMobile ? `/images/mobile/hubcom${indexStr}.webp` : `/images/hubcom${indexStr}.webp`;
          
          const onComplete = () => {
             currentIndex++;
             // Use requestIdleCallback or setTimeout to yield to main thread
             setTimeout(loadNextImage, 5); 
          };

          img.onload = () => {
             images[currentIndex] = img;
             if (Math.round(scrollProxy.frame) === currentIndex) render();
             onComplete();
          };
          img.onerror = onComplete;
        };
        loadNextImage();
      };
      
      // Initial render attempt (will show gradient)
      render();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          endTrigger: "#projects", // Fix invalid ID
          end: "bottom bottom", 
          scrub: 1,
        }
      });

      // Animate the frames
      tl.to(scrollProxy, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        onUpdate: render,
      }, 0);

      // Fade out text early over the first 600px of scrolling
      gsap.to(".hero-scroll-wrapper", {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=600", 
          scrub: true,
        },
        y: -150,
        opacity: 0,
        scale: 0.95,
        ease: "none"
      });
    }
  }, { scope: wrapperRef });

  return (
    <div id="hero" ref={wrapperRef} className="relative w-full z-0 h-[1000px] md:h-[1800px]">
      
      {/* 
        This is the fixed Hero container. It stays permanently in the background.
        The wrapper above provides the 3000px scrolling space.
        Once the user scrolls past 3000px, the rest of the page (which has a solid background and z-10)
        will slide up and OVER this fixed container.
      */}
      <div className="hero-fixed-bg fixed top-0 left-0 h-screen w-full bg-background overflow-hidden z-0 pointer-events-none">
        
        {/* Background Canvas for Scroll Sequence */}
        <canvas 
          ref={canvasRef}
          className="absolute top-0 left-0 block [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] md:[mask-image:none]"
        />

        {/* Dark Overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

        <div className="absolute inset-0 h-screen w-[90vw] mx-auto overflow-hidden z-10 flex flex-col justify-end py-8 md:p-12 lg:p-16 pointer-events-none pb-[15vh] md:pb-16">
          <div className="hero-scroll-wrapper w-full flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12 xl:gap-0 pointer-events-auto">
            
            <div className="flex flex-col xl:flex-row justify-between items-end gap-12 xl:gap-20 w-full">
              
              {/* Left - Massive Clean Typography */}
              <div className="hero-content reveal-text flex-1 w-full">
                <h1 ref={textRef} className="font-serif text-[12vw] sm:text-5xl md:text-[7rem] lg:text-[8.5rem] tracking-tighter text-foreground leading-[0.85] uppercase mb-8">
                  <span className="font-light text-primary">From Idea To</span><br/>
                  <span className="font-bold">MVP Product.</span>
                </h1>
                <p className="font-sans text-sm md:text-base text-foreground/80 max-w-[450px] font-light leading-relaxed">
                  We engineer scalable custom software, intelligent AI systems, and robust SaaS platforms for modern businesses.
                </p>
              </div>

              {/* Right - Editorial Metrics & Links */}
              <div className="hero-content reveal-text flex flex-col items-start xl:items-end gap-8 w-full xl:w-auto xl:min-w-[400px]">
                
                <div className="hidden md:block text-left xl:text-right w-full border-t border-white/20 pt-6">
                  <p className="text-muted-foreground font-mono text-[9px] uppercase tracking-[0.2em] mb-4">Core Capabilities</p>
                  <ul className="flex flex-col gap-2 text-foreground text-sm md:text-base font-light">
                     <li>Custom Software</li>
                     <li>Applied AI & LLMs</li>
                     <li>Scalable SaaS Platforms</li>
                  </ul>
                </div>

                <div className="text-left xl:text-right w-full border-t border-white/20 pt-6 flex flex-row justify-between xl:justify-end items-end gap-16">
                  <div className="text-left xl:text-right">
                    <p className="text-muted-foreground font-mono text-[9px] uppercase tracking-[0.2em] mb-2">Products Shipped</p>
                    <p className="font-serif text-5xl font-medium text-foreground tracking-tighter leading-none">50<span className="text-primary">+</span></p>
                  </div>
                  
                  <a href="#contact" className="group flex flex-col items-end gap-2 text-foreground hover:text-primary transition-colors pb-1">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Start a project</span>
                    <span className="font-serif text-2xl font-light">Let's Talk ↗</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
