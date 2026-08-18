import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Footer } from "@/components/sections/footer";

export default function ServicePage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#07101A] pt-[20vh] px-[5vw]">
        <div className="max-w-4xl">
          <div className="font-mono text-sm text-[#94A3B8] mb-6 tracking-[4px]">{"// OUR SERVICES"}</div>
          <h1 className="heading-1 mb-12">
            Capabilities.
          </h1>
          <p className="font-sans text-[1.25rem] leading-[1.8] tracking-[0.5px] text-[#444] opacity-80 max-w-2xl mb-24">
            We architect high-performance digital ecosystems. Our engineering teams specialize in building resilient infrastructure, immersive interfaces, and scalable platforms for enterprise clients.
          </p>

          <div className="space-y-12 mb-32">
            {[
              { title: "Digital Architecture", desc: "System design, cloud infrastructure, and resilient microservices for high-traffic applications." },
              { title: "Immersive Web", desc: "WebGL, GSAP, and highly interactive front-end experiences that captivate users." },
              { title: "Data Engineering", desc: "Data pipelines, analytics integration, and machine learning infrastructure." }
            ].map((service, idx) => (
              <div key={idx} className="border-t border-black/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="font-mono text-xs tracking-widest text-black/40">0{idx + 1}</div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-serif font-serif mb-4">{service.title}</h3>
                  <p className="text-[#666] leading-relaxed max-w-md">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
