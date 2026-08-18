import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HubcomFullLogo } from "@/components/icons/hubcom-full-logo";

export function Footer() {
  return (
    <footer className="bg-background text-foreground pt-20 md:pt-32 pb-8 px-[5vw] border-t border-foreground/5 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col">
        
        {/* Top: CTA & Menus */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-24 md:mb-32">
          
          {/* Brand & Brief */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link href="/" className="flex items-center">
              <HubcomFullLogo className="h-10 w-auto fill-foreground hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed">
              We design and build digital products for forward-thinking brands. Let's engineer the future together.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 font-mono text-sm tracking-widest text-foreground hover:text-primary transition-colors font-bold">
                CONTACT@HUBCOM.TECH
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="font-sans text-sm text-muted-foreground flex items-center gap-1">
                <a href="tel:+84966868574" className="hover:text-foreground transition-colors">[+84] 966 868 574</a>
                <a href="https://wa.me/84966868574" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase border border-foreground/20 hover:border-foreground hover:text-foreground transition-colors rounded px-1.5 py-0.5 inline-block opacity-70 hover:opacity-100">WhatsApp</a>
              </div>
              <p className="font-sans text-sm text-muted-foreground max-w-xs">
                35 Street 36, Quarter 2, Binh Trung Ward, HCMC
              </p>
            </div>
          </div>

          {/* Menus */}
          <div className="flex flex-wrap sm:flex-nowrap gap-x-16 gap-y-12 lg:gap-24 pt-4">
            
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Company</h4>
              <Link href="/info" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              <Link href="/articles" className="text-muted-foreground hover:text-foreground transition-colors">Articles</Link>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Services</h4>
              <Link href="/service/software" className="text-muted-foreground hover:text-foreground transition-colors">Software</Link>
              <Link href="/service/infrastructure" className="text-muted-foreground hover:text-foreground transition-colors">Infrastructure</Link>
              <Link href="/service/ai-customer-service" className="text-muted-foreground hover:text-foreground transition-colors">AI Service</Link>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Connect</h4>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
            </div>

          </div>
        </div>

        {/* Bottom: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-foreground/10 text-[10px] md:text-xs text-muted-foreground font-mono uppercase tracking-widest">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} vutranpk. All rights reserved.</span>
            <span className="text-foreground/40">HUBCOM TECHNOLOGY COMPANY LIMITED — MST: 0317789489</span>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
