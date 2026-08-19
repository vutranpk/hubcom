"use client";

import React from "react";
import { FlickeringGrid } from "./flickering-grid";
import { cn } from "@/lib/utils";

export function FlickeringFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("relative bg-[#0b0b0b] text-[#F3F5F7] overflow-hidden py-16", className)}>
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          squareSize={40}
          gridGap={2}
          color="rgb(255, 255, 255)"
          maxOpacity={0.25}
          flickerChance={0.2}
          className="[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col gap-16 md:flex-row md:justify-between">
        {/* Left Side: Brand */}
        <div className="max-w-sm">
          <div className="flex items-center gap-4 mb-6">
            <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0b0b0b] bg-[#F3F5F7] rounded-sm p-1">
              <path d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z" fill="currentColor"/>
              <path d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z" fill="currentColor"/>
            </svg>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">HubCom.</h2>
          </div>
          <p className="text-[#A8B3C7] leading-relaxed font-sans text-sm">
            35 Street 36, Quarter 2, Binh Trung Ward<br />
            Ho Chi Minh City, Vietnam
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-medium text-[#F3F5F7] mb-2">Company</h4>
            <a href="#" className="text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors font-sans text-sm">About</a>
            <a href="#" className="text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors font-sans text-sm">Process</a>
            <a href="#" className="text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors font-sans text-sm">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-medium text-[#F3F5F7] mb-2">Services</h4>
            <a href="#" className="text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors font-sans text-sm">Digital Products</a>
            <a href="#" className="text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors font-sans text-sm">Enterprise Infra</a>
            <a href="#" className="text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors font-sans text-sm">Applied AI</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-medium text-[#F3F5F7] mb-2">Connect</h4>
            <a href="mailto:contact@hubcom.tech" className="text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors font-sans text-sm">contact@hubcom.tech</a>
            <a href="tel:+84966868574" className="text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors font-sans text-sm">+84 966 868 574</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-[#3B82F6]/15 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex gap-3">
          <span className="bg-[#F3F5F7]/10 border border-[#3B82F6]/15 px-3 py-1.5 rounded-full text-xs font-mono text-[#F3F5F7]/80">SOC2 Certified</span>
          <span className="bg-[#F3F5F7]/10 border border-[#3B82F6]/15 px-3 py-1.5 rounded-full text-xs font-mono text-[#F3F5F7]/80">HIPAA Compliant</span>
        </div>
        <p className="text-[#94A3B8] text-xs font-sans">
          Design by Hubcom
        </p>
      </div>
    </footer>
  );
}
