"use client";

import { useRef } from "react";
import { Smartphone, Mail } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Contact({ showMap = false }: { showMap?: boolean }) {
  const containerRef = useRef<HTMLElement>(null);
  
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
    <section ref={containerRef} id="contact" className="relative z-[2] py-16 md:py-40 bg-card">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-full max-w-[800px] mx-auto text-center mb-12 md:mb-16">
          <h2 className="fade-up heading-1 mb-4 md:mb-6">
            Let's build something that matters.
          </h2>
          <p className="fade-up text-body-large max-w-[500px] mx-auto mb-8 md:mb-12">
            Ready to turn your bold vision into a reality? Drop us a line and let's start the conversation.
          </p>

          <div className="fade-up flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8 md:mb-16">
            <div className="flex items-center gap-4 text-foreground">
              <Smartphone className="w-5 h-5 text-muted-foreground" />
              <div className="flex items-center gap-2">
                <a href="tel:+84966868574" className="text-xl tracking-wide hover:text-primary transition-colors">
                  [+84] 966 868 574
                </a>
                <a href="https://wa.me/84966868574" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase border border-foreground/20 hover:border-primary hover:text-primary transition-colors rounded px-1.5 py-0.5 text-muted-foreground">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-foreground/20"></div>
            <div className="flex items-center gap-4 text-foreground">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span className="text-xl tracking-wide">contact@hubcom.tech</span>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-3xl mx-auto text-center">
          <form 
            className="fade-up w-full max-w-3xl mx-auto flex flex-col gap-8 text-left mt-8" 
            action="mailto:contact@hubcom.tech" 
            method="post" 
            encType="text/plain"
            onSubmit={(e) => {
              e.preventDefault();
              alert("In a real environment, this would open your mail client.");
            }}
          >
             <div className="flex flex-col md:flex-row gap-8">
               <div className="w-full flex flex-col gap-2">
                 <label className="label-mono">Your Name</label>
                 <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-foreground/20 pb-4 text-body-large text-foreground placeholder:text-foreground/20 focus:border-primary outline-none transition-colors" required />
               </div>
               <div className="w-full flex flex-col gap-2">
                 <label className="label-mono">Email Address</label>
                 <input type="email" placeholder="john@company.com" className="w-full bg-transparent border-b border-foreground/20 pb-4 text-body-large text-foreground placeholder:text-foreground/20 focus:border-primary outline-none transition-colors" required />
               </div>
             </div>
             
             <div className="w-full flex flex-col gap-2 mt-4">
               <label className="label-mono">Project Details</label>
               <textarea placeholder="Tell us about your bold vision, timeline, and goals..." className="w-full bg-transparent border-b border-foreground/20 pb-4 text-body-large text-foreground placeholder:text-foreground/20 focus:border-primary outline-none transition-colors min-h-[150px] resize-y" required></textarea>
             </div>
             
             <button 
               type="submit" 
               className="mt-8 md:mt-12 self-start inline-flex items-center justify-center rounded-full bg-foreground px-10 py-5 label-mono text-background transition-all duration-500 hover:bg-primary hover:text-foreground hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
             >
               Send Inquiry
             </button>
          </form>
        </div>

        {/* Map Section - Only visible when showMap is true */}
        {showMap && (
          <div className="w-full max-w-5xl mx-auto mt-32 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <iframe 
              width="100%" 
              height="500" 
              src="https://maps.google.com/maps?q=C%C3%B4ng+Ty+Tnhh+C%C3%B4ng+Ngh%E1%BB%87+Hubcom&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              className="invert-[1] hue-rotate-180 grayscale-[20%] contrast-[110%] opacity-90 transition-all duration-500 hover:opacity-100"
              title="Google Map Location"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
