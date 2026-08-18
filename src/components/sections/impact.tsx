"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const impactData = [
  { target: 50, prefix: "", suffix: "+", label: "Products Shipped" },
  { target: 30, prefix: "", suffix: "+", label: "Client Partnerships" },
  { target: 5, prefix: "", suffix: "+", label: "Industry Verticals" },
  { target: 5, prefix: "", suffix: "+", label: "Years Building" },
];

export function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, i) => {
      if (!counter) return;
      const targetValue = impactData[i].target;
      
      gsap.to(counter, {
        innerHTML: targetValue,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    });

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
    <section ref={containerRef} className="py-24 md:py-32 bg-background text-foreground border-y border-foreground/10">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="fade-up font-serif text-6xl md:text-[8rem] leading-[0.9] tracking-tighter mb-6 text-foreground">
            Our Impact.
          </h2>
          <p className="fade-up font-sans text-lg md:text-2xl font-light text-foreground/70 max-w-2xl mx-auto">
            We measure our success by the growth, satisfaction, and long-term achievements of our partners.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-around gap-16 md:gap-10">
          {impactData.map((item, index) => (
          <div key={index} className="fade-up text-center">
            <div className="font-serif text-6xl md:text-[6rem] leading-none mb-2 flex items-baseline justify-center tracking-tighter">
              {item.prefix && <span className="text-4xl md:text-6xl text-primary font-sans font-medium mr-1">{item.prefix}</span>}
              <span ref={el => { countersRef.current[index] = el; }}>0</span>
              {item.suffix && <span className="text-4xl md:text-6xl text-primary font-sans font-medium ml-2">{item.suffix}</span>}
            </div>
            <div className="font-mono text-[10px] md:text-xs text-foreground/50 uppercase tracking-[0.3em] mt-6">
              {item.label}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
