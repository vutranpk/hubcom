"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function LightboxImage({ src, alt, className, containerClassName }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <div 
        className={`${containerClassName || ""} cursor-pointer`} 
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          loading="lazy"
          className={className} 
        />
      </div>
      
      {isOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05070B]/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#3B82F6] transition-colors z-50 bg-black/20 p-2 rounded-full"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-full object-contain rounded-lg md:rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>,
        document.body
      )}
    </>
  );
}
