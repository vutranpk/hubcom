"use client";

import { Testimonial } from '@/components/ui/design-testimonial';

export function Testimonials() {
  return (
    <div className="w-full bg-transparent py-0 md:py-12 px-[5vw] flex flex-col items-center justify-center">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col items-center px-4">

        
        {/* Interactive Testimonial Widget */}
        <div className="w-full flex justify-center mt-4">
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
