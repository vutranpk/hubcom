"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

const baseProjects = [
  { 
    title: "Another Me AI", 
    client: "Agentic AI",
    description: "Autonomous digital twin system that executes repetitive workforce tasks via a specialized skill marketplace.",
    tags: ["Python", "LLMs", "LangChain", "Automation"],
    img: "/projects/AnotherMe/anotheome-hero.jpeg",
    ctaUrl: "/portfolio/ai-workflows"
  },
  { 
    title: "DexSpace", 
    client: "Web3 & Blockchain",
    description: "A decentralized exchange (DEX) screener and token swap platform offering real-time market data, seamless multi-chain swaps, and promotional boost packages.",
    tags: ["Web3.js", "Solidity", "Multi-chain", "DEX Aggregator"],
    img: "/projects/Dexspace/dexspace_hero_mockup.jpg",
    ctaUrl: "/portfolio/blockchain-web3"
  },
  { 
    title: "Minhshop App", 
    client: "Retail & E-Commerce",
    description: "A lifestyle commerce platform built for fashion retail.",
    tags: ["React Native", "Next.js", "AWS", "Loyalty"],
    img: "/projects/Minhshop/avata-msapp.jpg",
    ctaUrl: "/portfolio/e-commerce-retail"
  }
];

export function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Force ScrollTrigger to refresh after everything is mounted and painted
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    // Fade out and darken hero background globally WHILE scrolling through projects
    const heroBg = document.querySelector('.hero-fixed-bg');
    if (heroBg && wrapperRef.current) {
      gsap.fromTo(heroBg, 
        { opacity: 1, filter: "blur(0px) brightness(1)" },
        {
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top", 
            end: () => `+=${window.innerWidth * 2.5}`, // Dim slower by extending the scroll distance
            scrub: 1.5 // Added a little smoothing to the scrub
          },
          opacity: 0.2,
          filter: "blur(20px) brightness(0.2)",
          force3D: true
        }
      );
    }

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      const section = wrapperRef.current;

      if (!track || !section) return;

      function getScrollAmount() {
        if (!track) return 0;
        return track.scrollWidth - window.innerWidth;
      }

      let tween = gsap.to(track, {
        x: () => getScrollAmount() * -1,
        ease: "none",
        duration: 1
      });
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount() + window.innerHeight * 0.5}`, // Added half screen height for pinning pause
          scrub: 1.0,
          pin: true,
          invalidateOnRefresh: true,
        }
      });

      tl.add(tween, 0);
      tl.to({}, { duration: 0.2 }); // 20% empty space at the end of timeline = pause

      const images = document.querySelectorAll('.work-image');
      images.forEach((img: any) => {
        gsap.fromTo(img, 
          { xPercent: -10 },
          {
            scrollTrigger: {
              trigger: img.closest('.work-card'),
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true
            },
            xPercent: 10,
            ease: "none"
          }
        );
      });
      
      ScrollTrigger.refresh();
    });
  }, { scope: wrapperRef });

  return (
    <div id="projects" ref={wrapperRef} className="projects-wrapper relative bg-transparent pt-24 pb-[20vh] md:py-32 md:overflow-hidden z-10 flex flex-col justify-center">
      
      {/* Mobile Fixed Title (Outside the horizontal scroll container) */}
      <div className="w-full flex justify-center z-50 pointer-events-none md:hidden mb-8">
        <h2 className="heading-2 text-center drop-shadow-xl">
          Selected<br/>Work.
        </h2>
      </div>

      <div className="relative w-full h-auto md:h-screen flex items-center bg-transparent overflow-visible md:overflow-hidden hide-scrollbar">
        
        <div ref={trackRef} className="horizontal-scroll-track relative z-[2] flex flex-col md:flex-row flex-nowrap gap-12 md:gap-[8vw] px-4 md:px-0 md:pr-[10vw] md:pl-0 w-full md:w-max items-center h-auto md:h-full pb-12 md:pb-0">
          
          {/* PC Inline Title */}
          <div className="hidden md:flex w-[45vw] shrink-0 pl-[5vw] items-center h-full text-left snap-start">
            <h2 className="heading-display">
              Selected<br/>Work.
            </h2>
          </div>

          {baseProjects.map((proj, index) => (
            <div 
              key={index} 
              className="work-card relative w-full md:w-[45vw] md:mr-[5vw] shrink-0 overflow-hidden flex bg-transparent group items-center justify-center md:snap-align-none"
            >
              <div className="work-image-wrapper relative w-full overflow-hidden aspect-[4/5] md:aspect-[4/3] rounded-2xl md:rounded-none bg-card">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="work-image absolute w-[130%] max-w-none h-full -left-[15%] top-0 object-cover transition-all duration-800 group-hover:scale-105 will-change-transform" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-[5]" />
                
                <div className="work-info absolute inset-0 p-6 md:p-12 flex flex-col justify-end z-10 drop-shadow-md">
                  <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
                    {proj.client}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-4 text-foreground">{proj.title}</h3>
                  
                  <p className="text-body max-w-lg mb-6 md:mb-8 line-clamp-2 md:line-clamp-none text-foreground/80 pr-12 md:pr-16">
                    {proj.description}
                  </p>

                  <a href={proj.ctaUrl} className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-primary-foreground bg-primary hover:bg-foreground hover:text-background p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl group/btn z-30">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:-rotate-45 transition-transform" />
                  </a>

                  <a href={proj.ctaUrl} className="absolute inset-0 z-20 cursor-pointer">
                    <span className="sr-only">View {proj.title} details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* View All Projects CTA */}
          <div className="work-card relative w-full h-auto py-12 md:py-0 md:h-auto md:w-[45vw] md:mr-[5vw] shrink-0 flex bg-transparent group items-center justify-center md:snap-align-none">
            <div className="relative w-full flex flex-col items-center justify-center text-center p-8 transition-colors duration-500">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 shadow-xl">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-foreground group-hover:-rotate-45 transition-transform duration-500" />
              </div>
              <h3 className="heading-2 text-foreground mb-4 group-hover:text-primary transition-colors duration-500">View All Projects</h3>
              <p className="text-body-large text-muted-foreground max-w-sm">
                Explore our extended collection of digital products, platforms, and enterprise solutions.
              </p>
              <a href="/work" className="absolute inset-0 z-20 cursor-pointer">
                <span className="sr-only">View all projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
