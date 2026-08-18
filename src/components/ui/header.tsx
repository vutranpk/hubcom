"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, Code2, Server, Bot } from "lucide-react";
import { HubcomFullLogo } from "@/components/icons/hubcom-full-logo";
import { useState } from "react";
import { useLenis } from "lenis/react";

export function Header() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [lang, setLang] = useState<"EN" | "VN">("EN");
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === "EN" ? "VN" : "EN");
  };

  if (pathname.startsWith("/another-me")) {
    return null;
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/" && lenis) {
      e.preventDefault();
      lenis.scrollTo(targetId, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) } as any);
      window.history.pushState(null, "", targetId);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] pointer-events-none transition-colors duration-500">
      <div className="absolute inset-0 backdrop-blur-2xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] -webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%) pointer-events-none z-[-1]"></div>
      
      <div className="flex justify-between items-center px-[5vw] pt-5 pb-10 pointer-events-auto relative z-[1] text-foreground">
        <Link href="/" className="flex items-center">
          <HubcomFullLogo className="h-8 md:h-10 w-auto fill-foreground hover:opacity-80 transition-opacity" />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 font-sans text-[0.7rem] uppercase tracking-[0.2em] font-medium">
          <Link href="/#hero" onClick={(e) => handleAnchorClick(e, '#hero')} className="hover:opacity-60 transition-opacity">Index</Link>
          
          <div className="w-[1px] h-3 bg-background/20 dark:bg-foreground/20"></div>
          
          <Link 
            href="/#work" 
            onClick={(e) => handleAnchorClick(e, '#work')} 
            className={`transition-opacity ${pathname.startsWith('/portfolio') ? 'opacity-100 border-b border-foreground pb-1' : 'opacity-80 hover:opacity-60'}`}
          >
            Work
          </Link>
          <Link href="/#process" onClick={(e) => handleAnchorClick(e, '#process')} className="hover:opacity-60 transition-opacity">Process</Link>
          <Link href="/#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hover:opacity-60 transition-opacity">Contact</Link>
          
          <div className="w-[1px] h-3 bg-background/20 dark:bg-foreground/20"></div>
          
          <div className="relative group py-2">
            <span 
              className={`cursor-pointer hover:opacity-60 transition-all ${(pathname === '/service' || pathname.startsWith('/service/')) ? 'opacity-100 border-b border-foreground pb-1' : 'opacity-80'}`}
            >
              Services
            </span>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              <div className="flex flex-col bg-card/95 backdrop-blur-2xl border border-primary/15 rounded-2xl overflow-hidden w-[320px] shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                
                <Link href="/service/software" className="group/item flex items-start gap-4 p-5 hover:bg-foreground/5 transition-colors border-b border-primary/15">
                  <div className="mt-0.5 text-foreground opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                    <Code2 size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-foreground text-[0.8rem] tracking-widest uppercase font-medium mb-1.5">Software</div>
                    <div className="text-muted-foreground text-xs font-sans normal-case tracking-normal leading-relaxed">Custom apps, enterprise systems & SaaS platforms</div>
                  </div>
                </Link>

                <Link href="/service/infrastructure" className="group/item flex items-start gap-4 p-5 hover:bg-foreground/5 transition-colors border-b border-primary/15">
                  <div className="mt-0.5 text-foreground opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                    <Server size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-foreground text-[0.8rem] tracking-widest uppercase font-medium mb-1.5">Infrastructure</div>
                    <div className="text-muted-foreground text-xs font-sans normal-case tracking-normal leading-relaxed">Cloud architecture, DevOps & system security</div>
                  </div>
                </Link>

                <Link href="/service/ai-customer-service" className="group/item flex items-start gap-4 p-5 hover:bg-foreground/5 transition-colors">
                  <div className="mt-0.5 text-foreground opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                    <Bot size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-foreground text-[0.8rem] tracking-widest uppercase font-medium mb-1.5">AI Service</div>
                    <div className="text-muted-foreground text-xs font-sans normal-case tracking-normal leading-relaxed">Intelligent chatbots & automated support systems</div>
                  </div>
                </Link>

              </div>
            </div>
          </div>
          
          <Link href="/articles" className="hover:opacity-60 transition-opacity">Articles</Link>
        </nav>
        
        <div className="flex items-center gap-6">
           <button 
             onClick={toggleLang}
             className="flex items-center gap-1.5 text-[0.7rem] font-sans font-medium uppercase tracking-wider hover:opacity-60 transition-opacity"
           >
             <Globe size={14} strokeWidth={1.5} />
             <span className="w-6 text-left">{lang}</span>
           </button>
           
           <div className="hidden md:flex items-center gap-4">
             <Link href="/contact" className="px-6 py-2 rounded-full border border-primary/30 hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-medium uppercase tracking-wider">
               Let's Talk
             </Link>
           </div>

           {/* Mobile Menu Toggle */}
           <button 
             className="lg:hidden flex items-center justify-center pointer-events-auto transition-transform hover:scale-110 active:scale-90"
             onClick={() => setIsOpen(!isOpen)}
             aria-label="Toggle menu"
           >
             {isOpen ? <X size={28} /> : <Menu size={28} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-card/95 backdrop-blur-xl z-[999] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col pt-[15vh] px-[5vw] pointer-events-auto`}
      >
        <nav className="flex flex-col gap-6 text-3xl font-serif font-bold text-foreground">
          <Link href="/#hero" onClick={(e) => { setIsOpen(false); handleAnchorClick(e, '#hero'); }}>Index</Link>
          <Link href="/#work" onClick={(e) => { setIsOpen(false); handleAnchorClick(e, '#work'); }}>Work</Link>
          <Link href="/#process" onClick={(e) => { setIsOpen(false); handleAnchorClick(e, '#process'); }}>Process</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <div className="w-full h-[1px] bg-primary/20 my-2"></div>
          
          <div className="text-xs font-mono text-primary uppercase tracking-[0.3em] font-normal">Services</div>
          <Link href="/service/software" onClick={() => setIsOpen(false)} className="text-xl opacity-80 hover:opacity-100">Software</Link>
          <Link href="/service/infrastructure" onClick={() => setIsOpen(false)} className="text-xl opacity-80 hover:opacity-100">Infrastructure</Link>
          <Link href="/service/ai-customer-service" onClick={() => setIsOpen(false)} className="text-xl opacity-80 hover:opacity-100">AI Service</Link>
          
          <div className="w-full h-[1px] bg-primary/20 my-2"></div>
          
          <Link href="/articles" onClick={() => setIsOpen(false)}>Articles</Link>
        </nav>
      </div>
    </header>
  );
}
