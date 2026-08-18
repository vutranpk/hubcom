"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LightboxImage } from "@/components/ui/lightbox-image";

export function ServiceHeroGallery({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animate the hero text when it mounts
  useGSAP(() => {
    gsap.from(
      ".hero-text-anim",
      { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, { scope: containerRef });

  // Map the string array from data
  const rawImages = data.richContent?.gallery || [data.img];

  return (
    <section ref={containerRef} className="w-full bg-[#05070B] relative">
      
      {/* Text Area (Normal Document Flow) */}
      <div className="px-6 md:px-20 max-w-7xl mx-auto w-full pt-40 pb-20 flex flex-col items-center justify-center min-h-[50vh] md:min-h-[70vh]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="hero-text-anim flex flex-wrap justify-center gap-2 mb-8">
            {data.tags.slice(0,3).map((tab: string, i: number) => (
              <span key={i} className="text-[10px] md:text-xs uppercase tracking-widest text-[#F3F5F7]/90 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md bg-white/5 font-sans">
                {tab}
              </span>
            ))}
          </div>
          <h1 className="hero-text-anim heading-1 text-center mb-8">
            {data.title}
          </h1>
          <p className="hero-text-anim font-sans text-lg md:text-xl text-[#A8B3C7] leading-relaxed font-light max-w-3xl text-center">
            {data.overview}
          </p>
        </div>
      </div>

      {/* Interactive Horizontal Scroll Gallery */}
      <div className="w-full relative pb-20 bg-[#0A0D14] overflow-hidden">
        <div className="flex w-full gap-4 md:gap-6 overflow-x-auto px-6 md:px-20 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing">
          {rawImages.map((img: string, i: number) => (
            <div key={`gallery-${i}`} className="relative w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] aspect-[3/4] rounded-2xl overflow-hidden shrink-0 border border-white/5 bg-white/5 group snap-center md:snap-start transition-transform duration-300">
              <LightboxImage src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" containerClassName="w-full h-full" />
              <div className="absolute inset-0 bg-[#3B82F6]/0 group-hover:bg-[#3B82F6]/10 transition-colors duration-700 pointer-events-none mix-blend-overlay" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
