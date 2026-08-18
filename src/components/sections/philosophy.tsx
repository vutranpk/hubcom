"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const philosophyWords = gsap.utils.toArray('.philosophy-word');
    if (philosophyWords.length > 0) {
      gsap.to(philosophyWords, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'center center',
          scrub: 1
        },
        opacity: 1,
        stagger: 0.1,
        ease: "none"
      });
    }
  }, { scope: containerRef });

  const title = "We Build beyond briefs.";
  const subtitleLines = [
    "We craft scalable systems where clarity meets creativity.",
    "Human-focused. Tech-backed. Future-ready."
  ];

  return (
    <section ref={containerRef} className="philosophy-section pt-[200px] px-[5vw] pb-[200px] bg-[#07101A] flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="heading-1 text-center max-w-[1200px] mx-auto mb-8 md:mb-12">
          {title.split(" ").map((word, wordIndex) => (
            <span key={`title-${wordIndex}`} className="philosophy-word opacity-20 inline-block mr-[0.25em] last:mr-0">
              {word}
            </span>
          ))}
        </h2>
        
        <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed text-[#A8B3C7] text-center max-w-[600px] mx-auto font-light">
          {subtitleLines.map((line, lineIndex) => (
            <span key={`sub-${lineIndex}`} className="block mb-4 last:mb-0">
              {line.split(" ").map((word, wordIndex) => (
                <span key={`sub-word-${wordIndex}`} className="philosophy-word opacity-20 inline-block mr-[0.25em] last:mr-0">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </p>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center gap-3 opacity-40 animate-bounce">
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-[#F3F5F7] font-medium">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-[#F3F5F7]"></div>
        </div>
      </div>
    </section>
  );
}
